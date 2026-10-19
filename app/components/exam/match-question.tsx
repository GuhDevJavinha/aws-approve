"use client";

import type { MatchQuestion as MatchQuestionType, QuestionState } from "@/types/simulado";
import { PoolSlot } from "./pool-slot";

export function MatchQuestion({
  question,
  state,
  revealAnswer,
  onChange,
}: {
  question: MatchQuestionType;
  state: QuestionState;
  revealAnswer: boolean;
  onChange: (slots: (number | null)[]) => void;
}) {
  function setSlot(slotIndex: number, value: number | null) {
    const next = [...state.slots];
    next[slotIndex] = value;
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-3">
      {question.prompts.map((prompt, slotIndex) => (
        <PoolSlot
          key={slotIndex}
          label={`Requisito ${slotIndex + 1}`}
          prompt={prompt.t}
          pool={question.pool}
          value={state.slots[slotIndex] ?? null}
          correctValue={prompt.a}
          revealAnswer={revealAnswer}
          onChange={(next) => setSlot(slotIndex, next)}
        />
      ))}
    </div>
  );
}
