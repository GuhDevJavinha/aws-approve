export type CertificationProvider = "aws" | "gcp" | "azure" | "github";

export type CertificationTier =
  | "business"
  | "foundational"
  | "associate"
  | "professional"
  | "expert"
  | "specialty";

export interface Certification {
  id: string;
  provider: CertificationProvider;
  code: string;
  title: string;
  tier: CertificationTier;
  studyUrl: string;
  simuladoSlug?: string;
}

export interface ProviderMeta {
  id: CertificationProvider;
  label: string;
  description: string;
  docsUrl: string;
}

export interface ProviderCounts {
  total: number;
  withSimulado: number;
}
