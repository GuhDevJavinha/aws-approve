import { cookies } from "next/headers";
import { verifySessionToken } from "./session";
import { SESSION_COOKIE } from "./constants";

export async function getSession(): Promise<{ email: string } | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const payload = verifySessionToken(token);
  if (!payload) return null;
  return { email: payload.email };
}
