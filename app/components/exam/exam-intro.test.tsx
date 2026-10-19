import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExamIntro } from "./exam-intro";
import {
  buildSimulado,
  matchQuestion,
  orderQuestion,
  secondSingleQuestion,
  singleQuestion,
} from "@/lib/exam/test-fixtures";

const MATCH_ORDER_TOGGLE = /Sem questões de correspondência\/ordenação/;
const FEEDBACK_TOGGLE = /Feedback imediato/;

const simuladoWithRequirements = buildSimulado([singleQuestion, secondSingleQuestion, orderQuestion, matchQuestion]);
const simuladoOnlyChoice = buildSimulado([singleQuestion, secondSingleQuestion]);

describe("ExamIntro toggle de questoes de correspondencia/ordenacao", () => {
  it("aparece quando o simulado tem questoes match ou order", () => {
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={vi.fn()} />);
    expect(screen.getByRole("switch", { name: MATCH_ORDER_TOGGLE })).toBeInTheDocument();
  });

  it("nao aparece quando o simulado so tem single e multi", () => {
    render(<ExamIntro simulado={simuladoOnlyChoice} onStart={vi.fn()} />);
    expect(screen.queryByRole("switch", { name: MATCH_ORDER_TOGGLE })).not.toBeInTheDocument();
  });

  it("comeca desligado", () => {
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={vi.fn()} />);
    expect(screen.getByRole("switch", { name: MATCH_ORDER_TOGGLE })).not.toBeChecked();
  });

  it("informa quantas questoes serao removidas", () => {
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={vi.fn()} />);
    expect(screen.getByText("Remove 2 questões de correspondência/ordenação.")).toBeInTheDocument();
  });

  it("inicia com excludeMatchAndOrder false por padrao", async () => {
    const onStart = vi.fn();
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={onStart} />);
    await userEvent.click(screen.getByRole("button", { name: "Iniciar exame" }));
    expect(onStart).toHaveBeenCalledWith(expect.objectContaining({ excludeMatchAndOrder: false }));
  });

  it("inicia com excludeMatchAndOrder true depois de ligar o toggle", async () => {
    const onStart = vi.fn();
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={onStart} />);
    await userEvent.click(screen.getByRole("switch", { name: MATCH_ORDER_TOGGLE }));
    await userEvent.click(screen.getByRole("button", { name: "Iniciar exame" }));
    expect(onStart).toHaveBeenCalledWith(expect.objectContaining({ excludeMatchAndOrder: true }));
  });

  it("reduz o total disponivel na descricao da quantidade oficial ao ligar o toggle", async () => {
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={vi.fn()} />);
    expect(screen.getByText("Usa 4 de 4 questões, sorteadas.")).toBeInTheDocument();
    await userEvent.click(screen.getByRole("switch", { name: MATCH_ORDER_TOGGLE }));
    expect(screen.getByText("Usa 2 de 2 questões, sorteadas.")).toBeInTheDocument();
  });

  it("o preset prova real nao altera o toggle", async () => {
    render(<ExamIntro simulado={simuladoWithRequirements} onStart={vi.fn()} />);
    await userEvent.click(screen.getByRole("switch", { name: MATCH_ORDER_TOGGLE }));
    await userEvent.click(screen.getByRole("button", { name: "Simular prova real" }));
    expect(screen.getByRole("switch", { name: MATCH_ORDER_TOGGLE })).toBeChecked();
  });
});

describe("ExamIntro toggle de feedback imediato", () => {
  it("comeca desligado", () => {
    render(<ExamIntro simulado={simuladoOnlyChoice} onStart={vi.fn()} />);
    expect(screen.getByRole("switch", { name: FEEDBACK_TOGGLE })).not.toBeChecked();
  });

  it("inicia com immediateFeedback true depois de ligar o toggle", async () => {
    const onStart = vi.fn();
    render(<ExamIntro simulado={simuladoOnlyChoice} onStart={onStart} />);
    await userEvent.click(screen.getByRole("switch", { name: FEEDBACK_TOGGLE }));
    await userEvent.click(screen.getByRole("button", { name: "Iniciar exame" }));
    expect(onStart).toHaveBeenCalledWith(expect.objectContaining({ immediateFeedback: true }));
  });

  it("o preset prova real forca o feedback imediato para desligado", async () => {
    render(<ExamIntro simulado={simuladoOnlyChoice} onStart={vi.fn()} />);
    await userEvent.click(screen.getByRole("switch", { name: FEEDBACK_TOGGLE }));
    await userEvent.click(screen.getByRole("button", { name: "Simular prova real" }));
    expect(screen.getByRole("switch", { name: FEEDBACK_TOGGLE })).not.toBeChecked();
  });
});
