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
    expect(shuffle(["a", "b", "c", "d"])).toEqual(["b", "c", "a", "d"]);
  });
});
