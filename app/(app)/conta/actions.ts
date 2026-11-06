"use server";

import { cookies } from "next/headers";
import { changePassword } from "@/lib/auth/cognito";
import { cognitoErrorMessage } from "@/lib/auth/cognito-error-message";
import { passwordsMismatch } from "@/lib/auth/password-rules";
import { ACCESS_TOKEN_COOKIE } from "@/lib/auth/session-cookies";

export interface ChangePasswordState {
  error: string | null;
  notice: string | null;
}

export async function changePasswordAction(
  _prevState: ChangePasswordState,
  formData: FormData
): Promise<ChangePasswordState> {
  if (passwordsMismatch(formData, "newPassword", "confirmPassword")) {
    return { error: "As senhas não coincidem.", notice: null };
  }

  const accessToken = (await cookies()).get(ACCESS_TOKEN_COOKIE)?.value;
  if (!accessToken) return { error: "Sua sessão expirou. Entre novamente.", notice: null };

  const currentPassword = String(formData.get("currentPassword") ?? "");
  const newPassword = String(formData.get("newPassword") ?? "");
  const error = await cognitoErrorMessage(() => changePassword(accessToken, currentPassword, newPassword));
  return error ? { error, notice: null } : { error: null, notice: "Senha alterada com sucesso." };
}
