"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function PoolSlot({
  label,
  prompt,
  pool,
  value,
  correctValue,
  revealAnswer,
  onChange,
}: {
  label: string;
  prompt?: string;
  pool: string[];
  value: number | null;
  correctValue: number;
  revealAnswer: boolean;
  onChange: (value: number | null) => void;
}) {
  const isAnswered = value !== null;
  const isCorrect = value === correctValue;

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-3",
        revealAnswer && isAnswered && (isCorrect ? "border-success bg-success/10" : "border-destructive bg-destructive/10")
      )}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
        {revealAnswer && isAnswered ? (
          <span className={cn("text-xs font-bold", isCorrect ? "text-success" : "text-destructive")}>
            {isCorrect ? "Correta" : "Incorreta"}
          </span>
        ) : null}
      </div>
      {prompt ? <p className="mb-2 text-sm text-foreground">{prompt}</p> : null}
      <Select
        disabled={revealAnswer}
        value={value === null ? "" : String(value)}
        onValueChange={(next) => onChange(next === null || next === "" ? null : Number(next))}
      >
        <SelectTrigger className={cn("w-full", revealAnswer && "disabled:cursor-default disabled:opacity-100")}>
          <SelectValue placeholder="Selecionar…">
            {(current: string | null) => {
              if (current === null || current === "") return "Selecionar…";
              const poolIndex = Number(current);
              return Number.isNaN(poolIndex) ? "Selecionar…" : pool[poolIndex];
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {pool.map((item, poolIndex) => (
            <SelectItem key={poolIndex} value={String(poolIndex)}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {revealAnswer && !isCorrect ? (
        <p className="mt-2 text-sm font-medium text-success">Correta: {pool[correctValue]}</p>
      ) : null}
    </div>
  );
}
