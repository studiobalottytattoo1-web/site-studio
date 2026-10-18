import { FotoSlot } from "./FotoSlot";
import styles from "./GradeFotos.module.css";

interface GradeFotosProps {
  itens: { src: string | null; alt: string }[];
  minimo?: number; // quantos espaços mostrar, mesmo sem fotos
  proporcao?: string; // ex.: "3 / 4"
  colunas?: 2 | 3 | 4;
  tom?: "claro" | "escuro";
}

// Grade de fotos. Se faltar foto, mostra espaços reservados prontos para preencher.
export function GradeFotos({ itens, minimo = 0, proporcao = "3 / 4", colunas = 3, tom = "claro" }: GradeFotosProps) {
  const lista = [...itens];
  while (lista.length < minimo) {
    lista.push({ src: null, alt: `Foto ${lista.length + 1}` });
  }
  return (
    <div className={`${styles.grade} ${styles[`c${colunas}`]} ${tom === "escuro" ? styles.escuro : ""}`}>
      {lista.map((f, i) => (
        <div key={i} className={styles.item} style={{ aspectRatio: proporcao }}>
          <FotoSlot src={f.src} alt={f.alt} rotulo="Adicionar foto" />
        </div>
      ))}
    </div>
  );
}
