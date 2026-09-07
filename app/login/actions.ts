"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyCredentials } from "@/lib/auth/credentials";
import { createSessionToken } from "@/lib/auth/session";
import { SESSION_COOKIE } from "@/lib/auth/constants";

export interface LoginState {
  error: string | null;
}

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!verifyCredentials(email, password)) {
    return { error: "Email ou senha inválidos." };
  }

  const token = createSessionToken(email);
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/certificacoes");
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/login");
}
