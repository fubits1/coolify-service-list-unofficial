import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // keep pre-v7 whitespace handling (v7 default 'jsx' drops the space before the docs link)
  compressHTML: true,
});
