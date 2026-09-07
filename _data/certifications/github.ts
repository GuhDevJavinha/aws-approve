import type { Certification } from "@/types/certification";

// Verificado em 2026-09-06 contra a documentação oficial do GitHub:
// https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications
// O GitHub não publica códigos de exame nem níveis oficiais, e não mantém uma
// página por certificação — todas apontam para o mesmo documento.
//
// O `tier` de cada uma é decisão editorial nossa, para servir a ordenação
// fácil → difícil: Foundations e Copilot como entrada, Actions como
// intermediária, Administration e Advanced Security como avançadas. Se o
// GitHub publicar níveis próprios, é este mapeamento que deve mudar.

const DOCS =
  "https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications";

export const githubCertifications: Certification[] = [
  {
    id: "github-foundations",
    provider: "github",
    code: "",
    title: "GitHub Foundations",
    tier: "foundational",
    studyUrl: DOCS,
  },
  {
    id: "github-copilot",
    provider: "github",
    code: "",
    title: "GitHub Copilot",
    tier: "foundational",
    studyUrl: DOCS,
  },
  {
    id: "github-actions",
    provider: "github",
    code: "",
    title: "GitHub Actions",
    tier: "associate",
    studyUrl: DOCS,
  },
  {
    id: "github-administration",
    provider: "github",
    code: "",
    title: "GitHub Administration",
    tier: "professional",
    studyUrl: DOCS,
  },
  {
    id: "github-advanced-security",
    provider: "github",
    code: "",
    title: "GitHub Advanced Security",
    tier: "professional",
    studyUrl: DOCS,
  },
];
