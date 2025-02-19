import shopify from "vite-plugin-shopify";
import globs from "rollup-plugin-globlin";
import cleanup from '@by-association-only/vite-plugin-shopify-clean'
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    drop: ["console", "debugger"],
  },
  build: {
    emptyOutDir: false,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    cleanup(),
    tailwindcss(),
    autoprefixer(),
    shopify({ versionNumbers: true }),
    globs.default({
      globs: ["frontend/web/**/sections/*.liquid"],
      dest: "sections",
      clean: false,
    }),
    globs.default({
      globs: ["frontend/web/**/snippets/*.liquid"],
      dest: "snippets",
      clean: false,
    }),
  ],
});
