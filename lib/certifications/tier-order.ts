import type { CertificationTier } from "@/types/certification";

export const TIER_ORDER: readonly CertificationTier[] = [
  "business",
  "foundational",
  "associate",
  "professional",
  "expert",
  "specialty",
] as const;

export const TIER_LABEL: Record<CertificationTier, string> = {
  business: "Negócios",
  foundational: "Fundamental",
  associate: "Associate",
  professional: "Professional",
  expert: "Expert",
  specialty: "Specialty",
};

export function tierRank(tier: CertificationTier): number {
  return TIER_ORDER.indexOf(tier);
}
