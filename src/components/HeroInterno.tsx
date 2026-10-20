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
  // Logo do estúdio à direita, sobre fundo marrom (usada nas páginas sem foto de fundo).
  comLogo?: boolean;
  // Escurece a foto (0 a 1) quando ela é muito clara, para o texto branco continuar legível.
  escurecer?: number;
}

// Abertura das páginas internas: losangos finos ao fundo, ou uma foto de fundo quando ela existe.
export function HeroInterno({ titulo, texto, children, fotoComputador, fotoCelular, alt = "", comLogo = false, escurecer = 0 }: HeroInternoProps) {
  const [falhou, setFalhou] = useState(false);
  const temFoto = Boolean(fotoComputador || fotoCelular) && !falhou;
  return (
    <section className={`${styles.hero} ${temFoto ? styles.comFoto : ""} ${comLogo && !temFoto ? styles.comLogo : ""}`}>
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
          <div className={styles.veu} style={escurecer ? { backgroundColor: `rgba(36, 35, 33, ${escurecer})` } : undefined} />
        </>
      )}
      <div className={styles.dentro}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <p className={styles.texto}>{texto}</p>
        {children && <div className={styles.acoes}>{children}</div>}
      </div>
      {comLogo && !temFoto && (
        <img
          className={styles.logo}
          src={`${import.meta.env.BASE_URL}fotos/logo-estudio.png`}
          alt="Logo Studio Balotty e Naju Piercer"
          width={380}
          height={372}
        />
      )}
    </section>
  );
}
