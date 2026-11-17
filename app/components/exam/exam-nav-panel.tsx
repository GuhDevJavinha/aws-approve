"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { QUESTION_STATUS_LABEL, type QuestionStatus } from "@/lib/exam/question-status";
import { cn } from "@/lib/utils";

export type NavTone = QuestionStatus | "answered";

export type NavItem = {
  index: number;
  tone: NavTone;
  flagged: boolean;
};

const TONE_LABEL: Record<NavTone, string> = {
  ...QUESTION_STATUS_LABEL,
  answered: "Respondida",
};

const TONE_STYLE: Record<NavTone, string> = {
  unanswered: "border-border bg-secondary text-muted-foreground",
  answered: "border-primary bg-primary text-primary-foreground",
  correct: "border-success/60 bg-success/10 text-success",
  incorrect: "border-destructive/60 bg-destructive/10 text-destructive",
};

export function ExamNavPanel({
  items,
  legend,
  currentIndex,
  onSelect,
}: {
  items: NavItem[];
  legend: NavTone[];
  currentIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mb-4 rounded-xl border border-border bg-card p-5">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-2">
        {items.map(({ index, tone, flagged }) => (
          <button
            key={index}
            type="button"
            aria-current={index === currentIndex ? "true" : undefined}
            aria-label={`Questão ${index + 1}: ${TONE_LABEL[tone].toLowerCase()}${flagged ? ", marcada para revisão" : ""}`}
            onClick={() => onSelect(index)}
            className={cn(
              "relative flex h-9 cursor-pointer items-center justify-center gap-0.5 rounded-md border font-mono text-xs font-bold transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              TONE_STYLE[tone],
              index === currentIndex && "outline outline-2 outline-offset-2 outline-foreground"
            )}
          >
            {index + 1}
            {tone === "correct" ? <CheckIcon aria-hidden className="size-3" /> : null}
            {tone === "incorrect" ? <XIcon aria-hidden className="size-3" /> : null}
            {flagged ? <span className="absolute top-1 right-1 size-1.5 rounded-full bg-warning" /> : null}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
        {legend.map((tone) => (
          <Legend key={tone} swatch={`border ${TONE_STYLE[tone]}`} label={TONE_LABEL[tone]} />
        ))}
        <Legend swatch="rounded-full border-transparent bg-warning" label="Marcada para revisão" />
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn("inline-block size-2.5 rounded-[3px]", swatch)} />
      {label}
    </span>
  );
}
