"use client";

import { cn } from "@/lib/utils";
import type { MultiQuestion, QuestionState, SingleQuestion } from "@/types/simulado";

const LETTERS = "ABCDEFG";

export function OptionsQuestion({
  question,
  state,
  revealAnswer,
  onChange,
}: {
  question: SingleQuestion | MultiQuestion;
  state: QuestionState;
  revealAnswer: boolean;
  onChange: (picked: number[]) => void;
}) {
  function toggle(optionIndex: number) {
    if (revealAnswer) return;
    if (question.type === "single") {
      onChange([optionIndex]);
      return;
    }
    if (state.picked.includes(optionIndex)) {
      onChange(state.picked.filter((i) => i !== optionIndex));
      return;
    }
    if (state.picked.length >= question.pick) return;
    onChange([...state.picked, optionIndex]);
  }

  return (
    <div className="flex flex-col gap-1">
      {question.type === "multi" ? (
        <p className="mb-3 font-mono text-xs text-muted-foreground">Selecione {question.pick} alternativas.</p>
      ) : null}
      <ul className="flex flex-col gap-2.5">
        {state.optOrder.map((optionIndex, position) => {
          const option = question.options[optionIndex]!;
          const isSelected = state.picked.includes(optionIndex);
          const isCorrectOption = question.answer.includes(option.id);
          const isWrongPick = revealAnswer && isSelected && !isCorrectOption;
          const isRightOption = revealAnswer && isCorrectOption;

          return (
            <li key={option.id}>
              <button
                type="button"
                disabled={revealAnswer}
                aria-pressed={isSelected}
                onClick={() => toggle(optionIndex)}
                className={cn(
                  "flex w-full items-start gap-3.5 rounded-lg border border-border bg-card px-4 py-3.5 text-left text-sm/6 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
                  !revealAnswer && "cursor-pointer hover:border-primary/40 hover:bg-secondary/60",
                  isSelected && !revealAnswer && "border-primary bg-primary/10 hover:border-primary hover:bg-primary/10",
                  isRightOption && "border-success bg-success/10",
                  isWrongPick && "border-destructive bg-destructive/10"
                )}
              >
                <span
                  className={cn(
                    "mt-px flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-secondary font-mono text-xs font-bold text-muted-foreground transition-colors",
                    isSelected && !revealAnswer && "border-primary bg-primary text-primary-foreground",
                    isRightOption && "border-success bg-success text-success-foreground",
                    isWrongPick && "border-destructive bg-destructive text-background"
                  )}
                >
                  {LETTERS[position]}
                </span>
                <span className="flex-1">
                  {option.text ? <span>{option.text}</span> : null}
                  {option.code ? (
                    <pre className="mt-2 overflow-x-auto rounded-lg border border-border bg-background/60 p-3 font-mono text-xs">
                      {option.code}
                    </pre>
                  ) : null}
                </span>
                {revealAnswer && (isCorrectOption || isSelected) ? (
                  <span className="flex flex-col items-end gap-1 font-mono text-[11px] font-bold uppercase tracking-[0.08em]">
                    {isCorrectOption ? <span className="text-success">Correta</span> : null}
                    {isSelected ? (
                      <span className={isCorrectOption ? "text-muted-foreground" : "text-destructive"}>
                        Sua escolha
                      </span>
                    ) : null}
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
