"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getQuestionStatus } from "@/lib/exam/question-status";
import { cn } from "@/lib/utils";
import type { Attempt, QuestionState, Simulado } from "@/types/simulado";
import { ExamNavPanel, type NavItem, type NavTone } from "./exam-nav-panel";
import { ExamTopbar } from "./exam-topbar";
import { QuestionBody } from "./question-body";
import { QuestionCard } from "./question-card";

type ReviewFilter = "all" | "missed";

const REVIEW_LEGEND: NavTone[] = ["correct", "incorrect", "unanswered"];

function matchesFilter(state: QuestionState, filter: ReviewFilter): boolean {
  return filter === "all" || getQuestionStatus(state) !== "correct";
}

function segmentClass(isActive: boolean): string {
  return cn(
    "rounded-full",
    isActive
      ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background dark:hover:bg-foreground/90"
      : "text-muted-foreground"
  );
}

export function ExamReview({
  simulado,
  attempt,
  initialIndex,
  onBack,
}: {
  simulado: Simulado;
  attempt: Attempt;
  initialIndex: number;
  onBack: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [filter, setFilter] = useState<ReviewFilter>("all");
  const [showNav, setShowNav] = useState(false);

  const visibleIndices = attempt.states.flatMap((state, index) => (matchesFilter(state, filter) ? [index] : []));
  const missedCount = attempt.states.filter((state) => matchesFilter(state, "missed")).length;
  const positionInFilter = visibleIndices.indexOf(currentIndex);
  const hasPrevious = positionInFilter > 0;
  const hasNext = positionInFilter < visibleIndices.length - 1;

  const question = simulado.questions[attempt.order[currentIndex]!]!;
  const state = attempt.states[currentIndex]!;
  const navItems: NavItem[] = visibleIndices.map((index) => ({
    index,
    tone: getQuestionStatus(attempt.states[index]!),
    flagged: attempt.states[index]!.flagged,
  }));

  function changeFilter(next: ReviewFilter) {
    setFilter(next);
    if (!matchesFilter(state, next)) {
      setCurrentIndex(attempt.states.findIndex((candidate) => matchesFilter(candidate, next)));
    }
  }

  function goTo(index: number) {
    setCurrentIndex(index);
    setShowNav(false);
  }

  return (
    <>
      <ExamTopbar
        examCode={simulado.examCode}
        title={simulado.title}
        progress={((currentIndex + 1) / attempt.order.length) * 100}
      >
        <Button type="button" variant="outline" size="sm" onClick={onBack}>
          Voltar aos resultados
        </Button>
      </ExamTopbar>

      <div className="w-full max-w-3xl mx-auto px-4 py-8 pb-28">
        <div className="mb-6 flex flex-col gap-4">
          <div>
            <h2 className="font-display text-xl tracking-[-0.02em] text-foreground">Revisão das respostas</h2>
            <p className="mt-1 text-sm text-muted-foreground">{simulado.title}</p>
          </div>
          <div
            role="group"
            aria-label="Filtrar questões"
            className="flex w-fit max-w-full flex-wrap gap-1 rounded-full border border-border bg-card p-1"
          >
            <Button
              type="button"
              size="sm"
              variant="ghost"
              className={segmentClass(filter === "all")}
              aria-pressed={filter === "all"}
              onClick={() => changeFilter("all")}
            >
              Todas ({attempt.states.length})
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              className={segmentClass(filter === "missed")}
              aria-pressed={filter === "missed"}
              disabled={missedCount === 0}
              onClick={() => changeFilter("missed")}
            >
              Só erradas e não respondidas ({missedCount})
            </Button>
          </div>
        </div>

        {showNav ? (
          <ExamNavPanel items={navItems} legend={REVIEW_LEGEND} currentIndex={currentIndex} onSelect={goTo} />
        ) : null}

        <QuestionCard
          index={currentIndex}
          total={attempt.order.length}
          type={question.type}
          actions={
            state.flagged ? (
              <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <Flag className="size-3.5 fill-warning text-warning" />
                Marcada para revisão
              </span>
            ) : null
          }
        >
          <QuestionBody question={question} state={state} revealAnswer onChange={() => undefined} />
        </QuestionCard>

        <div className="fixed inset-x-0 bottom-0 z-10 border-t border-border bg-background/85 px-4 py-3 backdrop-blur">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-3">
            <span className="mr-auto text-sm text-muted-foreground">
              {filter === "missed" ? (
                <>
                  <b className="text-foreground">{positionInFilter + 1}</b> de {visibleIndices.length} no filtro
                </>
              ) : null}
            </span>
            <Button type="button" variant="outline" onClick={() => setShowNav((v) => !v)}>
              {showNav ? "Fechar painel" : "Painel de questões"}
            </Button>
            <Button
              type="button"
              variant="outline"
              disabled={!hasPrevious}
              onClick={() => goTo(visibleIndices[positionInFilter - 1]!)}
            >
              <ArrowLeft />
              Anterior
            </Button>
            <Button type="button" disabled={!hasNext} onClick={() => goTo(visibleIndices[positionInFilter + 1]!)}>
              Próxima
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
