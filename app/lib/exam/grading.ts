import type { Question, QuestionState } from "@/types/simulado";

export function gradeAttempt(
  questions: readonly Question[],
  order: readonly number[],
  states: readonly QuestionState[]
): QuestionState[] {
  return states.map((state, position) => {
    const question = questions[order[position]!]!;
    if (!isQuestionReady(question, state)) return state;
    return { ...state, correct: gradeQuestion(question, state) };
  });
}

export function confirmQuestion(question: Question, state: QuestionState): QuestionState {
  if (!isQuestionReady(question, state)) return state;
  return { ...state, locked: true, correct: gradeQuestion(question, state) };
}

export function isQuestionReady(question: Question, state: QuestionState): boolean {
  if (question.type === "single") return state.picked.length === 1;
  if (question.type === "multi") return state.picked.length === question.pick;
  return state.slots.every((slot) => slot !== null);
}

export function gradeQuestion(question: Question, state: QuestionState): boolean {
  if (question.type === "single" || question.type === "multi") {
    const chosen = state.picked
      .map((i) => question.options[i]!.id)
      .sort()
      .join(",");
    const correct = [...question.answer].sort().join(",");
    return chosen === correct;
  }
  if (question.type === "order") {
    return state.slots.every((slot, i) => slot === question.answer[i]);
  }
  return state.slots.every((slot, i) => slot === question.prompts[i]!.a);
}
