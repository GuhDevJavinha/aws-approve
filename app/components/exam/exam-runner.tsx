"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ArrowLeft, ArrowRight, Flag, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Attempt, ExamConfig, QuestionState, Simulado } from "@/types/simulado";
import { buildAttempt } from "@/lib/exam/build-attempt";
import { formatTime } from "@/lib/format-time";
import { confirmQuestion, gradeAttempt, isQuestionReady } from "@/lib/exam/grading";
import { getQuestionStatus } from "@/lib/exam/question-status";
import { getPassingScore } from "@/lib/exam/constants";
import {
  clearInProgressAttempt,
  loadInProgressAttempt,
  saveCompletedResult,
  saveInProgressAttempt,
} from "@/lib/storage/attempt-storage";
import { ExamIntro } from "./exam-intro";
import { ExamNavPanel, type NavItem, type NavTone } from "./exam-nav-panel";
import { ExamResults } from "./exam-results";
import { ExamReview } from "./exam-review";
import { ExamTopbar } from "./exam-topbar";
import { QuestionBody } from "./question-body";
import { QuestionCard } from "./question-card";

type Phase = "intro" | "running" | "results" | "review";

const RUNNING_LEGEND: NavTone[] = ["unanswered", "answered"];
const IMMEDIATE_FEEDBACK_LEGEND: NavTone[] = ["unanswered", "answered", "correct", "incorrect"];

function getRunningTone(state: QuestionState, isReady: boolean): NavTone {
  if (state.locked) return getQuestionStatus(state);
  return isReady ? "answered" : "unanswered";
}

