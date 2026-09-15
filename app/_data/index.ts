import type { Simulado } from "@/types/simulado";
import { simuladoCloudOpsEngineerAssociate } from "./simulado_cloudops_engineer_associate";
import { simuladoDataEngineerAssociate } from "./simulado_data_engineer_associate";
import { simuladoDeveloperAssociate } from "./simulado_developer_associate";
import { simuladoDevOpsEngineerProfessional } from "./simulado_devops_engineer_professional";
import { simuladoGenerativeAiDeveloperProfessional } from "./simulado_generative_ai_developer_professional";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";
import { simuladoSolutionsArchitectProfessional } from "./simulado_solutions_architect_professional";

export const simulados: Simulado[] = [
  simuladoDeveloperAssociate,
  simuladoCloudOpsEngineerAssociate,
  simuladoDataEngineerAssociate,
  simuladoSecurityEspecialista,
  simuladoSolutionsArchitectProfessional,
  simuladoDevOpsEngineerProfessional,
  simuladoGenerativeAiDeveloperProfessional,
];

export function getSimuladoBySlug(slug: string): Simulado | undefined {
  return simulados.find((simulado) => simulado.slug === slug);
}
