import { describe, it, expect } from "vitest";
import { buildAttempt, selectQuestions } from "./build-attempt";
import { getPassingScore, DEFAULT_PASSING_SCORE } from "./constants";
import type { ExamConfig, Question, Simulado } from "@/types/simulado";

function makeQuestions(count: number): Question[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `q${i}`,
    type: "single",
    stem: `stem ${i}`,
    options: [
      { id: "A", text: "a" },
      { id: "B", text: "b" },
    ],
    answer: ["A"],
  }));
}

const simulado: Simulado = {
  slug: "demo",
  title: "Demo",
  examCode: "DEMO",
  level: "specialty",
  questions: makeQuestions(10),
  examQuestionCount: 4,
  examDurationMinutes: 60,
};

const baseConfig: ExamConfig = {
  questionSource: "all",
  timerEnabled: false,
  immediateFeedback: true,
  shuffleQuestions: false,
  shuffleOptions: false,
};

describe("selectQuestions", () => {
  it("returns every question when count >= total", () => {
    const all = makeQuestions(3);
    expect(selectQuestions(all, 5)).toHaveLength(3);
  });

  it("returns exactly `count` unique questions drawn from the pool", () => {
    const all = makeQuestions(10);
    const picked = selectQuestions(all, 4);
    expect(picked).toHaveLength(4);
    const ids = new Set(picked.map((q) => q.id));
    expect(ids.size).toBe(4);
    for (const q of picked) expect(all).toContain(q);
  });
});

describe("buildAttempt", () => {
  it("includes every question when questionSource is 'all'", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.order).toHaveLength(10);
    expect(attempt.states).toHaveLength(10);
  });

  it("includes only examQuestionCount questions when questionSource is 'official'", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, questionSource: "official" });
    expect(attempt.order).toHaveLength(4);
    expect(attempt.states).toHaveLength(4);
  });

  it("preserves original order when shuffleQuestions is false", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.order).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("builds an unshuffled optOrder matching the option count for single/multi", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.states[0]!.optOrder).toEqual([0, 1]);
  });

  it("sets secondsRemaining from examDurationMinutes only when the timer is enabled", () => {
    expect(buildAttempt(simulado, baseConfig).secondsRemaining).toBe(0);
    expect(buildAttempt(simulado, { ...baseConfig, timerEnabled: true }).secondsRemaining).toBe(3600);
  });

  it("starts on the first question, unlocked and unflagged", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.currentIndex).toBe(0);
    expect(attempt.states[0]).toMatchObject({ locked: false, correct: null, flagged: false });
  });
});

describe("getPassingScore", () => {
  it("returns the simulado's own passingScore when set", () => {
    expect(getPassingScore({ ...simulado, passingScore: 80 })).toBe(80);
  });

  it("falls back to DEFAULT_PASSING_SCORE when omitted", () => {
    expect(getPassingScore(simulado)).toBe(DEFAULT_PASSING_SCORE);
  });
});
