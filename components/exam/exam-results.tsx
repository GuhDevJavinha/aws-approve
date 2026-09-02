"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getPassingScore } from "@/lib/exam/constants";
import { QUESTION_TYPE_LABEL } from "@/lib/exam/type-labels";
import type { Attempt, Simulado } from "@/types/simulado";

export function ExamResults({
  simulado,
  attempt,
  onReviewQuestion,
  onRestart,
}: {
  simulado: Simulado;
  attempt: Attempt;
  onReviewQuestion: (index: number) => void;
  onRestart: () => void;
}) {
  const answeredCount = attempt.states.filter((s) => s.locked).length;
  const correctCount = attempt.states.filter((s) => s.correct === true).length;
  const scorePercent = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);
  const passed = scorePercent >= getPassingScore(simulado);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="rounded-sm border border-border bg-card p-7">
        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">
          Resultado do exame de prática
        </p>
        <h2 className="text-2xl font-semibold text-foreground">{simulado.title}</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`mt-4 font-mono text-6xl font-bold ${passed ? "text-success" : "text-destructive"}`}
        >
          {scorePercent}%
        </motion.div>
        <p className="mt-1 text-sm text-muted-foreground">
          {correctCount} de {answeredCount} questões respondidas corretamente
          {answeredCount < attempt.order.length
            ? ` · ${attempt.order.length - answeredCount} sem resposta`
            : ""}
        </p>

        <div className="mt-4 flex gap-3">
          <Link href="/hub" className={buttonVariants({ variant: "secondary" })}>
            Voltar ao hub
          </Link>
          <Button type="button" onClick={onRestart}>
            Reiniciar simulado
          </Button>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-[10px] uppercase tracking-wide text-muted-foreground">
                <th className="py-2">#</th>
                <th className="py-2">Formato</th>
                <th className="py-2">Situação</th>
                <th className="py-2">Revisão</th>
                <th className="py-2" />
              </tr>
            </thead>
            <tbody>
              {attempt.order.map((questionIndex, position) => {
                const question = simulado.questions[questionIndex]!;
                const state = attempt.states[position]!;
                return (
                  <tr key={question.id} className="border-b border-border/60">
                    <td className="py-2 font-mono">{position + 1}</td>
                    <td className="py-2">{QUESTION_TYPE_LABEL[question.type]}</td>
                    <td
                      className={
                        state.correct === true
                          ? "py-2 font-semibold text-success"
                          : state.correct === false
                            ? "py-2 font-semibold text-destructive"
                            : "py-2 text-muted-foreground"
                      }
                    >
                      {state.correct === true
                        ? "Correta"
                        : state.correct === false
                          ? "Incorreta"
                          : "Não respondida"}
                    </td>
                    <td className="py-2">{state.flagged ? "Marcada" : ""}</td>
                    <td className="py-2">
                      <button
                        type="button"
                        className="text-accent-foreground underline"
                        onClick={() => onReviewQuestion(position)}
                      >
                        Abrir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
