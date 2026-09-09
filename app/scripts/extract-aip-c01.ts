import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SOURCE_PATH = resolve(process.cwd(), "app/scripts/generativeAiDeveloper.md");
const OUTPUT_PATH = resolve(process.cwd(), "app/_data/simulado_generative_ai_developer_professional.ts");
const EXAM_CODE = "AIP-C01";

interface OutQuestion {
  id: string;
  type: "single" | "multi";
  pick?: number;
  stem: string;
  ask?: string;
  options: { id: string; text: string }[];
  answer: string[];
}

// Matches "## Question #N Topic 1", "Question #N Topic 1" (no heading marker), and the same
// header when it lands mid-paragraph right after the previous question's last option (a
// source-formatting glitch that also drops the blank line before the next stem — see the
// stray-bullet stripping below).
const QUESTION_HEADER = /#{0,3}\s*Question #(\d+) Topic \d+/g;
const CHOOSE = /\(Choose (?:two|three|four)\.?\)/gi;
const OPTION_BOUNDARY = /\n-\s*([A-Za-z])\.\s+/g;
const MOST_VOTED = /\s*Most\s+Voted\s*/gi;

// The scraped .md source only marks a correct option via a literal "Most Voted" suffix, but a
// color-coded version of the same source (green-highlighted options, no "Most Voted" text on
// these particular questions) shows these questions do have a definitive answer. Transcribed
// by hand from that source since the color information itself never made it into the .md.
const MANUAL_ANSWER_OVERRIDE: Record<number, string[]> = {
  5: ["A"],
  9: ["B"],
  14: ["C"],
  37: ["B"],
  43: ["C"],
  45: ["B"],
  52: ["C"],
  57: ["C"],
  61: ["C"],
  63: ["A"],
  67: ["B", "C"],
  71: ["B"],
  77: ["B"],
  81: ["B", "D"],
  91: ["B"],
  96: ["C"],
  97: ["B"],
  98: ["B"],
  99: ["D"],
  100: ["A"],
  101: ["A"],
  102: ["A", "D"],
  103: ["A"],
  104: ["A", "B"],
  105: ["B"],
  106: ["B"],
  107: ["A"],
  108: ["B"],
  109: ["D"],
  110: ["A", "C"],
  111: ["A"],
  112: ["A"],
  113: ["A", "E"],
  114: ["B"],
  115: ["C"],
  116: ["C"],
  117: ["A"],
};

function normalizeWhitespace(text: string): string {
  return text
    .replace(MOST_VOTED, " ")
    .replace(/#/g, " ")
    .replace(/•/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// The same header glitch mentioned above (Q74, Q97, Q117 in this source) leaves the next
// question's opening stem line prefixed with a stray "- " list bullet, as if it were an
// option. Strip a leading bullet from every line so it never leaks into the stem text.
function stripStrayBullets(text: string): string {
  return text.replace(/(^|\n)-\s+/g, "$1");
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

function parseBlock(number: number, blockText: string): OutQuestion | null {
  const optionMatches = [...blockText.matchAll(OPTION_BOUNDARY)];
  if (optionMatches.length === 0) return null;

  const stemRaw = stripStrayBullets(blockText.slice(0, optionMatches[0]!.index!)).replace(CHOOSE, "");

  const options: { id: string; text: string; correct: boolean }[] = [];
  for (let i = 0; i < optionMatches.length; i++) {
    const match = optionMatches[i]!;
    const id = match[1]!.toUpperCase();
    const bulletEnd = i + 1 < optionMatches.length ? optionMatches[i + 1]!.index! : blockText.length;
    const rawText = blockText.slice(match.index! + match[0].length, bulletEnd);

    const correct = MOST_VOTED.test(rawText);
    MOST_VOTED.lastIndex = 0;
    const text = normalizeWhitespace(rawText);
    if (!text) continue;

    options.push({ id, text, correct });
  }
  if (options.length < 2) return null;

  const uniqueTexts = new Set(options.map((o) => o.text));
  if (uniqueTexts.size !== options.length) return null;

  const override = MANUAL_ANSWER_OVERRIDE[number];
  const answer = override ?? options.filter((o) => o.correct).map((o) => o.id);
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

const questions: OutQuestion[] = [];
let droppedNoOptions = 0;
let droppedNoAnswer = 0;
const droppedNumbers: number[] = [];

for (let i = 0; i < headerMatches.length; i++) {
  const match = headerMatches[i]!;
  const number = Number(match[1]);
  const start = match.index! + match[0].length;
  const end = i + 1 < headerMatches.length ? headerMatches[i + 1]!.index! : source.length;
  const blockText = source.slice(start, end);

  const result = parseBlock(number, blockText);
  if (!result) {
    const hasOption = OPTION_BOUNDARY.test(blockText);
    OPTION_BOUNDARY.lastIndex = 0;
    if (!hasOption) droppedNoOptions++;
    else droppedNoAnswer++;
    droppedNumbers.push(number);
    continue;
  }
  questions.push(result);
}

questions.sort((a, b) => Number(a.id.split("-")[2]) - Number(b.id.split("-")[2]));

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoGenerativeAiDeveloperProfessional: Simulado = {
  slug: "generative-ai-developer-professional",
  title: "AWS Certified Generative AI Developer – Professional",
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
console.log(`Questions kept: ${questions.length}`);
console.log(`Dropped (no options found): ${droppedNoOptions}`);
console.log(`Dropped (no marked correct answer / empty stem / duplicate option): ${droppedNoAnswer}`);
console.log(`Dropped question numbers: ${droppedNumbers.join(", ")}`);
