"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { OrderQuestion as OrderQuestionType, QuestionState } from "@/types/simulado";

export function OrderQuestion({
  question,
  state,
  onChange,
}: {
  question: OrderQuestionType;
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
      {state.slots.map((value, slotIndex) => (
        <div key={slotIndex} className="rounded-lg border border-border bg-card p-3">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
            Etapa {slotIndex + 1}
          </p>
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
      ))}
    </div>
  );
}
