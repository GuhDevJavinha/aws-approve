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
