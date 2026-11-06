const PROTECTED_PREFIXES = ["/certificacoes", "/simulados", "/hub", "/exam", "/conta"] as const;

export function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
