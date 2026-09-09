"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getBestScore } from "@/lib/storage/attempt-storage";
import type { Certification } from "@/types/certification";

const emptySubscribe = () => () => {};

export function CertificationCard({
  certification,
  href,
  isAvailable,
  showStudyLink,
  index,
}: {
  certification: Certification;
  href: string;
  isAvailable: boolean;
  showStudyLink: boolean;
  index: number;
}) {
  const bestScore = useSyncExternalStore(
    emptySubscribe,
    () => (isAvailable && certification.simuladoSlug ? getBestScore(certification.simuladoSlug) : null),
    () => null
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(index, 8) * 0.04 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          {certification.code ? (
            <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
              {certification.code}
            </p>
          ) : null}
          <h3 className="text-base font-semibold text-foreground">{certification.title}</h3>
        </CardHeader>
        <CardContent className="flex-1 flex flex-wrap items-start gap-2">
          {isAvailable ? null : <Badge variant="secondary">Em breve</Badge>}
          {bestScore === null ? null : (
            <Badge variant="secondary">Melhor nota: {bestScore}%</Badge>
          )}
        </CardContent>
        <CardFooter className="flex-col items-stretch gap-2">
          <Link href={href} className={buttonVariants({ size: "lg" })}>
            {isAvailable ? "Ver simulado" : "Ver detalhes"}
            <ArrowRight className="size-4" />
          </Link>
          {showStudyLink ? (
            <a
              href={certification.studyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <BookOpen className="size-4" />
              Estudar na doc
            </a>
          ) : null}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
