import { getSimuladoBySlug } from "@/_data";
import { certifications, PROVIDER_ORDER } from "@/_data/certifications";
import type {
  Certification,
  CertificationProvider,
  CertificationTier,
  ProviderCounts,
} from "@/types/certification";
import { TIER_LABEL, TIER_ORDER, tierRank } from "./tier-order";

export interface TierGroup {
  tier: CertificationTier;
  label: string;
  certifications: Certification[];
}

export function isCertificationProvider(value: string): value is CertificationProvider {
  return (PROVIDER_ORDER as readonly string[]).includes(value);
}

export function isSimuladoAvailable(certification: Certification): boolean {
  if (!certification.simuladoSlug) return false;
  return getSimuladoBySlug(certification.simuladoSlug) !== undefined;
}

export function sortByDifficulty(list: Certification[]): Certification[] {
  return [...list].sort((a, b) => {
    const byTier = tierRank(a.tier) - tierRank(b.tier);
    if (byTier !== 0) return byTier;

    const byTitle = a.title.localeCompare(b.title, "pt-BR");
    if (byTitle !== 0) return byTitle;

    return a.id.localeCompare(b.id);
  });
}

export function certificationsForProvider(provider: CertificationProvider): Certification[] {
  return sortByDifficulty(certifications.filter((c) => c.provider === provider));
}

export function simuladosForProvider(provider: CertificationProvider): Certification[] {
  return certificationsForProvider(provider).filter(isSimuladoAvailable);
}

export function findCertification(
  provider: CertificationProvider,
  id: string
): Certification | undefined {
  return certifications.find((c) => c.id === id && c.provider === provider);
}

export function groupByTier(list: Certification[]): TierGroup[] {
  const sorted = sortByDifficulty(list);

  return TIER_ORDER.map((tier) => ({
    tier,
    label: TIER_LABEL[tier],
    certifications: sorted.filter((c) => c.tier === tier),
  })).filter((group) => group.certifications.length > 0);
}

export function countsForProvider(provider: CertificationProvider): ProviderCounts {
  return {
    total: certificationsForProvider(provider).length,
    withSimulado: simuladosForProvider(provider).length,
  };
}
