"use client";

import { useActionState } from "react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormField } from "@/components/auth/form-field";
import { FormMessage } from "@/components/auth/form-message";
import { Button } from "@/components/ui/button";
import { PASSWORD_HINT } from "@/lib/auth/password-rules";
import { forgotPasswordAction, type ForgotPasswordState } from "./actions";

export function ForgotPasswordForm({ initialEmail }: { initialEmail: string }) {
  const [state, formAction, isPending] = useActionState(forgotPasswordAction, {
    error: null,
    notice: null,
    pendingEmail: null,
  } satisfies ForgotPasswordState);
  const pendingEmail = state.pendingEmail;

  return (
    <AuthShell
      title="Redefinir senha"
      footer={
        <Link href="/login" className="font-medium text-foreground hover:underline">
          Voltar para o login
        </Link>
      }
    >
      <form action={formAction} className="flex flex-col gap-4">
        {pendingEmail ? (
          <>
            <input type="hidden" name="email" value={pendingEmail} />
            <FormField id="code" label="Código recebido por email" inputMode="numeric" autoComplete="one-time-code" required />
            <FormField id="newPassword" label="Nova senha" type="password" autoComplete="new-password" hint={PASSWORD_HINT} required />
            <FormField id="confirmPassword" label="Confirmar nova senha" type="password" autoComplete="new-password" required />
          </>
        ) : (
          <>
            <p className="text-sm text-muted-foreground">Informe seu email e enviaremos um código para criar uma nova senha.</p>
            <FormField id="email" label="Email" type="email" autoComplete="email" defaultValue={initialEmail} required />
          </>
        )}

        <FormMessage error={state.error} notice={state.notice} />

        <Button type="submit" name="intent" value={pendingEmail ? "reset" : "request"} disabled={isPending} className="w-full">
          {isPending ? "Enviando…" : pendingEmail ? "Redefinir senha" : "Enviar código"}
        </Button>
        {pendingEmail ? (
          <Button type="submit" name="intent" value="request" variant="ghost" formNoValidate disabled={isPending}>
            Reenviar código
          </Button>
        ) : null}
      </form>
    </AuthShell>
  );
}
