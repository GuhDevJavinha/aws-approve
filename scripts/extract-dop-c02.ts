import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SOURCE_PATH = resolve(process.cwd(), "simulado-dop-c02.txt");
const OUTPUT_PATH = resolve(process.cwd(), "_data/simulado_devops_engineer_professional.ts");
const EXAM_CODE = "DOP-C02";

interface OutQuestion {
  id: string;
  type: "single" | "multi";
  pick?: number;
  stem: string;
  ask?: string;
  options: { id: string; text: string }[];
  answer: string[];
}

const QUESTION_HEADER = /Question #(\d+) Topic \d+|Topic \d+ Question #(\d+)/g;
const CHOOSE = /\(Choose (two|three)\.\)/gi;
const OPTION_BOUNDARY = /•\s*([A-Za-z])\.\s*/g;
const CORRECT_OPEN = "[[CORRECT]]";
const CORRECT_CLOSE = "[[/CORRECT]]";

const MOST_VOTED = /\s*Most\s+Voted\s*/gi;

// Question #190 embeds an SCP/permissions-boundary JSON statement that was never captured
// as text (an image in the source PDF), which also swallowed option F's own label into
// option E's text. Only 2 of the required 3 correct answers ("Choose three.") can be
// verified as a result, so the question is dropped rather than shipped half-broken.
const MANUALLY_EXCLUDED_NUMBERS = new Set([190]);

function normalizeWhitespace(text: string): string {
  return text
    .replace(MOST_VOTED, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(?:•\s*)+/, "")
    .replace(/(?:\s*•)+\s*$/, "");
}

function splitStemAsk(text: string): { stem: string; ask?: string } {
  const qIdx = text.lastIndexOf("?");
  if (qIdx === -1) return { stem: text };

  const priorPeriod = text.lastIndexOf(". ", qIdx);
  const askStart = priorPeriod === -1 ? 0 : priorPeriod + 2;
  const ask = text.slice(askStart, qIdx + 1).trim();
  const stem = text.slice(0, askStart).trim();

  if (!stem) return { stem: ask };
  return { stem, ask };
}

// Strips the [[CORRECT]]/[[/CORRECT]] markers left by the PDF-color extraction pass, and
// records where the marked (green = correct-answer) runs land in the marker-free text. The
// marker tags themselves occupy character positions in the raw text, which would otherwise
// bias an interval toward whichever option happens to sit right before a tag; removing them
// first means an interval's bounds point at the actual marked content, so a plain half-open
// range overlap against each option's span attributes it unambiguously.
function extractCorrectIntervals(blockText: string): { clean: string; intervals: [number, number][] } {
  let clean = "";
  const intervals: [number, number][] = [];
  let openStart: number | null = null;
  let i = 0;

  while (i < blockText.length) {
    if (blockText.startsWith(CORRECT_OPEN, i)) {
      openStart = clean.length;
      i += CORRECT_OPEN.length;
      continue;
    }
    if (blockText.startsWith(CORRECT_CLOSE, i)) {
      if (openStart !== null) {
        intervals.push([openStart, clean.length]);
        openStart = null;
      }
      i += CORRECT_CLOSE.length;
      continue;
    }
    clean += blockText[i];
    i++;
  }
  if (openStart !== null) intervals.push([openStart, clean.length]);

  return { clean, intervals };
}

