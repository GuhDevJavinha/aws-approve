import Link from "next/link";
import { notFound } from "next/navigation";
import { PROVIDER_META } from "@/_data/certifications";
import { CertificationGrid } from "@/components/certifications/certification-grid";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { PageHeader } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { isCertificationProvider, simuladosForProvider } from "@/lib/certifications/catalog";
import { plural } from "@/lib/plural";

export default async function ProviderSimuladosPage(props: PageProps<"/simulados/[provider]">) {
  const { provider } = await props.params;
  if (!isCertificationProvider(provider)) notFound();

  const meta = PROVIDER_META[provider];
  const list = simuladosForProvider(provider);

  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-8">
      <Breadcrumb crumbs={[{ label: "Simulados", href: "/simulados" }, { label: meta.label }]} />

      <PageHeader title={`Simulados ${meta.label}`}>
        {plural(list.length, "simulado disponível", "simulados disponíveis")}, do mais fácil ao
        mais difícil.
      </PageHeader>

      <CertificationGrid
        certifications={list}
        showStudyLink={false}
        emptyState={
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-muted-foreground">
              Nenhum simulado {meta.label} está pronto ainda. O catálogo de certificações já lista
              as provas do provedor e os links de estudo.
            </p>
            <Link
              href={`/certificacoes/${provider}`}
              className={buttonVariants({ variant: "outline" })}
            >
              Ver certificações {meta.label}
            </Link>
          </div>
        }
      />
    </div>
  );
}
