import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { OrderQuestion } from "./order-question";
import type { OrderQuestion as OrderQuestionType, QuestionState } from "@/types/simulado";

const question: OrderQuestionType = {
  id: "o1",
  type: "order",
  stem: "Ordene",
  pool: ["Passo A", "Passo B", "Passo C"],
  answer: [1, 0, 2],
};

function stateWith(slots: (number | null)[]): QuestionState {
  return { correct: null, locked: false, flagged: false, picked: [], optOrder: [], slots };
}

function renderOrder(slots: (number | null)[], revealAnswer: boolean) {
  return render(
    <OrderQuestion question={question} state={stateWith(slots)} revealAnswer={revealAnswer} onChange={vi.fn()} />
  );
}

describe("OrderQuestion com revealAnswer", () => {
  it("mostra Correta nas etapas certas e Incorreta nas erradas", () => {
    renderOrder([1, 2, 2], true);
    expect(screen.getAllByText("Correta")).toHaveLength(2);
    expect(screen.getAllByText("Incorreta")).toHaveLength(1);
  });

  it("mostra a resposta correta apenas nas etapas erradas", () => {
    renderOrder([1, 2, 2], true);
    expect(screen.getByText("Correta: Passo A")).toBeInTheDocument();
    expect(screen.queryByText("Correta: Passo B")).not.toBeInTheDocument();
    expect(screen.queryByText("Correta: Passo C")).not.toBeInTheDocument();
  });

  it("mostra a resposta correta em todas as etapas quando nao foi respondida", () => {
    renderOrder([null, null, null], true);
    expect(screen.getByText("Correta: Passo B")).toBeInTheDocument();
    expect(screen.getByText("Correta: Passo A")).toBeInTheDocument();
    expect(screen.getByText("Correta: Passo C")).toBeInTheDocument();
    expect(screen.queryByText("Incorreta")).not.toBeInTheDocument();
  });

  it("desabilita os seletores de todas as etapas", () => {
    renderOrder([1, 0, 2], true);
    const triggers = screen.getAllByRole("combobox");
    expect(triggers).toHaveLength(3);
    triggers.forEach((trigger) => expect(trigger).toBeDisabled());
  });

  it("nao mostra gabarito quando tudo esta correto", () => {
    renderOrder([1, 0, 2], true);
    expect(screen.queryByText(/^Correta: /)).not.toBeInTheDocument();
  });
});

describe("OrderQuestion sem revealAnswer", () => {
  it("mantem os seletores habilitados e esconde o gabarito", () => {
    renderOrder([1, 2, null], false);
    screen.getAllByRole("combobox").forEach((trigger) => expect(trigger).toBeEnabled());
    expect(screen.queryByText("Correta")).not.toBeInTheDocument();
    expect(screen.queryByText("Incorreta")).not.toBeInTheDocument();
    expect(screen.queryByText(/^Correta: /)).not.toBeInTheDocument();
  });
});
