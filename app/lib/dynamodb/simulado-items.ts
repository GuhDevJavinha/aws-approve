import type { ExamLevel, Question, Simulado } from "@/types/simulado";

export const META_SORT_KEY = "META";
const QUESTION_PREFIX = "Q#";

export interface MetaItem {
  simuladoSlug: string;
  sk: typeof META_SORT_KEY;
  title: string;
  examCode: string;
  level: ExamLevel;
  examQuestionCount: number;
  examDurationMinutes: number;
  passingScore?: number;
  questionCount: number;
}

export interface QuestionItem {
  simuladoSlug: string;
  sk: string;
  question: Question;
}

export type SimuladoItem = MetaItem | QuestionItem;

export type SimuladoMeta = Omit<MetaItem, "sk">;

export function questionSortKey(index: number): string {
  return `${QUESTION_PREFIX}${String(index + 1).padStart(4, "0")}`;
}

function isMetaItem(item: SimuladoItem): item is MetaItem {
  return item.sk === META_SORT_KEY;
}

export function toMeta(item: MetaItem): SimuladoMeta {
  const { sk: _sk, ...meta } = item;
  return meta;
}

export function toItems(simulado: Simulado): SimuladoItem[] {
  const meta: MetaItem = {
    simuladoSlug: simulado.slug,
    sk: META_SORT_KEY,
    title: simulado.title,
    examCode: simulado.examCode,
    level: simulado.level,
    examQuestionCount: simulado.examQuestionCount,
    examDurationMinutes: simulado.examDurationMinutes,
    passingScore: simulado.passingScore,
    questionCount: simulado.questions.length,
  };

  const questions: QuestionItem[] = simulado.questions.map((question, index) => ({
    simuladoSlug: simulado.slug,
    sk: questionSortKey(index),
    question,
  }));

  return [meta, ...questions];
}

export function fromItems(items: SimuladoItem[]): Simulado | undefined {
  const metaItem = items.find(isMetaItem);
  if (!metaItem) return undefined;

  const questions = items
    .filter((item): item is QuestionItem => !isMetaItem(item))
    .sort((a, b) => a.sk.localeCompare(b.sk))
    .map((item) => item.question);

  return {
    slug: metaItem.simuladoSlug,
    title: metaItem.title,
    examCode: metaItem.examCode,
    level: metaItem.level,
    questions,
    examQuestionCount: metaItem.examQuestionCount,
    examDurationMinutes: metaItem.examDurationMinutes,
    passingScore: metaItem.passingScore,
  };
}
