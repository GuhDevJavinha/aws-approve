# AWS Approve — Login + Hub + Simulado Spec

Captures the shared understanding reached with the user before implementation. This is the spec the implementation plan (`2026-09-01-login-hub-exam.md`) argues from.

## Goal

A study app for AWS certification practice exams: log in, pick a simulado from a hub, configure and take a customizable practice exam, see results.

## Runtime facts (verified against this repo)

- Next.js `16.3.4` (exact pin), React `19.2.8`, App Router (`app/` at repo root, no `src/`), TypeScript `strict: true`, path alias `@/*` → `./*`.
- **`middleware.ts` does not exist in this Next version — it is `proxy.ts`** (root-level, sibling of `app/`, exports `proxy()` not `middleware()`, same `NextRequest`/`NextResponse`/`matcher` API). Per the bundled docs, proxy is for **optimistic** checks only (cookie presence) — real session verification belongs in a server-side Data Access Layer called from Server Components/Actions (Node runtime).
- Tailwind CSS v4 already installed (`@tailwindcss/postcss`), CSS-first config via `@theme` in `app/globals.css`. No component library. No auth library. No test framework — plan adds Vitest.
- Package manager: `bun`.
- Reference file `simulado-scs-c03.html` (repo root) is a working prototype: real ~85-question AWS Certified Security – Specialty (SCS-C03) bank, AWS-Console-styled UI, and interaction logic (shuffle, confirm/lock/grade, flag-for-review, nav grid, results table). It has **no pause feature and no persistence** (in-memory only) — used here as visual/interaction reference and as the source of real question content, not as the full functional spec.

## Auth

- **Phase 1 (this plan):** single hardcoded credential pair, `gustavo.rsilva08@gmail.com` / `password1234`, stored in `.env.local` (git-ignored) as `APP_LOGIN_EMAIL` / `APP_LOGIN_PASSWORD`, never in source. A Server Action verifies the submitted form against these and sets a signed, `httpOnly` session cookie on success.
- `proxy.ts` does the optimistic check: no `session` cookie on a protected path (`/hub`, `/exam`) → redirect to `/login`. It only checks cookie *presence*, no crypto (Edge-safe).
- The real check — verifying the cookie's HMAC signature — lives in a Node-runtime Data Access Layer (`lib/auth/dal.ts`, using `next/headers` + `node:crypto`) called from every protected Server Component; invalid/missing session redirects to `/login`.
- A logout action clears the cookie and redirects to `/login`.
- **Phase 2 (explicitly out of scope for this plan):** replace with real AWS IAM Identity Center SSO. Access control (which directory group) deferred to that phase.

## Data model

Question is a discriminated union on `type`, matching the 4 types already used in the real SCS-C03 content:

- `single` — one correct option.
- `multi` — `pick: N` correct options ("choose two").
- `order` — arrange a `pool` of strings into the right sequence.
- `match` — match each `prompts[]` entry to one `pool` item.

Common optional fields across all types: `explanation`, `domain`. `single`/`multi` support an optional `code` block on the stem and on individual options (for policy/JSON snippets).

Each simulado file (`_data/simulado_*.ts`) exports one `Simulado` object: `slug`, `title`, `examCode`, `level`, `questions`, plus **per-file exam metadata** — `examQuestionCount`, `examDurationMinutes`, and optional `passingScore` (percent; defaults to 72 when omitted, since AWS scaled-score cutoffs vary per exam and this isn't always known). This metadata drives "real exam" mode instead of hardcoding counts per certification level in code.

`_data/index.ts` is the registry: an array of all simulados plus `getSimuladoBySlug(slug)`, used to populate the hub.

## Exam customization

Three independent toggles on the exam's intro/config screen, not fixed presets:

1. **Fonte das questões** — Todas as questões | Quantidade oficial (uses the simulado's `examQuestionCount`; when it's less than the total bank, questions are chosen by simple random sampling without replacement — no domain-weighting yet, since not all questions reliably carry a `domain` tag).
2. **Cronômetro** — Ligado (counts down from `examDurationMinutes`, auto-submits and shows results when it hits zero) | Desligado.
3. **Feedback** — Imediato (shows correct/incorrect right after "Confirmar resposta", like the reference prototype) | Só no final (hides correctness until the results screen).

Plus two independent shuffle toggles (both present in the reference prototype already): embaralhar questões, embaralhar alternativas.

**Pause is allowed only when Cronômetro is Desligado** — pausing a running countdown doesn't make sense for a "real exam" simulation.

Mark-for-review + a review/navigation grid + a per-question results table, following the reference prototype's pattern.

## Persistence

Everything is client-side `localStorage` for now (no backend/DB) — consistent with Phase 1 being single-user:

- In-progress attempt (survives accidental refresh), keyed by simulado slug.
- Completed-attempt history (score, pass/fail, timestamp) per simulado slug, so the hub can show a "melhor nota" badge per card.

Revisit with a real database only when Phase 2 (Identity Center) brings real multi-user identity.

## Visual design

AWS-Console-like styling applied consistently across login, hub, and exam screens — not just the exam screen. Tokens taken from the reference prototype: `--ink:#232f3e` (top bar), `--orange:#ff9900` (accent/primary), `--blue:#146eb4` (selection/links), `--green:#1d8102`/`--red:#d13212` (correct/incorrect), `--bg:#f2f3f3`, `--surface:#fff`, sharp `border-radius:2px`, Helvetica/Arial stack (not the default Geist font from create-next-app).

## Content

The reference prototype's `QUESTIONS` array (lines 254–1473 of `simulado-scs-c03.html`) is real SCS-C03 content and becomes the first simulado, `_data/simulado_security_especialist.ts` (slug `security-especialist`), via a one-off extraction script rather than manual transcription. `examQuestionCount: 65`, `examDurationMinutes: 170` (both match the real SCS-C03 exam and the prototype's own 170-minute clock), `passingScore: 75` (the value the prototype itself displays).

## Explicitly out of scope for this plan

- AWS Identity Center integration and any real multi-user access control.
- A real database / server-side persistence.
- Domain-weighted random question sampling.
- Any simulado file other than `simulado_security_especialist.ts`.
