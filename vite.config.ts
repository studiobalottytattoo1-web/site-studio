import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// No GitHub Pages o site fica em /nome-do-repositorio/. O workflow já define BASE_PATH.
// Em outro lugar (domínio próprio), deixe sem definir e vale "/".
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
