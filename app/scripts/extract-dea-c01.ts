import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SOURCE_PATH = resolve(process.cwd(), "simulado-dea-c01.txt");
const OUTPUT_PATH = resolve(process.cwd(), "app/_data/simulado_data_engineer_associate.ts");
const EXAM_CODE = "DEA-C01";

interface OutQuestion {
  id: string;
  type: "single" | "multi";
  pick?: number;
  stem: string;
  ask?: string;
  options: { id: string; text: string }[];
  answer: string[];
}

// The source PDF marks correct answers by color, which the text extraction loses, so the
// "Most Voted" label in the source text is what drives the answer key here. Questions 220,
// 255 and 259 carry a deliberate override in the source file: the community pick contradicts
// AWS documentation there (valid MERGE syntax, managed identifiers vs. proprietary formats,
// and swapping Glue for EMR under a "LEAST operational effort" requirement).
const QUESTION_HEADER = /Question #(\d+) Topic \d+/g;
const CHOOSE = /\(Choose (two|three)\.\)/gi;
const OPTION_BOUNDARY = /•\s*([A-Za-z])\.\s*/g;
const MOST_VOTED = /\s*Most\s+Voted\s*/gi;

function normalizeWhitespace(text: string): string {
  return text
    .replace(MOST_VOTED, " ")
    .replace(/\s+/g, " ")
    .trim();
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

  const stemRaw = blockText.slice(0, optionMatches[0]!.index!).replace(CHOOSE, "");

  const options: { id: string; text: string; correct: boolean }[] = [];
  for (let i = 0; i < optionMatches.length; i++) {
    const match = optionMatches[i]!;
    const id = match[1]!.toUpperCase();
    const bulletEnd = i + 1 < optionMatches.length ? optionMatches[i + 1]!.index! : blockText.length;
    const rawText = blockText.slice(match.index! + match[0].length, bulletEnd);

    const text = normalizeWhitespace(rawText);
    if (!text) continue;

    const correct = MOST_VOTED.test(rawText);
    MOST_VOTED.lastIndex = 0;
    options.push({ id, text, correct });
  }
  if (options.length < 2) return null;

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

const questions: OutQuestion[] = [];
const dropped: number[] = [];

for (let i = 0; i < headerMatches.length; i++) {
  const match = headerMatches[i]!;
  const number = Number(match[1]);
  const start = match.index! + match[0].length;
  const end = i + 1 < headerMatches.length ? headerMatches[i + 1]!.index! : source.length;
  const blockText = source.slice(start, end);

  const result = parseBlock(number, blockText);
  if (!result) {
    dropped.push(number);
    continue;
  }
  questions.push(result);
}

questions.sort((a, b) => Number(a.id.split("-")[2]) - Number(b.id.split("-")[2]));

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoDataEngineerAssociate: Simulado = {
  slug: "data-engineer-associate",
  title: "AWS Certified Data Engineer – Associate",
  examCode: "${EXAM_CODE}",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 130,
  passingScore: 72,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;

writeFileSync(OUTPUT_PATH, fileContent, "utf8");

console.log(`Header matches found: ${headerMatches.length}`);
console.log(`Questions kept: ${questions.length}`);
console.log(`Dropped: ${dropped.length ? dropped.join(", ") : "none"}`);
