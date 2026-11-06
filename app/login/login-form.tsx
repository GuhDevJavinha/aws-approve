"use client";

import { useActionState } from "react";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { FormField } from "@/components/auth/form-field";
import { FormMessage } from "@/components/auth/form-message";
import { Button } from "@/components/ui/button";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null, newPasswordChallenge: null };

export function LoginForm({ notice }: { notice: string | null }) {
  const [state, formAction, isPending] = useActionState(login, initialState);
  const challenge = state.newPasswordChallenge;

  return (
    <AuthShell
      title={challenge ? "Defina uma nova senha" : "Entrar"}
      footer={
        challenge ? null : (
          <>
            Não tem conta?{" "}
            <Link href="/cadastro" className="font-medium text-foreground hover:underline">
              Criar conta
            </Link>
          </>
        )
      }
    >
      <form action={formAction} className="flex flex-col gap-4">
        {challenge ? (
          <>
            <input type="hidden" name="intent" value="new-password" />
            <input type="hidden" name="email" value={challenge.email} />
            <input type="hidden" name="session" value={challenge.session} />
            <p className="text-sm text-muted-foreground">
              Sua senha é temporária. Defina uma nova senha para continuar.
            </p>
            <FormField id="newPassword" label="Nova senha" type="password" autoComplete="new-password" required />
            <FormField id="confirmPassword" label="Confirmar nova senha" type="password" autoComplete="new-password" required />
          </>
        ) : (
          <>
            <FormField id="email" label="Email" type="email" autoComplete="email" required />
            <FormField id="password" label="Senha" type="password" autoComplete="current-password" required />
            <Link href="/esqueci-senha" className="-mt-2 self-end text-sm text-muted-foreground hover:text-foreground hover:underline">
              Esqueci minha senha
            </Link>
          </>
        )}

        <FormMessage error={state.error} notice={state.error ? null : notice} />
        {state.unconfirmedEmail ? (
          <Link
            href={`/cadastro?email=${encodeURIComponent(state.unconfirmedEmail)}`}
            className="text-sm font-medium text-foreground hover:underline"
          >
            Confirmar minha conta
          </Link>
        ) : null}

        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Enviando…" : challenge ? "Definir nova senha" : "Entrar"}
        </Button>
      </form>
    </AuthShell>
  );
}
