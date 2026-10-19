import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ExamRunner } from "./exam-runner";
import { buildSimulado, multiQuestion, secondSingleQuestion, singleQuestion } from "@/lib/exam/test-fixtures";

const simulado = buildSimulado([singleQuestion, secondSingleQuestion, multiQuestion]);

const confirmButton = () => screen.getByRole("button", { name: "Confirmar resposta" });
const option = (name: string) => screen.getByRole("button", { name: new RegExp(name) });
const resultGroup = () => screen.getByRole("group", { name: "Resultado da questão" });

async function startExam({ immediateFeedback }: { immediateFeedback: boolean }) {
  if (immediateFeedback) {
    await userEvent.click(screen.getByRole("switch", { name: /Feedback imediato/ }));
  }
  await userEvent.click(screen.getByRole("button", { name: "Iniciar exame" }));
}

async function answerAndConfirm(optionName: string) {
  await userEvent.click(option(optionName));
  await userEvent.click(confirmButton());
}

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
});

describe("ExamRunner feedback imediato", () => {
  it("nao mostra o botao Confirmar resposta com o feedback desligado", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: false });
    expect(screen.queryByRole("button", { name: "Confirmar resposta" })).not.toBeInTheDocument();
  });

  it("mostra Confirmar resposta desabilitado ate a questao ficar pronta", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    expect(confirmButton()).toBeDisabled();
  });

  it("habilita Confirmar resposta quando a questao single recebe uma escolha", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await userEvent.click(option("Opcao EBS"));
    expect(confirmButton()).toBeEnabled();
  });

  it("mantem Confirmar resposta desabilitado em multipla escolha incompleta", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await userEvent.click(screen.getByRole("button", { name: "Próxima" }));
    await screen.findByText("Questão 2 de 3");
    await userEvent.click(screen.getByRole("button", { name: "Próxima" }));
    await userEvent.click(await screen.findByRole("button", { name: /Opcao Aurora/ }));
    expect(confirmButton()).toBeDisabled();
  });

  it("revela a questao e mostra Correta ao confirmar uma resposta certa", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao S3");
    expect(within(resultGroup()).getByText("Correta")).toBeInTheDocument();
  });

  it("mostra Sua escolha em vermelho e a correta ao confirmar uma resposta errada", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao EBS");
    expect(screen.getByText("Sua escolha")).toHaveClass("text-destructive");
    expect(option("Opcao S3")).toHaveTextContent("Correta");
    expect(within(resultGroup()).getByText("Incorreta")).toBeInTheDocument();
  });

  it("trava as alternativas depois de confirmar", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao EBS");
    screen.getAllByRole("button", { name: /Opcao/ }).forEach((opt) => expect(opt).toBeDisabled());
  });

  it("nao altera a resposta ao clicar em outra alternativa depois de confirmar", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao EBS");
    await userEvent.click(option("Opcao S3"));
    expect(option("Opcao EBS")).toHaveAttribute("aria-pressed", "true");
    expect(option("Opcao S3")).toHaveAttribute("aria-pressed", "false");
  });

  it("remove o botao Confirmar resposta depois de confirmar", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao S3");
    expect(screen.queryByRole("button", { name: "Confirmar resposta" })).not.toBeInTheDocument();
  });

  it("mostra a explicacao somente depois de confirmar", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    expect(screen.queryByText("S3 e armazenamento de objetos.")).not.toBeInTheDocument();
    await answerAndConfirm("Opcao S3");
    expect(screen.getByText("S3 e armazenamento de objetos.")).toBeInTheDocument();
  });

  it("pinta no painel a questao confirmada e mantem a outra como nao respondida", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao EBS");
    await userEvent.click(screen.getByRole("button", { name: "Painel de questões" }));
    expect(screen.getByRole("button", { name: "Questão 1: incorreta" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Questão 2: não respondida" })).toBeInTheDocument();
  });

  it("pinta como respondida, sem revelar, a questao pronta mas nao confirmada", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await userEvent.click(option("Opcao S3"));
    await userEvent.click(screen.getByRole("button", { name: "Painel de questões" }));
    expect(screen.getByRole("button", { name: "Questão 1: respondida" })).toBeInTheDocument();
  });

  it("sem feedback imediato nao revela a questao ao responder", async () => {
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: false });
    await userEvent.click(option("Opcao S3"));
    expect(screen.queryByRole("group", { name: "Resultado da questão" })).not.toBeInTheDocument();
    expect(option("Opcao S3")).toBeEnabled();
  });
});

describe("ExamRunner retomada de tentativa", () => {
  it("preserva a questao confirmada travada e revelada ao remontar", async () => {
    const first = render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao EBS");
    first.unmount();

    render(<ExamRunner simulado={simulado} />);
    expect(await screen.findByRole("group", { name: "Resultado da questão" })).toBeInTheDocument();
    expect(option("Opcao EBS")).toBeDisabled();
    expect(screen.getByText("Sua escolha")).toBeInTheDocument();
  });

  it("nao mostra Confirmar resposta na questao ja confirmada apos retomar", async () => {
    const first = render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao S3");
    first.unmount();

    render(<ExamRunner simulado={simulado} />);
    await screen.findByRole("group", { name: "Resultado da questão" });
    expect(screen.queryByRole("button", { name: "Confirmar resposta" })).not.toBeInTheDocument();
  });
});

describe("ExamRunner nota final", () => {
  it("mantem o resultado das questoes confirmadas na nota final", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(true);
    render(<ExamRunner simulado={simulado} />);
    await startExam({ immediateFeedback: true });
    await answerAndConfirm("Opcao S3");
    await userEvent.click(screen.getByRole("button", { name: "Próxima" }));
    await userEvent.click(await screen.findByRole("button", { name: /Opcao SQS/ }));
    await userEvent.click(confirmButton());
    await userEvent.click(screen.getByRole("button", { name: "Finalizar" }));
    expect(await screen.findByText(/1 de 2 questões respondidas corretamente/)).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
  });
});
