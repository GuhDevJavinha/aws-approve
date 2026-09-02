"use client";

import { useState } from "react";
import type { Attempt, ExamConfig, Simulado } from "@/types/simulado";
import { buildAttempt } from "@/lib/exam/build-attempt";
import { ExamIntro } from "./exam-intro";

type Phase = "intro" | "running" | "results";

export function ExamRunner({ simulado }: { simulado: Simulado }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [attempt, setAttempt] = useState<Attempt | null>(null);

  function handleStart(config: ExamConfig) {
    setAttempt(buildAttempt(simulado, config));
    setPhase("running");
  }

  if (phase === "intro" || !attempt) {
    return <ExamIntro simulado={simulado} onStart={handleStart} />;
  }

  if (phase === "running") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm text-muted-foreground">
          {attempt.order.length} questões carregadas — a tela de pergunta chega na próxima tarefa.
        </p>
      </div>
    );
  }

  return <div className="max-w-3xl mx-auto px-4 py-10">Resultado — chega em tarefa futura.</div>;
}
