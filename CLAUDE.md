# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

A Next.js app (pt-BR UI) for practicing AWS/GCP/Azure/GitHub certification exams ("simulados") behind a single-account login. Package manager is **bun** (`bun@1.3.10`, see `packageManager` in `package.json`) — prefer `bun <script>` / `bunx <tool>` over npm/npx.

## Commands

```bash
bun dev              # next dev
bun run build        # next build
bun run start        # next start
bun run lint         # eslint (flat config, eslint-config-next core-web-vitals + typescript, no custom rules)
bun run test         # vitest run (jsdom environment)
bun run test:watch   # vitest (watch mode)
bunx vitest run app/lib/certifications/catalog.test.ts   # single test file
bunx tsc --noEmit    # type-check without emitting (not a package.json script)
```

There is currently only **one** test file in the whole repo: `app/lib/certifications/catalog.test.ts`. The exam engine (`app/lib/exam/*`, `app/lib/storage/attempt-storage.ts`, `app/components/exam/*`) has no test coverage — be extra careful with manual verification (`tsc`, `lint`, and a real click-through) when touching it.

## Project layout: everything but `public/` lives under `app/`

`_data`, `components`, `hooks`, `lib`, `scripts`, and `types` are nested inside `app/` (e.g. `app/lib`, `app/components`) alongside the route files — this is a deliberate reorganization, not the Next.js default. The path alias `@/*` maps to `./app/*` (`tsconfig.json`, mirrored manually in `vitest.config.ts` since Vitest doesn't read `tsconfig.json` paths), so `@/lib/...`, `@/components/...`, `@/types/...`, `@/_data/...`, `@/hooks/...` all resolve under `app/`. A route file that needs to reference another route file by absolute path uses `@/login/actions` (no `/app` segment — the alias already implies it).

`public/` is the one folder that **cannot** move into `app/` — Next.js requires it at the project root, sibling to `app/` (it's how static assets get served from `/`). `proxy.ts` (see below) has the same constraint: it must stay at the project root too, since Next.js only looks for it at the same level as `app/`, never inside it.

## Architecture

### Auth: proxy.ts vs. the DAL — both matter, for different reasons

This Next.js version (16.3.4) renamed `middleware.ts` to **`proxy.ts`** — there is no `middleware.ts` in this repo, `proxy.ts` at the root *is* the middleware. It only does a cheap **cookie-presence** check (`request.cookies.has(SESSION_COOKIE)`) against `config.matcher = ["/certificacoes/:path*", "/simulados/:path*", "/hub/:path*", "/exam/:path*"]` (see `app/lib/auth/protected-paths.ts` for the matching prefixes) and redirects to `/login` if absent — it never verifies the token.

The real check is the **DAL pattern**: `app/lib/auth/dal.ts`'s `getSession()` reads the cookie via `next/headers` `cookies()` and calls `verifySessionToken()` (full HMAC verification). Every protected layout/page calls this explicitly — `app/(app)/layout.tsx`, `app/exam/[slug]/page.tsx`, `app/page.tsx` — rather than trusting the proxy. When adding a new protected route, **both** need updating: `PROTECTED_PREFIXES` in `app/lib/auth/protected-paths.ts` (and `proxy.ts`'s `config.matcher`) for the fast redirect, *and* an explicit `getSession()` call in the route for the actual gate. Note `app/hub/page.tsx` sits outside the `(app)` route group and does not call `getSession()` itself — it only benefits from the proxy's cookie-presence check.

Session scheme (`app/lib/auth/session.ts`): not a JWT — `${base64url(JSON({email, iat}))}.${hmacSha256Hex(payload)}` signed with `SESSION_SECRET`, cookie name `SESSION_COOKIE = "session"` (`app/lib/auth/constants.ts`), 7-day maxAge. Credentials (`app/lib/auth/credentials.ts`) are a single hardcoded account from `APP_LOGIN_EMAIL`/`APP_LOGIN_PASSWORD` env vars — there's no user table.

### Routing: the `(app)` route group only exists for shared chrome

```
app/layout.tsx                                          "/" root layout, no auth
app/page.tsx                                             "/" — redirect based on getSession()
app/login/page.tsx, app/login/actions.ts                 "/login" (server actions: login, logout)
app/hub/page.tsx                                          "/hub" — just redirect("/certificacoes"), legacy path kept alive
app/exam/[slug]/page.tsx                                  "/exam/[slug]" — own getSession(), OUTSIDE (app) group (no sidebar)
app/(app)/layout.tsx                                      session gate + sidebar chrome for everything below
app/(app)/certificacoes/page.tsx                          "/certificacoes" — provider index
app/(app)/certificacoes/[provider]/page.tsx               all certs for a provider, grouped by tier
app/(app)/simulados/page.tsx                              "/simulados" — provider index (only certs with a bank)
app/(app)/simulados/[provider]/page.tsx                   certs with a simulado, grouped by tier
app/(app)/simulados/[provider]/[certification]/page.tsx   simulado summary + "Configurar e iniciar" / "Sem simulados"
```

`app/(app)/layout.tsx` calls `getSession()` (redirecting to `/login` if absent) and renders `SidebarProvider > AppSidebar + SidebarInset(header) > PageTransition(children)`. Because it reads `cookies()` (via `getSession()`), **every route nested under it is forced into dynamic rendering** — there's no static prerendering possible there, so don't bother adding `generateStaticParams()` to the `[provider]`/`[certification]` pages; it'd be dead code (this was tried and reverted once already).

Pages use Next 16's typed route helpers (`PageProps<"/simulados/[provider]">`, `LayoutProps<"/">`, etc.) — ambient types generated into `.next/types/`, regenerated by `next dev`/`next build`/`next typegen`.

### Certification catalog vs. simulado data — two linked but separate models

`app/types/certification.ts` defines the catalog (`Certification { id, provider, code, title, tier, studyUrl, simuladoSlug? }`) — one entry per real-world AWS/GCP/Azure/GitHub exam, whether or not a question bank exists for it yet. `app/types/simulado.ts` defines the actual question bank (`Simulado { slug, title, examCode, level, questions, examQuestionCount, examDurationMinutes, passingScore? }`, `Question` discriminated union on `type: "single" | "multi" | "order" | "match"`). A `Certification.simuladoSlug` is the only link between the two, resolved via `getSimuladoBySlug()` in `app/_data/index.ts`.

Catalog data lives in `app/_data/certifications/{aws,gcp,azure,github}.ts` (hand-maintained, sourced against official exam-guide pages — see the "Verificado em ..." header comments before assuming a list is current) and is flattened/ordered by `app/_data/certifications/index.ts` (`PROVIDER_ORDER = ["aws","gcp","azure","github"]`). All catalog querying goes through the pure functions in `app/lib/certifications/catalog.ts` — `sortByDifficulty` (tier rank via `app/lib/certifications/tier-order.ts`'s `TIER_ORDER`, then pt-BR title, then id), `certificationsForProvider`, `simuladosForProvider` (only certs with a resolvable `simuladoSlug`), `findCertification(provider, id)` (matches on **both**, so a cert from one provider 404s under another provider's URL), `groupByTier`, `countsForProvider`. `app/lib/certifications/catalog.test.ts` locks down real invariants (e.g. the exact AWS simulado list/order) — update it deliberately, not reflexively, when the data changes.

### Exam engine: client-only, localStorage-keyed by slug (not by attempt)

There is no server-side attempt storage. `app/lib/storage/attempt-storage.ts` keys everything by `simuladoSlug` alone — `aws-approve:attempt:${slug}` (in-progress) and `aws-approve:history:${slug}` (completed results). `app/lib/exam/build-attempt.ts`'s `buildAttempt()` picks/shuffles questions per `ExamConfig` and builds parallel `order`/`states` arrays; `app/lib/exam/grading.ts`'s `gradeQuestion()` handles all four question types (set-equality for single/multi, positional match for order/match).

**Gotcha**: `app/exam/[slug]/page.tsx` has no attempt-id in its URL. `app/components/exam/exam-runner.tsx` unconditionally checks `localStorage` for an in-progress attempt on mount and resumes it if found — landing on `/exam/[slug]` from *anywhere* (bookmark, back button, a stray link) silently resumes whatever's in progress rather than starting fresh. This is why nothing else in the app links to `/exam/[slug]` directly — everything routes through `/simulados/[provider]/[certification]` (`app/components/simulados/simulado-summary.tsx`) first, which is the only place that starts a fresh attempt. If you add a new entry point into the exam, route it through the summary page, not straight to `/exam/[slug]`.

### Question-bank extraction scripts are one-shot, not a repeatable build step

`app/scripts/extract-*.ts` (currently `dop-c02`, `dva-c02`, `sap-c02`, `scs-c03`) each parse a scraped source text file at the **repo root** (or `public/`) — these loose source files were never moved into `app/`, only the folders were — into a generated `app/_data/simulado_*.ts` module. **Some of those source files have already been deleted after generation** (e.g. `scs-c03`'s and `sap-c02`'s sources are gone) — don't assume re-running an existing script works; check the source file exists first. To add a new simulado: write/adapt an extraction script following this pattern, register the generated module's export in `app/_data/index.ts`'s `simulados` array, and set `simuladoSlug` on the matching entry in `app/_data/certifications/{provider}.ts`. There's no auto-discovery — every step is manual, including updating `app/lib/certifications/catalog.test.ts`'s hardcoded expectations if they cover the provider you touched.

### UI conventions

shadcn config (`components.json`): style `base-nova`, RSC on, icon library `lucide`, aliases `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks` (these alias strings didn't need to change when the folders moved under `app/` — only the `@/*` → `./app/*` mapping in `tsconfig.json` did). Prefer `useSyncExternalStore` over `useEffect` + `setState` for reading browser-only state (see `app/hooks/use-mobile.ts`) — not enforced by a custom lint rule, just the established idiom in this codebase.
