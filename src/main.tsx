import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./base.css";
import "./global.css";

// BASE_URL vem do vite.config.ts (ex.: "/nome-do-repositorio/" no GitHub Pages).
const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>,
);
