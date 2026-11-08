// @vitest-environment node
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import * as images from "@/lib/images";

describe("Public website images", () => {
  for (const [name, path] of Object.entries(images)) {
    it(`${name} uses an absolute root path backed by a real public image`, () => {
      expect(path.startsWith("/images/")).toBe(true);
      expect(path).not.toContain("/__l5e/");
      const bytes = readFileSync(resolve(process.cwd(), "public", path.slice(1)));
      expect(bytes.length).toBeGreaterThan(100);
      const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
      const png = bytes.subarray(0, 8).toString("hex") === "89504e470d0a1a0a";
      expect(jpeg || png).toBe(true);
    });
  }
});