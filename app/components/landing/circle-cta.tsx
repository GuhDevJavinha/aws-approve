"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "./use-media-query";
import { usePointerParallax } from "./use-pointer-parallax";

type CircleCtaProps = { parallax?: number; className?: string };

const HALOS = [
  { sizeClass: "size-[calc(var(--d)*2.1)] bg-glow/10", delay: 0.8 },
  { sizeClass: "size-[calc(var(--d)*1.7)] bg-glow/30", delay: 0 },
] as const;

export function CircleCta({ parallax = 0, className }: CircleCtaProps): ReactElement {
  const { x, y } = usePointerParallax(parallax);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      style={{ x, y }}
      className={cn("relative grid size-[calc(var(--d)*1.4)] place-items-center [--d:108px] md:[--d:140px]", className)}
    >
      {HALOS.map((halo) => (
        <motion.span
          key={halo.sizeClass}
          aria-hidden="true"
          className={cn("absolute inset-0 m-auto rounded-full", halo.sizeClass)}
          animate={reducedMotion ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 5, delay: halo.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-glow" />
      <Link
        href="/cadastro"
        className="relative grid size-(--d) place-items-center rounded-full bg-[#f4f1fa] px-5 text-center font-display text-sm leading-tight font-semibold text-balance text-[#1a0b2e] outline-none transition-transform duration-300 hover:scale-105 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050d] motion-reduce:transition-none motion-reduce:hover:scale-100 md:text-base"
      >
        Criar conta
      </Link>
    </motion.div>
  );
}
