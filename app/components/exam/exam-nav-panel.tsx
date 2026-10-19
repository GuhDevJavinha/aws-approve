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
  unanswered: "border-border bg-card text-foreground",
  answered: "border-ring bg-accent text-foreground",
  correct: "border-success bg-success/10 text-success",
  incorrect: "border-destructive bg-destructive/10 text-destructive",
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
    <div className="mb-4 rounded-lg border border-border bg-card p-4">
      <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
        {legend.map((tone) => (
          <Legend key={tone} swatch={`border ${TONE_STYLE[tone]}`} label={TONE_LABEL[tone]} />
        ))}
        <Legend swatch="rounded-full bg-primary" label="Marcada para revisão" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-1.5">
        {items.map(({ index, tone, flagged }) => (
          <button
            key={index}
            type="button"
            aria-current={index === currentIndex ? "true" : undefined}
            aria-label={`Questão ${index + 1}: ${TONE_LABEL[tone].toLowerCase()}${flagged ? ", marcada para revisão" : ""}`}
            onClick={() => onSelect(index)}
            className={cn(
              "relative flex cursor-pointer items-center justify-center gap-0.5 rounded-lg border py-1.5 font-mono text-xs font-bold",
              TONE_STYLE[tone],
              index === currentIndex && "outline outline-2 outline-foreground"
            )}
          >
            {index + 1}
            {tone === "correct" ? <CheckIcon aria-hidden className="size-3" /> : null}
            {tone === "incorrect" ? <XIcon aria-hidden className="size-3" /> : null}
            {flagged ? <span className="absolute top-0.5 right-0.5 size-1.5 rounded-full bg-primary" /> : null}
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
