import { PROVIDER_META, PROVIDER_ORDER } from "@/_data/certifications";
import { countsForProvider } from "@/lib/certifications/catalog";
import type { ProviderCounts } from "@/types/certification";
import { ProviderCard } from "./provider-card";

export function ProviderIndex({
  basePath,
  summarize,
}: {
  basePath: string;
  summarize: (counts: ProviderCounts) => { countLabel: string; isEmpty: boolean };
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {PROVIDER_ORDER.map((provider) => {
        const { countLabel, isEmpty } = summarize(countsForProvider(provider));

        return (
          <ProviderCard
            key={provider}
            provider={PROVIDER_META[provider]}
            href={`${basePath}/${provider}`}
            countLabel={countLabel}
            isEmpty={isEmpty}
          />
        );
      })}
    </div>
  );
}
