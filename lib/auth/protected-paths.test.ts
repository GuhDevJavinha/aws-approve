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
