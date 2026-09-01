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
