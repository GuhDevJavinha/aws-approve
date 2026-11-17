"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { QUESTION_TYPE_LABEL } from "@/lib/exam/type-labels";
import { MONO_LABEL_CLASS } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { QuestionType } from "@/types/simulado";

const CHIP_CLASS = cn(MONO_LABEL_CLASS, "rounded-md border border-border bg-secondary px-2.5 py-1 text-[10px]");

export function QuestionCard({
  index,
  total,
  type,
  actions,
  children,
}: {
  index: number;
  total: number;
  type: QuestionType;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -12 }}
        transition={{ duration: 0.2 }}
        className="rounded-xl border border-border bg-card p-5 sm:p-7"
      >
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className={CHIP_CLASS}>
            Questão {index + 1} de {total}
          </span>
          <span className={CHIP_CLASS}>{QUESTION_TYPE_LABEL[type]}</span>
          {actions}
        </div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
