"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { BookOpen, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getBestScore } from "@/lib/storage/attempt-storage";
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
    <Card className="max-w-2xl">
      <CardHeader>
        <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
          {certification.code || "Simulado"}
        </p>
        <h2 className="text-xl font-semibold text-foreground">{certification.title}</h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <dl className="grid gap-3 sm:grid-cols-2">
          <Fact label="Banco de questões" value={`${bankSize} questões`} />
          <Fact label="Prova oficial" value={`${examQuestionCount} questões`} />
          <Fact label="Duração oficial" value={`${examDurationMinutes} min`} />
          <Fact label="Nota de aprovação" value={`${passingScore}%`} />
        </dl>
        {bestScore === null ? null : (
          <Badge variant="secondary" className="w-fit">
            Melhor nota: {bestScore}%
          </Badge>
        )}
      </CardContent>
      <CardFooter className="flex-wrap gap-2">
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
    <div>
      <dt className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
        {label}
      </dt>
      <dd className="text-sm text-foreground">{value}</dd>
    </div>
  );
}
