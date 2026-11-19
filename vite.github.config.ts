import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "github",
  base: "./",
  publicDir: "public",
  plugins: [react()],
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    rolldownOptions: {
      input: [resolve("github/index.html"), resolve("github/seminars/index.html")],
    },
  },
});
