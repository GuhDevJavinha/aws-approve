import type { Simulado } from "@/types/simulado";
import { simuladoDevOpsEngineerProfessional } from "./simulado_devops_engineer_professional";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";
import { simuladoSolutionsArchitectProfessional } from "./simulado_solutions_architect_professional";

export const simulados: Simulado[] = [
  simuladoSecurityEspecialista,
  simuladoSolutionsArchitectProfessional,
  simuladoDevOpsEngineerProfessional,
];

export function getSimuladoBySlug(slug: string): Simulado | undefined {
  return simulados.find((simulado) => simulado.slug === slug);
}
