import type { Metadata } from "next";
import { redirect } from "next/navigation";
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
    <div className="mx-auto w-full max-w-xl flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">Conta</p>
        <h1 className="text-2xl font-semibold text-foreground">Minha conta</h1>
        <p className="text-sm text-muted-foreground">
          Conectado como <span className="font-medium text-foreground">{session.email}</span>.
        </p>
      </header>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-foreground">Alterar senha</h2>
        </CardHeader>
        <CardContent>
          <ChangePasswordForm email={session.email} />
        </CardContent>
      </Card>
    </div>
  );
}
