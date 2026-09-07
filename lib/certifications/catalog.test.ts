import { describe, expect, it } from "vitest";
import { certifications, PROVIDER_META, PROVIDER_ORDER } from "@/_data/certifications";
import { getSimuladoBySlug } from "@/_data";
import type { Certification, CertificationProvider } from "@/types/certification";
import {
  certificationsForProvider,
  countsForProvider,
  findCertification,
  groupByTier,
  isCertificationProvider,
  isSimuladoAvailable,
  simuladosForProvider,
  sortByDifficulty,
} from "./catalog";
import { TIER_ORDER } from "./tier-order";

function cert(overrides: Partial<Certification> = {}): Certification {
  return {
    id: "test-cert",
    provider: "aws",
    code: "",
    title: "Test",
    tier: "associate",
    studyUrl: "https://example.test",
    ...overrides,
  };
}

describe("sortByDifficulty", () => {
  it("orders by tier rank, easiest first", () => {
    const sorted = sortByDifficulty([
      cert({ id: "d", tier: "specialty" }),
      cert({ id: "b", tier: "foundational" }),
      cert({ id: "c", tier: "professional" }),
      cert({ id: "a", tier: "business" }),
    ]);

    expect(sorted.map((c) => c.id)).toEqual(["a", "b", "c", "d"]);
  });

  it("ranks expert between professional and specialty", () => {
    const sorted = sortByDifficulty([
      cert({ id: "specialty", tier: "specialty" }),
      cert({ id: "expert", tier: "expert" }),
      cert({ id: "professional", tier: "professional" }),
    ]);

    expect(sorted.map((c) => c.id)).toEqual(["professional", "expert", "specialty"]);
  });

  it("breaks tier ties by title, not by code", () => {
    const sorted = sortByDifficulty([
      cert({ id: "zebra", title: "Zebra", code: "AAA-001" }),
      cert({ id: "alpha", title: "Alpha", code: "ZZZ-999" }),
    ]);

    expect(sorted.map((c) => c.id)).toEqual(["alpha", "zebra"]);
  });

  it("breaks title ties by id so the order is deterministic", () => {
    const sorted = sortByDifficulty([
      cert({ id: "second", title: "Same" }),
      cert({ id: "first", title: "Same" }),
    ]);

    expect(sorted.map((c) => c.id)).toEqual(["first", "second"]);
  });

  it("does not mutate the input array", () => {
    const input = [cert({ id: "b", tier: "specialty" }), cert({ id: "a", tier: "foundational" })];
    sortByDifficulty(input);

    expect(input.map((c) => c.id)).toEqual(["b", "a"]);
  });
});

describe("isSimuladoAvailable", () => {
  it("is false when the certification has no simuladoSlug", () => {
    expect(isSimuladoAvailable(cert())).toBe(false);
  });

  it("is false when simuladoSlug does not resolve to a simulado", () => {
    expect(isSimuladoAvailable(cert({ simuladoSlug: "slug-que-nao-existe" }))).toBe(false);
  });

  it("is true when simuladoSlug resolves", () => {
    expect(isSimuladoAvailable(cert({ simuladoSlug: "security-especialist" }))).toBe(true);
  });
});

describe("certificationsForProvider", () => {
  it("returns only certifications of that provider", () => {
    for (const provider of PROVIDER_ORDER) {
      const list = certificationsForProvider(provider);
      expect(list.length).toBeGreaterThan(0);
      expect(list.every((c) => c.provider === provider)).toBe(true);
    }
  });

  it("returns them sorted from easiest to hardest", () => {
    const aws = certificationsForProvider("aws");
    expect(aws).toEqual(sortByDifficulty(aws));
  });
});

describe("simuladosForProvider", () => {
  it("returns a subset of the provider's certifications", () => {
    for (const provider of PROVIDER_ORDER) {
      const all = certificationsForProvider(provider).map((c) => c.id);
      const withSimulado = simuladosForProvider(provider).map((c) => c.id);
      expect(all).toEqual(expect.arrayContaining(withSimulado));
    }
  });

  it("never includes a certification without an available simulado", () => {
    for (const provider of PROVIDER_ORDER) {
      expect(simuladosForProvider(provider).every(isSimuladoAvailable)).toBe(true);
    }
  });

  it("returns the three AWS simulados that exist today", () => {
    expect(simuladosForProvider("aws").map((c) => c.code)).toEqual([
      "DOP-C02",
      "SAP-C02",
      "SCS-C03",
    ]);
  });
});

