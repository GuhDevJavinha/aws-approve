"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FormMessage({ error, notice }: { error?: string | null; notice?: string | null }) {
  const text = error ?? notice;
  if (!text) return null;

  return (
    <motion.p
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      role={error ? "alert" : "status"}
      className={cn(
        "overflow-hidden rounded-lg border px-3.5 py-2.5 text-sm",
        error ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-success/30 bg-success/10 text-success"
      )}
    >
      {text}
    </motion.p>
  );
}
