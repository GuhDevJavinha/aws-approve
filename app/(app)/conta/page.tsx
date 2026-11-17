import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getSession } from "@/lib/auth/dal";
import { ChangePasswordForm } from "./change-password-form";

export const metadata: Metadata = {
  title: "Minha conta — AWS Approve",
};

export default async function ContaPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="mx-auto w-full max-w-xl flex flex-col gap-8">
      <PageHeader eyebrow="Conta" title="Minha conta">
        Conectado como <span className="font-medium text-foreground">{session.email}</span>.
      </PageHeader>

      <Card className="gap-6 [--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
        <CardHeader>
          <h2 className="font-display text-lg tracking-[-0.02em] text-foreground">Alterar senha</h2>
        </CardHeader>
        <CardContent>
          <ChangePasswordForm email={session.email} />
        </CardContent>
      </Card>
    </div>
  );
}
