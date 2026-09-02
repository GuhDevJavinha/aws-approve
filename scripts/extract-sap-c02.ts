import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SOURCE_PATH = resolve(process.cwd(), "public/Professional SAP-C02 (2).md");
const OUTPUT_PATH = resolve(
  process.cwd(),
  "_data/simulado_solutions_architect_professional.ts"
);
const EXAM_CODE = "SAP-C02";
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

const QUESTION_START = /^(\d+)-\s?(.*)$/;
const OPTION_START = /^[A-Za-z]\.\s+(.*)$/;
const OCULTAR = /^\[Ocultar solu/;
const MAIS_VOTADO = /\*\*Mais votado\*\*/g;

interface RawBlock {
  number: number;
  lines: string[];
}

interface OutQuestion {
  id: string;
  type: "single" | "multi";
  pick?: number;
  stem: string;
  ask?: string;
  options: { id: string; text: string }[];
  answer: string[];
}

function splitBlocks(text: string): RawBlock[] {
  const blocks: RawBlock[] = [];
  let current: RawBlock | null = null;

  for (const line of text.split("\n")) {
    const match = line.match(QUESTION_START);
    if (match) {
      if (current) blocks.push(current);
      current = { number: Number(match[1]), lines: [match[2]] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) blocks.push(current);
  return blocks;
}

function stripEscolhaPhrase(text: string): string {
  return text.replace(/\s*\(Escolha [^)]*\)\.?/gi, "").trim();
}

function joinParagraphLines(paragraph: string): string {
  return paragraph
    .split("\n")
    .map((line) => line.replace(/\\\s*$/, "").trim())
    .filter((line) => line.length > 0)
    .join(" ");
}

function parseStem(stemLines: string[]): { stem: string; ask?: string } {
  const paragraphs = stemLines
    .join("\n")
    .split(/\n\s*\n/)
    .map((paragraph) => stripEscolhaPhrase(joinParagraphLines(paragraph)))
    .filter((paragraph) => paragraph.length > 0);

  if (paragraphs.length === 0) return { stem: "" };

  const last = paragraphs[paragraphs.length - 1]!;
  let stem: string;
  let ask: string | undefined;

  if (last.endsWith("?")) {
    ask = last;
    stem = paragraphs.slice(0, -1).join("\n\n");
  } else {
    stem = paragraphs.join("\n\n");
  }

  if (!stem && ask) {
    stem = ask;
    ask = undefined;
  }

  return { stem, ask };
}

function parseOptions(optionLines: string[]): { text: string; correct: boolean }[] {
  const boundaries: number[] = [];
  for (let i = 0; i < optionLines.length; i++) {
    if (OPTION_START.test(optionLines[i]!)) boundaries.push(i);
  }

  const options: { text: string; correct: boolean }[] = [];

  for (let i = 0; i < boundaries.length; i++) {
    const start = boundaries[i]!;
    const end = i + 1 < boundaries.length ? boundaries[i + 1]! : optionLines.length;
    let span = optionLines.slice(start, end);

    const ocultarIdx = span.findIndex((line) => OCULTAR.test(line.trim()));
    if (ocultarIdx !== -1) span = span.slice(0, ocultarIdx);

    const firstMatch = span[0]!.match(OPTION_START)!;
    const contentLines = [firstMatch[1]!, ...span.slice(1)]
      .map((line) => line.replace(/\\\s*$/, "").trim())
      .filter((line) => line.length > 0);

    const joined = contentLines.join(" ");
    const correct = MAIS_VOTADO.test(joined);
    MAIS_VOTADO.lastIndex = 0;
    const text = joined.replace(MAIS_VOTADO, "").replace(/\\/g, "").replace(/\s+/g, " ").trim();

    if (text.length === 0) continue;
    options.push({ text, correct });
  }

  return options;
}

function parseBlock(block: RawBlock): OutQuestion | null {
  let optionStartIdx = -1;
  for (let i = 0; i < block.lines.length; i++) {
    if (OPTION_START.test(block.lines[i]!)) {
      optionStartIdx = i;
      break;
    }
  }
  if (optionStartIdx === -1) return null;

  const { stem, ask } = parseStem(block.lines.slice(0, optionStartIdx));
  const rawOptions = parseOptions(block.lines.slice(optionStartIdx));

  if (rawOptions.length < 2) return null;

  const options = rawOptions.map((opt, i) => ({
    id: LETTERS[i] ?? String(i + 1),
    text: opt.text,
  }));
  const answer = rawOptions
    .map((opt, i) => (opt.correct ? (LETTERS[i] ?? String(i + 1)) : null))
    .filter((x): x is string => x !== null);

  if (answer.length === 0) return null;

  const type: "single" | "multi" = answer.length === 1 ? "single" : "multi";

  return {
    id: `${EXAM_CODE}-${block.number}`,
    type,
    ...(type === "multi" ? { pick: answer.length } : {}),
    stem,
    ...(ask ? { ask } : {}),
    options,
    answer,
  };
}

const source = readFileSync(SOURCE_PATH, "utf8");
const blocks = splitBlocks(source);

const questions: OutQuestion[] = [];
let droppedNoOptions = 0;
let droppedNoAnswer = 0;
const shortStems: string[] = [];

for (const block of blocks) {
  const result = parseBlock(block);
  if (!result) {
    const optionStartIdx = block.lines.findIndex((line) => OPTION_START.test(line));
    if (optionStartIdx === -1) droppedNoOptions++;
    else droppedNoAnswer++;
    continue;
  }
  if (result.stem.length < 20 && (!result.ask || result.ask.length < 20)) {
    shortStems.push(result.id);
  }
  questions.push(result);
}

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoSolutionsArchitectProfessional: Simulado = {
  slug: "solutions-architect-professional",
  title: "AWS Certified Solutions Architect – Professional",
  examCode: "${EXAM_CODE}",
  level: "professional",
  examQuestionCount: 75,
  examDurationMinutes: 180,
  passingScore: 75,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;

writeFileSync(OUTPUT_PATH, fileContent, "utf8");

console.log(`Source blocks found: ${blocks.length}`);
console.log(`Questions kept: ${questions.length}`);
console.log(`Dropped (no options found): ${droppedNoOptions}`);
console.log(`Dropped (no marked correct answer): ${droppedNoAnswer}`);
console.log(`Questions with a suspiciously short stem/ask (possible parse boundary issue): ${shortStems.length}`);
if (shortStems.length > 0) console.log(shortStems.join(", "));
