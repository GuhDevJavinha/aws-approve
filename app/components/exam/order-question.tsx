"use client";

import type { OrderQuestion as OrderQuestionType, QuestionState } from "@/types/simulado";
import { PoolSlot } from "./pool-slot";

export function OrderQuestion({
  question,
  state,
  revealAnswer,
  onChange,
}: {
  question: OrderQuestionType;
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
      {state.slots.map((value, slotIndex) => (
        <PoolSlot
          key={slotIndex}
          label={`Etapa ${slotIndex + 1}`}
          pool={question.pool}
          value={value}
          correctValue={question.answer[slotIndex]!}
          revealAnswer={revealAnswer}
          onChange={(next) => setSlot(slotIndex, next)}
        />
      ))}
    </div>
  );
}
