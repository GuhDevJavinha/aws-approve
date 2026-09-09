"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { OrderQuestion as OrderQuestionType, QuestionState } from "@/types/simulado";

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
  function setSlot(slotIndex: number, value: string) {
    const next = [...state.slots];
    next[slotIndex] = value === "" ? null : Number(value);
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-3">
      {state.slots.map((value, slotIndex) => {
        const isCorrect = revealAnswer && value === question.answer[slotIndex];
        return (
          <div
            key={slotIndex}
            className={cn(
              "rounded-lg border border-border bg-card p-3",
              revealAnswer && (isCorrect ? "border-success bg-success/10" : "border-destructive bg-destructive/10")
            )}
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Etapa {slotIndex + 1}
            </p>
            <Select
              disabled={state.locked}
              value={value === null ? "" : String(value)}
              onValueChange={(next) => setSlot(slotIndex, next ?? "")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecionar…" />
              </SelectTrigger>
              <SelectContent>
                {question.pool.map((item, poolIndex) => (
                  <SelectItem key={poolIndex} value={String(poolIndex)}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {revealAnswer && !isCorrect ? (
              <p className="mt-2 text-sm font-medium text-success">
                Correta: {question.pool[question.answer[slotIndex]!]}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
