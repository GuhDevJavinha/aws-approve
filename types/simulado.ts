export type QuestionType = "single" | "multi" | "order" | "match";

export interface AnswerOption {
  id: string;
  text?: string;
  code?: string;
}

interface QuestionBase {
  id: string;
  stem: string;
  ask?: string;
  code?: string;
  explanation?: string;
  domain?: string;
}

export interface SingleQuestion extends QuestionBase {
  type: "single";
  options: AnswerOption[];
  answer: string[];
}

export interface MultiQuestion extends QuestionBase {
  type: "multi";
  pick: number;
  options: AnswerOption[];
  answer: string[];
}

export interface OrderQuestion extends QuestionBase {
  type: "order";
  pool: string[];
  answer: number[];
}

export interface MatchPrompt {
  t: string;
  a: number;
}

export interface MatchQuestion extends QuestionBase {
  type: "match";
  pool: string[];
  prompts: MatchPrompt[];
}

export type Question = SingleQuestion | MultiQuestion | OrderQuestion | MatchQuestion;

export type ExamLevel = "associate" | "professional" | "specialty";

export interface Simulado {
  slug: string;
  title: string;
  examCode: string;
  level: ExamLevel;
  questions: Question[];
  examQuestionCount: number;
  examDurationMinutes: number;
  passingScore?: number;
}

export interface ExamConfig {
  questionSource: "all" | "official";
  timerEnabled: boolean;
  immediateFeedback: boolean;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export interface QuestionState {
  locked: boolean;
  correct: boolean | null;
  flagged: boolean;
  picked: number[];
  optOrder: number[];
  slots: (number | null)[];
}

export interface Attempt {
  simuladoSlug: string;
  config: ExamConfig;
  order: number[];
  states: QuestionState[];
  currentIndex: number;
  secondsRemaining: number;
  startedAt: string;
}

export interface CompletedResult {
  simuladoSlug: string;
  completedAt: string;
  scorePercent: number;
  correctCount: number;
  answeredCount: number;
  totalCount: number;
  passed: boolean;
}
