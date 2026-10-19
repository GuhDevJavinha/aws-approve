import { beforeEach, describe, expect, it } from "vitest";
import { loadInProgressAttempt, saveInProgressAttempt } from "./attempt-storage";
import type { Attempt } from "@/types/simulado";

const SLUG = "aws-teste";
const KEY = `aws-approve:attempt:${SLUG}`;

function legacyAttempt() {
  return {
    simuladoSlug: SLUG,
    config: { questionSource: "all", timerEnabled: false, shuffleQuestions: false, shuffleOptions: false },
    order: [0, 1],
    states: [
      { correct: null, flagged: false, picked: [], optOrder: [0, 1], slots: [] },
      { correct: true, flagged: true, picked: [1], optOrder: [0, 1], slots: [] },
    ],
    currentIndex: 0,
    secondsRemaining: 0,
    startedAt: "2026-01-01T00:00:00.000Z",
  };
}

beforeEach(() => {
  localStorage.clear();
});

describe("loadInProgressAttempt", () => {
  it("retorna null quando nao ha tentativa salva", () => {
    expect(loadInProgressAttempt(SLUG)).toBeNull();
  });

  it("retorna null quando o JSON salvo esta corrompido", () => {
    localStorage.setItem(KEY, "{nao-e-json");
    expect(loadInProgressAttempt(SLUG)).toBeNull();
  });

  it("trata immediateFeedback ausente como false em tentativa antiga", () => {
    localStorage.setItem(KEY, JSON.stringify(legacyAttempt()));
    expect(loadInProgressAttempt(SLUG)!.config.immediateFeedback).toBe(false);
  });

  it("trata locked ausente como false em todas as questoes de tentativa antiga", () => {
    localStorage.setItem(KEY, JSON.stringify(legacyAttempt()));
    expect(loadInProgressAttempt(SLUG)!.states.map((s) => s.locked)).toEqual([false, false]);
  });

  it("preserva os demais campos de tentativa antiga", () => {
    localStorage.setItem(KEY, JSON.stringify(legacyAttempt()));
    const loaded = loadInProgressAttempt(SLUG)!;
    expect(loaded.states[1]).toMatchObject({ correct: true, flagged: true, picked: [1] });
  });

  it("preserva immediateFeedback true e locked true de tentativa nova", () => {
    const attempt = legacyAttempt();
    const saved = {
      ...attempt,
      config: { ...attempt.config, immediateFeedback: true, excludeMatchAndOrder: false },
      states: attempt.states.map((s) => ({ ...s, locked: true })),
    } as Attempt;
    saveInProgressAttempt(saved);
    const loaded = loadInProgressAttempt(SLUG)!;
    expect(loaded.config.immediateFeedback).toBe(true);
    expect(loaded.states.every((s) => s.locked)).toBe(true);
  });
});

describe("loadInProgressAttempt excludeMatchAndOrder", () => {
  it("trata excludeMatchAndOrder ausente como false em tentativa antiga", () => {
    localStorage.setItem(KEY, JSON.stringify(legacyAttempt()));
    expect(loadInProgressAttempt(SLUG)!.config.excludeMatchAndOrder).toBe(false);
  });

  it("preserva excludeMatchAndOrder true de tentativa nova", () => {
    const attempt = legacyAttempt();
    const saved = {
      ...attempt,
      config: { ...attempt.config, immediateFeedback: false, excludeMatchAndOrder: true },
      states: attempt.states.map((s) => ({ ...s, locked: false })),
    } as Attempt;
    saveInProgressAttempt(saved);
    expect(loadInProgressAttempt(SLUG)!.config.excludeMatchAndOrder).toBe(true);
  });

  it("preserva os demais campos da config ao normalizar", () => {
    localStorage.setItem(KEY, JSON.stringify(legacyAttempt()));
    expect(loadInProgressAttempt(SLUG)!.config).toMatchObject({ questionSource: "all", timerEnabled: false });
  });
});
