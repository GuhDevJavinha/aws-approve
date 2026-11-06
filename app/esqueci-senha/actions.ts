"use server";

import { redirect } from "next/navigation";
import { confirmForgotPassword, forgotPassword } from "@/lib/auth/cognito";
import { cognitoErrorMessage } from "@/lib/auth/cognito-error-message";
import { passwordsMismatch } from "@/lib/auth/password-rules";

export interface ForgotPasswordState {
  error: string | null;
  notice: string | null;
  pendingEmail: string | null;
}

export async function forgotPasswordAction(
  _prevState: ForgotPasswordState,
  formData: FormData
): Promise<ForgotPasswordState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (formData.get("intent") === "reset") {
    if (passwordsMismatch(formData, "newPassword", "confirmPassword")) {
      return { error: "As senhas não coincidem.", notice: null, pendingEmail: email };
    }
    const code = String(formData.get("code") ?? "").trim();
    const newPassword = String(formData.get("newPassword") ?? "");
    const error = await cognitoErrorMessage(() => confirmForgotPassword(email, code, newPassword));
    if (error) return { error, notice: null, pendingEmail: email };
    redirect("/login?aviso=senha-redefinida");
  }

  const error = await cognitoErrorMessage(() => forgotPassword(email));
  if (error) return { error, notice: null, pendingEmail: null };
  return {
    error: null,
    notice: `Se existir uma conta para ${email}, enviamos um código para redefinir a senha.`,
    pendingEmail: email,
  };
}
