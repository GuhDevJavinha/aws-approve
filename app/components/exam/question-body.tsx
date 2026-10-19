"use client";

import type { Ref } from "react";
import { cn } from "@/lib/utils";
import { getQuestionStatus, QUESTION_STATUS_LABEL, type QuestionStatus } from "@/lib/exam/question-status";
import type { Question, QuestionState } from "@/types/simulado";
import { MatchQuestion } from "./match-question";
import { OptionsQuestion } from "./options-question";
import { OrderQuestion } from "./order-question";

const VERDICT_STYLE: Record<QuestionStatus, string> = {
  correct: "border-success bg-success/10 text-success",
  incorrect: "border-destructive bg-destructive/10 text-destructive",
  unanswered: "border-border bg-muted text-foreground",
};

export function QuestionBody({
  question,
  state,
  revealAnswer,
  feedbackRef,
  onChange,
}: {
  question: Question;
  state: QuestionState;
  revealAnswer: boolean;
  feedbackRef?: Ref<HTMLDivElement>;
  onChange: (patch: Partial<QuestionState>) => void;
}) {
  const status = getQuestionStatus(state);

  return (
    <div>
      <p className="whitespace-pre-wrap text-foreground">{question.stem}</p>
      {question.code ? (
        <pre className="mt-3 overflow-x-auto rounded-lg bg-muted p-3 font-mono text-xs">{question.code}</pre>
      ) : null}
      {question.ask ? <p className="mt-4 font-semibold text-foreground">{question.ask}</p> : null}

      <div className="mt-4">
        {question.type === "single" || question.type === "multi" ? (
          <OptionsQuestion
            question={question}
            state={state}
            revealAnswer={revealAnswer}
            onChange={(picked) => onChange({ picked })}
          />
        ) : question.type === "order" ? (
          <OrderQuestion
            question={question}
            state={state}
            revealAnswer={revealAnswer}
            onChange={(slots) => onChange({ slots })}
          />
        ) : (
          <MatchQuestion
            question={question}
            state={state}
            revealAnswer={revealAnswer}
            onChange={(slots) => onChange({ slots })}
          />
        )}
      </div>

      {revealAnswer ? (
        <div
          ref={feedbackRef}
          role="group"
          aria-label="Resultado da questão"
          tabIndex={-1}
          className="mt-4 outline-none"
        >
          <p className={cn("rounded-lg border px-4 py-2 text-sm font-bold", VERDICT_STYLE[status])}>
            {QUESTION_STATUS_LABEL[status]}
          </p>
          {question.explanation ? (
            <div className="mt-3 rounded-lg border border-border bg-muted p-4">
              <p className="text-sm font-semibold text-foreground">Explicação</p>
              <p className="mt-1 whitespace-pre-wrap text-sm text-foreground">{question.explanation}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
