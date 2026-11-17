"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getPassingScore } from "@/lib/exam/constants";
import { QUESTION_TYPE_LABEL } from "@/lib/exam/type-labels";
import { formatDuration } from "@/lib/format-time";
import { MONO_LABEL_CLASS } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { Attempt, Simulado } from "@/types/simulado";
import { ExamTopbar } from "./exam-topbar";

export function ExamResults({
  simulado,
  attempt,
  elapsedSeconds,
  onReviewQuestion,
  onRestart,
}: {
  simulado: Simulado;
  attempt: Attempt;
  elapsedSeconds: number;
  onReviewQuestion: (index: number) => void;
  onRestart: () => void;
}) {
  const answeredCount = attempt.states.filter((s) => s.correct !== null).length;
  const correctCount = attempt.states.filter((s) => s.correct === true).length;
  const scorePercent = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);
  const passingScore = getPassingScore(simulado);
  const passed = scorePercent >= passingScore;

  return (
    <>
      <ExamTopbar examCode={simulado.examCode} title={simulado.title}>
        <Link href="/simulados" className={buttonVariants({ variant: "outline", size: "sm" })}>
          Voltar aos simulados
        </Link>
      </ExamTopbar>

      <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 px-4 py-10">
        <section className="flex flex-col items-center rounded-xl border border-border bg-linear-to-b from-primary/15 to-card px-5 py-9 text-center sm:px-10">
          <p className={cn(MONO_LABEL_CLASS, "text-[10px]")}>Resultado do exame de prática</p>
          <h2 className="mt-3 font-display text-xl leading-snug tracking-[-0.02em] text-foreground sm:text-2xl">
            {simulado.title}
          </h2>

          <ScoreRing percent={scorePercent} passed={passed} />

          <span
            className={cn(
              "mt-5 rounded-full border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.16em]",
              passed ? "border-success/40 bg-success/10 text-success" : "border-destructive/40 bg-destructive/10 text-destructive"
            )}
          >
            {passed ? "Aprovado" : "Reprovado"}
          </span>

          <p className="mt-4 text-sm text-muted-foreground">
            {correctCount} de {answeredCount} questões respondidas corretamente
            {answeredCount < attempt.order.length
              ? ` · ${attempt.order.length - answeredCount} sem resposta`
              : ""}
            {" · "}
            Tempo: {formatDuration(elapsedSeconds)}
          </p>

          <dl className="mt-7 grid w-full max-w-md grid-cols-3 gap-3">
            <Stat label="corretas" value={`${correctCount}/${answeredCount}`} />
            <Stat label="nota de corte" value={`${passingScore}%`} />
            <Stat label="tempo" value={formatDuration(elapsedSeconds)} />
          </dl>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button type="button" size="lg" onClick={() => onReviewQuestion(0)}>
              Revisar respostas
            </Button>
            <Button type="button" size="lg" variant="outline" onClick={onRestart}>
              Reiniciar simulado
            </Button>
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className={cn(MONO_LABEL_CLASS, "border-b border-border text-left text-[10px]")}>
                <th className="px-5 py-3 font-normal">#</th>
                <th className="px-3 py-3 font-normal">Formato</th>
                <th className="px-3 py-3 font-normal">Situação</th>
                <th className="px-3 py-3 font-normal">Revisão</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {attempt.order.map((questionIndex, position) => {
                const question = simulado.questions[questionIndex]!;
                const state = attempt.states[position]!;
                return (
                  <tr key={question.id} className="border-b border-border/60 last:border-b-0">
                    <td className="px-5 py-3 font-mono">{position + 1}</td>
                    <td className="px-3 py-3">{QUESTION_TYPE_LABEL[question.type]}</td>
                    <td
                      className={
                        state.correct === true
                          ? "px-3 py-3 font-semibold text-success"
                          : state.correct === false
                            ? "px-3 py-3 font-semibold text-destructive"
                            : "px-3 py-3 text-muted-foreground"
                      }
                    >
                      {state.correct === true
                        ? "Correta"
                        : state.correct === false
                          ? "Incorreta"
                          : "Não respondida"}
                    </td>
                    <td className="px-3 py-3">{state.flagged ? "Marcada" : ""}</td>
                    <td className="px-5 py-3 text-right">
                      <button
                        type="button"
                        aria-label={`Abrir questão ${position + 1} na revisão`}
                        className="cursor-pointer rounded-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring dark:text-glow"
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
        </section>
      </div>
    </>
  );
}

function ScoreRing({ percent, passed }: { percent: number; passed: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mt-8 size-44">
      <svg
        viewBox="0 0 120 120"
        aria-hidden
        className={cn("size-full -rotate-90", passed && "drop-shadow-[0_0_10px_var(--glow)]")}
      >
        <circle cx="60" cy="60" r="52" fill="none" strokeWidth="8" className="stroke-border" />
        <motion.circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className={passed ? "stroke-primary" : "stroke-destructive"}
          initial={reduceMotion ? false : { pathLength: 0 }}
          animate={{ pathLength: percent / 100 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-4xl tracking-[-0.02em] text-foreground">
        {percent}%
      </span>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col-reverse gap-1 rounded-lg border border-border bg-background/50 px-2 py-4">
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="font-display text-base tracking-[-0.02em] text-foreground sm:text-lg">{value}</dd>
    </div>
  );
}
