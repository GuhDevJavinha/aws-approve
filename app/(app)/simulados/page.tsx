import type { Metadata } from "next";
import { ProviderIndex } from "@/components/certifications/provider-index";
import { plural } from "@/lib/plural";

export const metadata: Metadata = {
  title: "Simulados — AWS Approve",
};

export default function SimuladosPage() {
  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
          Praticar
        </p>
        <h1 className="text-2xl font-semibold text-foreground">Simulados</h1>
        <p className="text-sm text-muted-foreground">
          Escolha um provedor para ver os simulados prontos para fazer.
        </p>
      </header>

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
