"use server";

import { redirect } from "next/navigation";
import { confirmSignUp, resendConfirmationCode, signUp } from "@/lib/auth/cognito";
import { cognitoErrorMessage } from "@/lib/auth/cognito-error-message";
import { passwordsMismatch } from "@/lib/auth/password-rules";

export interface SignUpState {
  error: string | null;
  notice: string | null;
  pendingEmail: string | null;
}

export async function signUpAction(_prevState: SignUpState, formData: FormData): Promise<SignUpState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const intent = formData.get("intent");

  if (intent === "resend") {
    const error = await cognitoErrorMessage(() => resendConfirmationCode(email));
    return { error, notice: error ? null : "Enviamos um novo código para o seu email.", pendingEmail: email };
  }

  if (intent === "confirm") {
    const code = String(formData.get("code") ?? "").trim();
    const error = await cognitoErrorMessage(() => confirmSignUp(email, code));
    if (error) return { error, notice: null, pendingEmail: email };
    redirect("/login?aviso=conta-confirmada");
  }

  if (passwordsMismatch(formData, "password", "confirmPassword")) {
    return { error: "As senhas não coincidem.", notice: null, pendingEmail: null };
  }

  const error = await cognitoErrorMessage(() => signUp(email, String(formData.get("password") ?? "")));
  if (error) return { error, notice: null, pendingEmail: null };
  return { error: null, notice: `Enviamos um código de confirmação para ${email}.`, pendingEmail: email };
}
