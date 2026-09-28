import { NextRequest, NextResponse } from "next/server";
import { refreshTokens } from "@/lib/auth/cognito";
import { isProtectedPath } from "@/lib/auth/protected-paths";
import {
  ACCESS_TOKEN_COOKIE,
  clearSessionCookies,
  REFRESH_TOKEN_COOKIE,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  type RefreshCookiePayload,
} from "@/lib/auth/session-cookies";

function redirectToLogin(request: NextRequest): NextResponse {
  const response = NextResponse.redirect(new URL("/login", request.url));
  clearSessionCookies(response.cookies);
  return response;
}

export async function proxy(request: NextRequest) {
  if (!isProtectedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (request.cookies.has(ACCESS_TOKEN_COOKIE)) {
    return NextResponse.next();
  }

  const refreshCookie = request.cookies.get(REFRESH_TOKEN_COOKIE)?.value;
  if (!refreshCookie) return redirectToLogin(request);

  let payload: RefreshCookiePayload;
  try {
    payload = JSON.parse(refreshCookie);
  } catch {
    return redirectToLogin(request);
  }

  const refreshed = await refreshTokens(payload.refreshToken, payload.username);
  if (!refreshed) return redirectToLogin(request);

  // Redirect back to the same URL so the browser resends the request with the
  // refreshed access token cookie already set — Server Components read the
  // request's cookies, not cookies set on this response.
  const response = NextResponse.redirect(request.url);
  setAccessTokenCookie(response.cookies, refreshed.accessToken, refreshed.expiresInSeconds);
  if (refreshed.refreshToken) {
    setRefreshTokenCookie(response.cookies, {
      refreshToken: refreshed.refreshToken,
      username: payload.username,
    });
  }
  return response;
}

export const config = {
  matcher: [
    "/certificacoes/:path*",
    "/simulados/:path*",
    "/hub/:path*",
    "/exam/:path*",
  ],
};
