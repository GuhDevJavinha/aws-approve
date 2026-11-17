"use client";

import { motion } from "motion/react";
import type { ReactElement, ReactNode } from "react";
import { usePointerParallax } from "./use-pointer-parallax";

type PointerLayerProps = { children: ReactNode; strength: number; className?: string };

export function PointerLayer({ children, strength, className }: PointerLayerProps): ReactElement {
  const { x, y } = usePointerParallax(strength);

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}
