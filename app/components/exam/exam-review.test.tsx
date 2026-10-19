import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExamReview } from "./exam-review";
import {
  buildAttemptFor,
  buildQuestionState,
  buildSimulado,
  multiQuestion,
  orderQuestion,
  secondSingleQuestion,
  singleQuestion,
} from "@/lib/exam/test-fixtures";

const simulado = buildSimulado([singleQuestion, secondSingleQuestion, multiQuestion, orderQuestion]);

const attempt = buildAttemptFor(simulado, [
  buildQuestionState({ correct: true, picked: [1] }),
  buildQuestionState({ correct: false, picked: [1], optOrder: [0, 1] }),
  buildQuestionState({ correct: null }),
  buildQuestionState({ correct: true, slots: [0, 1, 2], optOrder: [] }),
]);

function renderReview(initialIndex = 0, onBack = vi.fn()) {
  return render(<ExamReview simulado={simulado} attempt={attempt} initialIndex={initialIndex} onBack={onBack} />);
}

const allFilter = () => screen.getByRole("button", { name: /^Todas/ });
const missedFilter = () => screen.getByRole("button", { name: /^Só erradas e não respondidas/ });

async function openPanel() {
  await userEvent.click(screen.getByRole("button", { name: "Painel de questões" }));
}

function panelQuestionNumbers() {
  return screen
    .getAllByRole("button", { name: /^Questão \d+:/ })
    .map((button) => Number(/^Questão (\d+):/.exec(button.getAttribute("aria-label")!)![1]));
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("ExamReview filtro", () => {
  it("mostra as contagens de todas e de erradas e nao respondidas", () => {
    renderReview();
    expect(allFilter()).toHaveTextContent("Todas (4)");
    expect(missedFilter()).toHaveTextContent("Só erradas e não respondidas (2)");
  });

  it("comeca com Todas selecionado", () => {
    renderReview();
    expect(allFilter()).toHaveAttribute("aria-pressed", "true");
    expect(missedFilter()).toHaveAttribute("aria-pressed", "false");
  });

  it("alterna o aria-pressed ao escolher o filtro de erradas", async () => {
    renderReview();
    await userEvent.click(missedFilter());
    expect(missedFilter()).toHaveAttribute("aria-pressed", "true");
    expect(allFilter()).toHaveAttribute("aria-pressed", "false");
  });

  it("mostra so erradas e nao respondidas no painel quando o filtro esta ligado", async () => {
    renderReview();
    await userEvent.click(missedFilter());
    await openPanel();
    expect(panelQuestionNumbers()).toEqual([2, 3]);
  });

  it("mostra todas as questoes no painel sem filtro", async () => {
    renderReview();
    await openPanel();
    expect(panelQuestionNumbers()).toEqual([1, 2, 3, 4]);
  });

  it("pula para a primeira questao do filtro quando a atual nao pertence a ele", async () => {
    renderReview(0);
    await userEvent.click(missedFilter());
    expect(await screen.findByText("Questão 2 de 4")).toBeInTheDocument();
  });

  it("a navegacao Proxima pula as questoes corretas com o filtro ligado", async () => {
    renderReview(1);
    await userEvent.click(missedFilter());
    await userEvent.click(screen.getByRole("button", { name: "Próxima" }));
    expect(await screen.findByText("Questão 3 de 4")).toBeInTheDocument();
  });

  it("a navegacao Anterior volta para a questao errada anterior ignorando as corretas", async () => {
    renderReview(2);
    await userEvent.click(missedFilter());
    await userEvent.click(screen.getByRole("button", { name: "Anterior" }));
    expect(await screen.findByText("Questão 2 de 4")).toBeInTheDocument();
  });

  it("desabilita Proxima na ultima questao do filtro mesmo havendo corretas depois", async () => {
    renderReview(2);
    await userEvent.click(missedFilter());
    expect(screen.getByRole("button", { name: "Próxima" })).toBeDisabled();
  });

  it("desabilita Anterior na primeira questao do filtro mesmo havendo corretas antes", async () => {
    renderReview(1);
    await userEvent.click(missedFilter());
    expect(screen.getByRole("button", { name: "Anterior" })).toBeDisabled();
  });

  it("sem filtro a navegacao passa por todas as questoes", async () => {
    renderReview(0);
    await userEvent.click(screen.getByRole("button", { name: "Próxima" }));
    expect(await screen.findByText("Questão 2 de 4")).toBeInTheDocument();
  });

  it("volta ao filtro Todas e mostra a questao correta apos navegar", async () => {
    renderReview(1);
    await userEvent.click(missedFilter());
    await userEvent.click(allFilter());
    expect(allFilter()).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Questão 2 de 4")).toBeInTheDocument();
  });
});

describe("ExamReview indicacao de status", () => {
  it("mostra Nao respondida e o gabarito em questao sem resposta", () => {
    renderReview(2);
    const result = screen.getByRole("group", { name: "Resultado da questão" });
    expect(within(result).getByText("Não respondida")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Opcao Aurora/ })).toHaveTextContent("Correta");
    expect(screen.getByRole("button", { name: /Opcao Dynamo/ })).toHaveTextContent("Correta");
  });

  it("mostra Incorreta e Sua escolha em questao errada", () => {
    renderReview(1);
    const result = screen.getByRole("group", { name: "Resultado da questão" });
    expect(within(result).getByText("Incorreta")).toBeInTheDocument();
    expect(screen.getByText("Sua escolha")).toHaveClass("text-destructive");
  });

  it("mostra Correta em questao certa", () => {
    renderReview(0);
    const result = screen.getByRole("group", { name: "Resultado da questão" });
    expect(within(result).getByText("Correta")).toBeInTheDocument();
  });

  it("mostra a explicacao quando a questao tem", () => {
    renderReview(0);
    expect(screen.getByText("S3 e armazenamento de objetos.")).toBeInTheDocument();
  });

  it("nao mostra bloco de explicacao quando a questao nao tem", () => {
    renderReview(1);
    expect(screen.queryByText("Explicação")).not.toBeInTheDocument();
  });

  it("deixa todas as alternativas desabilitadas, modo somente leitura", () => {
    renderReview(1);
    const options = screen.getAllByRole("button", { name: /Opcao/ });
    options.forEach((option) => expect(option).toBeDisabled());
  });
});

describe("ExamReview painel", () => {
  it("rotula cada questao pelo status no painel", async () => {
    renderReview();
    await openPanel();
    expect(screen.getByRole("button", { name: "Questão 1: correta" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Questão 2: incorreta" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Questão 3: não respondida" })).toBeInTheDocument();
  });

  it("navega para a questao escolhida no painel", async () => {
    renderReview();
    await openPanel();
    await userEvent.click(screen.getByRole("button", { name: "Questão 3: não respondida" }));
    expect(await screen.findByText("Questão 3 de 4")).toBeInTheDocument();
  });

  it("marca a questao atual com aria-current", async () => {
    renderReview(1);
    await openPanel();
    expect(screen.getByRole("button", { name: "Questão 2: incorreta" })).toHaveAttribute("aria-current", "true");
  });
});

describe("ExamReview voltar", () => {
  it("chama onBack ao clicar em Voltar aos resultados", async () => {
    const onBack = vi.fn();
    renderReview(0, onBack);
    await userEvent.click(screen.getByRole("button", { name: "Voltar aos resultados" }));
    expect(onBack).toHaveBeenCalledOnce();
  });
});
