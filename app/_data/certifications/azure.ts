import type { Certification } from "@/types/certification";

// Verificado em 2026-09-06: cada entrada tem página oficial confirmada em
// learn.microsoft.com/en-us/credentials/certifications/<slug>. A página-índice
// da Microsoft é renderizada por JS, então esta lista é um subconjunto
// verificado — não uma enumeração garantidamente exaustiva.
// Fora da lista por aposentadoria recente:
//   AZ-500 Azure Security Engineer Associate — aposentado em 2026-08-31
//   AZ-204 Azure Developer Associate — aposentado em 2026-07-31

const CREDENTIALS = "https://learn.microsoft.com/en-us/credentials/certifications";

export const azureCertifications: Certification[] = [
  {
    id: "azure-ai-900",
    provider: "azure",
    code: "AI-900",
    title: "Microsoft Certified: Azure AI Fundamentals",
    tier: "foundational",
    studyUrl: `${CREDENTIALS}/azure-ai-fundamentals/`,
  },
  {
    id: "azure-az-900",
    provider: "azure",
    code: "AZ-900",
    title: "Microsoft Certified: Azure Fundamentals",
    tier: "foundational",
    studyUrl: `${CREDENTIALS}/azure-fundamentals/`,
  },
  {
    id: "azure-dp-900",
    provider: "azure",
    code: "DP-900",
    title: "Microsoft Certified: Azure Data Fundamentals",
    tier: "foundational",
    studyUrl: `${CREDENTIALS}/azure-data-fundamentals/`,
  },
  {
    id: "azure-az-104",
    provider: "azure",
    code: "AZ-104",
    title: "Microsoft Certified: Azure Administrator Associate",
    tier: "associate",
    studyUrl: `${CREDENTIALS}/azure-administrator/`,
  },
  {
    id: "azure-az-700",
    provider: "azure",
    code: "AZ-700",
    title: "Microsoft Certified: Azure Network Engineer Associate",
    tier: "associate",
    studyUrl: `${CREDENTIALS}/azure-network-engineer-associate/`,
  },
  {
    id: "azure-az-305",
    provider: "azure",
    code: "AZ-305",
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    tier: "expert",
    studyUrl: `${CREDENTIALS}/azure-solutions-architect/`,
  },
  {
    id: "azure-az-400",
    provider: "azure",
    code: "AZ-400",
    title: "Microsoft Certified: DevOps Engineer Expert",
    tier: "expert",
    studyUrl: `${CREDENTIALS}/devops-engineer/`,
  },
];
