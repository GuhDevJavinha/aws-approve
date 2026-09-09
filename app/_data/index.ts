import type { Simulado } from "@/types/simulado";
import { simuladoDeveloperAssociate } from "./simulado_developer_associate";
import { simuladoDevOpsEngineerProfessional } from "./simulado_devops_engineer_professional";
import { simuladoGenerativeAiDeveloperProfessional } from "./simulado_generative_ai_developer_professional";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";
import { simuladoSolutionsArchitectProfessional } from "./simulado_solutions_architect_professional";

export const simulados: Simulado[] = [
  simuladoDeveloperAssociate,
  simuladoSecurityEspecialista,
  simuladoSolutionsArchitectProfessional,
  simuladoDevOpsEngineerProfessional,
  simuladoGenerativeAiDeveloperProfessional,
];

export function getSimuladoBySlug(slug: string): Simulado | undefined {
  return simulados.find((simulado) => simulado.slug === slug);
}
