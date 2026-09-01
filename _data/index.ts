import type { Simulado } from "@/types/simulado";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";

export const simulados: Simulado[] = [simuladoSecurityEspecialista];

export function getSimuladoBySlug(slug: string): Simulado | undefined {
  return simulados.find((simulado) => simulado.slug === slug);
}
