import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

interface RawOption {
  id: string;
  text?: string;
  code?: string;
}

interface RawMatchPrompt {
  t: string;
  a: number;
}

interface RawQuestion {
  type: "single" | "multi" | "order" | "match";
  stem: string;
  code?: string;
  ask?: string;
  options?: RawOption[];
  answer?: string[] | number[];
  pick?: number;
  pool?: string[];
  prompts?: RawMatchPrompt[];
}

const htmlPath = resolve(process.cwd(), "simulado-scs-c03.html");
const html = readFileSync(htmlPath, "utf8");

const startMarker = "const QUESTIONS = [";
const endMarker = "\n];";
const start = html.indexOf(startMarker);
if (start === -1) throw new Error("QUESTIONS array not found in simulado-scs-c03.html");
const arrayStart = start + startMarker.length - 1;
const end = html.indexOf(endMarker, arrayStart);
if (end === -1) throw new Error("End of QUESTIONS array not found");
const closingBracketIndex = end + 1;
const arraySource = html.slice(arrayStart, closingBracketIndex + 1);

const rawQuestions = new Function(`"use strict"; return (${arraySource});`)() as RawQuestion[];

const EXAM_CODE = "SCS-C03";

const questions = rawQuestions.map((raw, index) => {
  const id = `${EXAM_CODE}-${index + 1}`;
  const base = {
    id,
    stem: raw.stem,
    ...(raw.ask ? { ask: raw.ask } : {}),
    ...(raw.code ? { code: raw.code } : {}),
  };

  if (raw.type === "single") {
    return { ...base, type: "single" as const, options: raw.options!, answer: raw.answer as string[] };
  }
  if (raw.type === "multi") {
    return {
      ...base,
      type: "multi" as const,
      pick: raw.pick!,
      options: raw.options!,
      answer: raw.answer as string[],
    };
  }
  if (raw.type === "order") {
    return { ...base, type: "order" as const, pool: raw.pool!, answer: raw.answer as number[] };
  }
  return { ...base, type: "match" as const, pool: raw.pool!, prompts: raw.prompts! };
});

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoSecurityEspecialista: Simulado = {
  slug: "security-especialist",
  title: "AWS Certified Security – Specialty",
  examCode: "${EXAM_CODE}",
  level: "specialty",
  examQuestionCount: 65,
  examDurationMinutes: 170,
  passingScore: 75,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;

writeFileSync(resolve(process.cwd(), "_data/simulado_security_especialist.ts"), fileContent, "utf8");
console.log(`Wrote ${questions.length} questions to _data/simulado_security_especialist.ts`);
