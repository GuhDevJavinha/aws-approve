import { describe, it, expect } from "vitest";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";

describe("simulado_security_especialist data integrity", () => {
  it("has a non-empty bank of questions with unique ids", () => {
    const { questions } = simuladoSecurityEspecialista;
    expect(questions.length).toBeGreaterThan(0);
    expect(new Set(questions.map((q) => q.id)).size).toBe(questions.length);
  });

  it("examQuestionCount does not exceed the bank size", () => {
    expect(simuladoSecurityEspecialista.examQuestionCount).toBeLessThanOrEqual(
      simuladoSecurityEspecialista.questions.length
    );
  });

  it("every single/multi answer id exists among that question's options", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "single" || q.type === "multi") {
        const optionIds = new Set(q.options.map((o) => o.id));
        for (const a of q.answer) expect(optionIds.has(a)).toBe(true);
      }
    }
  });

  it("every multi question's answer length matches its pick count", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "multi") expect(q.answer).toHaveLength(q.pick);
    }
  });

  it("every order question's answer indices are within its pool bounds", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "order") {
        for (const i of q.answer) {
          expect(i).toBeGreaterThanOrEqual(0);
          expect(i).toBeLessThan(q.pool.length);
        }
      }
    }
  });

  it("every match question's prompt targets are within its pool bounds", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "match") {
        for (const prompt of q.prompts) {
          expect(prompt.a).toBeGreaterThanOrEqual(0);
          expect(prompt.a).toBeLessThan(q.pool.length);
        }
      }
    }
  });
});
