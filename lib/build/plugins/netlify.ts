import type { BuildPlugin } from "../types.ts";

export const netlify: BuildPlugin = {
  name: "netlify-edge",
  onBuild(_result) {
    throw new Error("TODO");
  },
};
