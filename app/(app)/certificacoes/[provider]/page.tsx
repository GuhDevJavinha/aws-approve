import { notFound } from "next/navigation";
import { PROVIDER_META } from "@/_data/certifications";
import { CertificationGrid } from "@/components/certifications/certification-grid";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { PageHeader } from "@/components/page-header";
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
    <div className="mx-auto max-w-6xl flex flex-col gap-8">
      <Breadcrumb
        crumbs={[{ label: "Certificações", href: "/certificacoes" }, { label: meta.label }]}
      />

      <PageHeader title={`Certificações ${meta.label}`}>
        {plural(list.length, "certificação", "certificações")}, da mais fácil à mais difícil.
      </PageHeader>

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
