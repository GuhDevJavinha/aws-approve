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