describe("groupByTier", () => {
  it("returns groups in difficulty order", () => {
    const groups = groupByTier([
      cert({ id: "spec", tier: "specialty" }),
      cert({ id: "found", tier: "foundational" }),
      cert({ id: "biz", tier: "business" }),
      cert({ id: "assoc", tier: "associate" }),
    ]);

    expect(groups.map((g) => g.tier)).toEqual([
      "business",
      "foundational",
      "associate",
      "specialty",
    ]);
  });

  it("omits tiers with no certifications", () => {
    const groups = groupByTier([cert({ tier: "associate" })]);

    expect(groups).toHaveLength(1);
    expect(groups[0]!.tier).toBe("associate");
  });

  it("labels each group in pt-BR", () => {
    const groups = groupByTier([
      cert({ id: "a", tier: "business" }),
      cert({ id: "b", tier: "foundational" }),
    ]);

    expect(groups.map((g) => g.label)).toEqual(["Negócios", "Fundamental"]);
  });

  it("sorts certifications by title inside each group", () => {
    const groups = groupByTier([
      cert({ id: "z", title: "Zebra", tier: "associate" }),
      cert({ id: "a", title: "Alpha", tier: "associate" }),
    ]);

    expect(groups[0]!.certifications.map((c) => c.id)).toEqual(["a", "z"]);
  });

  it("keeps every certification exactly once", () => {
    for (const provider of PROVIDER_ORDER) {
      const list = certificationsForProvider(provider);
      const grouped = groupByTier(list).flatMap((g) => g.certifications);

      expect(grouped.map((c) => c.id).sort()).toEqual(list.map((c) => c.id).sort());
    }
  });

  it("returns no groups for an empty list", () => {
    expect(groupByTier([])).toEqual([]);
  });

  it("only uses tiers declared in TIER_ORDER", () => {
    for (const provider of PROVIDER_ORDER) {
      for (const group of groupByTier(certificationsForProvider(provider))) {
        expect(TIER_ORDER).toContain(group.tier);
      }
    }
  });
});

describe("findCertification", () => {
  it("finds a certification by provider and id", () => {
    expect(findCertification("aws", "aws-sap-c02")?.code).toBe("SAP-C02");
  });

  it("returns undefined for an unknown id", () => {
    expect(findCertification("aws", "nao-existe")).toBeUndefined();
  });

  it("returns undefined when the certification belongs to another provider", () => {
    expect(findCertification("gcp", "aws-sap-c02")).toBeUndefined();
  });
});

describe("countsForProvider", () => {
  it("counts total and how many have a simulado", () => {
    const counts = countsForProvider("aws");

    expect(counts.total).toBe(certificationsForProvider("aws").length);
    expect(counts.withSimulado).toBe(simuladosForProvider("aws").length);
  });

  it("reports zero simulados for providers that have none yet", () => {
    expect(countsForProvider("gcp").withSimulado).toBe(0);
    expect(countsForProvider("gcp").total).toBeGreaterThan(0);
  });
});

describe("isCertificationProvider", () => {
  it("accepts every provider in PROVIDER_ORDER", () => {
    for (const provider of PROVIDER_ORDER) {
      expect(isCertificationProvider(provider)).toBe(true);
    }
  });

  it("rejects anything else", () => {
    expect(isCertificationProvider("oracle")).toBe(false);
    expect(isCertificationProvider("")).toBe(false);
    expect(isCertificationProvider("AWS")).toBe(false);
  });
});

describe("invariantes do catálogo", () => {
  it("resolves every simuladoSlug present in the catalog", () => {
    const broken = certifications
      .filter((c) => c.simuladoSlug !== undefined)
      .filter((c) => getSimuladoBySlug(c.simuladoSlug!) === undefined)
      .map((c) => `${c.id} -> ${c.simuladoSlug}`);

    expect(broken).toEqual([]);
  });

  it("has a unique id for every certification", () => {
    const ids = certifications.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("covers exactly the CertificationProvider union in PROVIDER_ORDER", () => {
    const metaKeys = Object.keys(PROVIDER_META) as CertificationProvider[];
    expect([...PROVIDER_ORDER].sort()).toEqual(metaKeys.sort());
  });

  it("has at least one certification for every provider in the index", () => {
    for (const provider of PROVIDER_ORDER) {
      expect(certificationsForProvider(provider).length).toBeGreaterThan(0);
    }
  });

  it("only uses providers that exist in PROVIDER_META", () => {
    for (const certification of certifications) {
      expect(PROVIDER_META[certification.provider]).toBeDefined();
    }
  });

  it("gives every certification a study URL", () => {
    const missing = certifications
      .filter((c) => !c.studyUrl.startsWith("https://"))
      .map((c) => c.id);

    expect(missing).toEqual([]);
  });
});