export function ExamRunner({ simulado }: { simulado: Simulado }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = loadInProgressAttempt(simulado.slug);
    if (saved) {
      startTransition(() => {
        setAttempt(saved);
        setPhase("running");
      });
    }
  }, [simulado.slug]);

  useEffect(() => {
    if (phase === "running" && attempt) {
      saveInProgressAttempt(attempt);
    }
  }, [phase, attempt]);

  const finishAttemptRef = useRef(finishAttempt);
  useEffect(() => {
    finishAttemptRef.current = finishAttempt;
  });

  useEffect(() => {
    if (phase !== "running" || !attempt || !attempt.config.timerEnabled || paused) return;
    if (attempt.secondsRemaining <= 0) {
      finishAttemptRef.current();
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
      <div className="w-full max-w-3xl mx-auto px-4 py-10 pb-28">
        <div className="flex flex-col items-center rounded-xl border border-border bg-card p-10 text-center">
          <span className="mb-5 flex size-12 items-center justify-center rounded-full border border-border bg-secondary text-primary dark:text-glow">
            <Pause className="size-5" />
          </span>
          <p className="font-display text-xl tracking-[-0.02em] text-foreground">Prova pausada</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Suas respostas estão salvas. Continue quando estiver pronto.
          </p>
          <Button type="button" size="lg" className="mt-6" onClick={() => setPaused(false)}>
            Continuar
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <ExamResults
        simulado={simulado}
        attempt={attempt}
        elapsedSeconds={elapsedSeconds}
        onReviewQuestion={(index) => {
          setReviewIndex(index);
          setPhase("review");
        }}
        onRestart={() => {
          setAttempt(null);
          setPhase("intro");
        }}
      />
    );
  }

  if (phase === "review") {
    return (
      <ExamReview
        simulado={simulado}
        attempt={attempt}
        initialIndex={reviewIndex}
        onBack={() => setPhase("results")}
      />
    );
  }

  const question = simulado.questions[attempt.order[attempt.currentIndex]!]!;
  const state = attempt.states[attempt.currentIndex]!;
  const answered = attempt.order.map((questionIndex, position) =>
    isQuestionReady(simulado.questions[questionIndex]!, attempt.states[position]!)
  );
  const answeredCount = answered.filter(Boolean).length;
  const awaitingConfirmation = attempt.config.immediateFeedback && !state.locked;
  const navItems: NavItem[] = attempt.states.map((s, index) => ({
    index,
    tone: getRunningTone(s, answered[index]!),
    flagged: s.flagged,
  }));

  function updateState(patch: Partial<QuestionState>) {
    setAttempt((prev) => {
      if (!prev) return prev;
      const states = [...prev.states];
      states[prev.currentIndex] = { ...states[prev.currentIndex]!, ...patch };
      return { ...prev, states };
    });
  }

  function confirmAnswer() {
    flushSync(() => updateState(confirmQuestion(question, state)));
    feedbackRef.current?.focus();
  }

  function goTo(index: number) {
    setAttempt((prev) => (prev ? { ...prev, currentIndex: index } : prev));
    setShowNav(false);
  }

  function finishAttempt() {
    if (!attempt) return;
    const gradedStates = gradeAttempt(simulado.questions, attempt.order, attempt.states);
    const gradedAnswered = gradedStates.filter((s) => s.correct !== null).length;
    const gradedCorrect = gradedStates.filter((s) => s.correct === true).length;
    const scorePercent = gradedAnswered === 0 ? 0 : Math.round((gradedCorrect / gradedAnswered) * 100);
    const finishedAt = Date.now();
    const elapsed = Math.max(0, Math.round((finishedAt - Date.parse(attempt.startedAt)) / 1000));
    saveCompletedResult({
      simuladoSlug: simulado.slug,
      completedAt: new Date(finishedAt).toISOString(),
      scorePercent,
      correctCount: gradedCorrect,
      answeredCount: gradedAnswered,
      totalCount: attempt.order.length,
      passed: scorePercent >= getPassingScore(simulado),
      elapsedSeconds: elapsed,
    });
    clearInProgressAttempt(simulado.slug);
    setAttempt({ ...attempt, states: gradedStates });
    setElapsedSeconds(elapsed);
    setPhase("results");
  }

  const requestFinish = () => {
    const pending = attempt.order.length - answeredCount;
    if (pending > 0 && !window.confirm(`Ainda há ${pending} questão(ões) sem resposta. Finalizar agora?`)) {
      return;
    }
    finishAttempt();
  };

  const isFirst = attempt.currentIndex === 0;
  const isLast = attempt.currentIndex >= attempt.order.length - 1;

  const progressPercent = ((attempt.currentIndex + 1) / attempt.order.length) * 100;

  return (
    <>
      <ExamTopbar examCode={simulado.examCode} title={simulado.title} progress={progressPercent}>
        {attempt.config.timerEnabled ? (
          <TimerPill seconds={attempt.secondsRemaining} />
        ) : (
          <Button type="button" variant="outline" size="sm" onClick={() => setPaused(true)}>
            Pausar
          </Button>
        )}
        <Button type="button" size="sm" onClick={requestFinish}>
          Finalizar
        </Button>
      </ExamTopbar>

      <div className="w-full max-w-3xl mx-auto px-4 py-8 pb-28">
        {showNav ? (
          <ExamNavPanel
            items={navItems}
            legend={attempt.config.immediateFeedback ? IMMEDIATE_FEEDBACK_LEGEND : RUNNING_LEGEND}
            currentIndex={attempt.currentIndex}
            onSelect={goTo}
          />
        ) : null}

        <QuestionCard
          index={attempt.currentIndex}
          total={attempt.order.length}
          type={question.type}
          actions={
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="ml-auto"
              onClick={() => updateState({ flagged: !state.flagged })}
            >
              <Flag className={cn(state.flagged && "fill-current")} />
              {state.flagged ? "Marcada para revisão" : "Marcar para revisão"}
            </Button>
          }
        >
          <QuestionBody
            question={question}
            state={state}
            revealAnswer={state.locked}
            feedbackRef={feedbackRef}
            onChange={updateState}
          />
          {awaitingConfirmation ? (
            <Button
              type="button"
              size="lg"
              className="mt-6"
              disabled={!isQuestionReady(question, state)}
              onClick={confirmAnswer}
            >
              Confirmar resposta
            </Button>
          ) : null}
        </QuestionCard>

        <div className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-background/85 px-4 py-3 backdrop-blur">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-3">
            <span className="mr-auto text-sm text-muted-foreground">
              Respondidas <b className="text-foreground">{answeredCount}</b> de {attempt.order.length}
            </span>
            <Button type="button" variant="outline" onClick={() => setShowNav((v) => !v)}>
              {showNav ? "Fechar painel" : "Painel de questões"}
            </Button>
            <Button type="button" variant="outline" disabled={isFirst} onClick={() => goTo(attempt.currentIndex - 1)}>
              <ArrowLeft />
              Anterior
            </Button>
            <Button
              type="button"
              variant={awaitingConfirmation ? "outline" : "default"}
              disabled={isLast}
              onClick={() => goTo(attempt.currentIndex + 1)}
            >
              Próxima
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function TimerPill({ seconds }: { seconds: number }) {
  const isRunningOut = seconds <= 300;

  return (
    <span
      className={cn(
        "inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3.5 font-mono text-xs font-bold tabular-nums",
        isRunningOut ? "text-warning" : "text-foreground"
      )}
    >
      <span
        aria-hidden
        className={cn("size-1.5 rounded-full", isRunningOut ? "bg-warning motion-safe:animate-pulse" : "bg-success")}
      />
      {formatTime(seconds)}
    </span>
  );
}
