"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { countMatchAndOrderQuestions } from "@/lib/exam/build-attempt";
import { getPassingScore } from "@/lib/exam/constants";
import type { ExamConfig, Simulado } from "@/types/simulado";

const DEFAULT_CONFIG: ExamConfig = {
  questionSource: "all",
  timerEnabled: false,
  immediateFeedback: false,
  excludeMatchAndOrder: false,
  shuffleQuestions: false,
  shuffleOptions: false,
};

export function ExamIntro({
  simulado,
  onStart,
}: {
  simulado: Simulado;
  onStart: (config: ExamConfig) => void;
}) {
  const [config, setConfig] = useState<ExamConfig>(DEFAULT_CONFIG);

  const matchAndOrderCount = countMatchAndOrderQuestions(simulado.questions);
  const availableCount = simulado.questions.length - (config.excludeMatchAndOrder ? matchAndOrderCount : 0);
  const officialCount = Math.min(simulado.examQuestionCount, availableCount);

  function applyRealExamPreset() {
    setConfig((c) => ({
      ...c,
      questionSource: "official",
      timerEnabled: true,
      immediateFeedback: false,
      shuffleQuestions: true,
      shuffleOptions: true,
    }));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-2xl mx-auto px-4 py-10"
    >
      <Card>
        <CardHeader>
          <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
            {simulado.examCode} · Exame de prática
          </p>
          <h1 className="text-2xl font-semibold text-foreground">{simulado.title}</h1>
          <p className="text-sm text-muted-foreground">
            Banco de {simulado.questions.length} questões · prova oficial com{" "}
            {simulado.examQuestionCount} questões em {simulado.examDurationMinutes} min · nota de
            aprovação {getPassingScore(simulado)}%
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Button type="button" variant="outline" onClick={applyRealExamPreset}>
            Simular prova real
          </Button>

          <ToggleRow
            label="Quantidade oficial de questões"
            description={`Usa ${officialCount} de ${availableCount} questões, sorteadas.`}
            checked={config.questionSource === "official"}
            onCheckedChange={(checked) =>
              setConfig((c) => ({ ...c, questionSource: checked ? "official" : "all" }))
            }
          />
          {matchAndOrderCount > 0 ? (
            <ToggleRow
              label="Sem questões de correspondência/ordenação"
              description={`Remove ${matchAndOrderCount} ${matchAndOrderCount === 1 ? "questão" : "questões"} de correspondência/ordenação.`}
              checked={config.excludeMatchAndOrder}
              onCheckedChange={(checked) => setConfig((c) => ({ ...c, excludeMatchAndOrder: checked }))}
            />
          ) : null}
          <ToggleRow
            label="Cronômetro"
            description="Ao zerar, o simulado é finalizado automaticamente."
            checked={config.timerEnabled}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, timerEnabled: checked }))}
          />
          <ToggleRow
            label="Feedback imediato"
            description="Confirme cada resposta para ver o gabarito na hora. A questão fica travada."
            checked={config.immediateFeedback}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, immediateFeedback: checked }))}
          />
          <ToggleRow
            label="Embaralhar questões"
            description="A ordem muda a cada tentativa."
            checked={config.shuffleQuestions}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, shuffleQuestions: checked }))}
          />
          <ToggleRow
            label="Embaralhar alternativas"
            description="Vale para múltipla escolha e resposta múltipla."
            checked={config.shuffleOptions}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, shuffleOptions: checked }))}
          />

          <Button type="button" onClick={() => onStart(config)} className="w-full">
            Iniciar exame
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4 cursor-pointer">
      <span>
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="block text-sm text-muted-foreground">{description}</span>
      </span>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </label>
  );
}
