import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "motion/react";
import { useCoarsePointer, usePrefersReducedMotion } from "./use-media-query";

const SPRING = { stiffness: 60, damping: 18, mass: 0.8 };

export function usePointerParallax(strength: number): { x: MotionValue<number>; y: MotionValue<number> } {
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useCoarsePointer();
  const enabled = strength !== 0 && !reducedMotion && !coarsePointer;

  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, SPRING);
  const y = useSpring(targetY, SPRING);

  useEffect(() => {
    if (!enabled) {
      targetX.set(0);
      targetY.set(0);
      return;
    }

    const handlePointerMove = (event: PointerEvent): void => {
      targetX.set((event.clientX / window.innerWidth - 0.5) * 2 * strength);
      targetY.set((event.clientY / window.innerHeight - 0.5) * 2 * strength);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [enabled, strength, targetX, targetY]);

  return { x, y };
}
