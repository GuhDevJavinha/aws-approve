"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { MatchQuestion as MatchQuestionType, QuestionState } from "@/types/simulado";

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
  function setSlot(slotIndex: number, value: string) {
    const next = [...state.slots];
    next[slotIndex] = value === "" ? null : Number(value);
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-3">
      {question.prompts.map((prompt, slotIndex) => {
        const value = state.slots[slotIndex] ?? null;
        const isCorrect = revealAnswer && value === prompt.a;
        return (
          <div
            key={slotIndex}
            className={cn(
              "rounded-lg border border-border bg-card p-3",
              revealAnswer && (isCorrect ? "border-success bg-success/10" : "border-destructive bg-destructive/10")
            )}
          >
            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Requisito {slotIndex + 1}
            </p>
            <p className="mb-2 text-sm text-foreground">{prompt.t}</p>
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
              <p className="mt-2 text-sm font-medium text-success">Correta: {question.pool[prompt.a]}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
