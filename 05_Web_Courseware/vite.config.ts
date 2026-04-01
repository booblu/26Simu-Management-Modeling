import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const lecturePages = ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8"];

const input = lecturePages.reduce<Record<string, string>>(
  (entries, lectureId) => {
    entries[lectureId] = resolve(__dirname, `lecture/${lectureId}/index.html`);
    return entries;
  },
  {
    home: resolve(__dirname, "index.html"),
  },
);

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 4173,
    fs: {
      allow: [resolve(__dirname, "..")],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input,
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "markdown-vendor": [
            "react-markdown",
            "remark-gfm",
            "remark-math",
            "rehype-katex",
            "rehype-highlight",
            "highlight.js",
            "katex",
          ],
        },
      },
    },
  },
});
