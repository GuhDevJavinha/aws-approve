import { describe, it, expect } from "vitest";
import { isQuestionReady, gradeQuestion } from "./grading";
import type {
  MatchQuestion,
  MultiQuestion,
  OrderQuestion,
  QuestionState,
  SingleQuestion,
} from "@/types/simulado";

function emptyState(): QuestionState {
  return { locked: false, correct: null, flagged: false, picked: [], optOrder: [0, 1, 2], slots: [] };
}

const single: SingleQuestion = {
  id: "q1",
  type: "single",
  stem: "stem",
  options: [
    { id: "A", text: "a" },
    { id: "B", text: "b" },
    { id: "C", text: "c" },
  ],
  answer: ["B"],
};

const multi: MultiQuestion = {
  id: "q2",
  type: "multi",
  pick: 2,
  stem: "stem",
  options: [
    { id: "A", text: "a" },
    { id: "B", text: "b" },
    { id: "C", text: "c" },
  ],
  answer: ["A", "C"],
};

const order: OrderQuestion = {
  id: "q3",
  type: "order",
  stem: "stem",
  pool: ["first", "second", "third"],
  answer: [2, 0, 1],
};

const match: MatchQuestion = {
  id: "q4",
  type: "match",
  stem: "stem",
  pool: ["x", "y"],
  prompts: [{ t: "p1", a: 1 }, { t: "p2", a: 0 }],
};

describe("isQuestionReady", () => {
  it("single is ready with exactly one pick", () => {
    expect(isQuestionReady(single, { ...emptyState(), picked: [] })).toBe(false);
    expect(isQuestionReady(single, { ...emptyState(), picked: [1] })).toBe(true);
  });

  it("multi is ready only once `pick` options are chosen", () => {
    expect(isQuestionReady(multi, { ...emptyState(), picked: [0] })).toBe(false);
    expect(isQuestionReady(multi, { ...emptyState(), picked: [0, 2] })).toBe(true);
  });

  it("order/match are ready once every slot is filled", () => {
    expect(isQuestionReady(order, { ...emptyState(), slots: [null, null, null] })).toBe(false);
    expect(isQuestionReady(order, { ...emptyState(), slots: [2, 0, 1] })).toBe(true);
  });
});

describe("gradeQuestion", () => {
  it("grades single by matching option id", () => {
    expect(gradeQuestion(single, { ...emptyState(), picked: [1] })).toBe(true);
    expect(gradeQuestion(single, { ...emptyState(), picked: [0] })).toBe(false);
  });

  it("grades multi regardless of selection order", () => {
    expect(gradeQuestion(multi, { ...emptyState(), picked: [2, 0] })).toBe(true);
    expect(gradeQuestion(multi, { ...emptyState(), picked: [0, 1] })).toBe(false);
  });

  it("grades order by exact sequence", () => {
    expect(gradeQuestion(order, { ...emptyState(), slots: [2, 0, 1] })).toBe(true);
    expect(gradeQuestion(order, { ...emptyState(), slots: [0, 1, 2] })).toBe(false);
  });

  it("grades match by prompt->pool index", () => {
    expect(gradeQuestion(match, { ...emptyState(), slots: [1, 0] })).toBe(true);
    expect(gradeQuestion(match, { ...emptyState(), slots: [0, 0] })).toBe(false);
  });
});
