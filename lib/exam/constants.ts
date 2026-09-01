import type { Simulado } from "@/types/simulado";

export const DEFAULT_PASSING_SCORE = 72;

export function getPassingScore(simulado: Simulado): number {
  return simulado.passingScore ?? DEFAULT_PASSING_SCORE;
}
