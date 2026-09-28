export const ACCESS_TOKEN_COOKIE = "cognito_access_token";
export const REFRESH_TOKEN_COOKIE = "cognito_refresh_token";

// Cognito's default refresh token validity for a new App Client; adjust this if
// your App Client's "Refresh token expiration" setting differs.
export const REFRESH_TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export interface RefreshCookiePayload {
  refreshToken: string;
  username: string;
}

interface CookieWriter {
  set(name: string, value: string, options?: Record<string, unknown>): void;
}

interface CookieEraser {
  delete(name: string): void;
}

function cookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export function setAccessTokenCookie(
  store: CookieWriter,
  accessToken: string,
  expiresInSeconds: number
): void {
  store.set(ACCESS_TOKEN_COOKIE, accessToken, cookieOptions(expiresInSeconds));
}

export function setRefreshTokenCookie(store: CookieWriter, payload: RefreshCookiePayload): void {
  store.set(REFRESH_TOKEN_COOKIE, JSON.stringify(payload), cookieOptions(REFRESH_TOKEN_MAX_AGE_SECONDS));
}

export function clearSessionCookies(store: CookieEraser): void {
  store.delete(ACCESS_TOKEN_COOKIE);
  store.delete(REFRESH_TOKEN_COOKIE);
}