function parseBlock(number: number, rawBlockText: string): OutQuestion | null {
  const { clean: blockText, intervals } = extractCorrectIntervals(rawBlockText);

  const optionMatches = [...blockText.matchAll(OPTION_BOUNDARY)];
  if (optionMatches.length === 0) return null;

  const stemRaw = blockText.slice(0, optionMatches[0]!.index!).replace(CHOOSE, "");

  // A handful of questions never got a green (color-marked) run at all, but still carry a
  // literal "Most Voted" label on the community's pick. Fall back to that signal only when
  // there is no color data to trust for this question, so it never overrides a color marker.
  const useVotedFallback = intervals.length === 0;

  const options: { id: string; text: string; correct: boolean }[] = [];
  for (let i = 0; i < optionMatches.length; i++) {
    const match = optionMatches[i]!;
    const id = match[1]!.toUpperCase();
    const bulletStart = match.index!;
    const bulletEnd = i + 1 < optionMatches.length ? optionMatches[i + 1]!.index! : blockText.length;
    const rawText = blockText.slice(match.index! + match[0].length, bulletEnd);

    const text = normalizeWhitespace(rawText);
    if (!text) continue;

    const correct = useVotedFallback
      ? MOST_VOTED.test(rawText)
      : intervals.some(([s, e]) => s < bulletEnd && e > bulletStart);
    MOST_VOTED.lastIndex = 0;
    options.push({ id, text, correct });
  }
  if (options.length < 2) return null;

  // A few questions embed a code/JSON snippet as an image that never made it into the PDF's
  // text layer, leaving two or more options as an identical stub ("Add the following
  // conditional expression:") with the actual differentiating content missing. Such
  // duplicate option text signals the question can't be answered meaningfully, so drop it.
  const uniqueTexts = new Set(options.map((o) => o.text));
  if (uniqueTexts.size !== options.length) return null;

  const answer = options.filter((o) => o.correct).map((o) => o.id);
  if (answer.length === 0) return null;

  const type: "single" | "multi" = answer.length > 1 ? "multi" : "single";
  const { stem, ask } = splitStemAsk(normalizeWhitespace(stemRaw));
  if (!stem) return null;

  return {
    id: `${EXAM_CODE}-${number}`,
    type,
    ...(type === "multi" ? { pick: answer.length } : {}),
    stem,
    ...(ask ? { ask } : {}),
    options: options.map(({ id, text }) => ({ id, text })),
    answer,
  };
}

const source = readFileSync(SOURCE_PATH, "utf8");
const headerMatches = [...source.matchAll(QUESTION_HEADER)];

// The source PDF renders a couple of questions twice (a page-break duplication artifact).
// The two renderings aren't always equivalent — one copy may be missing its color-coded
// answer while the other has it — so every occurrence of a question number is tried in
// order, keeping the first one that actually parses into a usable question.
const blocksByNumber = new Map<number, string[]>();
for (let i = 0; i < headerMatches.length; i++) {
  const match = headerMatches[i]!;
  const number = Number(match[1] ?? match[2]);
  const start = match.index! + match[0].length;
  const end = i + 1 < headerMatches.length ? headerMatches[i + 1]!.index! : source.length;
  const blockText = source.slice(start, end);

  const existing = blocksByNumber.get(number);
  if (existing) existing.push(blockText);
  else blocksByNumber.set(number, [blockText]);
}

const questions: OutQuestion[] = [];
let droppedNoOptions = 0;
let droppedNoAnswer = 0;

for (const [number, blocks] of blocksByNumber) {
  if (MANUALLY_EXCLUDED_NUMBERS.has(number)) continue;

  let result: OutQuestion | null = null;
  for (const blockText of blocks) {
    result = parseBlock(number, blockText);
    if (result) break;
  }

  if (!result) {
    const hasOption = blocks.some((blockText) => {
      const has = OPTION_BOUNDARY.test(blockText);
      OPTION_BOUNDARY.lastIndex = 0;
      return has;
    });
    if (!hasOption) droppedNoOptions++;
    else droppedNoAnswer++;
    continue;
  }
  questions.push(result);
}

questions.sort((a, b) => Number(a.id.split("-")[2]) - Number(b.id.split("-")[2]));

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoDevOpsEngineerProfessional: Simulado = {
  slug: "devops-engineer-professional",
  title: "AWS Certified DevOps Engineer – Professional",
  examCode: "${EXAM_CODE}",
  level: "professional",
  examQuestionCount: 75,
  examDurationMinutes: 180,
  passingScore: 75,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;

writeFileSync(OUTPUT_PATH, fileContent, "utf8");

console.log(`Header matches found: ${headerMatches.length}`);
console.log(`Distinct question numbers: ${blocksByNumber.size}`);
console.log(`Questions kept: ${questions.length}`);
console.log(`Dropped (no options found): ${droppedNoOptions}`);
console.log(`Dropped (no marked correct answer / empty stem): ${droppedNoAnswer}`);
