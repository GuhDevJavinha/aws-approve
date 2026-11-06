"use client";

import { useActionState } from "react";
import Link from "next/link";
import { FormField } from "@/components/auth/form-field";
import { FormMessage } from "@/components/auth/form-message";
import { Button } from "@/components/ui/button";
import { PASSWORD_HINT } from "@/lib/auth/password-rules";
import { changePasswordAction, type ChangePasswordState } from "./actions";

export function ChangePasswordForm({ email }: { email: string }) {
  const [state, formAction, isPending] = useActionState(changePasswordAction, {
    error: null,
    notice: null,
  } satisfies ChangePasswordState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <FormField id="currentPassword" label="Senha atual" type="password" autoComplete="current-password" required />
      <FormField id="newPassword" label="Nova senha" type="password" autoComplete="new-password" hint={PASSWORD_HINT} required />
      <FormField id="confirmPassword" label="Confirmar nova senha" type="password" autoComplete="new-password" required />

      <FormMessage error={state.error} notice={state.notice} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button type="submit" disabled={isPending}>
          {isPending ? "Salvando…" : "Alterar senha"}
        </Button>
        <Link
          href={`/esqueci-senha?email=${encodeURIComponent(email)}`}
          className="text-sm text-muted-foreground hover:text-foreground hover:underline"
        >
          Esqueceu a senha atual?
        </Link>
      </div>
    </form>
  );
}
