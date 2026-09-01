# Login + Hub + Simulado Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the AWS-Console-styled login → hub → customizable practice exam flow described in the spec, with the real SCS-C03 question bank as the first simulado.

**Architecture:** Next.js 16 App Router, Server Components + Server Actions for the login/session boundary (Node runtime), a thin `proxy.ts` for optimistic route protection, and one client-side exam engine (`components/exam/*`) driven by pure, unit-tested logic modules under `lib/exam/*`. All exam/history state lives in `localStorage` — no database in this plan.

**Tech Stack:** Next.js 16.3.4, React 19.2.8, TypeScript (strict), Tailwind CSS v4, shadcn (`base-nova` style, `@base-ui/react` primitives — already scaffolded), `motion` (already installed) for transitions, `next-themes` (new — added by Task 9) for dark mode, Vitest (new — added by Task 1), bun.

**Spec:** [docs/superpowers/plans/2026-09-01-aws-approve-spec.md](2026-09-01-aws-approve-spec.md) — the plan argues from this; read both.

## Global Constraints

- Next.js `16.3.4` App Router, root `app/`, no `src/`. Route protection uses **`proxy.ts`**, not `middleware.ts` (renamed in this Next version).
- TypeScript `strict: true`; path alias `@/*` → repo root.
- Tailwind v4, CSS-first `@theme` config in `app/globals.css`.
- Package manager is **bun** — use `bun add`, `bun add -D`, `bun run <script>`, `bunx <bin>`.
- No code comments except `// TODO: ...` for genuine future work — names should make the code self-explanatory.
- Auth is Phase 1 only: one hardcoded credential pair from env vars. AWS Identity Center integration is explicitly out of scope for this plan.
- All persistence is `localStorage`. No database, no server-side session store beyond the signed cookie.
- Default passing score is **72%** when a simulado's `passingScore` is omitted.
- shadcn (`components.json`: style `base-nova`, `@base-ui/react` primitives, `baseColor: neutral`, `cssVariables: true`) is already initialized with `Button` installed. Add any further primitive with `bunx shadcn@latest add <name>` — don't hand-roll a component shadcn already provides. Reuse `cn()` from `lib/utils.ts`.
- Dark mode rides the `.dark` class already wired into `app/globals.css` (`@custom-variant dark (&:is(.dark *))`) via `next-themes`, not `prefers-color-scheme` alone — the user picks light/dark/system and it persists.
- `motion` (`import { motion } from "motion/react"`) drives feedback animations: question transitions, correct/incorrect reveal, results score, theme-toggle icon. Keep it purposeful — not decorative motion on every element.

---

## File Structure

```
types/simulado.ts                          # Question union, Simulado, ExamConfig, Attempt, CompletedResult

lib/format-time.ts                         # mm:ss formatter
lib/exam/shuffle.ts                        # Fisher-Yates shuffle
lib/exam/grading.ts                        # isQuestionReady, gradeQuestion
lib/exam/build-attempt.ts                  # selectQuestions, buildAttempt
lib/exam/constants.ts                      # DEFAULT_PASSING_SCORE, getPassingScore
lib/storage/attempt-storage.ts             # localStorage read/write for attempts + history
lib/auth/constants.ts                      # SESSION_COOKIE (no heavy deps — imported by proxy.ts)
lib/auth/credentials.ts                    # verifyCredentials
lib/auth/session.ts                        # createSessionToken, verifySessionToken (node:crypto)
lib/auth/dal.ts                            # getSession (next/headers, Node runtime)
lib/auth/protected-paths.ts                # isProtectedPath (pure, used by proxy.ts)

proxy.ts                                   # root-level, optimistic cookie-presence check

components/theme-provider.tsx              # wraps next-themes' ThemeProvider
components/theme-toggle.tsx                # light/dark/system switcher (shadcn Button + lucide + motion)
components/ui/*                            # shadcn primitives, added via `bunx shadcn@latest add <name>` as each task needs one

app/login/actions.ts                       # login, logout Server Actions
app/login/page.tsx                         # login form (shadcn Card/Input/Button + motion entrance)
app/page.tsx                               # redirects to /hub or /login based on session
app/hub/page.tsx                           # protected, lists simulados
app/exam/[slug]/page.tsx                   # protected, loads simulado, renders ExamRunner

components/hub/simulado-card.tsx           # one hub card, best-score badge from localStorage
components/exam/exam-intro.tsx             # config toggles + start button
components/exam/exam-runner.tsx            # top-level state machine (intro/running/results)
components/exam/options-question.tsx       # single + multi renderer
components/exam/order-question.tsx         # order renderer
components/exam/match-question.tsx         # match renderer
components/exam/exam-nav-panel.tsx         # review grid
components/exam/exam-results.tsx           # score + per-question table

scripts/extract-scs-c03.ts                 # one-off: HTML prototype -> _data/simulado_security_especialist.ts
_data/simulado_security_especialist.ts     # generated by the script above
_data/index.ts                             # simulados registry, getSimuladoBySlug

app/globals.css                            # recolor shadcn's light/dark tokens to the AWS palette (modify)
app/layout.tsx                             # ThemeProvider + drop Geist font (modify)
.env.local.example                         # committed placeholder
.env.local                                 # git-ignored, real Phase-1 credentials + secret
vitest.config.ts                           # new
package.json                               # add vitest, next-themes, test scripts (modify)
```

---

### Task 1: Test harness + time formatter

**Files:**
- Create: `vitest.config.ts`
- Modify: `package.json`
- Create: `lib/format-time.ts`
- Test: `lib/format-time.test.ts`

**Interfaces:**
- Produces: `formatTime(totalSeconds: number): string`

- [ ] **Step 1: Install Vitest and jsdom**

Run: `bun add -D vitest jsdom`

- [ ] **Step 2: Add the Vitest config**

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
```

- [ ] **Step 3: Add test scripts to package.json**

In `package.json`, add to `"scripts"`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Write the failing test**

```ts
// lib/format-time.test.ts
import { describe, it, expect } from "vitest";
import { formatTime } from "./format-time";

describe("formatTime", () => {
  it("pads minutes and seconds to two digits", () => {
    expect(formatTime(0)).toBe("00:00");
    expect(formatTime(65)).toBe("01:05");
  });

  it("handles durations over 99 minutes without truncating", () => {
    expect(formatTime(6000)).toBe("100:00");
  });

  it("clamps negative input to zero", () => {
    expect(formatTime(-5)).toBe("00:00");
  });
});
```

- [ ] **Step 5: Run it to verify it fails**

Run: `bunx vitest run lib/format-time.test.ts`
Expected: FAIL — `lib/format-time.ts` does not exist yet.

- [ ] **Step 6: Implement**

```ts
// lib/format-time.ts
export function formatTime(totalSeconds: number): string {
  const clamped = Math.max(0, totalSeconds);
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}
```

- [ ] **Step 7: Run it to verify it passes**

Run: `bunx vitest run lib/format-time.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 8: Commit**

```bash
git add vitest.config.ts package.json lib/format-time.ts lib/format-time.test.ts bun.lockb
git commit -m "test: add Vitest harness and formatTime utility"
```

---

### Task 2: Core domain types

**Files:**
- Create: `types/simulado.ts`

**Interfaces:**
- Produces: `QuestionType`, `AnswerOption`, `SingleQuestion`, `MultiQuestion`, `OrderQuestion`, `MatchQuestion`, `Question`, `ExamLevel`, `Simulado`, `ExamConfig`, `QuestionState`, `Attempt`, `CompletedResult`

No runtime behavior to test — verified by the type checker. Every later task imports from this file, so get the shapes right here.

- [ ] **Step 1: Write the types**

```ts
// types/simulado.ts
export type QuestionType = "single" | "multi" | "order" | "match";

export interface AnswerOption {
  id: string;
  text?: string;
  code?: string;
}

interface QuestionBase {
  id: string;
  stem: string;
  ask?: string;
  code?: string;
  explanation?: string;
  domain?: string;
}

export interface SingleQuestion extends QuestionBase {
  type: "single";
  options: AnswerOption[];
  answer: string[];
}

export interface MultiQuestion extends QuestionBase {
  type: "multi";
  pick: number;
  options: AnswerOption[];
  answer: string[];
}

export interface OrderQuestion extends QuestionBase {
  type: "order";
  pool: string[];
  answer: number[];
}

export interface MatchPrompt {
  t: string;
  a: number;
}

export interface MatchQuestion extends QuestionBase {
  type: "match";
  pool: string[];
  prompts: MatchPrompt[];
}

export type Question = SingleQuestion | MultiQuestion | OrderQuestion | MatchQuestion;

export type ExamLevel = "associate" | "professional" | "specialty";

export interface Simulado {
  slug: string;
  title: string;
  examCode: string;
  level: ExamLevel;
  questions: Question[];
  examQuestionCount: number;
  examDurationMinutes: number;
  passingScore?: number;
}

export interface ExamConfig {
  questionSource: "all" | "official";
  timerEnabled: boolean;
  immediateFeedback: boolean;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}

export interface QuestionState {
  locked: boolean;
  correct: boolean | null;
  flagged: boolean;
  picked: number[];
  optOrder: number[];
  slots: (number | null)[];
}

export interface Attempt {
  simuladoSlug: string;
  config: ExamConfig;
  order: number[];
  states: QuestionState[];
  currentIndex: number;
  secondsRemaining: number;
  startedAt: string;
}

export interface CompletedResult {
  simuladoSlug: string;
  completedAt: string;
  scorePercent: number;
  correctCount: number;
  answeredCount: number;
  totalCount: number;
  passed: boolean;
}
```

- [ ] **Step 2: Verify it type-checks**

Run: `bunx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add types/simulado.ts
git commit -m "feat: add core question/simulado/attempt types"
```

---

### Task 3: Shuffle utility

**Files:**
- Create: `lib/exam/shuffle.ts`
- Test: `lib/exam/shuffle.test.ts`

**Interfaces:**
- Produces: `shuffle<T>(items: readonly T[]): T[]`

- [ ] **Step 1: Write the failing tests**

```ts
// lib/exam/shuffle.test.ts
import { describe, it, expect, vi, afterEach } from "vitest";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("does not mutate the input array", () => {
    const input = [1, 2, 3, 4];
    shuffle(input);
    expect(input).toEqual([1, 2, 3, 4]);
  });

  it("returns a permutation with the same elements", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).toHaveLength(input.length);
    expect([...result].sort()).toEqual([...input].sort());
  });

  it("produces the Fisher-Yates order for a controlled random sequence", () => {
    const sequence = [0.9, 0.1, 0];
    vi.spyOn(Math, "random").mockImplementation(() => sequence.shift() ?? 0);
    expect(shuffle(["a", "b", "c", "d"])).toEqual(["a", "d", "c", "b"]);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run lib/exam/shuffle.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
// lib/exam/shuffle.ts
export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j]!, result[i]!];
  }
  return result;
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `bunx vitest run lib/exam/shuffle.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add lib/exam/shuffle.ts lib/exam/shuffle.test.ts
git commit -m "feat: add Fisher-Yates shuffle utility"
```

---

### Task 4: Grading utilities

**Files:**
- Create: `lib/exam/grading.ts`
- Test: `lib/exam/grading.test.ts`

**Interfaces:**
- Consumes: `Question`, `QuestionState` (Task 2)
- Produces: `isQuestionReady(question: Question, state: QuestionState): boolean`, `gradeQuestion(question: Question, state: QuestionState): boolean`

- [ ] **Step 1: Write the failing tests**

```ts
// lib/exam/grading.test.ts
import { describe, it, expect } from "vitest";
import { isQuestionReady, gradeQuestion } from "./grading";
import type {
  MatchQuestion,
  MultiQuestion,
  OrderQuestion,
  QuestionState,
  SingleQuestion,
} from "@/types/simulado";

