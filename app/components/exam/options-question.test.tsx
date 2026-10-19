import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { OptionsQuestion } from "./options-question";
import type { MultiQuestion, QuestionState, SingleQuestion } from "@/types/simulado";

const single: SingleQuestion = {
  id: "s1",
  type: "single",
  stem: "Qual?",
  options: [
    { id: "a", text: "Alfa" },
    { id: "b", text: "Beta" },
    { id: "c", text: "Gama" },
  ],
  answer: ["b"],
};

const multi: MultiQuestion = {
  id: "m1",
  type: "multi",
  stem: "Quais?",
  pick: 2,
  options: [
    { id: "a", text: "Alfa" },
    { id: "b", text: "Beta" },
    { id: "c", text: "Gama" },
  ],
  answer: ["a", "c"],
};

function stateWith(picked: number[]): QuestionState {
  return { correct: null, locked: false, flagged: false, picked, optOrder: [0, 1, 2], slots: [] };
}

function option(name: string) {
  return screen.getByRole("button", { name: new RegExp(name) });
}

describe("OptionsQuestion com revealAnswer", () => {
  it("marca a alternativa correta com o selo Correta", () => {
    render(<OptionsQuestion question={single} state={stateWith([1])} revealAnswer onChange={vi.fn()} />);
    expect(option("Beta")).toHaveTextContent("Correta");
  });

  it("mostra Sua escolha em vermelho quando a alternativa marcada esta errada", () => {
    render(<OptionsQuestion question={single} state={stateWith([0])} revealAnswer onChange={vi.fn()} />);
    expect(screen.getByText("Sua escolha")).toHaveClass("text-destructive");
  });

  it("nao mostra Sua escolha em vermelho quando a escolha esta certa", () => {
    render(<OptionsQuestion question={single} state={stateWith([1])} revealAnswer onChange={vi.fn()} />);
    expect(screen.getByText("Sua escolha")).not.toHaveClass("text-destructive");
  });

  it("revela a correta mesmo sem resposta, sem Sua escolha", () => {
    render(<OptionsQuestion question={single} state={stateWith([])} revealAnswer onChange={vi.fn()} />);
    expect(option("Beta")).toHaveTextContent("Correta");
    expect(screen.queryByText("Sua escolha")).not.toBeInTheDocument();
  });

  it("revela todas as corretas e a escolha errada em multipla escolha", () => {
    render(<OptionsQuestion question={multi} state={stateWith([0, 1])} revealAnswer onChange={vi.fn()} />);
    expect(option("Alfa")).toHaveTextContent("Correta");
    expect(option("Gama")).toHaveTextContent("Correta");
    expect(option("Beta")).toHaveTextContent("Sua escolha");
    expect(option("Beta")).not.toHaveTextContent("Correta");
  });

  it("desabilita todas as alternativas", () => {
    render(<OptionsQuestion question={single} state={stateWith([0])} revealAnswer onChange={vi.fn()} />);
    screen.getAllByRole("button").forEach((button) => expect(button).toBeDisabled());
  });

  it("nao dispara onChange ao clicar com a questao revelada", async () => {
    const onChange = vi.fn();
    render(<OptionsQuestion question={single} state={stateWith([])} revealAnswer onChange={onChange} />);
    await userEvent.click(option("Alfa"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("reflete a selecao em aria-pressed", () => {
    render(<OptionsQuestion question={single} state={stateWith([2])} revealAnswer onChange={vi.fn()} />);
    expect(option("Gama")).toHaveAttribute("aria-pressed", "true");
    expect(option("Alfa")).toHaveAttribute("aria-pressed", "false");
  });
});

describe("OptionsQuestion sem revealAnswer", () => {
  it("habilita as alternativas e nao mostra selos", () => {
    render(<OptionsQuestion question={single} state={stateWith([0])} revealAnswer={false} onChange={vi.fn()} />);
    expect(option("Beta")).toBeEnabled();
    expect(screen.queryByText("Correta")).not.toBeInTheDocument();
    expect(screen.queryByText("Sua escolha")).not.toBeInTheDocument();
  });

  it("dispara onChange com o indice clicado", async () => {
    const onChange = vi.fn();
    render(<OptionsQuestion question={single} state={stateWith([])} revealAnswer={false} onChange={onChange} />);
    await userEvent.click(option("Gama"));
    expect(onChange).toHaveBeenCalledWith([2]);
  });
});
