import type { ReactNode } from "react";
import styles from "./HeroInterno.module.css";

interface HeroInternoProps {
  titulo: string;
  texto: string;
  children?: ReactNode; // botões
}

// Abertura das páginas internas, com losangos finos ao fundo.
export function HeroInterno({ titulo, texto, children }: HeroInternoProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.dentro}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.texto}>{texto}</p>
        {children && <div className={styles.acoes}>{children}</div>}
      </div>
    </section>
  );
}