function emptyState(): QuestionState {
  return { locked: false, correct: null, flagged: false, picked: [], optOrder: [0, 1, 2], slots: [] };
}

const single: SingleQuestion = {
  id: "q1",
  type: "single",
  stem: "stem",
  options: [
    { id: "A", text: "a" },
    { id: "B", text: "b" },
    { id: "C", text: "c" },
  ],
  answer: ["B"],
};

const multi: MultiQuestion = {
  id: "q2",
  type: "multi",
  pick: 2,
  stem: "stem",
  options: [
    { id: "A", text: "a" },
    { id: "B", text: "b" },
    { id: "C", text: "c" },
  ],
  answer: ["A", "C"],
};

const order: OrderQuestion = {
  id: "q3",
  type: "order",
  stem: "stem",
  pool: ["first", "second", "third"],
  answer: [2, 0, 1],
};

const match: MatchQuestion = {
  id: "q4",
  type: "match",
  stem: "stem",
  pool: ["x", "y"],
  prompts: [{ t: "p1", a: 1 }, { t: "p2", a: 0 }],
};

describe("isQuestionReady", () => {
  it("single is ready with exactly one pick", () => {
    expect(isQuestionReady(single, { ...emptyState(), picked: [] })).toBe(false);
    expect(isQuestionReady(single, { ...emptyState(), picked: [1] })).toBe(true);
  });

  it("multi is ready only once `pick` options are chosen", () => {
    expect(isQuestionReady(multi, { ...emptyState(), picked: [0] })).toBe(false);
    expect(isQuestionReady(multi, { ...emptyState(), picked: [0, 2] })).toBe(true);
  });

  it("order/match are ready once every slot is filled", () => {
    expect(isQuestionReady(order, { ...emptyState(), slots: [null, null, null] })).toBe(false);
    expect(isQuestionReady(order, { ...emptyState(), slots: [2, 0, 1] })).toBe(true);
  });
});

