import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/dal";
import { getSimuladoBySlug } from "@/lib/dynamodb/simulados";
import { ExamRunner } from "@/components/exam/exam-runner";

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { slug } = await params;
  const simulado = await getSimuladoBySlug(slug);
  if (!simulado) notFound();

  return <ExamRunner simulado={simulado} />;
}
