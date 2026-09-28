"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { CognitoAuthError, completeNewPassword, signIn, signOut, type CognitoTokens } from "@/lib/auth/cognito";
import {
  ACCESS_TOKEN_COOKIE,
  clearSessionCookies,
  setAccessTokenCookie,
  setRefreshTokenCookie,
} from "@/lib/auth/session-cookies";

export interface LoginState {
  error: string | null;
  newPasswordChallenge: { email: string; session: string } | null;
}

async function completeLogin(tokens: CognitoTokens): Promise<never> {
  const store = await cookies();
  setAccessTokenCookie(store, tokens.accessToken, tokens.expiresInSeconds);
  setRefreshTokenCookie(store, { refreshToken: tokens.refreshToken, username: tokens.username });
  redirect("/certificacoes");
}

async function submitNewPassword(formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const session = String(formData.get("session") ?? "");
  const newPassword = String(formData.get("newPassword") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (newPassword !== confirmPassword) {
    return { error: "As senhas não coincidem.", newPasswordChallenge: { email, session } };
  }

  let tokens: CognitoTokens;
  try {
    tokens = await completeNewPassword(email, newPassword, session);
  } catch (error) {
    if (error instanceof CognitoAuthError) {
      const expired = error.message.startsWith("Sessão expirada");
      return { error: error.message, newPasswordChallenge: expired ? null : { email, session } };
    }
    throw error;
  }

  return completeLogin(tokens);
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  if (formData.get("intent") === "new-password") {
    return submitNewPassword(formData);
  }

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  let result;
  try {
    result = await signIn(email, password);
  } catch (error) {
    if (error instanceof CognitoAuthError) return { error: error.message, newPasswordChallenge: null };
    throw error;
  }

  if (result.status === "new_password_required") {
    return { error: null, newPasswordChallenge: { email, session: result.session } };
  }

  return completeLogin(result.tokens);
}

export async function logout(): Promise<void> {
  const store = await cookies();
  const accessToken = store.get(ACCESS_TOKEN_COOKIE)?.value;
  if (accessToken) await signOut(accessToken);
  clearSessionCookies(store);
  redirect("/login");
}
