import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MatchQuestion } from "./match-question";
import type { MatchQuestion as MatchQuestionType, QuestionState } from "@/types/simulado";

const question: MatchQuestionType = {
  id: "mt1",
  type: "match",
  stem: "Relacione",
  pool: ["Servico X", "Servico Y", "Servico Z"],
  prompts: [
    { t: "Requisito um", a: 0 },
    { t: "Requisito dois", a: 2 },
  ],
};

function stateWith(slots: (number | null)[]): QuestionState {
  return { correct: null, locked: false, flagged: false, picked: [], optOrder: [], slots };
}

function renderMatch(slots: (number | null)[], revealAnswer: boolean) {
  return render(
    <MatchQuestion question={question} state={stateWith(slots)} revealAnswer={revealAnswer} onChange={vi.fn()} />
  );
}

describe("MatchQuestion com revealAnswer", () => {
  it("mostra o enunciado de cada requisito", () => {
    renderMatch([0, 2], true);
    expect(screen.getByText("Requisito um")).toBeInTheDocument();
    expect(screen.getByText("Requisito dois")).toBeInTheDocument();
  });

  it("mostra Correta no requisito certo e Incorreta no errado", () => {
    renderMatch([0, 1], true);
    expect(screen.getAllByText("Correta")).toHaveLength(1);
    expect(screen.getAllByText("Incorreta")).toHaveLength(1);
  });

  it("mostra a resposta correta apenas no requisito errado", () => {
    renderMatch([0, 1], true);
    expect(screen.getByText("Correta: Servico Z")).toBeInTheDocument();
    expect(screen.queryByText("Correta: Servico X")).not.toBeInTheDocument();
  });

  it("mostra a resposta correta de todos os requisitos quando nao foi respondida", () => {
    renderMatch([null, null], true);
    expect(screen.getByText("Correta: Servico X")).toBeInTheDocument();
    expect(screen.getByText("Correta: Servico Z")).toBeInTheDocument();
    expect(screen.queryByText("Incorreta")).not.toBeInTheDocument();
  });

  it("desabilita os seletores de todos os requisitos", () => {
    renderMatch([0, 2], true);
    const triggers = screen.getAllByRole("combobox");
    expect(triggers).toHaveLength(2);
    triggers.forEach((trigger) => expect(trigger).toBeDisabled());
  });
});

describe("MatchQuestion sem revealAnswer", () => {
  it("mantem os seletores habilitados e esconde o gabarito", () => {
    renderMatch([1, null], false);
    screen.getAllByRole("combobox").forEach((trigger) => expect(trigger).toBeEnabled());
    expect(screen.queryByText("Incorreta")).not.toBeInTheDocument();
    expect(screen.queryByText(/^Correta: /)).not.toBeInTheDocument();
  });
});
