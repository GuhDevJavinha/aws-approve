"use client";

import { cn } from "@/lib/utils";
import type { MultiQuestion, QuestionState, SingleQuestion } from "@/types/simulado";

const LETTERS = "ABCDEFG";

export function OptionsQuestion({
  question,
  state,
  onChange,
}: {
  question: SingleQuestion | MultiQuestion;
  state: QuestionState;
  onChange: (picked: number[]) => void;
}) {
  function toggle(optionIndex: number) {
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
        <p className="mb-2 text-sm text-muted-foreground">Selecione {question.pick} alternativas.</p>
      ) : null}
      <ul className="flex flex-col gap-2">
        {state.optOrder.map((optionIndex, position) => {
          const option = question.options[optionIndex]!;
          const isSelected = state.picked.includes(optionIndex);

          return (
            <li key={option.id}>
              <button
                type="button"
                onClick={() => toggle(optionIndex)}
                className={cn(
                  "flex w-full cursor-pointer items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left transition-colors hover:bg-muted",
                  isSelected && "border-ring bg-accent"
                )}
              >
                <span className="font-mono font-bold text-muted-foreground">{LETTERS[position]}</span>
                <span className="flex-1">
                  {option.text ? <span>{option.text}</span> : null}
                  {option.code ? (
                    <pre className="mt-2 overflow-x-auto rounded-lg bg-muted p-3 font-mono text-xs">
                      {option.code}
                    </pre>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
