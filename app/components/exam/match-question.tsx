"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { MatchQuestion as MatchQuestionType, QuestionState } from "@/types/simulado";

export function MatchQuestion({
  question,
  state,
  onChange,
}: {
  question: MatchQuestionType;
  state: QuestionState;
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
        return (
          <div key={slotIndex} className="rounded-lg border border-border bg-card p-3">
            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Requisito {slotIndex + 1}
            </p>
            <p className="mb-2 text-sm text-foreground">{prompt.t}</p>
            <Select value={value === null ? "" : String(value)} onValueChange={(next) => setSlot(slotIndex, next ?? "")}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecionar…">
                  {(current: string | null) => {
                    if (current === null || current === "") return "Selecionar…";
                    const poolIndex = Number(current);
                    return Number.isNaN(poolIndex) ? "Selecionar…" : question.pool[poolIndex];
                  }}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {question.pool.map((item, poolIndex) => (
                  <SelectItem key={poolIndex} value={String(poolIndex)}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      })}
    </div>
  );
}
