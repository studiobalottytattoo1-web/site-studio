import { FotoSlot } from "./FotoSlot";
import styles from "./Rombos.module.css";

interface RombosProps {
  fotos: (string | null)[];
  alts: string[];
}

// Galeria em losangos (o losango vem da logo do estúdio).
export function Rombos({ fotos, alts }: RombosProps) {
  return (
    <div className={styles.fila}>
      {fotos.map((src, i) => (
        <div key={i} className={styles.rombo}>
          <FotoSlot src={src} alt={alts[i] ?? "Piercing aplicado no estúdio"} rotulo="Adicionar foto" />
        </div>
      ))}
    </div>
  );
}
