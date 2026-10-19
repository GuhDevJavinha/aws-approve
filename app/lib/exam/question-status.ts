import type { QuestionState } from "@/types/simulado";

export type QuestionStatus = "correct" | "incorrect" | "unanswered";

export const QUESTION_STATUS_LABEL: Record<QuestionStatus, string> = {
  correct: "Correta",
  incorrect: "Incorreta",
  unanswered: "Não respondida",
};

export function getQuestionStatus(state: QuestionState): QuestionStatus {
  if (state.correct === true) return "correct";
  if (state.correct === false) return "incorrect";
  return "unanswered";
}
