import type { Metadata } from "next";
import { ProviderIndex } from "@/components/certifications/provider-index";
import { PageHeader } from "@/components/page-header";
import { plural } from "@/lib/plural";

export const metadata: Metadata = {
  title: "Simulados — AWS Approve",
};

export default function SimuladosPage() {
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-8">
      <PageHeader eyebrow="Praticar" title="Simulados">
        Escolha um provedor para ver os simulados prontos para fazer.
      </PageHeader>

      <ProviderIndex
        basePath="/simulados"
        summarize={(counts) => ({
          countLabel: plural(counts.withSimulado, "simulado", "simulados"),
          isEmpty: counts.withSimulado === 0,
        })}
      />
    </div>
  );
}
