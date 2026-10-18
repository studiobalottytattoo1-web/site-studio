import styles from "./FotoSlot.module.css";

interface FotoSlotProps {
  src?: string | null;
  alt: string;
  rotulo?: string;
  className?: string;
  posicao?: string; // object-position, ex.: "50% 20%"
  eager?: boolean;
}

// Mostra a foto quando existir. Sem foto, mostra um espaço reservado (para adicionar depois).
export function FotoSlot({ src, alt, rotulo, className, posicao, eager }: FotoSlotProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`${styles.img} ${className || ""}`}
        style={posicao ? { objectPosition: posicao } : undefined}
      />
    );
  }
  return (
    <div role="img" aria-label={alt} className={`${styles.vazio} ${className || ""}`}>
      <span className={styles.losango} aria-hidden="true" />
      <span className={styles.rotulo}>{rotulo ?? "Adicionar foto"}</span>
    </div>
  );
}
