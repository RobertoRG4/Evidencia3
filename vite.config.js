import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    open: true,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
