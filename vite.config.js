import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pagesRoot = resolve(import.meta.dirname, "src/pages");

export default defineConfig({
  root: pagesRoot,
  publicDir: resolve(import.meta.dirname, "public"),
  plugins: [react()],
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(pagesRoot, "index.html"),
        presentations: resolve(pagesRoot, "presentations/index.html"),
        labs: resolve(pagesRoot, "labs/index.html"),
        teamBio: resolve(pagesRoot, "team-bio/index.html"),
        references: resolve(pagesRoot, "references/index.html"),
        glossary: resolve(pagesRoot, "glossary/index.html")
      }
    }
  }
});
