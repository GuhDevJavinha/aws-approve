import { describe, expect, it } from "vitest";
import { confirmQuestion, gradeAttempt, gradeQuestion, isQuestionReady } from "./grading";
import type {
  MatchQuestion,
  MultiQuestion,
  OrderQuestion,
  Question,
  QuestionState,
  SingleQuestion,
} from "@/types/simulado";

const single: SingleQuestion = {
  id: "s1",
  type: "single",
  stem: "Qual?",
  options: [{ id: "a" }, { id: "b" }, { id: "c" }],
  answer: ["b"],
};

const multi: MultiQuestion = {
  id: "m1",
  type: "multi",
  stem: "Quais?",
  pick: 2,
  options: [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }],
  answer: ["a", "c"],
};

const order: OrderQuestion = {
  id: "o1",
  type: "order",
  stem: "Ordene",
  pool: ["x", "y", "z"],
  answer: [2, 0, 1],
};

const match: MatchQuestion = {
  id: "t1",
  type: "match",
  stem: "Associe",
  pool: ["p", "q"],
  prompts: [
    { t: "um", a: 1 },
    { t: "dois", a: 0 },
  ],
};

function stateFor(overrides: Partial<QuestionState> = {}): QuestionState {
  return {
    correct: null,
    locked: false,
    flagged: false,
    picked: [],
    optOrder: [0, 1, 2, 3],
    slots: [],
    ...overrides,
  };
}

describe("gradeQuestion", () => {
  it("acerta single quando a alternativa marcada e a resposta", () => {
    expect(gradeQuestion(single, stateFor({ picked: [1] }))).toBe(true);
  });

  it("erra single quando a alternativa marcada nao e a resposta", () => {
    expect(gradeQuestion(single, stateFor({ picked: [0] }))).toBe(false);
  });

  it("acerta multi independente da ordem em que as alternativas foram marcadas", () => {
    expect(gradeQuestion(multi, stateFor({ picked: [2, 0] }))).toBe(true);
  });

  it("erra multi quando uma das alternativas esta errada", () => {
    expect(gradeQuestion(multi, stateFor({ picked: [0, 1] }))).toBe(false);
  });

  it("compara multi pelo id da opcao, nao pela posicao exibida", () => {
    // picked guarda indices de question.options; optOrder so muda a exibicao
    const shuffled = stateFor({ optOrder: [3, 2, 1, 0], picked: [0, 2] });
    expect(gradeQuestion(multi, shuffled)).toBe(true);
  });

  it("acerta order quando todos os slots seguem a ordem correta", () => {
    expect(gradeQuestion(order, stateFor({ slots: [2, 0, 1] }))).toBe(true);
  });

  it("erra order quando algum slot esta fora de posicao", () => {
    expect(gradeQuestion(order, stateFor({ slots: [0, 2, 1] }))).toBe(false);
  });

  it("acerta match quando cada slot aponta para a resposta do seu prompt", () => {
    expect(gradeQuestion(match, stateFor({ slots: [1, 0] }))).toBe(true);
  });

  it("erra match quando os slots estao trocados", () => {
    expect(gradeQuestion(match, stateFor({ slots: [0, 1] }))).toBe(false);
  });
});

describe("isQuestionReady", () => {
  it("single nao esta pronta sem alternativa marcada", () => {
    expect(isQuestionReady(single, stateFor())).toBe(false);
  });

  it("single esta pronta com uma alternativa marcada", () => {
    expect(isQuestionReady(single, stateFor({ picked: [0] }))).toBe(true);
  });

  it("multi nao esta pronta com menos alternativas que o pedido", () => {
    expect(isQuestionReady(multi, stateFor({ picked: [0] }))).toBe(false);
  });

  it("multi esta pronta quando marcou exatamente a quantidade pedida", () => {
    expect(isQuestionReady(multi, stateFor({ picked: [0, 1] }))).toBe(true);
  });

  it("order nao esta pronta com slot vazio", () => {
    expect(isQuestionReady(order, stateFor({ slots: [2, null, 1] }))).toBe(false);
  });

  it("order esta pronta com todos os slots preenchidos, mesmo errados", () => {
    expect(isQuestionReady(order, stateFor({ slots: [0, 1, 2] }))).toBe(true);
  });

  it("match nao esta pronta com slot vazio", () => {
    expect(isQuestionReady(match, stateFor({ slots: [null, null] }))).toBe(false);
  });

  it("match esta pronta com todos os slots preenchidos", () => {
    expect(isQuestionReady(match, stateFor({ slots: [0, 1] }))).toBe(true);
  });

  it("slot com indice 0 conta como preenchido", () => {
    expect(isQuestionReady(order, stateFor({ slots: [0, 0, 0] }))).toBe(true);
  });
});

describe("confirmQuestion", () => {
  it("nao altera o estado quando a questao nao esta pronta", () => {
    const state = stateFor();
    expect(confirmQuestion(single, state)).toBe(state);
  });

  it("trava e marca como correta quando a resposta esta certa", () => {
    const result = confirmQuestion(single, stateFor({ picked: [1] }));
    expect(result).toMatchObject({ locked: true, correct: true });
  });

  it("trava e marca como incorreta quando a resposta esta errada", () => {
    const result = confirmQuestion(single, stateFor({ picked: [0] }));
    expect(result).toMatchObject({ locked: true, correct: false });
  });

  it("nao trava multi com selecao incompleta", () => {
    const result = confirmQuestion(multi, stateFor({ picked: [0] }));
    expect(result).toMatchObject({ locked: false, correct: null });
  });

  it("trava order completa e errada como incorreta", () => {
    const result = confirmQuestion(order, stateFor({ slots: [0, 1, 2] }));
    expect(result).toMatchObject({ locked: true, correct: false });
  });

  it("nao muta o estado original", () => {
    const state = stateFor({ picked: [1] });
    confirmQuestion(single, state);
    expect(state).toMatchObject({ locked: false, correct: null });
  });
});

describe("gradeAttempt", () => {
  const questions: Question[] = [single, multi, order, match];

  it("corrige cada estado usando a questao apontada pela ordem da tentativa", () => {
    const states = [stateFor({ picked: [0, 2] }), stateFor({ picked: [1] })];
    const result = gradeAttempt(questions, [1, 0], states);
    expect(result.map((s) => s.correct)).toEqual([true, true]);
  });

  it("mantem correct null nas questoes nao prontas", () => {
    const result = gradeAttempt(questions, [0, 2], [stateFor(), stateFor({ slots: [2, null, 1] })]);
    expect(result.map((s) => s.correct)).toEqual([null, null]);
  });

  it("marca como incorreta a questao pronta e errada", () => {
    const result = gradeAttempt(questions, [3], [stateFor({ slots: [0, 1] })]);
    expect(result[0]!.correct).toBe(false);
  });

  it("devolve o mesmo resultado que confirmQuestion para questao confirmada", () => {
    const confirmed = confirmQuestion(single, stateFor({ picked: [0] }));
    const [graded] = gradeAttempt(questions, [0], [confirmed]);
    expect(graded!.correct).toBe(confirmed.correct);
  });

  it("preserva o travamento das questoes confirmadas", () => {
    const confirmed = confirmQuestion(single, stateFor({ picked: [1] }));
    const [graded] = gradeAttempt(questions, [0], [confirmed]);
    expect(graded!.locked).toBe(true);
  });

  it("devolve lista vazia para tentativa sem estados", () => {
    expect(gradeAttempt(questions, [], [])).toEqual([]);
  });
});
