"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getBestScore } from "@/lib/storage/attempt-storage";
import { MONO_LABEL_CLASS } from "@/lib/styles";
import { cn } from "@/lib/utils";
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
      <Card className="relative h-full gap-5 transition-colors [--card-spacing:--spacing(5)] hover:ring-primary/50 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
        <CardHeader className="gap-3">
          <div className="flex min-h-6 items-center justify-between gap-2">
            {certification.code ? (
              <span className={cn(MONO_LABEL_CLASS, "rounded-md border border-border bg-secondary px-2 py-0.5 text-[10px]")}>
                {certification.code}
              </span>
            ) : null}
            {showStudyLink ? (
              <a
                href={certification.studyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="relative z-10 ml-auto inline-flex items-center gap-1 rounded-sm text-xs text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                Estudar na doc
                <ExternalLink className="size-3" />
              </a>
            ) : null}
          </div>
          <h3 className="font-display text-[0.95rem] leading-snug tracking-[-0.01em] text-foreground">
            {certification.title}
          </h3>
        </CardHeader>
        <CardContent className="flex flex-1 flex-wrap items-start gap-2">
          {isAvailable ? null : (
            <Badge variant="secondary" className="font-mono">
              Em breve
            </Badge>
          )}
          {bestScore === null ? null : (
            <Badge variant="secondary" className="font-mono">
              Melhor nota: {bestScore}%
            </Badge>
          )}
        </CardContent>
        <CardFooter className="border-0 bg-transparent pt-0">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary outline-none after:absolute after:inset-0 dark:text-glow"
          >
            {isAvailable ? "Ver simulado" : "Ver detalhes"}
            <ArrowRight className="size-4 transition-transform group-hover/card:translate-x-0.5" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
