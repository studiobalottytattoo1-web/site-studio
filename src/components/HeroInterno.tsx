import { useState, type ReactNode } from "react";
import styles from "./HeroInterno.module.css";

interface HeroInternoProps {
  titulo: string;
  texto: string;
  children?: ReactNode; // botões
  // Foto de fundo (opcional). Se o arquivo não existir na pasta public/fotos, o cabeçalho continua liso.
  fotoComputador?: string; // horizontal
  fotoCelular?: string; // vertical
  alt?: string;
}

// Abertura das páginas internas: losangos finos ao fundo, ou uma foto de fundo quando ela existe.
export function HeroInterno({ titulo, texto, children, fotoComputador, fotoCelular, alt = "" }: HeroInternoProps) {
  const [falhou, setFalhou] = useState(false);
  const temFoto = Boolean(fotoComputador || fotoCelular) && !falhou;
  return (
    <section className={`${styles.hero} ${temFoto ? styles.comFoto : ""}`}>
      {temFoto && (
        <>
          <picture className={styles.fundoFoto}>
            {fotoComputador && <source media="(min-width: 900px)" srcSet={fotoComputador} />}
            <img
              src={fotoCelular ?? fotoComputador ?? ""}
              alt={alt}
              className={styles.foto}
              onError={() => setFalhou(true)}
            />
          </picture>
          <div className={styles.veu} />
        </>
      )}
      <div className={styles.dentro}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.texto}>{texto}</p>
        {children && <div className={styles.acoes}>{children}</div>}
      </div>
    </section>
  );
}
