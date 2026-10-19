"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { QUESTION_TYPE_LABEL } from "@/lib/exam/type-labels";
import type { QuestionType } from "@/types/simulado";

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
        className="rounded-lg border border-border bg-card"
      >
        <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-3">
          <span className="font-mono text-xs font-bold text-muted-foreground">
            Questão {index + 1} de {total}
          </span>
          <span className="rounded-lg border border-border bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
            {QUESTION_TYPE_LABEL[type]}
          </span>
          {actions}
        </div>
        <div className="p-5">{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}
