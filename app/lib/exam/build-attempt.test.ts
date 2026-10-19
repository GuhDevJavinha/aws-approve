import { describe, expect, it } from "vitest";
import { buildAttempt, countMatchAndOrderQuestions } from "./build-attempt";
import {
  baseConfig,
  buildSimulado,
  matchQuestion,
  multiQuestion,
  orderQuestion,
  secondSingleQuestion,
  singleQuestion,
} from "./test-fixtures";
import type { Question } from "@/types/simulado";

const mixedQuestions: Question[] = [
  singleQuestion,
  { ...secondSingleQuestion, id: "s3" },
  multiQuestion,
  { ...singleQuestion, id: "s4" },
  orderQuestion,
  matchQuestion,
  { ...matchQuestion, id: "mt2" },
];

function typesOf(attempt: ReturnType<typeof buildAttempt>, questions: Question[]) {
  return attempt.order.map((index) => questions[index]!.type);
}

describe("countMatchAndOrderQuestions", () => {
  it("conta apenas questoes match e order", () => {
    expect(countMatchAndOrderQuestions(mixedQuestions)).toBe(3);
  });

  it("retorna zero quando so ha single e multi", () => {
    expect(countMatchAndOrderQuestions([singleQuestion, multiQuestion])).toBe(0);
  });

  it("retorna zero para lista vazia", () => {
    expect(countMatchAndOrderQuestions([])).toBe(0);
  });
});

describe("buildAttempt com excludeMatchAndOrder", () => {
  const simulado = buildSimulado(mixedQuestions, { examQuestionCount: 3 });

  it("mantem match e order no modo all quando o filtro esta desligado", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, questionSource: "all" });
    expect(attempt.order).toHaveLength(7);
    expect(typesOf(attempt, mixedQuestions)).toContain("match");
    expect(typesOf(attempt, mixedQuestions)).toContain("order");
  });

  it("remove match e order no modo all quando o filtro esta ligado", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, questionSource: "all", excludeMatchAndOrder: true });
    expect(attempt.order).toHaveLength(4);
    expect(typesOf(attempt, mixedQuestions).every((type) => type === "single" || type === "multi")).toBe(true);
  });

  it("sorteia examQuestionCount questoes no modo official com o filtro desligado", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, questionSource: "official" });
    expect(attempt.order).toHaveLength(3);
  });

  it("sorteia examQuestionCount questoes sem match nem order no modo official com o filtro ligado", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, questionSource: "official", excludeMatchAndOrder: true });
    expect(attempt.order).toHaveLength(3);
    expect(typesOf(attempt, mixedQuestions).every((type) => type === "single" || type === "multi")).toBe(true);
  });

  it("usa todas as questoes que sobraram quando ha menos que examQuestionCount", () => {
    const largeExam = buildSimulado(mixedQuestions, { examQuestionCount: 6 });
    const attempt = buildAttempt(largeExam, { ...baseConfig, questionSource: "official", excludeMatchAndOrder: true });
    expect(attempt.order).toHaveLength(4);
  });

  it("nao repete questoes quando usa todas as que sobraram", () => {
    const largeExam = buildSimulado(mixedQuestions, { examQuestionCount: 6 });
    const attempt = buildAttempt(largeExam, { ...baseConfig, questionSource: "official", excludeMatchAndOrder: true });
    expect(new Set(attempt.order).size).toBe(4);
  });

  it("aponta order para os indices do banco original, mesmo com o filtro removendo questoes", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, excludeMatchAndOrder: true });
    expect(attempt.order).toEqual([0, 1, 2, 3]);
  });

  it("gera um estado por questao selecionada", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, excludeMatchAndOrder: true });
    expect(attempt.states).toHaveLength(attempt.order.length);
  });

  it("guarda a configuracao recebida na tentativa", () => {
    const config = { ...baseConfig, excludeMatchAndOrder: true };
    expect(buildAttempt(simulado, config).config).toEqual(config);
  });

  it("devolve tentativa vazia quando o banco so tem match e order e o filtro esta ligado", () => {
    const onlyRequirements = buildSimulado([orderQuestion, matchQuestion]);
    const attempt = buildAttempt(onlyRequirements, { ...baseConfig, excludeMatchAndOrder: true });
    expect(attempt.order).toEqual([]);
  });
});

describe("buildAttempt estado inicial das questoes", () => {
  it("cria questoes nao confirmadas", () => {
    const attempt = buildAttempt(buildSimulado(mixedQuestions), baseConfig);
    expect(attempt.states.every((state) => state.locked === false && state.correct === null)).toBe(true);
  });
});
