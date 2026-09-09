import { shuffle } from "./shuffle";
import type { Attempt, ExamConfig, Question, QuestionState, Simulado } from "@/types/simulado";

export function selectQuestions(allQuestions: readonly Question[], count: number): Question[] {
  if (count >= allQuestions.length) return [...allQuestions];
  return shuffle(allQuestions).slice(0, count);
}

export function buildAttempt(simulado: Simulado, config: ExamConfig): Attempt {
  const pool =
    config.questionSource === "official"
      ? selectQuestions(simulado.questions, simulado.examQuestionCount)
      : [...simulado.questions];

  const orderedQuestions = config.shuffleQuestions ? shuffle(pool) : pool;
  const order = orderedQuestions.map((question) =>
    simulado.questions.findIndex((candidate) => candidate.id === question.id)
  );
  const states = orderedQuestions.map((question) => buildQuestionState(question, config.shuffleOptions));

  return {
    simuladoSlug: simulado.slug,
    config,
    order,
    states,
    currentIndex: 0,
    secondsRemaining: config.timerEnabled ? simulado.examDurationMinutes * 60 : 0,
    startedAt: new Date().toISOString(),
  };
}

function buildQuestionState(question: Question, shuffleOptions: boolean): QuestionState {
  const state: QuestionState = {
    locked: false,
    correct: null,
    flagged: false,
    picked: [],
    optOrder: [],
    slots: [],
  };
  if (question.type === "single" || question.type === "multi") {
    const indices = question.options.map((_, i) => i);
    state.optOrder = shuffleOptions ? shuffle(indices) : indices;
  }
  if (question.type === "order") {
    state.slots = new Array(question.answer.length).fill(null);
  }
  if (question.type === "match") {
    state.slots = new Array(question.prompts.length).fill(null);
  }
  return state;
}
