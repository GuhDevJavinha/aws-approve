import { notFound } from "next/navigation";
import { PROVIDER_META } from "@/_data/certifications";
import { CertificationGrid } from "@/components/certifications/certification-grid";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { certificationsForProvider, isCertificationProvider } from "@/lib/certifications/catalog";
import { plural } from "@/lib/plural";

export default async function ProviderCertificationsPage(
  props: PageProps<"/certificacoes/[provider]">
) {
  const { provider } = await props.params;
  if (!isCertificationProvider(provider)) notFound();

  const meta = PROVIDER_META[provider];
  const list = certificationsForProvider(provider);

  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-6">
      <Breadcrumb
        crumbs={[{ label: "Certificações", href: "/certificacoes" }, { label: meta.label }]}
      />

      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-foreground">Certificações {meta.label}</h1>
        <p className="text-sm text-muted-foreground">
          {plural(list.length, "certificação", "certificações")}, da mais fácil à mais difícil.
        </p>
      </header>

      <CertificationGrid
        certifications={list}
        showStudyLink
        emptyState={
          <p className="text-sm text-muted-foreground">
            Nenhuma certificação cadastrada para {meta.label} ainda.
          </p>
        }
      />
    </div>
  );
}
