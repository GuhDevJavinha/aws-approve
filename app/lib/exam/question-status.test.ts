import { describe, expect, it } from "vitest";
import { getQuestionStatus, QUESTION_STATUS_LABEL } from "./question-status";
import type { QuestionState } from "@/types/simulado";

function stateWith(correct: boolean | null): QuestionState {
  return { correct, locked: false, flagged: false, picked: [], optOrder: [], slots: [] };
}

describe("getQuestionStatus", () => {
  it("retorna correct quando a questao foi acertada", () => {
    expect(getQuestionStatus(stateWith(true))).toBe("correct");
  });

  it("retorna incorrect quando a questao foi errada", () => {
    expect(getQuestionStatus(stateWith(false))).toBe("incorrect");
  });

  it("retorna unanswered quando a questao nao foi corrigida", () => {
    expect(getQuestionStatus(stateWith(null))).toBe("unanswered");
  });
});

describe("QUESTION_STATUS_LABEL", () => {
  it("usa os rotulos exibidos na interface", () => {
    expect(QUESTION_STATUS_LABEL).toEqual({
      correct: "Correta",
      incorrect: "Incorreta",
      unanswered: "Não respondida",
    });
  });
});
