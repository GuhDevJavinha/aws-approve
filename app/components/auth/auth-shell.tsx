"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export function AuthShell({ title, children, footer }: { title: string; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground">AWS Approve</h1>
          <a
            href="https://www.guhdev.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block text-sm text-muted-foreground hover:text-foreground"
          >
            by Gustavo Ribeiro
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
          className="w-full"
        >
          <Card>
            <CardHeader>
              <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
                AWS Certification · Exame de prática
              </p>
              <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
          {footer ? <div className="mt-4 text-center text-sm text-muted-foreground">{footer}</div> : null}
        </motion.div>
      </div>
    </div>
  );
}
