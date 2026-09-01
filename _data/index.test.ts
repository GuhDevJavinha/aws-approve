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
