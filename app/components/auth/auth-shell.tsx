"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { MONO_LABEL_CLASS } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function AuthShell({ title, children, footer }: { title: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="relative grid min-h-svh bg-background lg:grid-cols-2">
      <div
        aria-hidden
        className="dark absolute inset-0 hidden overflow-hidden bg-background dark:block lg:right-1/2 lg:block lg:border-r lg:border-border"
      >
        <Image
          src="/landing/hero-art.png"
          alt=""
          fill
          loading="eager"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-25 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-transparent via-transparent to-background lg:block" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[radial-gradient(ellipse_at_50%_85%,var(--glow),transparent_60%)] opacity-10 dark:opacity-15 lg:w-1/2"
      />

      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <main className="z-10 flex flex-col items-center justify-center gap-8 px-4 py-14 lg:col-start-2 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center lg:absolute lg:bottom-12 lg:left-12 lg:text-left"
        >
          <h1 className="font-display text-4xl uppercase leading-[0.95] tracking-[-0.02em] text-foreground sm:text-5xl lg:w-min lg:text-6xl lg:text-white xl:text-7xl">
            AWS Approve
          </h1>
          <a
            href="https://www.guhdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs text-muted-foreground transition-colors hover:text-foreground lg:text-white/60 lg:hover:text-white"
          >
            by Gustavo Ribeiro
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-[26rem]"
        >
          <Card className="gap-8 bg-card/80 backdrop-blur-xl [--card-spacing:--spacing(7)] sm:[--card-spacing:--spacing(8)]">
            <CardHeader className="gap-3">
              <p className={cn(MONO_LABEL_CLASS, "text-[10px]")}>Simulados de certificação</p>
              <h2 className="font-display text-3xl tracking-[-0.02em] text-foreground">{title}</h2>
            </CardHeader>
            <CardContent>{children}</CardContent>
            {footer ? <div className="px-(--card-spacing) text-center text-sm text-muted-foreground">{footer}</div> : null}
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
