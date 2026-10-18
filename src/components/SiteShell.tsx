import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import styles from "./SiteShell.module.css";

// Moldura de todas as páginas: menu flutuante no topo e rodapé no fim.
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className={styles.shell}>
      <SiteHeader />
      <main className={styles.main}>{children}</main>
      <SiteFooter />
    </div>
  );
}

