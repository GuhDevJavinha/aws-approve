import type { Metadata } from "next";
import { ProviderIndex } from "@/components/certifications/provider-index";
import { PageHeader } from "@/components/page-header";
import { plural } from "@/lib/plural";

export const metadata: Metadata = {
  title: "Certificações — AWS Approve",
};

export default function CertificacoesPage() {
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-8">
      <PageHeader eyebrow="Catálogo" title="Certificações">
        Escolha um provedor para ver as certificações dele, da mais fácil à mais difícil.
      </PageHeader>

      <ProviderIndex
        basePath="/certificacoes"
        summarize={(counts) => ({
          countLabel: `${plural(counts.total, "certificação", "certificações")} · ${
            counts.withSimulado
          } com simulado`,
          isEmpty: counts.total === 0,
        })}
      />
    </div>
  );
}
