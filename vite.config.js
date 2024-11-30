import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/", // Rutas relativas para producción
  build: {
    outDir: "dist", // Carpeta de salida
    rollupOptions: {
      input: {
        main: "./index.html", // Punto de entrada principal
      },
    },
  },
  server: {
    // Configura el servidor para redirigir siempre al `index.html` (SPA)
    middlewareMode: true,
    hmr: true,
    open: true,
  },
});
