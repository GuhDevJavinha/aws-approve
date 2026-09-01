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
