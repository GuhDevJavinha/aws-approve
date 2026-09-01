import { describe, it, expect, beforeEach } from "vitest";
import {
  clearInProgressAttempt,
  getBestScore,
  loadHistory,
  loadInProgressAttempt,
  saveCompletedResult,
  saveInProgressAttempt,
} from "./attempt-storage";
import type { Attempt, CompletedResult } from "@/types/simulado";

const attempt: Attempt = {
  simuladoSlug: "demo",
  config: {
    questionSource: "all",
    timerEnabled: false,
    immediateFeedback: true,
    shuffleQuestions: false,
    shuffleOptions: false,
  },
  order: [0, 1],
  states: [],
  currentIndex: 0,
  secondsRemaining: 0,
  startedAt: new Date().toISOString(),
};

beforeEach(() => {
  localStorage.clear();
});

describe("in-progress attempt", () => {
  it("round-trips through save/load", () => {
    saveInProgressAttempt(attempt);
    expect(loadInProgressAttempt("demo")).toEqual(attempt);
  });

  it("returns null when nothing is saved", () => {
    expect(loadInProgressAttempt("missing")).toBeNull();
  });

  it("clears the saved attempt", () => {
    saveInProgressAttempt(attempt);
    clearInProgressAttempt("demo");
    expect(loadInProgressAttempt("demo")).toBeNull();
  });

  it("keeps attempts for different simulados isolated", () => {
    saveInProgressAttempt(attempt);
    saveInProgressAttempt({ ...attempt, simuladoSlug: "other" });
    expect(loadInProgressAttempt("demo")).not.toBeNull();
    expect(loadInProgressAttempt("other")).not.toBeNull();
  });
});

function result(overrides: Partial<CompletedResult> = {}): CompletedResult {
  return {
    simuladoSlug: "demo",
    completedAt: new Date().toISOString(),
    scorePercent: 80,
    correctCount: 8,
    answeredCount: 10,
    totalCount: 10,
    passed: true,
    ...overrides,
  };
}

describe("completed history", () => {
  it("appends results and returns them in order", () => {
    saveCompletedResult(result({ scorePercent: 60 }));
    saveCompletedResult(result({ scorePercent: 90 }));
    expect(loadHistory("demo").map((r) => r.scorePercent)).toEqual([60, 90]);
  });

  it("returns an empty array when there is no history", () => {
    expect(loadHistory("missing")).toEqual([]);
  });

  it("getBestScore returns the highest scorePercent seen", () => {
    saveCompletedResult(result({ scorePercent: 60 }));
    saveCompletedResult(result({ scorePercent: 90 }));
    saveCompletedResult(result({ scorePercent: 75 }));
    expect(getBestScore("demo")).toBe(90);
  });

  it("getBestScore returns null with no history", () => {
    expect(getBestScore("missing")).toBeNull();
  });
});
