import { cookies } from "next/headers";
import { getCognitoUser } from "./cognito";
import { ACCESS_TOKEN_COOKIE } from "./session-cookies";

export async function getSession(): Promise<{ email: string } | null> {
  const store = await cookies();
  const accessToken = store.get(ACCESS_TOKEN_COOKIE)?.value;
  if (!accessToken) return null;
  return getCognitoUser(accessToken);
}
