import { Botao } from "./Botao";
import { fotos } from "../helpers/fotos";
import { promocao, promocaoVigente } from "../helpers/promocao";
import styles from "./FaixaPromocao.module.css";

// Faixa de destaque da promoção, logo abaixo do banner da página inicial.
// Some sozinha quando a promoção não está mais vigente (ver helpers/promocao.ts).
export function FaixaPromocao() {
  if (!promocaoVigente()) return null;

  return (
    <section
      className={styles.faixa}
      aria-labelledby="promocao-titulo"
      style={fotos.promocaoFundo ? { backgroundImage: `url(${fotos.promocaoFundo})` } : undefined}
    >
      <div className={styles.veu} />
      <div className={styles.dentro}>
        <span className={styles.selo}>Promoção</span>
        <h2 id="promocao-titulo" className={styles.titulo}>
          {promocao.percentual}% de desconto na tatuagem
        </h2>
        <p className={styles.texto}>{promocao.texto}</p>
        <div className={styles.acoes}>
          <Botao to="/pedir-orcamento?servico=tatuagem" variant="claro">
            Pedir orçamento com desconto
          </Botao>
          <Botao to="/tatuagem#trabalhos" variant="linha">
            Ver tatuagens
          </Botao>
        </div>
      </div>
    </section>
  );
}
