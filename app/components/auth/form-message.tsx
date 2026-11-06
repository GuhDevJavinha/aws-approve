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
      className={cn("text-sm", error ? "text-destructive" : "text-success")}
    >
      {text}
    </motion.p>
  );
}
