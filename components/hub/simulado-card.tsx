"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getBestScore } from "@/lib/storage/attempt-storage";
import type { Simulado } from "@/types/simulado";

const emptySubscribe = () => () => {};

export function SimuladoCard({ simulado, index }: { simulado: Simulado; index: number }) {
  const bestScore = useSyncExternalStore(
    emptySubscribe,
    () => getBestScore(simulado.slug),
    () => null
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
            {simulado.examCode}
          </p>
          <h2 className="text-lg font-semibold text-foreground">{simulado.title}</h2>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            {simulado.questions.length} questões no banco · prova oficial com{" "}
            {simulado.examQuestionCount}
          </p>
          {bestScore !== null ? (
            <Badge variant="secondary" className="w-fit">
              Melhor nota: {bestScore}%
            </Badge>
          ) : null}
        </CardContent>
        <CardFooter>
          <Link href={`/exam/${simulado.slug}`} className={buttonVariants({ className: "w-full" })}>
            Fazer simulado
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
