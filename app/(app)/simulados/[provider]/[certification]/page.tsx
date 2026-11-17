import { notFound } from "next/navigation";
import { PROVIDER_META } from "@/_data/certifications";
import { Breadcrumb } from "@/components/nav/breadcrumb";
import { NoSimulado } from "@/components/simulados/no-simulado";
import { SimuladoSummary } from "@/components/simulados/simulado-summary";
import { findCertification, isCertificationProvider } from "@/lib/certifications/catalog";
import { getSimuladoMeta } from "@/lib/dynamodb/simulados";
import { getPassingScore } from "@/lib/exam/constants";

export default async function SimuladoPage(
  props: PageProps<"/simulados/[provider]/[certification]">
) {
  const { provider, certification: certificationId } = await props.params;
  if (!isCertificationProvider(provider)) notFound();

  const certification = findCertification(provider, certificationId);
  if (!certification) notFound();

  const meta = PROVIDER_META[provider];
  const simulado = certification.simuladoSlug
    ? await getSimuladoMeta(certification.simuladoSlug)
    : undefined;

  return (
    <div className="mx-auto max-w-6xl flex flex-col gap-8">
      <Breadcrumb
        crumbs={[
          { label: "Simulados", href: "/simulados" },
          { label: meta.label, href: `/simulados/${provider}` },
          { label: certification.code || certification.title },
        ]}
      />

      {simulado ? (
        <SimuladoSummary
          certification={certification}
          simuladoSlug={simulado.simuladoSlug}
          bankSize={simulado.questionCount}
          examQuestionCount={simulado.examQuestionCount}
          examDurationMinutes={simulado.examDurationMinutes}
          passingScore={getPassingScore(simulado)}
        />
      ) : (
        <NoSimulado certification={certification} providerLabel={meta.label} />
      )}
    </div>
  );
}