describe("gradeQuestion", () => {
  it("grades single by matching option id", () => {
    expect(gradeQuestion(single, { ...emptyState(), picked: [1] })).toBe(true);
    expect(gradeQuestion(single, { ...emptyState(), picked: [0] })).toBe(false);
  });

  it("grades multi regardless of selection order", () => {
    expect(gradeQuestion(multi, { ...emptyState(), picked: [2, 0] })).toBe(true);
    expect(gradeQuestion(multi, { ...emptyState(), picked: [0, 1] })).toBe(false);
  });

  it("grades order by exact sequence", () => {
    expect(gradeQuestion(order, { ...emptyState(), slots: [2, 0, 1] })).toBe(true);
    expect(gradeQuestion(order, { ...emptyState(), slots: [0, 1, 2] })).toBe(false);
  });

  it("grades match by prompt->pool index", () => {
    expect(gradeQuestion(match, { ...emptyState(), slots: [1, 0] })).toBe(true);
    expect(gradeQuestion(match, { ...emptyState(), slots: [0, 0] })).toBe(false);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run lib/exam/grading.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
// lib/exam/grading.ts
import type { Question, QuestionState } from "@/types/simulado";

export function isQuestionReady(question: Question, state: QuestionState): boolean {
  if (question.type === "single") return state.picked.length === 1;
  if (question.type === "multi") return state.picked.length === question.pick;
  return state.slots.every((slot) => slot !== null);
}

export function gradeQuestion(question: Question, state: QuestionState): boolean {
  if (question.type === "single" || question.type === "multi") {
    const chosen = state.picked
      .map((i) => question.options[i]!.id)
      .sort()
      .join(",");
    const correct = [...question.answer].sort().join(",");
    return chosen === correct;
  }
  if (question.type === "order") {
    return state.slots.every((slot, i) => slot === question.answer[i]);
  }
  return state.slots.every((slot, i) => slot === question.prompts[i]!.a);
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `bunx vitest run lib/exam/grading.test.ts`
Expected: PASS (7 tests)

- [ ] **Step 5: Commit**

```bash
git add lib/exam/grading.ts lib/exam/grading.test.ts
git commit -m "feat: add question readiness and grading logic"
```

---

### Task 5: Passing-score helper + build-attempt

**Files:**
- Create: `lib/exam/constants.ts`
- Create: `lib/exam/build-attempt.ts`
- Test: `lib/exam/build-attempt.test.ts`

**Interfaces:**
- Consumes: `shuffle` (Task 3), `Attempt`, `ExamConfig`, `Question`, `QuestionState`, `Simulado` (Task 2)
- Produces: `DEFAULT_PASSING_SCORE`, `getPassingScore(simulado: Simulado): number`, `selectQuestions(allQuestions: readonly Question[], count: number): Question[]`, `buildAttempt(simulado: Simulado, config: ExamConfig): Attempt`

- [ ] **Step 1: Write the failing tests**

```ts
// lib/exam/build-attempt.test.ts
import { describe, it, expect } from "vitest";
import { buildAttempt, selectQuestions } from "./build-attempt";
import { getPassingScore, DEFAULT_PASSING_SCORE } from "./constants";
import type { ExamConfig, Question, Simulado } from "@/types/simulado";

function makeQuestions(count: number): Question[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `q${i}`,
    type: "single",
    stem: `stem ${i}`,
    options: [
      { id: "A", text: "a" },
      { id: "B", text: "b" },
    ],
    answer: ["A"],
  }));
}

const simulado: Simulado = {
  slug: "demo",
  title: "Demo",
  examCode: "DEMO",
  level: "specialty",
  questions: makeQuestions(10),
  examQuestionCount: 4,
  examDurationMinutes: 60,
};

const baseConfig: ExamConfig = {
  questionSource: "all",
  timerEnabled: false,
  immediateFeedback: true,
  shuffleQuestions: false,
  shuffleOptions: false,
};

describe("selectQuestions", () => {
  it("returns every question when count >= total", () => {
    const all = makeQuestions(3);
    expect(selectQuestions(all, 5)).toHaveLength(3);
  });

  it("returns exactly `count` unique questions drawn from the pool", () => {
    const all = makeQuestions(10);
    const picked = selectQuestions(all, 4);
    expect(picked).toHaveLength(4);
    const ids = new Set(picked.map((q) => q.id));
    expect(ids.size).toBe(4);
    for (const q of picked) expect(all).toContain(q);
  });
});

describe("buildAttempt", () => {
  it("includes every question when questionSource is 'all'", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.order).toHaveLength(10);
    expect(attempt.states).toHaveLength(10);
  });

  it("includes only examQuestionCount questions when questionSource is 'official'", () => {
    const attempt = buildAttempt(simulado, { ...baseConfig, questionSource: "official" });
    expect(attempt.order).toHaveLength(4);
    expect(attempt.states).toHaveLength(4);
  });

  it("preserves original order when shuffleQuestions is false", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.order).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("builds an unshuffled optOrder matching the option count for single/multi", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.states[0]!.optOrder).toEqual([0, 1]);
  });

  it("sets secondsRemaining from examDurationMinutes only when the timer is enabled", () => {
    expect(buildAttempt(simulado, baseConfig).secondsRemaining).toBe(0);
    expect(buildAttempt(simulado, { ...baseConfig, timerEnabled: true }).secondsRemaining).toBe(3600);
  });

  it("starts on the first question, unlocked and unflagged", () => {
    const attempt = buildAttempt(simulado, baseConfig);
    expect(attempt.currentIndex).toBe(0);
    expect(attempt.states[0]).toMatchObject({ locked: false, correct: null, flagged: false });
  });
});

describe("getPassingScore", () => {
  it("returns the simulado's own passingScore when set", () => {
    expect(getPassingScore({ ...simulado, passingScore: 80 })).toBe(80);
  });

  it("falls back to DEFAULT_PASSING_SCORE when omitted", () => {
    expect(getPassingScore(simulado)).toBe(DEFAULT_PASSING_SCORE);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run lib/exam/build-attempt.test.ts`
Expected: FAIL — modules not found.

- [ ] **Step 3: Implement the constants helper**

```ts
// lib/exam/constants.ts
import type { Simulado } from "@/types/simulado";

export const DEFAULT_PASSING_SCORE = 72;

export function getPassingScore(simulado: Simulado): number {
  return simulado.passingScore ?? DEFAULT_PASSING_SCORE;
}
```

- [ ] **Step 4: Implement build-attempt**

```ts
// lib/exam/build-attempt.ts
import { shuffle } from "./shuffle";
import type { Attempt, ExamConfig, Question, QuestionState, Simulado } from "@/types/simulado";

export function selectQuestions(allQuestions: readonly Question[], count: number): Question[] {
  if (count >= allQuestions.length) return [...allQuestions];
  return shuffle(allQuestions).slice(0, count);
}

export function buildAttempt(simulado: Simulado, config: ExamConfig): Attempt {
  const pool =
    config.questionSource === "official"
      ? selectQuestions(simulado.questions, simulado.examQuestionCount)
      : [...simulado.questions];

  const orderedQuestions = config.shuffleQuestions ? shuffle(pool) : pool;
  const order = orderedQuestions.map((question) =>
    simulado.questions.findIndex((candidate) => candidate.id === question.id)
  );
  const states = orderedQuestions.map((question) => buildQuestionState(question, config.shuffleOptions));

  return {
    simuladoSlug: simulado.slug,
    config,
    order,
    states,
    currentIndex: 0,
    secondsRemaining: config.timerEnabled ? simulado.examDurationMinutes * 60 : 0,
    startedAt: new Date().toISOString(),
  };
}

function buildQuestionState(question: Question, shuffleOptions: boolean): QuestionState {
  const state: QuestionState = {
    locked: false,
    correct: null,
    flagged: false,
    picked: [],
    optOrder: [],
    slots: [],
  };
  if (question.type === "single" || question.type === "multi") {
    const indices = question.options.map((_, i) => i);
    state.optOrder = shuffleOptions ? shuffle(indices) : indices;
  }
  if (question.type === "order") {
    state.slots = new Array(question.answer.length).fill(null);
  }
  if (question.type === "match") {
    state.slots = new Array(question.prompts.length).fill(null);
  }
  return state;
}
```

- [ ] **Step 5: Run it to verify it passes**

Run: `bunx vitest run lib/exam/build-attempt.test.ts`
Expected: PASS (11 tests)

- [ ] **Step 6: Commit**

```bash
git add lib/exam/constants.ts lib/exam/build-attempt.ts lib/exam/build-attempt.test.ts
git commit -m "feat: add attempt builder with official/all question selection"
```

---

### Task 6: LocalStorage persistence for attempts and history

**Files:**
- Create: `lib/storage/attempt-storage.ts`
- Test: `lib/storage/attempt-storage.test.ts`

**Interfaces:**
- Consumes: `Attempt`, `CompletedResult` (Task 2)
- Produces: `saveInProgressAttempt(attempt: Attempt): void`, `loadInProgressAttempt(slug: string): Attempt | null`, `clearInProgressAttempt(slug: string): void`, `saveCompletedResult(result: CompletedResult): void`, `loadHistory(slug: string): CompletedResult[]`, `getBestScore(slug: string): number | null`

- [ ] **Step 1: Write the failing tests**

```ts
// lib/storage/attempt-storage.test.ts
import { describe, it, expect, beforeEach } from "vitest";
import {
  clearInProgressAttempt,
  getBestScore,
  loadHistory,
  loadInProgressAttempt,
  saveCompletedResult,
  saveInProgressAttempt,
} from "./attempt-storage";
import type { Attempt, CompletedResult } from "@/types/simulado";

const attempt: Attempt = {
  simuladoSlug: "demo",
  config: {
    questionSource: "all",
    timerEnabled: false,
    immediateFeedback: true,
    shuffleQuestions: false,
    shuffleOptions: false,
  },
  order: [0, 1],
  states: [],
  currentIndex: 0,
  secondsRemaining: 0,
  startedAt: new Date().toISOString(),
};

beforeEach(() => {
  localStorage.clear();
});

describe("in-progress attempt", () => {
  it("round-trips through save/load", () => {
    saveInProgressAttempt(attempt);
    expect(loadInProgressAttempt("demo")).toEqual(attempt);
  });

  it("returns null when nothing is saved", () => {
    expect(loadInProgressAttempt("missing")).toBeNull();
  });

  it("clears the saved attempt", () => {
    saveInProgressAttempt(attempt);
    clearInProgressAttempt("demo");
    expect(loadInProgressAttempt("demo")).toBeNull();
  });

  it("keeps attempts for different simulados isolated", () => {
    saveInProgressAttempt(attempt);
    saveInProgressAttempt({ ...attempt, simuladoSlug: "other" });
    expect(loadInProgressAttempt("demo")).not.toBeNull();
    expect(loadInProgressAttempt("other")).not.toBeNull();
  });
});

function result(overrides: Partial<CompletedResult> = {}): CompletedResult {
  return {
    simuladoSlug: "demo",
    completedAt: new Date().toISOString(),
    scorePercent: 80,
    correctCount: 8,
    answeredCount: 10,
    totalCount: 10,
    passed: true,
    ...overrides,
  };
}

describe("completed history", () => {
  it("appends results and returns them in order", () => {
    saveCompletedResult(result({ scorePercent: 60 }));
    saveCompletedResult(result({ scorePercent: 90 }));
    expect(loadHistory("demo").map((r) => r.scorePercent)).toEqual([60, 90]);
  });

  it("returns an empty array when there is no history", () => {
    expect(loadHistory("missing")).toEqual([]);
  });

  it("getBestScore returns the highest scorePercent seen", () => {
    saveCompletedResult(result({ scorePercent: 60 }));
    saveCompletedResult(result({ scorePercent: 90 }));
    saveCompletedResult(result({ scorePercent: 75 }));
    expect(getBestScore("demo")).toBe(90);
  });

  it("getBestScore returns null with no history", () => {
    expect(getBestScore("missing")).toBeNull();
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run lib/storage/attempt-storage.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
// lib/storage/attempt-storage.ts
import type { Attempt, CompletedResult } from "@/types/simulado";

const inProgressKey = (slug: string) => `aws-approve:attempt:${slug}`;
const historyKey = (slug: string) => `aws-approve:history:${slug}`;

export function saveInProgressAttempt(attempt: Attempt): void {
  localStorage.setItem(inProgressKey(attempt.simuladoSlug), JSON.stringify(attempt));
}

export function loadInProgressAttempt(slug: string): Attempt | null {
  const raw = localStorage.getItem(inProgressKey(slug));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Attempt;
  } catch {
    return null;
  }
}

export function clearInProgressAttempt(slug: string): void {
  localStorage.removeItem(inProgressKey(slug));
}

export function saveCompletedResult(result: CompletedResult): void {
  const history = loadHistory(result.simuladoSlug);
  history.push(result);
  localStorage.setItem(historyKey(result.simuladoSlug), JSON.stringify(history));
}

export function loadHistory(slug: string): CompletedResult[] {
  const raw = localStorage.getItem(historyKey(slug));
  if (!raw) return [];
  try {
    return JSON.parse(raw) as CompletedResult[];
  } catch {
    return [];
  }
}

export function getBestScore(slug: string): number | null {
  const history = loadHistory(slug);
  if (history.length === 0) return null;
  return Math.max(...history.map((entry) => entry.scorePercent));
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `bunx vitest run lib/storage/attempt-storage.test.ts`
Expected: PASS (8 tests)

- [ ] **Step 5: Commit**

```bash
git add lib/storage/attempt-storage.ts lib/storage/attempt-storage.test.ts
git commit -m "feat: add localStorage persistence for attempts and history"
```

---

### Task 7: Auth core — credentials and session tokens

**Files:**
- Create: `lib/auth/constants.ts`
- Create: `lib/auth/credentials.ts`
- Create: `lib/auth/session.ts`
- Test: `lib/auth/credentials.test.ts`
- Test: `lib/auth/session.test.ts`

**Interfaces:**
- Produces: `SESSION_COOKIE: string`, `verifyCredentials(email: string, password: string): boolean`, `createSessionToken(email: string): string`, `verifySessionToken(token: string): { email: string; iat: number } | null`

- [ ] **Step 1: Write the failing credentials test**

```ts
// lib/auth/credentials.test.ts
import { describe, it, expect, afterEach, vi } from "vitest";
import { verifyCredentials } from "./credentials";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("verifyCredentials", () => {
  it("returns true for the exact configured pair", () => {
    vi.stubEnv("APP_LOGIN_EMAIL", "user@example.com");
    vi.stubEnv("APP_LOGIN_PASSWORD", "secret123");
    expect(verifyCredentials("user@example.com", "secret123")).toBe(true);
  });

  it("returns false when either value is wrong", () => {
    vi.stubEnv("APP_LOGIN_EMAIL", "user@example.com");
    vi.stubEnv("APP_LOGIN_PASSWORD", "secret123");
    expect(verifyCredentials("user@example.com", "wrong")).toBe(false);
    expect(verifyCredentials("wrong@example.com", "secret123")).toBe(false);
  });

  it("throws when the env vars are not configured", () => {
    vi.stubEnv("APP_LOGIN_EMAIL", "");
    vi.stubEnv("APP_LOGIN_PASSWORD", "");
    expect(() => verifyCredentials("a", "b")).toThrow();
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run lib/auth/credentials.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement constants + credentials**

```ts
// lib/auth/constants.ts
export const SESSION_COOKIE = "session";
```

```ts
// lib/auth/credentials.ts
export function verifyCredentials(email: string, password: string): boolean {
  const validEmail = process.env.APP_LOGIN_EMAIL;
  const validPassword = process.env.APP_LOGIN_PASSWORD;
  if (!validEmail || !validPassword) {
    throw new Error("APP_LOGIN_EMAIL and APP_LOGIN_PASSWORD must be set");
  }
  return email === validEmail && password === validPassword;
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `bunx vitest run lib/auth/credentials.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Write the failing session test**

```ts
// lib/auth/session.test.ts
import { describe, it, expect, afterEach, vi } from "vitest";
import { createSessionToken, verifySessionToken } from "./session";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("session tokens", () => {
  it("round-trips the email through create/verify", () => {
    vi.stubEnv("SESSION_SECRET", "test-secret");
    const token = createSessionToken("user@example.com");
    const payload = verifySessionToken(token);
    expect(payload?.email).toBe("user@example.com");
  });

  it("rejects a tampered payload", () => {
    vi.stubEnv("SESSION_SECRET", "test-secret");
    const token = createSessionToken("user@example.com");
    const [payload, signature] = token.split(".");
    const tampered = `${Buffer.from(JSON.stringify({ email: "attacker@example.com", iat: Date.now() })).toString("base64url")}.${signature}`;
    void payload;
    expect(verifySessionToken(tampered)).toBeNull();
  });

  it("rejects garbage input", () => {
    vi.stubEnv("SESSION_SECRET", "test-secret");
    expect(verifySessionToken("not-a-token")).toBeNull();
    expect(verifySessionToken("")).toBeNull();
  });

  it("throws when SESSION_SECRET is not configured", () => {
    vi.stubEnv("SESSION_SECRET", "");
    expect(() => createSessionToken("user@example.com")).toThrow();
  });
});
```

- [ ] **Step 6: Run it to verify it fails**

Run: `bunx vitest run lib/auth/session.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement**

```ts
// lib/auth/session.ts
import { createHmac, timingSafeEqual } from "node:crypto";

interface SessionPayload {
  email: string;
  iat: number;
}

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET must be set");
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function createSessionToken(email: string): string {
  const payload = Buffer.from(
    JSON.stringify({ email, iat: Date.now() } satisfies SessionPayload)
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string): SessionPayload | null {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  const provided = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (provided.length !== expectedBuffer.length || !timingSafeEqual(provided, expectedBuffer)) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as SessionPayload;
  } catch {
    return null;
  }
}
```

- [ ] **Step 8: Run it to verify it passes**

Run: `bunx vitest run lib/auth/session.test.ts`
Expected: PASS (4 tests)

- [ ] **Step 9: Commit**

```bash
git add lib/auth/constants.ts lib/auth/credentials.ts lib/auth/session.ts lib/auth/credentials.test.ts lib/auth/session.test.ts
git commit -m "feat: add credential check and signed session tokens"
```

---

### Task 8: Auth data access layer + protected-path predicate

**Files:**
- Create: `lib/auth/dal.ts`
- Create: `lib/auth/protected-paths.ts`
- Test: `lib/auth/dal.test.ts`
- Test: `lib/auth/protected-paths.test.ts`

**Interfaces:**
- Consumes: `SESSION_COOKIE` (Task 7), `verifySessionToken`, `createSessionToken` (Task 7)
- Produces: `getSession(): Promise<{ email: string } | null>`, `isProtectedPath(pathname: string): boolean`

- [ ] **Step 1: Write the failing protected-paths test**

```ts
// lib/auth/protected-paths.test.ts
import { describe, it, expect } from "vitest";
import { isProtectedPath } from "./protected-paths";

describe("isProtectedPath", () => {
  it("protects /hub and /exam and their sub-paths", () => {
    expect(isProtectedPath("/hub")).toBe(true);
    expect(isProtectedPath("/exam/security-especialist")).toBe(true);
  });

  it("leaves /login and / open", () => {
    expect(isProtectedPath("/login")).toBe(false);
    expect(isProtectedPath("/")).toBe(false);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run lib/auth/protected-paths.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
// lib/auth/protected-paths.ts
const PROTECTED_PREFIXES = ["/hub", "/exam"] as const;

export function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `bunx vitest run lib/auth/protected-paths.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: Write the failing dal test**

```ts
// lib/auth/dal.test.ts
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";

const cookieStore = new Map<string, string>();

vi.mock("next/headers", () => ({
  cookies: async () => ({
    get: (name: string) => (cookieStore.has(name) ? { value: cookieStore.get(name)! } : undefined),
  }),
}));

import { getSession } from "./dal";
import { createSessionToken } from "./session";
import { SESSION_COOKIE } from "./constants";

beforeEach(() => {
  cookieStore.clear();
  vi.stubEnv("SESSION_SECRET", "test-secret");
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getSession", () => {
  it("returns the email for a valid session cookie", async () => {
    cookieStore.set(SESSION_COOKIE, createSessionToken("user@example.com"));
    await expect(getSession()).resolves.toEqual({ email: "user@example.com" });
  });

  it("returns null when there is no cookie", async () => {
    await expect(getSession()).resolves.toBeNull();
  });

  it("returns null for a garbage cookie value", async () => {
    cookieStore.set(SESSION_COOKIE, "garbage");
    await expect(getSession()).resolves.toBeNull();
  });
});
```

- [ ] **Step 6: Run it to verify it fails**

Run: `bunx vitest run lib/auth/dal.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement**

```ts
// lib/auth/dal.ts
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
```

- [ ] **Step 8: Run it to verify it passes**

Run: `bunx vitest run lib/auth/dal.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 9: Commit**

```bash
git add lib/auth/dal.ts lib/auth/protected-paths.ts lib/auth/dal.test.ts lib/auth/protected-paths.test.ts
git commit -m "feat: add session data access layer and protected-path check"
```

---

### Task 9: Dark mode + AWS-themed design tokens

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `components/theme-provider.tsx`
- Create: `components/theme-toggle.tsx`

**Interfaces:**
- Produces: `ThemeProvider` (wraps `next-themes`), `ThemeToggle` component. Every later UI task relies on the recolored tokens (`bg-background`, `text-foreground`, `bg-card`, `bg-primary`, `bg-success`, `bg-destructive`, etc.) instead of hand-written hex/CSS-var classes.

Visual/interactive only — no unit tests. Verified manually in Step 5.

- [ ] **Step 1: Install next-themes**

Run: `bun add next-themes`

- [ ] **Step 2: Recolor the shadcn tokens to the AWS palette, light and dark**

`app/globals.css` already has the full shadcn token scaffold (`@theme inline` mapping + `:root` + `.dark`) from `shadcn init` — replace the color values only, keep the structure:

```css
/* app/globals.css */
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-heading: var(--font-sans);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
}

:root {
  --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  --radius: 0.25rem;

  --background: #f2f3f3;
  --foreground: #16191f;
  --card: #ffffff;
  --card-foreground: #16191f;
  --popover: #ffffff;
  --popover-foreground: #16191f;
  --primary: #ff9900;
  --primary-foreground: #16191f;
  --secondary: #232f3e;
  --secondary-foreground: #ffffff;
  --muted: #eaeded;
  --muted-foreground: #5f6b7a;
  --accent: #f1f8fe;
  --accent-foreground: #146eb4;
  --destructive: #d13212;
  --success: #1d8102;
  --success-foreground: #ffffff;
  --border: #d5dbdb;
  --input: #d5dbdb;
  --ring: #146eb4;
  --chart-1: #ff9900;
  --chart-2: #146eb4;
  --chart-3: #1d8102;
  --chart-4: #d13212;
  --chart-5: #232f3e;
  --sidebar: #ffffff;
  --sidebar-foreground: #16191f;
  --sidebar-primary: #232f3e;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #f1f8fe;
  --sidebar-accent-foreground: #146eb4;
  --sidebar-border: #d5dbdb;
  --sidebar-ring: #146eb4;
}

.dark {
  --background: #16212f;
  --foreground: #eaeded;
  --card: #1f2b3a;
  --card-foreground: #eaeded;
  --popover: #1f2b3a;
  --popover-foreground: #eaeded;
  --primary: #ff9900;
  --primary-foreground: #16191f;
  --secondary: #2b3947;
  --secondary-foreground: #eaeded;
  --muted: #2b3947;
  --muted-foreground: #9aa4b0;
  --accent: #24425a;
  --accent-foreground: #7fc4ff;
  --destructive: #ff6b52;
  --success: #4caf3f;
  --success-foreground: #0d1a08;
  --border: rgba(255, 255, 255, 0.12);
  --input: rgba(255, 255, 255, 0.16);
  --ring: #4ea8de;
  --chart-1: #ff9900;
  --chart-2: #4ea8de;
  --chart-3: #4caf3f;
  --chart-4: #ff6b52;
  --chart-5: #9aa4b0;
  --sidebar: #1f2b3a;
  --sidebar-foreground: #eaeded;
  --sidebar-primary: #ff9900;
  --sidebar-primary-foreground: #16191f;
  --sidebar-accent: #24425a;
  --sidebar-accent-foreground: #7fc4ff;
  --sidebar-border: rgba(255, 255, 255, 0.12);
  --sidebar-ring: #4ea8de;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
  }
}
```

- [ ] **Step 3: Add the theme provider**

```tsx
// components/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}
```

- [ ] **Step 4: Wire it into the root layout and drop the Geist font**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "AWS Approve",
  description: "Simulados de certificação AWS",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Add the theme toggle**

```tsx
// components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" aria-label="Alternar tema" disabled />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Alternar tema"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="inline-flex"
        >
          {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
```

- [ ] **Step 6: Verify manually with the dev server**

Run: `bun run dev`, open `/`. Confirm the page uses the AWS palette (orange primary, navy secondary) in light mode. Click the toggle wherever it's rendered — wait, it isn't rendered on any page yet at this point in the plan (that happens in Tasks 10 and 14); instead render it temporarily in `app/page.tsx` for this check, or open devtools and manually toggle the `dark` class on `<html>` to confirm every token flips correctly and text stays readable in both themes. Remove any temporary test markup before committing.

- [ ] **Step 7: Commit**

```bash
git add app/globals.css app/layout.tsx components/theme-provider.tsx components/theme-toggle.tsx package.json bun.lockb
git commit -m "feat: recolor design tokens to AWS palette and add dark mode"
```

---

### Task 10: proxy.ts, login Server Action, login page

**Files:**
- Create: `proxy.ts`
- Create: `app/login/actions.ts`
- Create: `app/login/page.tsx`
- Create: `.env.local.example`
- Create: `.env.local` (not committed)

**Interfaces:**
- Consumes: `isProtectedPath` (Task 8), `SESSION_COOKIE` (Task 7), `verifyCredentials`, `createSessionToken` (Task 7), shadcn `Button`, `ThemeToggle` (Task 9)
- Produces: `login(prevState: LoginState, formData: FormData): Promise<LoginState>`, `logout(): Promise<void>`, `LoginState = { error: string | null }`

No new unit tests in this task — `proxy.ts` needs a live `NextRequest`, and the Server Action needs a live Next request/response cycle (cookies + redirect). Both are verified with the dev server in Step 7. The logic they depend on (`isProtectedPath`, `verifyCredentials`, `createSessionToken`) is already unit-tested.

- [ ] **Step 1: Create `proxy.ts`**

```ts
// proxy.ts
import { NextRequest, NextResponse } from "next/server";
import { isProtectedPath } from "@/lib/auth/protected-paths";
import { SESSION_COOKIE } from "@/lib/auth/constants";

export function proxy(request: NextRequest) {
  if (!isProtectedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const hasSession = request.cookies.has(SESSION_COOKIE);
  if (!hasSession) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/hub/:path*", "/exam/:path*"],
};
```

- [ ] **Step 2: Create the login Server Action**

```ts
// app/login/actions.ts
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

  redirect("/hub");
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/login");
}
```

- [ ] **Step 3: Add the shadcn Input and Card primitives**

Run: `bunx shadcn@latest add input card`
Expected: adds `components/ui/input.tsx` and `components/ui/card.tsx`.

- [ ] **Step 4: Create the login page**

```tsx
// app/login/page.tsx
"use client";

import { useActionState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-sm"
      >
        <Card className="rounded-sm">
          <CardHeader>
            <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
              AWS Certification · Exame de prática
            </p>
            <h1 className="text-2xl font-semibold text-foreground">Entrar</h1>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium" htmlFor="password">
                  Senha
                </label>
                <Input id="password" name="password" type="password" required />
              </div>

              {state.error ? (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-sm text-destructive"
                >
                  {state.error}
                </motion.p>
              ) : null}

              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? "Entrando…" : "Entrar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
```

- [ ] **Step 5: Create the git-ignored credentials file and its committed example**

```bash
# .env.local
APP_LOGIN_EMAIL=gustavo.rsilva08@gmail.com
APP_LOGIN_PASSWORD=password1234
SESSION_SECRET=<generate with: openssl rand -hex 32>
```

```bash
# .env.local.example
APP_LOGIN_EMAIL=
APP_LOGIN_PASSWORD=
SESSION_SECRET=
```

- [ ] **Step 6: Confirm `.env.local` is git-ignored**

Run: `git check-ignore .env.local`
Expected: prints `.env.local` (if it prints nothing, add `.env*.local` to `.gitignore` before continuing — do not commit real credentials).

- [ ] **Step 7: Verify manually with the dev server**

Run: `bun run dev`, open `/hub` in a browser — expect a redirect to `/login` (no session cookie yet). Confirm the login card renders with the AWS palette, animates in, and the theme toggle in the corner flips it to dark mode correctly. Submit the login form with a wrong password — expect the inline error message, no redirect. Submit with the credentials from `.env.local` — expect a redirect to `/hub` (a 404/blank page is fine here; `/hub` doesn't exist until Task 15 — the important part is the URL actually changes to `/hub` and a `session` cookie is set, visible in devtools).

- [ ] **Step 8: Commit**

```bash
git add proxy.ts app/login/actions.ts app/login/page.tsx .env.local.example .gitignore package.json bun.lockb
git commit -m "feat: add proxy route protection and Phase 1 login"
```

---

### Task 11: Root redirect + logout

**Files:**
- Create: `app/page.tsx` (overwrite the create-next-app scaffold)
- Create: `components/logout-button.tsx`

**Interfaces:**
- Consumes: `getSession` (Task 8), `logout` (Task 10)

No unit test — a Server Component that only redirects, verified manually.

- [ ] **Step 1: Replace the scaffold root page with a session-based redirect**

```tsx
// app/page.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/dal";

export default async function HomePage() {
  const session = await getSession();
  redirect(session ? "/hub" : "/login");
}
```

- [ ] **Step 2: Add the logout button**

```tsx
// components/logout-button.tsx
"use client";

import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/login/actions";

export function LogoutButton() {
  return (
    <form action={logout}>
      <Button type="submit" variant="ghost" size="icon" aria-label="Sair">
        <LogOut className="size-4" />
      </Button>
    </form>
  );
}
```

- [ ] **Step 3: Verify manually with the dev server**

Run: `bun run dev`. With no session cookie, visiting `/` redirects to `/login`. Log in, then visit `/` again — it redirects to `/hub` (still a 404 there until Task 14; confirm the URL, not the page content). `LogoutButton` has no page to render on yet — it's exercised end-to-end once Task 14 places it in the hub header.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/logout-button.tsx
git commit -m "feat: redirect root by session state and add logout button"
```

---

### Task 12: Extract the SCS-C03 question bank

**Files:**
- Create: `scripts/extract-scs-c03.ts`
- Create: `_data/simulado_security_especialist.ts` (generated by the script)
- Test: `_data/simulado_security_especialist.test.ts`

**Interfaces:**
- Consumes: `Simulado`, `Question` (Task 2)
- Produces: `simuladoSecurityEspecialista: Simulado`

- [ ] **Step 1: Write the failing data-integrity test**

```ts
// _data/simulado_security_especialist.test.ts
import { describe, it, expect } from "vitest";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";

describe("simulado_security_especialist data integrity", () => {
  it("has a non-empty bank of questions with unique ids", () => {
    const { questions } = simuladoSecurityEspecialista;
    expect(questions.length).toBeGreaterThan(0);
    expect(new Set(questions.map((q) => q.id)).size).toBe(questions.length);
  });

  it("examQuestionCount does not exceed the bank size", () => {
    expect(simuladoSecurityEspecialista.examQuestionCount).toBeLessThanOrEqual(
      simuladoSecurityEspecialista.questions.length
    );
  });

  it("every single/multi answer id exists among that question's options", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "single" || q.type === "multi") {
        const optionIds = new Set(q.options.map((o) => o.id));
        for (const a of q.answer) expect(optionIds.has(a)).toBe(true);
      }
    }
  });

  it("every multi question's answer length matches its pick count", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "multi") expect(q.answer).toHaveLength(q.pick);
    }
  });

  it("every order question's answer indices are within its pool bounds", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "order") {
        for (const i of q.answer) {
          expect(i).toBeGreaterThanOrEqual(0);
          expect(i).toBeLessThan(q.pool.length);
        }
      }
    }
  });

  it("every match question's prompt targets are within its pool bounds", () => {
    for (const q of simuladoSecurityEspecialista.questions) {
      if (q.type === "match") {
        for (const prompt of q.prompts) {
          expect(prompt.a).toBeGreaterThanOrEqual(0);
          expect(prompt.a).toBeLessThan(q.pool.length);
        }
      }
    }
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run _data/simulado_security_especialist.test.ts`
Expected: FAIL — `_data/simulado_security_especialist.ts` does not exist yet.

- [ ] **Step 3: Write the one-off extraction script**

```ts
// scripts/extract-scs-c03.ts
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

interface RawOption {
  id: string;
  text?: string;
  code?: string;
}

interface RawMatchPrompt {
  t: string;
  a: number;
}

interface RawQuestion {
  type: "single" | "multi" | "order" | "match";
  stem: string;
  code?: string;
  ask?: string;
  options?: RawOption[];
  answer?: string[] | number[];
  pick?: number;
  pool?: string[];
  prompts?: RawMatchPrompt[];
}

const htmlPath = resolve(process.cwd(), "simulado-scs-c03.html");
const html = readFileSync(htmlPath, "utf8");

const startMarker = "const QUESTIONS = [";
const endMarker = "\n];";
const start = html.indexOf(startMarker);
if (start === -1) throw new Error("QUESTIONS array not found in simulado-scs-c03.html");
const arrayStart = start + startMarker.length - 1;
const end = html.indexOf(endMarker, arrayStart);
if (end === -1) throw new Error("End of QUESTIONS array not found");
const arraySource = html.slice(arrayStart, end + 1);

const rawQuestions = new Function(`"use strict"; return (${arraySource});`)() as RawQuestion[];

const EXAM_CODE = "SCS-C03";

const questions = rawQuestions.map((raw, index) => {
  const id = `${EXAM_CODE}-${index + 1}`;
  const base = {
    id,
    stem: raw.stem,
    ...(raw.ask ? { ask: raw.ask } : {}),
    ...(raw.code ? { code: raw.code } : {}),
  };

  if (raw.type === "single") {
    return { ...base, type: "single" as const, options: raw.options!, answer: raw.answer as string[] };
  }
  if (raw.type === "multi") {
    return {
      ...base,
      type: "multi" as const,
      pick: raw.pick!,
      options: raw.options!,
      answer: raw.answer as string[],
    };
  }
  if (raw.type === "order") {
    return { ...base, type: "order" as const, pool: raw.pool!, answer: raw.answer as number[] };
  }
  return { ...base, type: "match" as const, pool: raw.pool!, prompts: raw.prompts! };
});

const fileContent = `import type { Simulado } from "@/types/simulado";

export const simuladoSecurityEspecialista: Simulado = {
  slug: "security-especialist",
  title: "AWS Certified Security – Specialty",
  examCode: "${EXAM_CODE}",
  level: "specialty",
  examQuestionCount: 65,
  examDurationMinutes: 170,
  passingScore: 75,
  questions: ${JSON.stringify(questions, null, 2)},
};
`;

writeFileSync(resolve(process.cwd(), "_data/simulado_security_especialist.ts"), fileContent, "utf8");
console.log(`Wrote ${questions.length} questions to _data/simulado_security_especialist.ts`);
```

- [ ] **Step 4: Run the script**

Run: `bun run scripts/extract-scs-c03.ts`
Expected: prints `Wrote 85 questions to _data/simulado_security_especialist.ts` (count may differ slightly — trust what it reports, the test in Step 5 validates correctness, not the exact number).

- [ ] **Step 5: Run the test to verify it passes**

Run: `bunx vitest run _data/simulado_security_especialist.test.ts`
Expected: PASS (6 tests). If it fails, inspect `_data/simulado_security_especialist.ts` directly — the most likely cause is the source HTML's array literal using a construct the script's `Function` eval didn't like; fix the script, rerun Step 4, then this step again.

- [ ] **Step 6: Type-check the generated file**

Run: `bunx tsc --noEmit`
Expected: no errors — confirms the generated data matches the `Simulado`/`Question` types from Task 2.

- [ ] **Step 7: Commit**

```bash
git add scripts/extract-scs-c03.ts _data/simulado_security_especialist.ts _data/simulado_security_especialist.test.ts
git commit -m "feat: extract SCS-C03 question bank from the HTML prototype"
```

---

### Task 13: Simulado registry

**Files:**
- Create: `_data/index.ts`
- Test: `_data/index.test.ts`

**Interfaces:**
- Consumes: `simuladoSecurityEspecialista` (Task 12)
- Produces: `simulados: Simulado[]`, `getSimuladoBySlug(slug: string): Simulado | undefined`

- [ ] **Step 1: Write the failing test**

```ts
// _data/index.test.ts
import { describe, it, expect } from "vitest";
import { getSimuladoBySlug, simulados } from "./index";

describe("simulados registry", () => {
  it("includes the security specialist simulado", () => {
    expect(simulados.map((s) => s.slug)).toContain("security-especialist");
  });

  it("getSimuladoBySlug finds an existing simulado", () => {
    expect(getSimuladoBySlug("security-especialist")?.examCode).toBe("SCS-C03");
  });

  it("getSimuladoBySlug returns undefined for an unknown slug", () => {
    expect(getSimuladoBySlug("does-not-exist")).toBeUndefined();
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx vitest run _data/index.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement**

```ts
// _data/index.ts
import type { Simulado } from "@/types/simulado";
import { simuladoSecurityEspecialista } from "./simulado_security_especialist";

export const simulados: Simulado[] = [simuladoSecurityEspecialista];

export function getSimuladoBySlug(slug: string): Simulado | undefined {
  return simulados.find((simulado) => simulado.slug === slug);
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `bunx vitest run _data/index.test.ts`
Expected: PASS (3 tests)

- [ ] **Step 5: Commit**

```bash
git add _data/index.ts _data/index.test.ts
git commit -m "feat: add simulados registry"
```

---

### Task 14: Hub page

**Files:**
- Create: `app/hub/page.tsx`
- Create: `components/hub/simulado-card.tsx`

**Interfaces:**
- Consumes: `getSession` (Task 8), `simulados` (Task 13), `getBestScore` (Task 6), `ThemeToggle` (Task 9), `LogoutButton` (Task 11), shadcn `Button`/`buttonVariants`/`Card` (Tasks 9-10)
- Produces: `SimuladoCard` component

No unit test — page composition and a `useEffect`-driven localStorage read, verified manually.

- [ ] **Step 1: Add the shadcn Badge primitive**

Run: `bunx shadcn@latest add badge`

- [ ] **Step 2: Create the hub page**

```tsx
// app/hub/page.tsx
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/dal";
import { simulados } from "@/_data";
import { SimuladoCard } from "@/components/hub/simulado-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/components/logout-button";

export default async function HubPage() {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] tracking-[.16em] uppercase text-secondary-foreground/70 font-bold">
              AWS Certification
            </p>
            <h1 className="text-lg font-bold">Simulados disponíveis</h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {simulados.map((simulado, index) => (
          <SimuladoCard key={simulado.slug} simulado={simulado} index={index} />
        ))}
      </main>
    </div>
  );
}
```

- [ ] **Step 3: Create the simulado card**

```tsx
// components/hub/simulado-card.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getBestScore } from "@/lib/storage/attempt-storage";
import type { Simulado } from "@/types/simulado";

export function SimuladoCard({ simulado, index }: { simulado: Simulado; index: number }) {
  const [bestScore, setBestScore] = useState<number | null>(null);

  useEffect(() => {
    setBestScore(getBestScore(simulado.slug));
  }, [simulado.slug]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05 }}
    >
      <Card className="rounded-sm h-full flex flex-col">
        <CardHeader>
          <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
            {simulado.examCode}
          </p>
          <h2 className="text-lg font-semibold text-foreground">{simulado.title}</h2>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            {simulado.questions.length} questões no banco · prova oficial com{" "}
            {simulado.examQuestionCount}
          </p>
          {bestScore !== null ? (
            <Badge variant="secondary" className="w-fit">
              Melhor nota: {bestScore}%
            </Badge>
          ) : null}
        </CardContent>
        <CardFooter>
          <Link href={`/exam/${simulado.slug}`} className={buttonVariants({ className: "w-full" })}>
            Fazer simulado
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
```

- [ ] **Step 4: Verify manually with the dev server**

Run: `bun run dev`, log in, land on `/hub`. Confirm the card animates in, shows the AWS-styled header (navy bar), the theme toggle flips light/dark, and the logout button (now functional end-to-end) clears the session and returns to `/login`. "Fazer simulado" links to `/exam/security-especialist` (404 until Task 15).

- [ ] **Step 5: Commit**

```bash
git add app/hub/page.tsx components/hub/simulado-card.tsx package.json bun.lockb
git commit -m "feat: add hub page listing available simulados"
```

---

### Task 15: Exam page shell + intro/config screen

**Files:**
- Create: `app/exam/[slug]/page.tsx`
- Create: `components/exam/exam-intro.tsx`
- Create: `components/exam/exam-runner.tsx` (skeleton — filled in by Task 16)

**Interfaces:**
- Consumes: `getSession` (Task 8), `getSimuladoBySlug` (Task 13), `buildAttempt` (Task 5), `getPassingScore` (Task 5)
- Produces: `ExamIntro` component (`onStart: (config: ExamConfig) => void`), `ExamRunner` component

No unit test — verified manually.

- [ ] **Step 1: Add the shadcn Switch primitive**

Run: `bunx shadcn@latest add switch`

- [ ] **Step 2: Create the exam page**

```tsx
// app/exam/[slug]/page.tsx
import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/dal";
import { getSimuladoBySlug } from "@/_data";
import { ExamRunner } from "@/components/exam/exam-runner";

export default async function ExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { slug } = await params;
  const simulado = getSimuladoBySlug(slug);
  if (!simulado) notFound();

  return <ExamRunner simulado={simulado} />;
}
```

- [ ] **Step 3: Create the intro/config screen**

```tsx
// components/exam/exam-intro.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { getPassingScore } from "@/lib/exam/constants";
import type { ExamConfig, Simulado } from "@/types/simulado";

const DEFAULT_CONFIG: ExamConfig = {
  questionSource: "all",
  timerEnabled: false,
  immediateFeedback: true,
  shuffleQuestions: false,
  shuffleOptions: false,
};

export function ExamIntro({
  simulado,
  onStart,
}: {
  simulado: Simulado;
  onStart: (config: ExamConfig) => void;
}) {
  const [config, setConfig] = useState<ExamConfig>(DEFAULT_CONFIG);

  function applyRealExamPreset() {
    setConfig({
      questionSource: "official",
      timerEnabled: true,
      immediateFeedback: false,
      shuffleQuestions: true,
      shuffleOptions: true,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-2xl mx-auto px-4 py-10"
    >
      <Card className="rounded-sm">
        <CardHeader>
          <p className="text-[10px] tracking-[.16em] uppercase text-muted-foreground font-bold">
            {simulado.examCode} · Exame de prática
          </p>
          <h1 className="text-2xl font-semibold text-foreground">{simulado.title}</h1>
          <p className="text-sm text-muted-foreground">
            Banco de {simulado.questions.length} questões · prova oficial com{" "}
            {simulado.examQuestionCount} questões em {simulado.examDurationMinutes} min · nota de
            aprovação {getPassingScore(simulado)}%
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Button type="button" variant="outline" onClick={applyRealExamPreset}>
            Simular prova real
          </Button>

          <ToggleRow
            label="Quantidade oficial de questões"
            description={`Usa ${simulado.examQuestionCount} de ${simulado.questions.length} questões, sorteadas.`}
            checked={config.questionSource === "official"}
            onCheckedChange={(checked) =>
              setConfig((c) => ({ ...c, questionSource: checked ? "official" : "all" }))
            }
          />
          <ToggleRow
            label="Cronômetro"
            description="Ao zerar, o simulado é finalizado automaticamente."
            checked={config.timerEnabled}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, timerEnabled: checked }))}
          />
          <ToggleRow
            label="Feedback imediato"
            description="Mostra certo/errado ao confirmar cada resposta."
            checked={config.immediateFeedback}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, immediateFeedback: checked }))}
          />
          <ToggleRow
            label="Embaralhar questões"
            description="A ordem muda a cada tentativa."
            checked={config.shuffleQuestions}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, shuffleQuestions: checked }))}
          />
          <ToggleRow
            label="Embaralhar alternativas"
            description="Vale para múltipla escolha e resposta múltipla."
            checked={config.shuffleOptions}
            onCheckedChange={(checked) => setConfig((c) => ({ ...c, shuffleOptions: checked }))}
          />

          <Button type="button" onClick={() => onStart(config)} className="w-full">
            Iniciar exame
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-start justify-between gap-4 cursor-pointer">
      <span>
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="block text-sm text-muted-foreground">{description}</span>
      </span>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </label>
  );
}
```

- [ ] **Step 4: Create the exam runner skeleton**

```tsx
// components/exam/exam-runner.tsx
"use client";

import { useState } from "react";
import type { Attempt, ExamConfig, Simulado } from "@/types/simulado";
import { buildAttempt } from "@/lib/exam/build-attempt";
import { ExamIntro } from "./exam-intro";

type Phase = "intro" | "running" | "results";

export function ExamRunner({ simulado }: { simulado: Simulado }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [attempt, setAttempt] = useState<Attempt | null>(null);

  function handleStart(config: ExamConfig) {
    setAttempt(buildAttempt(simulado, config));
    setPhase("running");
  }

  if (phase === "intro" || !attempt) {
    return <ExamIntro simulado={simulado} onStart={handleStart} />;
  }

  if (phase === "running") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-sm text-muted-foreground">
          {attempt.order.length} questões carregadas — a tela de pergunta chega na próxima tarefa.
        </p>
      </div>
    );
  }

  return <div className="max-w-3xl mx-auto px-4 py-10">Resultado — chega em tarefa futura.</div>;
}
```

- [ ] **Step 5: Verify manually with the dev server**

Run: `bun run dev`, log in, go to `/exam/security-especialist`. Confirm the intro card renders with the right counts, toggling each `Switch` works, "Simular prova real" flips all five toggles to the real-exam preset, and "Iniciar exame" shows the placeholder text with the expected question count (65 with "Quantidade oficial" on, the full bank size with it off).

- [ ] **Step 6: Commit**

```bash
git add app/exam/[slug]/page.tsx components/exam/exam-intro.tsx components/exam/exam-runner.tsx package.json bun.lockb
git commit -m "feat: add exam page shell and configuration screen"
```

---

### Task 16: Question renderers + exam runner core loop

**Files:**
- Create: `components/exam/options-question.tsx`
- Create: `components/exam/order-question.tsx`
- Create: `components/exam/match-question.tsx`
- Create: `components/exam/exam-nav-panel.tsx`
- Modify: `components/exam/exam-runner.tsx` (replace the `phase === "running"` placeholder with the full interaction loop)

**Interfaces:**
- Consumes: `isQuestionReady`, `gradeQuestion` (Task 4), `QuestionState`, `Question` variants (Task 2)
- Produces: `finishAttempt()` (defined inline in `exam-runner.tsx`, extended by Task 18) — the deliverable a full run of the exam question-by-question depends on.

No unit tests — this is the interactive core of the app; verified manually in Step 6 by actually taking the exam end to end.

- [ ] **Step 1: Add the shadcn Select primitive**

Run: `bunx shadcn@latest add select`

- [ ] **Step 2: Create the options (single/multi) renderer**

```tsx
// components/exam/options-question.tsx
"use client";

import { cn } from "@/lib/utils";
import type { MultiQuestion, QuestionState, SingleQuestion } from "@/types/simulado";

const LETTERS = "ABCDEFG";

export function OptionsQuestion({
  question,
  state,
  revealAnswer,
  onChange,
}: {
  question: SingleQuestion | MultiQuestion;
  state: QuestionState;
  revealAnswer: boolean;
  onChange: (picked: number[]) => void;
}) {
  function toggle(optionIndex: number) {
    if (state.locked) return;
    if (question.type === "single") {
      onChange([optionIndex]);
      return;
    }
    if (state.picked.includes(optionIndex)) {
      onChange(state.picked.filter((i) => i !== optionIndex));
      return;
    }
    if (state.picked.length >= question.pick) return;
    onChange([...state.picked, optionIndex]);
  }

  return (
    <div className="flex flex-col gap-1">
      {question.type === "multi" ? (
        <p className="mb-2 text-sm text-muted-foreground">Selecione {question.pick} alternativas.</p>
      ) : null}
      <ul className="flex flex-col gap-2">
        {state.optOrder.map((optionIndex, position) => {
          const option = question.options[optionIndex]!;
          const isSelected = state.picked.includes(optionIndex);
          const isCorrectOption = question.answer.includes(option.id);

          return (
            <li key={option.id}>
              <button
                type="button"
                disabled={state.locked}
                onClick={() => toggle(optionIndex)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-sm border border-border bg-card px-4 py-3 text-left transition-colors",
                  !state.locked && "cursor-pointer hover:bg-muted",
                  isSelected && !revealAnswer && "border-ring bg-accent",
                  revealAnswer && isCorrectOption && "border-success bg-success/10",
                  revealAnswer && isSelected && !isCorrectOption && "border-destructive bg-destructive/10"
                )}
              >
                <span className="font-mono font-bold text-muted-foreground">{LETTERS[position]}</span>
                <span className="flex-1">
                  {option.text ? <span>{option.text}</span> : null}
                  {option.code ? (
                    <pre className="mt-2 overflow-x-auto rounded-sm bg-muted p-3 font-mono text-xs">
                      {option.code}
                    </pre>
                  ) : null}
                </span>
                {revealAnswer && isCorrectOption ? (
                  <span className="text-xs font-bold uppercase text-success">Correta</span>
                ) : null}
                {revealAnswer && isSelected && !isCorrectOption ? (
                  <span className="text-xs font-bold uppercase text-destructive">Sua escolha</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
```

- [ ] **Step 3: Create the order renderer**

```tsx
// components/exam/order-question.tsx
"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { OrderQuestion as OrderQuestionType, QuestionState } from "@/types/simulado";

export function OrderQuestion({
  question,
  state,
  revealAnswer,
  onChange,
}: {
  question: OrderQuestionType;
  state: QuestionState;
  revealAnswer: boolean;
  onChange: (slots: (number | null)[]) => void;
}) {
  function setSlot(slotIndex: number, value: string) {
    const next = [...state.slots];
    next[slotIndex] = value === "" ? null : Number(value);
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-3">
      {state.slots.map((value, slotIndex) => {
        const isCorrect = revealAnswer && value === question.answer[slotIndex];
        return (
          <div
            key={slotIndex}
            className={cn(
              "rounded-sm border border-border bg-card p-3",
              revealAnswer && (isCorrect ? "border-success bg-success/10" : "border-destructive bg-destructive/10")
            )}
          >
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Etapa {slotIndex + 1}
            </p>
            <Select
              disabled={state.locked}
              value={value === null ? "" : String(value)}
              onValueChange={(next) => setSlot(slotIndex, next)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecionar…" />
              </SelectTrigger>
              <SelectContent>
                {question.pool.map((item, poolIndex) => (
                  <SelectItem key={poolIndex} value={String(poolIndex)}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {revealAnswer && !isCorrect ? (
              <p className="mt-2 text-sm font-medium text-success">
                Correta: {question.pool[question.answer[slotIndex]!]}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 4: Create the match renderer**

```tsx
// components/exam/match-question.tsx
"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { MatchQuestion as MatchQuestionType, QuestionState } from "@/types/simulado";

export function MatchQuestion({
  question,
  state,
  revealAnswer,
  onChange,
}: {
  question: MatchQuestionType;
  state: QuestionState;
  revealAnswer: boolean;
  onChange: (slots: (number | null)[]) => void;
}) {
  function setSlot(slotIndex: number, value: string) {
    const next = [...state.slots];
    next[slotIndex] = value === "" ? null : Number(value);
    onChange(next);
  }

  return (
    <div className="flex flex-col gap-3">
      {question.prompts.map((prompt, slotIndex) => {
        const value = state.slots[slotIndex] ?? null;
        const isCorrect = revealAnswer && value === prompt.a;
        return (
          <div
            key={slotIndex}
            className={cn(
              "rounded-sm border border-border bg-card p-3",
              revealAnswer && (isCorrect ? "border-success bg-success/10" : "border-destructive bg-destructive/10")
            )}
          >
            <p className="mb-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
              Requisito {slotIndex + 1}
            </p>
            <p className="mb-2 text-sm text-foreground">{prompt.t}</p>
            <Select
              disabled={state.locked}
              value={value === null ? "" : String(value)}
              onValueChange={(next) => setSlot(slotIndex, next)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecionar…" />
              </SelectTrigger>
              <SelectContent>
                {question.pool.map((item, poolIndex) => (
                  <SelectItem key={poolIndex} value={String(poolIndex)}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {revealAnswer && !isCorrect ? (
              <p className="mt-2 text-sm font-medium text-success">Correta: {question.pool[prompt.a]}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 5: Create the review/navigation panel**

```tsx
// components/exam/exam-nav-panel.tsx
"use client";

import { cn } from "@/lib/utils";
import type { QuestionState } from "@/types/simulado";

export function ExamNavPanel({
  states,
  currentIndex,
  revealAnswers,
  onSelect,
}: {
  states: QuestionState[];
  currentIndex: number;
  revealAnswers: boolean;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mb-4 rounded-sm border border-border bg-card p-4">
      <div className="mb-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
        <Legend swatch="border border-border bg-card" label="Não respondida" />
        <Legend swatch="border border-success bg-success/10" label="Correta" />
        <Legend swatch="border border-destructive bg-destructive/10" label="Incorreta" />
        <Legend swatch="rounded-full bg-primary" label="Marcada para revisão" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] gap-1.5">
        {states.map((state, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "relative rounded-sm border border-border bg-card py-1.5 font-mono text-xs font-bold text-foreground",
              revealAnswers && state.correct === true && "border-success bg-success/10",
              revealAnswers && state.correct === false && "border-destructive bg-destructive/10",
              index === currentIndex && "outline outline-2 outline-foreground"
            )}
          >
            {index + 1}
            {state.flagged ? (
              <span className="absolute top-0.5 right-0.5 size-1.5 rounded-full bg-primary" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={cn("inline-block size-2.5 rounded-[2px]", swatch)} />
      {label}
    </span>
  );
}
```

- [ ] **Step 6: Replace the exam runner's running-phase placeholder with the full loop**

```tsx
// components/exam/exam-runner.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { Attempt, ExamConfig, QuestionState, Simulado } from "@/types/simulado";
import { buildAttempt } from "@/lib/exam/build-attempt";
import { gradeQuestion, isQuestionReady } from "@/lib/exam/grading";
import { ExamIntro } from "./exam-intro";
import { ExamNavPanel } from "./exam-nav-panel";
import { MatchQuestion } from "./match-question";
import { OptionsQuestion } from "./options-question";
import { OrderQuestion } from "./order-question";

type Phase = "intro" | "running" | "results";

const TYPE_LABEL: Record<string, string> = {
  single: "Múltipla escolha",
  multi: "Resposta múltipla",
  order: "Ordenação",
  match: "Correspondência",
};

export function ExamRunner({ simulado }: { simulado: Simulado }) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [showNav, setShowNav] = useState(false);

  function handleStart(config: ExamConfig) {
    setAttempt(buildAttempt(simulado, config));
    setPhase("running");
  }

  if (phase === "intro" || !attempt) {
    return <ExamIntro simulado={simulado} onStart={handleStart} />;
  }

  if (phase === "results") {
    return <div className="max-w-3xl mx-auto px-4 py-10">Resultado — chega em tarefa futura.</div>;
  }

  const question = simulado.questions[attempt.order[attempt.currentIndex]!]!;
  const state = attempt.states[attempt.currentIndex]!;
  const revealAnswer = state.locked && attempt.config.immediateFeedback;
  const answeredCount = attempt.states.filter((s) => s.locked).length;
  const correctCount = attempt.states.filter((s) => s.correct === true).length;

  function updateState(patch: Partial<QuestionState>) {
    setAttempt((prev) => {
      if (!prev) return prev;
      const states = [...prev.states];
      states[prev.currentIndex] = { ...states[prev.currentIndex]!, ...patch };
      return { ...prev, states };
    });
  }

  function goTo(index: number) {
    setAttempt((prev) => (prev ? { ...prev, currentIndex: index } : prev));
    setShowNav(false);
  }

  function finishAttempt() {
    setPhase("results");
  }

  function requestFinish() {
    const pending = attempt.order.length - answeredCount;
    if (pending > 0 && !window.confirm(`Ainda há ${pending} questão(ões) sem resposta. Finalizar agora?`)) {
      return;
    }
    finishAttempt();
  }

  function confirmAnswer() {
    if (state.locked) {
      if (attempt.currentIndex >= attempt.order.length - 1) {
        finishAttempt();
      } else {
        goTo(attempt.currentIndex + 1);
      }
      return;
    }
    if (!isQuestionReady(question, state)) return;
    updateState({ locked: true, correct: gradeQuestion(question, state) });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pb-28">
      {showNav ? (
        <ExamNavPanel
          states={attempt.states}
          currentIndex={attempt.currentIndex}
          revealAnswers={attempt.config.immediateFeedback}
          onSelect={goTo}
        />
      ) : null}

      <AnimatePresence mode="wait">
        <motion.div
          key={attempt.currentIndex}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className="rounded-sm border border-border bg-card"
        >
          <div className="flex items-center gap-3 border-b border-border px-5 py-3">
            <span className="font-mono text-xs font-bold text-muted-foreground">
              Questão {attempt.currentIndex + 1} de {attempt.order.length}
            </span>
            <span className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
              {TYPE_LABEL[question.type]}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="ml-auto"
              onClick={() => updateState({ flagged: !state.flagged })}
            >
              {state.flagged ? "Marcada para revisão" : "Marcar para revisão"}
            </Button>
          </div>

          <div className="p-5">
            <p className="whitespace-pre-wrap text-foreground">{question.stem}</p>
            {question.code ? (
              <pre className="mt-3 overflow-x-auto rounded-sm bg-muted p-3 font-mono text-xs">{question.code}</pre>
            ) : null}
            {question.ask ? <p className="mt-4 font-semibold text-foreground">{question.ask}</p> : null}

            <div className="mt-4">
              {question.type === "single" || question.type === "multi" ? (
                <OptionsQuestion
                  question={question}
                  state={state}
                  revealAnswer={revealAnswer}
                  onChange={(picked) => updateState({ picked })}
                />
              ) : question.type === "order" ? (
                <OrderQuestion
                  question={question}
                  state={state}
                  revealAnswer={revealAnswer}
                  onChange={(slots) => updateState({ slots })}
                />
              ) : (
                <MatchQuestion
                  question={question}
                  state={state}
                  revealAnswer={revealAnswer}
                  onChange={(slots) => updateState({ slots })}
                />
              )}
            </div>

            {revealAnswer ? (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className={
                  state.correct
                    ? "mt-4 rounded-sm border border-success bg-success/10 px-4 py-2 text-sm font-bold text-success"
                    : "mt-4 rounded-sm border border-destructive bg-destructive/10 px-4 py-2 text-sm font-bold text-destructive"
                }
              >
                {state.correct ? "Correto" : "Incorreto"}
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="fixed inset-x-0 bottom-0 border-t border-border bg-card px-4 py-3">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-3">
          <span className="mr-auto text-sm text-muted-foreground">
            Respondidas <b className="text-foreground">{answeredCount}</b> de {attempt.order.length}
            {attempt.config.immediateFeedback ? (
              <>
                {" "}
                · Corretas <b className="text-foreground">{correctCount}</b>
              </>
            ) : null}
          </span>
          <Button type="button" variant="outline" onClick={() => setShowNav((v) => !v)}>
            {showNav ? "Fechar revisão" : "Revisar questões"}
          </Button>
          <Button type="button" variant="outline" onClick={requestFinish}>
            Finalizar
          </Button>
          <Button
            type="button"
            variant="secondary"
            disabled={attempt.currentIndex === 0}
            onClick={() => goTo(attempt.currentIndex - 1)}
          >
            Anterior
          </Button>
          <Button
            type="button"
            onClick={confirmAnswer}
            disabled={!state.locked && !isQuestionReady(question, state)}
          >
            {state.locked
              ? attempt.currentIndex >= attempt.order.length - 1
                ? "Ver resultado"
                : "Próxima questão"
              : "Confirmar resposta"}
          </Button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Verify manually with the dev server**

Run: `bun run dev`, go through `/exam/security-especialist`. Confirm: each of the 4 question types (`single`/`multi`/`order`/`match` — scroll through a few questions to hit all of them) renders and can be answered; "Confirmar resposta" is disabled until the question is ready (1 pick for single, exactly `pick` for multi, every slot filled for order/match); confirming locks the question and — only when "Feedback imediato" is on — shows the correct/incorrect coloring and banner; "Marcar para revisão" toggles and shows in the nav panel as an orange dot; "Revisar questões" opens the grid and clicking a cell jumps to that question; "Finalizar" with unanswered questions prompts a native confirm dialog. With "Feedback imediato" off, confirm that no coloring appears even though you can still move on to the next question.

- [ ] **Step 8: Commit**

```bash
git add components/exam/options-question.tsx components/exam/order-question.tsx components/exam/match-question.tsx components/exam/exam-nav-panel.tsx components/exam/exam-runner.tsx package.json bun.lockb
git commit -m "feat: add question renderers and the exam interaction loop"
```

---

### Task 17: Timer, pause, and auto-submit

**Files:**
- Modify: `components/exam/exam-runner.tsx`

**Interfaces:**
- Consumes: `formatTime` (Task 1)

No unit test — timing/interaction behavior, verified manually.

- [ ] **Step 1: Add the countdown, pause state, and header clock**

In `components/exam/exam-runner.tsx`:

Replace the existing `import { useState } from "react";` with:

```ts
import { useEffect, useState } from "react";
import { formatTime } from "@/lib/format-time";
```

**Both the new state and the new effect must go before the `if (phase === "intro" || !attempt) { ... }` early return** — React requires every hook to run unconditionally on every render, and that guard already makes the rest of the function conditional. Add the state right after the existing `const [showNav, setShowNav] = useState(false);` line:

```ts
const [paused, setPaused] = useState(false);
```

Add the ticking effect right after that, still before the `if (phase === "intro" || !attempt)` guard. Because it runs before the guard, `attempt` isn't narrowed to non-null yet, so the effect checks it itself; `finishAttempt` is a `function` declaration further down in the same component body — function declarations hoist within their scope, so calling it here is safe even though it's textually defined later and even though `attempt` is still possibly `null` at the top of the component:

```ts
useEffect(() => {
  if (phase !== "running" || !attempt || !attempt.config.timerEnabled || paused) return;
  if (attempt.secondsRemaining <= 0) {
    finishAttempt();
    return;
  }
  const id = setInterval(() => {
    setAttempt((prev) => (prev ? { ...prev, secondsRemaining: prev.secondsRemaining - 1 } : prev));
  }, 1000);
  return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [phase, attempt, paused]);
```

The effect re-runs every second because `attempt` (specifically `attempt.secondsRemaining`) is in its dependency array, so `finishAttempt` is never called through a stale closure — that's also why it's safe to omit from the dependency list.

- [ ] **Step 2: Show the clock and gate pause behind the timer being off**

In the question card header (the `<div className="flex items-center gap-3 border-b ...">` block from Task 16), add the clock before the flag button and a Pause control that only appears when the timer is disabled:

```tsx
<div className="flex items-center gap-3 border-b border-border px-5 py-3">
  <span className="font-mono text-xs font-bold text-muted-foreground">
    Questão {attempt.currentIndex + 1} de {attempt.order.length}
  </span>
  <span className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[10px] font-bold uppercase text-muted-foreground">
    {TYPE_LABEL[question.type]}
  </span>
  {attempt.config.timerEnabled ? (
    <span
      className={cn(
        "font-mono text-xs font-bold",
        attempt.secondsRemaining <= 300 ? "text-destructive" : "text-muted-foreground"
      )}
    >
      {formatTime(attempt.secondsRemaining)}
    </span>
  ) : null}
  {!attempt.config.timerEnabled ? (
    <Button type="button" variant="ghost" size="sm" onClick={() => setPaused(true)}>
      Pausar
    </Button>
  ) : null}
  <Button
    type="button"
    variant="ghost"
    size="sm"
    className="ml-auto"
    onClick={() => updateState({ flagged: !state.flagged })}
  >
    {state.flagged ? "Marcada para revisão" : "Marcar para revisão"}
  </Button>
</div>
```

This introduces `cn` in this file — add `import { cn } from "@/lib/utils";` alongside the other imports.

- [ ] **Step 3: Render the pause overlay**

Add an early return for the paused state, placed right after the `if (phase === "intro" || !attempt) { ... }` guard and before the `if (phase === "results") { ... }` guard (a plain `if`/`return` is fine here — unlike Step 1's hook, this isn't a hook call, so it's free to sit after other early returns). This runs before any of Task 16's nav panel / question card / bottom bar JSX, so none of it needs to be touched or reproduced:

```tsx
if (paused) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 pb-28">
      <div className="rounded-sm border border-border bg-card p-10 text-center">
        <p className="text-lg font-semibold text-foreground">Prova pausada</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Suas respostas estão salvas. Continue quando estiver pronto.
        </p>
        <Button type="button" className="mt-5" onClick={() => setPaused(false)}>
          Continuar
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify manually with the dev server**

Run: `bun run dev`. Start a run with "Cronômetro" off — confirm a "Pausar" button appears in the question header, clicking it replaces the question with the "Prova pausada" overlay, and "Continuar" restores exactly where you left off (selections intact). Start a run with "Cronômetro" on (e.g. via "Simular prova real") — confirm no "Pausar" button appears, the clock counts down in the header and turns red under 5 minutes. To check auto-submit without waiting 170 minutes, temporarily change `examDurationMinutes` on the security-especialist simulado to `1` (1 minute), confirm the exam auto-finishes when it hits `00:00`, then revert that temporary change before committing.

- [ ] **Step 5: Commit**

```bash
git add components/exam/exam-runner.tsx
git commit -m "feat: add exam timer, pause, and auto-submit on timeout"
```

---

### Task 18: Results screen

**Files:**
- Create: `components/exam/exam-results.tsx`
- Modify: `components/exam/exam-runner.tsx`

**Interfaces:**
- Consumes: `saveCompletedResult`, `clearInProgressAttempt` (Task 6), `getPassingScore` (Task 5)
- Produces: `ExamResults` component

No unit test — presentational + wiring, verified manually.

- [ ] **Step 1: Create the results screen**

```tsx
// components/exam/exam-results.tsx
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { getPassingScore } from "@/lib/exam/constants";
import type { Attempt, Simulado } from "@/types/simulado";

const TYPE_LABEL: Record<string, string> = {
  single: "Múltipla escolha",
  multi: "Resposta múltipla",
  order: "Ordenação",
  match: "Correspondência",
};

export function ExamResults({
  simulado,
  attempt,
  onReviewQuestion,
  onRestart,
}: {
  simulado: Simulado;
  attempt: Attempt;
  onReviewQuestion: (index: number) => void;
  onRestart: () => void;
}) {
  const answeredCount = attempt.states.filter((s) => s.locked).length;
  const correctCount = attempt.states.filter((s) => s.correct === true).length;
  const scorePercent = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);
  const passed = scorePercent >= getPassingScore(simulado);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="rounded-sm border border-border bg-card p-7">
        <p className="text-[10px] font-bold uppercase tracking-[.16em] text-muted-foreground">
          Resultado do exame de prática
        </p>
        <h2 className="text-2xl font-semibold text-foreground">{simulado.title}</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`mt-4 font-mono text-6xl font-bold ${passed ? "text-success" : "text-destructive"}`}
        >
          {scorePercent}%
        </motion.div>
        <p className="mt-1 text-sm text-muted-foreground">
          {correctCount} de {answeredCount} questões respondidas corretamente
          {answeredCount < attempt.order.length
            ? ` · ${attempt.order.length - answeredCount} sem resposta`
            : ""}
        </p>

        <div className="mt-4 flex gap-3">
          <Link href="/hub" className={buttonVariants({ variant: "secondary" })}>
            Voltar ao hub
          </Link>
          <Button type="button" onClick={onRestart}>
            Reiniciar simulado
          </Button>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-[10px] uppercase tracking-wide text-muted-foreground">
                <th className="py-2">#</th>
                <th className="py-2">Formato</th>
                <th className="py-2">Situação</th>
                <th className="py-2">Revisão</th>
                <th className="py-2" />
              </tr>
            </thead>
            <tbody>
              {attempt.order.map((questionIndex, position) => {
                const question = simulado.questions[questionIndex]!;
                const state = attempt.states[position]!;
                return (
                  <tr key={question.id} className="border-b border-border/60">
                    <td className="py-2 font-mono">{position + 1}</td>
                    <td className="py-2">{TYPE_LABEL[question.type]}</td>
                    <td
                      className={
                        state.correct === true
                          ? "py-2 font-semibold text-success"
                          : state.correct === false
                            ? "py-2 font-semibold text-destructive"
                            : "py-2 text-muted-foreground"
                      }
                    >
                      {state.correct === true
                        ? "Correta"
                        : state.correct === false
                          ? "Incorreta"
                          : "Não respondida"}
                    </td>
                    <td className="py-2">{state.flagged ? "Marcada" : ""}</td>
                    <td className="py-2">
                      <button
                        type="button"
                        className="text-accent-foreground underline"
                        onClick={() => onReviewQuestion(position)}
                      >
                        Abrir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Wire it into the runner and make `finishAttempt` save the result**

In `components/exam/exam-runner.tsx`:

Add imports:

```ts
import { clearInProgressAttempt, saveCompletedResult } from "@/lib/storage/attempt-storage";
import { getPassingScore } from "@/lib/exam/constants";
import { ExamResults } from "./exam-results";
```

Replace the Task 16 `finishAttempt` body:

```ts
function finishAttempt() {
  setPhase("results");
}
```

with:

```ts
function finishAttempt() {
  const answered = attempt.states.filter((s) => s.locked).length;
  const correct = attempt.states.filter((s) => s.correct === true).length;
  const scorePercent = answered === 0 ? 0 : Math.round((correct / answered) * 100);
  saveCompletedResult({
    simuladoSlug: simulado.slug,
    completedAt: new Date().toISOString(),
    scorePercent,
    correctCount: correct,
    answeredCount: answered,
    totalCount: attempt.order.length,
    passed: scorePercent >= getPassingScore(simulado),
  });
  clearInProgressAttempt(simulado.slug);
  setPhase("results");
}
```

Replace the `if (phase === "results")` placeholder branch:

```tsx
if (phase === "results") {
  return <div className="max-w-3xl mx-auto px-4 py-10">Resultado — chega em tarefa futura.</div>;
}
```

with:

```tsx
if (phase === "results") {
  return (
    <ExamResults
      simulado={simulado}
      attempt={attempt}
      onReviewQuestion={(index) => {
        setAttempt((prev) => (prev ? { ...prev, currentIndex: index } : prev));
        setPhase("running");
      }}
      onRestart={() => {
        setAttempt(null);
        setPhase("intro");
      }}
    />
  );
}
```

(this branch already runs after the `if (phase === "intro" || !attempt) return ...` guard, so `attempt` is non-null here — no extra null check needed.)

- [ ] **Step 3: Verify manually with the dev server**

Run: `bun run dev`. Finish a run (via "Finalizar" or by confirming the last question) — confirm the results card shows the score, the pass/fail color, the per-question table, "Abrir" jumps back into that question in review (still shows the answer coloring since it's already locked), "Reiniciar simulado" returns to the intro screen, and "Voltar ao hub" navigates to `/hub` where the card now shows a "Melhor nota" badge.

- [ ] **Step 4: Commit**

```bash
git add components/exam/exam-results.tsx components/exam/exam-runner.tsx
git commit -m "feat: add results screen and completed-attempt history"
```

---

### Task 19: Resume an in-progress attempt

**Files:**
- Modify: `components/exam/exam-runner.tsx`

**Interfaces:**
- Consumes: `saveInProgressAttempt`, `loadInProgressAttempt` (Task 6)

No unit test — `localStorage` + effect timing, verified manually.

- [ ] **Step 1: Add the resume-on-mount and save-on-change effects**

In `components/exam/exam-runner.tsx`, add to the imports:

```ts
import { loadInProgressAttempt, saveInProgressAttempt } from "@/lib/storage/attempt-storage";
```

Add two effects right after the `paused` state declaration (both run client-side only, so reading `localStorage` here is safe — the component always renders the `phase === "intro"` branch first on the server and on first client render, then these effects can flip it):

```ts
useEffect(() => {
  const saved = loadInProgressAttempt(simulado.slug);
  if (saved) {
    setAttempt(saved);
    setPhase("running");
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [simulado.slug]);

useEffect(() => {
  if (phase === "running" && attempt) {
    saveInProgressAttempt(attempt);
  }
}, [phase, attempt]);
```

- [ ] **Step 2: Verify manually with the dev server**

Run: `bun run dev`. Start a run, answer a couple of questions, then hard-refresh the browser (F5) — confirm the exam resumes exactly where it was (same question, same answers, same flags) instead of restarting at the intro screen. Finish that attempt and refresh again — confirm it does *not* resume (finishing clears the in-progress save from Task 18).

- [ ] **Step 3: Commit**

```bash
git add components/exam/exam-runner.tsx
git commit -m "feat: resume an in-progress attempt after a refresh"
```

---

### Task 20: Final integration pass

**Files:** none new — this is verification only.

- [ ] **Step 1: Run the full test suite**

Run: `bun run test`
Expected: every test from Tasks 1–13 passes.

- [ ] **Step 2: Type-check and lint**

Run: `bunx tsc --noEmit && bun run lint`
Expected: no errors.

- [ ] **Step 3: Full manual walkthrough with the dev server**

Run: `bun run dev` and walk the entire flow fresh (clear cookies and `localStorage` first):

1. Visit `/` → redirected to `/login`.
2. Wrong credentials → inline error, stays on `/login`.
3. Correct credentials (from `.env.local`) → redirected to `/hub`.
4. Hub shows the SCS-C03 card, AWS-styled header, working theme toggle.
5. Open the simulado → intro screen; try "Simular prova real", then switch back to custom toggles.
6. Start with "Quantidade oficial" on, "Cronômetro" off, "Feedback imediato" on, both shuffles on.
7. Answer a `single`, a `multi`, an `order`, and a `match` question (use "Revisar questões" or Próxima/Anterior to find one of each) — confirm grading and highlighting are each correct.
8. Flag one question, confirm it shows in the nav panel.
9. Pause and continue (timer is off in this run).
10. Refresh mid-attempt — confirm it resumes.
11. Finalize with questions unanswered — confirm the native confirm-dialog warning appears.
12. On the results screen, confirm the score, pass/fail color, and table; open a question from the table; restart the simulado.
13. Go back to `/hub` — confirm the "Melhor nota" badge now appears on the card.
14. Log out — confirm it redirects to `/login` and `/hub` is protected again (visiting it directly redirects back to `/login`).
15. Toggle dark mode at least once during the walkthrough and confirm every screen stays legible (contrast, borders, focus states).

- [ ] **Step 4: Fix anything the walkthrough surfaces**

If any step fails, fix it in the relevant file from the task that introduced it — do not add new abstractions here, just correct the defect.

- [ ] **Step 5: Final commit**

```bash
git add -A
git status
```

Review the status output before committing — confirm nothing unexpected is staged (e.g. a leftover temporary `examDurationMinutes: 1` from Task 17's manual test, or a stray `.env.local`). Then:

```bash
git commit -m "chore: final integration pass for login + hub + simulado flow"
```
