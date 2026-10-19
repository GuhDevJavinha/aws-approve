"use client";

import { cn } from "@/lib/utils";
import type { QuestionState } from "@/types/simulado";

export function ExamNavPanel({
  states,
  answered,
  currentIndex,
  onSelect,
}: {
  states: QuestionState[];
  answered: boolean[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mb-4 rounded-lg border border-border bg-card p-4">
      <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <Legend swatch="border border-border bg-card" label="Não respondida" />
        <Legend swatch="border border-ring bg-accent" label="Respondida" />
        <Legend swatch="rounded-full bg-primary" label="Marcada para revisão" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-1.5">
        {states.map((state, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "relative rounded-lg border border-border bg-card py-1.5 font-mono text-xs font-bold text-foreground",
              answered[index] && "border-ring bg-accent",
              index === currentIndex && "outline outline-2 outline-foreground"
            )}
          >
            {index + 1}
            {state.flagged ? (
              <span className="absolute top-0.5 right-0.5 size-1.5 rounded-full bg-primary" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn("inline-block size-2.5 rounded-[2px]", swatch)} />
      {label}
    </span>
  );
}
