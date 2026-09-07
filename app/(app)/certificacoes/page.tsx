import type { Metadata } from "next";
import { ProviderIndex } from "@/components/certifications/provider-index";
import { plural } from "@/lib/plural";

export const metadata: Metadata = {
  title: "Certificações — AWS Approve",
};

export default function CertificacoesPage() {
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
          Catálogo
        </p>
        <h1 className="text-2xl font-semibold text-foreground">Certificações</h1>
        <p className="text-sm text-muted-foreground">
          Escolha um provedor para ver as certificações dele, da mais fácil à mais difícil.
        </p>
      </header>

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
