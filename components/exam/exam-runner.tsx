"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { Attempt, ExamConfig, QuestionState, Simulado } from "@/types/simulado";
import { buildAttempt } from "@/lib/exam/build-attempt";
import { formatTime } from "@/lib/format-time";
import { gradeQuestion, isQuestionReady } from "@/lib/exam/grading";
import { QUESTION_TYPE_LABEL } from "@/lib/exam/type-labels";
import { cn } from "@/lib/utils";
import { ExamIntro } from "./exam-intro";
import { ExamNavPanel } from "./exam-nav-panel";
import { MatchQuestion } from "./match-question";
import { OptionsQuestion } from "./options-question";
import { OrderQuestion } from "./order-question";

type Phase = "intro" | "running" | "results";

export function ExamRunner({ simulado }: { simulado: Simulado }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (phase !== "running" || !attempt || !attempt.config.timerEnabled || paused) return;
    if (attempt.secondsRemaining <= 0) {
      finishAttempt();
      return;
    }
    const id = setInterval(() => {
      setAttempt((prev) => (prev ? { ...prev, secondsRemaining: prev.secondsRemaining - 1 } : prev));
    }, 1000);
    return () => clearInterval(id);
  }, [phase, attempt, paused]);

  function handleStart(config: ExamConfig) {
    setAttempt(buildAttempt(simulado, config));
    setPhase("running");
  }

  if (phase === "intro" || !attempt) {
    return <ExamIntro simulado={simulado} onStart={handleStart} />;
  }

  if (paused) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 pb-28">
        <div className="rounded-sm border border-border bg-card p-10 text-center">
          <p className="text-lg font-semibold text-foreground">Prova pausada</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Suas respostas estão salvas. Continue quando estiver pronto.
          </p>
          <Button type="button" className="mt-5" onClick={() => setPaused(false)}>
            Continuar
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return <div className="max-w-3xl mx-auto px-4 py-10">Resultado — chega em tarefa futura.</div>;
  }

  const question = simulado.questions[attempt.order[attempt.currentIndex]!]!;
  const state = attempt.states[attempt.currentIndex]!;
  const revealAnswer = state.locked && attempt.config.immediateFeedback;
  const answeredCount = attempt.states.filter((s) => s.locked).length;
  const correctCount = attempt.states.filter((s) => s.correct === true).length;

  function updateState(patch: Partial<QuestionState>) {
    setAttempt((prev) => {
      if (!prev) return prev;
      const states = [...prev.states];
      states[prev.currentIndex] = { ...states[prev.currentIndex]!, ...patch };
      return { ...prev, states };
    });
  }

  function goTo(index: number) {
    setAttempt((prev) => (prev ? { ...prev, currentIndex: index } : prev));
    setShowNav(false);
  }

  function finishAttempt() {
    setPhase("results");
  }

  const requestFinish = () => {
    const pending = attempt.order.length - answeredCount;
    if (pending > 0 && !window.confirm(`Ainda há ${pending} questão(ões) sem resposta. Finalizar agora?`)) {
      return;
    }
    finishAttempt();
  };

  const confirmAnswer = () => {
    if (state.locked) {
      if (attempt.currentIndex >= attempt.order.length - 1) {
        finishAttempt();
      } else {
        goTo(attempt.currentIndex + 1);
      }
      return;
    }
    if (!isQuestionReady(question, state)) return;
    updateState({ locked: true, correct: gradeQuestion(question, state) });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pb-28">
      {showNav ? (
        <ExamNavPanel
          states={attempt.states}
          currentIndex={attempt.currentIndex}
          revealAnswers={attempt.config.immediateFeedback}
          onSelect={goTo}
        />
      ) : null}

      <AnimatePresence mode="wait">
        <motion.div
          key={attempt.currentIndex}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className="rounded-sm border border-border bg-card"
        >
          <div className="flex items-center gap-3 border-b border-border px-5 py-3">
            <span className="font-mono text-xs font-bold text-muted-foreground">
              Questão {attempt.currentIndex + 1} de {attempt.order.length}
            </span>
            <span className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
              {QUESTION_TYPE_LABEL[question.type]}
            </span>
            {attempt.config.timerEnabled ? (
              <span
                className={cn(
                  "font-mono text-xs font-bold",
                  attempt.secondsRemaining <= 300 ? "text-destructive" : "text-muted-foreground"
                )}
              >
                {formatTime(attempt.secondsRemaining)}
              </span>
            ) : null}
            {!attempt.config.timerEnabled ? (
              <Button type="button" variant="ghost" size="sm" onClick={() => setPaused(true)}>
                Pausar
              </Button>
            ) : null}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => updateState({ flagged: !state.flagged })}
            >
              {state.flagged ? "Marcada para revisão" : "Marcar para revisão"}
            </Button>
          </div>

          <div className="p-5">
            <p className="whitespace-pre-wrap text-foreground">{question.stem}</p>
            {question.code ? (
              <pre className="mt-3 overflow-x-auto rounded-sm bg-muted p-3 font-mono text-xs">{question.code}</pre>
            ) : null}
            {question.ask ? <p className="mt-4 font-semibold text-foreground">{question.ask}</p> : null}

            <div className="mt-4">
              {question.type === "single" || question.type === "multi" ? (
                <OptionsQuestion
                  question={question}
                  state={state}
                  revealAnswer={revealAnswer}
                  onChange={(picked) => updateState({ picked })}
                />
              ) : question.type === "order" ? (
                <OrderQuestion
                  question={question}
                  state={state}
                  revealAnswer={revealAnswer}
                  onChange={(slots) => updateState({ slots })}
                />
              ) : (
                <MatchQuestion
                  question={question}
                  state={state}
                  revealAnswer={revealAnswer}
                  onChange={(slots) => updateState({ slots })}
                />
              )}
            </div>

            {revealAnswer ? (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={
                  state.correct
                    ? "mt-4 rounded-sm border border-success bg-success/10 px-4 py-2 text-sm font-bold text-success"
                    : "mt-4 rounded-sm border border-destructive bg-destructive/10 px-4 py-2 text-sm font-bold text-destructive"
                }
              >
                {state.correct ? "Correto" : "Incorreto"}
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-3">
          <span className="mr-auto text-sm text-muted-foreground">
            Respondidas <b className="text-foreground">{answeredCount}</b> de {attempt.order.length}
            {attempt.config.immediateFeedback ? (
              <>
                {" "}
                · Corretas <b className="text-foreground">{correctCount}</b>
              </>
            ) : null}
          </span>
          <Button type="button" variant="outline" onClick={() => setShowNav((v) => !v)}>
            {showNav ? "Fechar revisão" : "Revisar questões"}
          </Button>
          <Button type="button" variant="outline" onClick={requestFinish}>
            Finalizar
          </Button>
          <Button
            type="button"
            variant="secondary"
            disabled={attempt.currentIndex === 0}
            onClick={() => goTo(attempt.currentIndex - 1)}
          >
            Anterior
          </Button>
          <Button
            type="button"
            onClick={confirmAnswer}
            disabled={!state.locked && !isQuestionReady(question, state)}
          >
            {state.locked
              ? attempt.currentIndex >= attempt.order.length - 1
                ? "Ver resultado"
                : "Próxima questão"
              : "Confirmar resposta"}
          </Button>
        </div>
      </div>
    </div>
  );
}
