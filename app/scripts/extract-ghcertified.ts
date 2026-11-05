import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type { AnswerOption, ExamLevel, Question } from "@/types/simulado";

// Uso: bun app/scripts/extract-ghcertified.ts <caminho para ghcertified/questions/pt>
const SOURCE_DIR = process.argv[2];

interface ExamSpec {
  folder: string;
  slug: string;
  title: string;
  examCode: string;
  level: ExamLevel;
  exportName: string;
  fileName: string;
}

const EXAMS: ExamSpec[] = [
  {
    folder: "foundations",
    slug: "github-foundations",
    title: "GitHub Foundations",
    examCode: "GH-900",
    level: "associate",
    exportName: "simuladoGithubFoundations",
    fileName: "simulado_github_foundations",
  },
  {
    folder: "copilot",
    slug: "github-copilot",
    title: "GitHub Copilot",
    examCode: "GH-300",
    level: "associate",
    exportName: "simuladoGithubCopilot",
    fileName: "simulado_github_copilot",
  },
  {
    folder: "actions",
    slug: "github-actions",
    title: "GitHub Actions",
    examCode: "GH-200",
    level: "associate",
    exportName: "simuladoGithubActions",
    fileName: "simulado_github_actions",
  },
  {
    folder: "admin",
    slug: "github-administration",
    title: "GitHub Administration",
    examCode: "GH-100",
    level: "professional",
    exportName: "simuladoGithubAdministration",
    fileName: "simulado_github_administration",
  },
  {
    folder: "advanced_security",
    slug: "github-advanced-security",
    title: "GitHub Advanced Security",
    examCode: "GH-500",
    level: "professional",
    exportName: "simuladoGithubAdvancedSecurity",
    fileName: "simulado_github_advanced_security",
  },
];

// TODO: confirmar no Microsoft Learn a quantidade de questões, duração e nota de corte de cada exame GH-*.
const EXAM_QUESTION_COUNT = 65;
const EXAM_DURATION_MINUTES = 120;
const PASSING_SCORE = 70;

const OPTION_LINE = /^- \[( |x)\]\s?(.*)$/;
const OPTION_LETTERS = "ABCDEFGHIJ";

interface ParsedOption {
  correct: boolean;
  text: string[];
  code: string[];
  notes: string[];
}

function frontmatterValue(frontmatter: string, key: string): string | undefined {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*"(.*)"\\s*$`, "m"));
  return match?.[1].replace(/\\"/g, '"');
}

function splitFrontmatter(raw: string): { frontmatter: string; body: string } {
  const match = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("frontmatter ausente");
  return { frontmatter: match[1], body: match[2] };
}

function joinText(lines: string[]): string {
  return lines.map((line) => line.trimEnd()).join("\n").trim();
}

function parseBody(body: string) {
  const intro: string[] = [];
  const introCode: string[] = [];
  const outro: string[] = [];
  const options: ParsedOption[] = [];
  let codeBuffer: string[] | null = null;

  for (const line of body.split("\n")) {
    const current = options.at(-1);

    if (line.trimStart().startsWith("```")) {
      if (codeBuffer) {
        (current ? current.code : introCode).push(codeBuffer.join("\n"));
        codeBuffer = null;
      } else {
        codeBuffer = [];
      }
      continue;
    }
    if (codeBuffer) {
      codeBuffer.push(line);
      continue;
    }

    const optionMatch = line.match(OPTION_LINE);
    if (optionMatch) {
      options.push({ correct: optionMatch[1] === "x", text: [optionMatch[2]], code: [], notes: [] });
      continue;
    }

    if (line.startsWith(">")) {
      current?.notes.push(line.replace(/^>\s?/, ""));
    } else if (current) {
      current.text.push(line);
    } else {
      (introCode.length ? outro : intro).push(line);
    }
  }

  return { intro: joinText(intro), code: introCode.join("\n\n"), outro: joinText(outro), options };
}

function buildExplanation(options: ParsedOption[], documentation?: string): string | undefined {
  const notes = options
    .map((option) => ({ label: joinText(option.text) || option.code.join("\n"), note: joinText(option.notes) }))
    .filter(({ note }) => note)
    .map(({ label, note }) => `• "${label}": ${note}`);
  if (documentation) notes.push(`Documentação: ${documentation}`);
  return notes.length ? notes.join("\n") : undefined;
}

function parseQuestion(raw: string, id: string): Question {
  const { frontmatter, body } = splitFrontmatter(raw);
  const title = frontmatterValue(frontmatter, "question");
  if (!title) throw new Error(`${id}: campo question ausente`);

  const { intro, code, outro, options } = parseBody(body);
  if (options.length < 2) throw new Error(`${id}: menos de 2 opções`);

  const answerOptions: AnswerOption[] = options.map((option, index) => {
    const text = joinText(option.text);
    return {
      id: OPTION_LETTERS[index],
      ...(text ? { text } : {}),
      ...(option.code.length ? { code: option.code.join("\n\n") } : {}),
    };
  });
  const answer = answerOptions.filter((_, index) => options[index].correct).map((option) => option.id);
  if (!answer.length) throw new Error(`${id}: nenhuma opção correta`);

  const explanation = buildExplanation(options, frontmatterValue(frontmatter, "documentation"));
  const base = {
    id,
    stem: [title, intro].filter(Boolean).join("\n\n"),
    ...(code ? { code } : {}),
    ...(outro ? { ask: outro } : {}),
    ...(explanation ? { explanation } : {}),
    options: answerOptions,
    answer,
  };

  return answer.length > 1 ? { ...base, type: "multi", pick: answer.length } : { ...base, type: "single" };
}

function renderModule(exam: ExamSpec, questions: Question[]): string {
  return `import type { Simulado } from "@/types/simulado";

export const ${exam.exportName}: Simulado = {
  slug: "${exam.slug}",
  title: "${exam.title}",
  examCode: "${exam.examCode}",
  level: "${exam.level}",
  examQuestionCount: ${EXAM_QUESTION_COUNT},
  examDurationMinutes: ${EXAM_DURATION_MINUTES},
  passingScore: ${PASSING_SCORE},
  questions: ${JSON.stringify(questions, null, 2)},
};
`;
}

function extract(exam: ExamSpec) {
  const dir = join(SOURCE_DIR, exam.folder);
  const files = readdirSync(dir).filter((file) => file.endsWith(".md")).sort();
  const questions = files.map((file, index) =>
    parseQuestion(readFileSync(join(dir, file), "utf8"), `${exam.examCode}-${index + 1}`),
  );
  writeFileSync(resolve(process.cwd(), `app/_data/${exam.fileName}.ts`), renderModule(exam, questions));
  console.log(`${exam.slug}: ${questions.length} questões`);
}

if (!SOURCE_DIR) throw new Error("Informe o caminho para ghcertified/questions/pt");
EXAMS.forEach(extract);
