"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { BookOpen, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getBestScore } from "@/lib/storage/attempt-storage";
import { MONO_LABEL_CLASS } from "@/lib/styles";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types/certification";

const emptySubscribe = () => () => {};

export function SimuladoSummary({
  certification,
  simuladoSlug,
  bankSize,
  examQuestionCount,
  examDurationMinutes,
  passingScore,
}: {
  certification: Certification;
  simuladoSlug: string;
  bankSize: number;
  examQuestionCount: number;
  examDurationMinutes: number;
  passingScore: number;
}) {
  const bestScore = useSyncExternalStore(
    emptySubscribe,
    () => getBestScore(simuladoSlug),
    () => null
  );

  return (
    <Card className="max-w-2xl gap-6 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
      <CardHeader className="gap-3">
        <p className={cn(MONO_LABEL_CLASS, "w-fit rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px]")}>
          {certification.code || "Simulado"}
        </p>
        <h2 className="font-display text-2xl leading-tight tracking-[-0.02em] text-foreground">
          {certification.title}
        </h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <dl className="grid gap-3 sm:grid-cols-2">
          <Fact label="Banco de questões" value={`${bankSize} questões`} />
          <Fact label="Prova oficial" value={`${examQuestionCount} questões`} />
          <Fact label="Duração oficial" value={`${examDurationMinutes} min`} />
          <Fact label="Nota de aprovação" value={`${passingScore}%`} />
        </dl>
        {bestScore === null ? null : (
          <Badge variant="secondary" className="w-fit font-mono">
            Melhor nota: {bestScore}%
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex-wrap gap-3 border-0 bg-transparent pt-0">
        <Link href={`/exam/${simuladoSlug}`} className={buttonVariants({ size: "lg" })}>
          <Play className="size-4" />
          Configurar e iniciar
        </Link>
        <a
          href={certification.studyUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          <BookOpen className="size-4" />
          Estudar na doc
        </a>
      </CardFooter>
    </Card>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/50 px-4 py-3.5">
      <dt className={cn(MONO_LABEL_CLASS, "text-[10px]")}>{label}</dt>
      <dd className="mt-1.5 font-display text-lg tracking-[-0.02em] text-foreground">{value}</dd>
    </div>
  );
}
