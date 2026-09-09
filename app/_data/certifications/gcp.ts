import type { Certification } from "@/types/certification";

// Verificado em 2026-09-06: cada entrada tem página oficial confirmada em
// cloud.google.com/learn/certification/<slug>. A página-índice do Google é
// renderizada por JS e não pôde ser lida por completo, então esta lista é um
// subconjunto verificado — não uma enumeração garantidamente exaustiva.
// O Google não publica códigos de exame, por isso `code` é vazio.

const LEARN = "https://cloud.google.com/learn/certification";

export const gcpCertifications: Certification[] = [
  {
    id: "gcp-cloud-digital-leader",
    provider: "gcp",
    code: "",
    title: "Cloud Digital Leader",
    tier: "foundational",
    studyUrl: `${LEARN}/cloud-digital-leader`,
  },
  {
    id: "gcp-associate-cloud-engineer",
    provider: "gcp",
    code: "",
    title: "Associate Cloud Engineer",
    tier: "associate",
    studyUrl: `${LEARN}/cloud-engineer`,
  },
  {
    id: "gcp-professional-cloud-architect",
    provider: "gcp",
    code: "",
    title: "Professional Cloud Architect",
    tier: "professional",
    studyUrl: `${LEARN}/cloud-architect`,
  },
  {
    id: "gcp-professional-cloud-database-engineer",
    provider: "gcp",
    code: "",
    title: "Professional Cloud Database Engineer",
    tier: "professional",
    studyUrl: `${LEARN}/cloud-database-engineer`,
  },
  {
    id: "gcp-professional-cloud-developer",
    provider: "gcp",
    code: "",
    title: "Professional Cloud Developer",
    tier: "professional",
    studyUrl: `${LEARN}/cloud-developer`,
  },
  {
    id: "gcp-professional-cloud-devops-engineer",
    provider: "gcp",
    code: "",
    title: "Professional Cloud DevOps Engineer",
    tier: "professional",
    studyUrl: `${LEARN}/cloud-devops-engineer`,
  },
  {
    id: "gcp-professional-cloud-network-engineer",
    provider: "gcp",
    code: "",
    title: "Professional Cloud Network Engineer",
    tier: "professional",
    studyUrl: `${LEARN}/cloud-network-engineer`,
  },
  {
    id: "gcp-professional-cloud-security-engineer",
    provider: "gcp",
    code: "",
    title: "Professional Cloud Security Engineer",
    tier: "professional",
    studyUrl: `${LEARN}/cloud-security-engineer`,
  },
  {
    id: "gcp-professional-data-engineer",
    provider: "gcp",
    code: "",
    title: "Professional Data Engineer",
    tier: "professional",
    studyUrl: `${LEARN}/data-engineer`,
  },
  {
    id: "gcp-professional-machine-learning-engineer",
    provider: "gcp",
    code: "",
    title: "Professional Machine Learning Engineer",
    tier: "professional",
    studyUrl: `${LEARN}/machine-learning-engineer`,
  },
];
