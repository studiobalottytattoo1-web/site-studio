import type { ReactNode } from "react";
import styles from "./Bloco.module.css";

interface BlocoProps {
  tom?: "algodao" | "branco" | "escuro" | "marrom";
  id?: string;
  titulo?: string;
  intro?: string;
  children?: ReactNode;
  acao?: ReactNode; // botão ao lado do título
}

// Seção padrão do site: fundo, largura máxima, título e texto de apoio.
export function Bloco({ tom = "algodao", id, titulo, intro, acao, children }: BlocoProps) {
  return (
    <section id={id} className={`${styles.bloco} ${styles[tom]}`}>
      <div className={styles.dentro}>
        {(titulo || intro) && (
          <div className={styles.topo}>
            <div>
              {titulo && <h2 className={styles.titulo}>{titulo}</h2>}
              {intro && <p className={styles.intro}>{intro}</p>}
            </div>
            {acao}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
