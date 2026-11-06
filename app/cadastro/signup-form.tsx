"use client";

import { useActionState } from "react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormField } from "@/components/auth/form-field";
import { FormMessage } from "@/components/auth/form-message";
import { Button } from "@/components/ui/button";
import { PASSWORD_HINT } from "@/lib/auth/password-rules";
import { signUpAction, type SignUpState } from "./actions";

export function SignUpForm({ confirmEmail }: { confirmEmail: string | null }) {
  const [state, formAction, isPending] = useActionState(signUpAction, {
    error: null,
    notice: null,
    pendingEmail: confirmEmail,
  } satisfies SignUpState);
  const pendingEmail = state.pendingEmail;

  return (
    <AuthShell
      title={pendingEmail ? "Confirme seu email" : "Criar conta"}
      footer={
        <>
          Já tem conta?{" "}
          <Link href="/login" className="font-medium text-foreground hover:underline">
            Entrar
          </Link>
        </>
      }
    >
      <form action={formAction} className="flex flex-col gap-4">
        {pendingEmail ? (
          <>
            <input type="hidden" name="email" value={pendingEmail} />
            <p className="text-sm text-muted-foreground">
              Digite o código que enviamos para <span className="font-medium text-foreground">{pendingEmail}</span>.
            </p>
            <FormField id="code" label="Código de confirmação" inputMode="numeric" autoComplete="one-time-code" required />
          </>
        ) : (
          <>
            <FormField id="email" label="Email" type="email" autoComplete="email" required />
            <FormField id="password" label="Senha" type="password" autoComplete="new-password" hint={PASSWORD_HINT} required />
            <FormField id="confirmPassword" label="Confirmar senha" type="password" autoComplete="new-password" required />
          </>
        )}

        <FormMessage error={state.error} notice={state.notice} />

        <Button type="submit" name="intent" value={pendingEmail ? "confirm" : "signup"} disabled={isPending} className="w-full">
          {isPending ? "Enviando…" : pendingEmail ? "Confirmar conta" : "Criar conta"}
        </Button>
        {pendingEmail ? (
          <Button type="submit" name="intent" value="resend" variant="ghost" formNoValidate disabled={isPending}>
            Reenviar código
          </Button>
        ) : null}
      </form>
    </AuthShell>
  );
}
