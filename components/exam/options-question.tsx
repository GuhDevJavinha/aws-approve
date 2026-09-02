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
    if (state.locked) return;
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
          const isCorrectOption = question.answer.includes(option.id);

          return (
            <li key={option.id}>
              <button
                type="button"
                disabled={state.locked}
                onClick={() => toggle(optionIndex)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left transition-colors",
                  !state.locked && "cursor-pointer hover:bg-muted",
                  isSelected && !revealAnswer && "border-ring bg-accent",
                  revealAnswer && isCorrectOption && "border-success bg-success/10",
                  revealAnswer && isSelected && !isCorrectOption && "border-destructive bg-destructive/10"
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
                {revealAnswer && isCorrectOption ? (
                  <span className="text-xs font-bold uppercase text-success">Correta</span>
                ) : null}
                {revealAnswer && isSelected && !isCorrectOption ? (
                  <span className="text-xs font-bold uppercase text-destructive">Sua escolha</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
