import type { Attempt, ExamConfig, Question, QuestionState, Simulado } from "@/types/simulado";

export const singleQuestion: Question = {
  id: "s1",
  type: "single",
  stem: "Qual servico guarda objetos?",
  options: [
    { id: "a", text: "Opcao EBS" },
    { id: "b", text: "Opcao S3" },
    { id: "c", text: "Opcao RDS" },
  ],
  answer: ["b"],
  explanation: "S3 e armazenamento de objetos.",
};

export const secondSingleQuestion: Question = {
  id: "s2",
  type: "single",
  stem: "Qual servico e de computacao?",
  options: [
    { id: "a", text: "Opcao EC2" },
    { id: "b", text: "Opcao SQS" },
  ],
  answer: ["a"],
};

export const multiQuestion: Question = {
  id: "m1",
  type: "multi",
  stem: "Quais sao bancos de dados?",
  pick: 2,
  options: [
    { id: "a", text: "Opcao Aurora" },
    { id: "b", text: "Opcao SNS" },
    { id: "c", text: "Opcao Dynamo" },
  ],
  answer: ["a", "c"],
};

export const orderQuestion: Question = {
  id: "o1",
  type: "order",
  stem: "Ordene o deploy",
  pool: ["Build", "Test", "Release"],
  answer: [0, 1, 2],
};

export const matchQuestion: Question = {
  id: "mt1",
  type: "match",
  stem: "Relacione",
  pool: ["Servico X", "Servico Y"],
  prompts: [
    { t: "Requisito um", a: 0 },
    { t: "Requisito dois", a: 1 },
  ],
};

export function buildSimulado(questions: Question[], overrides: Partial<Simulado> = {}): Simulado {
  return {
    slug: "simulado-teste",
    title: "Simulado de Teste",
    examCode: "TST-01",
    level: "associate",
    questions,
    examQuestionCount: questions.length,
    examDurationMinutes: 60,
    ...overrides,
  };
}

export const baseConfig: ExamConfig = {
  questionSource: "all",
  timerEnabled: false,
  immediateFeedback: false,
  excludeMatchAndOrder: false,
  shuffleQuestions: false,
  shuffleOptions: false,
};

export function buildQuestionState(overrides: Partial<QuestionState> = {}): QuestionState {
  return {
    correct: null,
    locked: false,
    flagged: false,
    picked: [],
    optOrder: [0, 1, 2],
    slots: [],
    ...overrides,
  };
}

export function buildAttemptFor(simulado: Simulado, states: QuestionState[]): Attempt {
  return {
    simuladoSlug: simulado.slug,
    config: baseConfig,
    order: states.map((_, position) => position),
    states,
    currentIndex: 0,
    secondsRemaining: 0,
    startedAt: "2026-01-01T00:00:00.000Z",
  };
}
