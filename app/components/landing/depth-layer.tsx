"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactElement, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "./use-media-query";

type DepthLayerProps = { children: ReactNode; travel: number; className?: string };

export function DepthLayer({ children, travel, className }: DepthLayerProps): ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-travel}%`, `${travel}%`]);

  return (
    <div ref={ref} className={cn("absolute inset-0", className)}>
      <motion.div className="relative size-full" style={reducedMotion ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
