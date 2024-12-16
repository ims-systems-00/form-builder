import sass from "sass";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["src/index.ts", "src/components"] })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        silenceDeprecations: ["legacy-js-api"],
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: /^~(.+)/,
        replacement: path.resolve(__dirname, "node_modules/$1"),
      },
    ],
  },
});
