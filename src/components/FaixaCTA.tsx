import { Botao } from "./Botao";
import styles from "./FaixaCTA.module.css";

interface FaixaCTAProps {
  titulo: string;
  texto: string;
  rotulo?: string;
  to?: string;
}

// Faixa de chamada no fim das páginas.
export function FaixaCTA({ titulo, texto, rotulo = "Pedir orçamento", to = "/pedir-orcamento" }: FaixaCTAProps) {
  return (
    <section className={styles.faixa}>
      <div className={styles.dentro}>
        <div>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.texto}>{texto}</p>
        </div>
        <Botao to={to} variant="claro">
          {rotulo}
        </Botao>
      </div>
    </section>
  );
}
