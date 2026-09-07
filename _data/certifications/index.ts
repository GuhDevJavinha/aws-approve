import type {
  Certification,
  CertificationProvider,
  ProviderMeta,
} from "@/types/certification";
import { awsCertifications } from "./aws";
import { azureCertifications } from "./azure";
import { gcpCertifications } from "./gcp";
import { githubCertifications } from "./github";

export const PROVIDER_ORDER: readonly CertificationProvider[] = [
  "aws",
  "gcp",
  "azure",
  "github",
] as const;

export const PROVIDER_META: Record<CertificationProvider, ProviderMeta> = {
  aws: {
    id: "aws",
    label: "AWS",
    description: "Certificações da Amazon Web Services, de Cloud Practitioner a Specialty.",
    docsUrl: "https://aws.amazon.com/certification/",
  },
  gcp: {
    id: "gcp",
    label: "Google Cloud",
    description: "Trilha do Google Cloud, de Cloud Digital Leader às Professional.",
    docsUrl: "https://cloud.google.com/learn/certification",
  },
  azure: {
    id: "azure",
    label: "Microsoft Azure",
    description: "Certificações Azure, de Fundamentals a Expert.",
    docsUrl: "https://learn.microsoft.com/en-us/credentials/certifications/",
  },
  github: {
    id: "github",
    label: "GitHub",
    description: "Certificações do GitHub, de Foundations a Advanced Security.",
    docsUrl:
      "https://docs.github.com/en/get-started/showcase-your-expertise-with-github-certifications/about-github-certifications",
  },
};

const CERTIFICATIONS_BY_PROVIDER: Record<CertificationProvider, Certification[]> = {
  aws: awsCertifications,
  gcp: gcpCertifications,
  azure: azureCertifications,
  github: githubCertifications,
};

export const certifications: Certification[] = PROVIDER_ORDER.flatMap(
  (provider) => CERTIFICATIONS_BY_PROVIDER[provider]
);
