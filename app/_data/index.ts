import type { Simulado } from "@/types/simulado";
import { simuladoAiPractitioner } from "./simulado_ai_practitioner";
import { simuladoCloudOpsEngineerAssociate } from "./simulado_cloudops_engineer_associate";
import { simuladoDataEngineerAssociate } from "./simulado_data_engineer_associate";
import { simuladoDeveloperAssociate } from "./simulado_developer_associate";
import { simuladoDevOpsEngineerProfessional } from "./simulado_devops_engineer_professional";
import { simuladoGenerativeAiDeveloperProfessional } from "./simulado_generative_ai_developer_professional";
import { simuladoGithubActions } from "./simulado_github_actions";
import { simuladoGithubAdministration } from "./simulado_github_administration";
import { simuladoGithubAdvancedSecurity } from "./simulado_github_advanced_security";
import { simuladoGithubCopilot } from "./simulado_github_copilot";
import { simuladoGithubFoundations } from "./simulado_github_foundations";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";
import { simuladoSolutionsArchitectProfessional } from "./simulado_solutions_architect_professional";

export const simulados: Simulado[] = [
  simuladoAiPractitioner,
  simuladoDeveloperAssociate,
  simuladoCloudOpsEngineerAssociate,
  simuladoDataEngineerAssociate,
  simuladoSecurityEspecialista,
  simuladoSolutionsArchitectProfessional,
  simuladoDevOpsEngineerProfessional,
  simuladoGenerativeAiDeveloperProfessional,
  simuladoGithubFoundations,
  simuladoGithubCopilot,
  simuladoGithubActions,
  simuladoGithubAdministration,
  simuladoGithubAdvancedSecurity,
];

export function getSimuladoBySlug(slug: string): Simulado | undefined {
  return simulados.find((simulado) => simulado.slug === slug);
}
