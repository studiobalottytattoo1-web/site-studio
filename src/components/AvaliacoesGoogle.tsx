import { Botao } from "./Botao";
import { linkGoogle } from "../helpers/opcoes";
import styles from "./AvaliacoesGoogle.module.css";

function Estrela() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" className={styles.estrela}>
      <path d="M12 2.5l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.5 6 20.9l1.3-6.7-5-4.7 6.8-.8z" />
    </svg>
  );
}

// Seção de destaque que leva ao perfil da empresa no Google (localização e avaliações).
export function AvaliacoesGoogle() {
  return (
    <section className={styles.secao} aria-labelledby="avaliacoes-titulo">
      <div className={styles.dentro}>
        <div className={styles.estrelas} aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <Estrela key={i} />
          ))}
        </div>
        <h2 id="avaliacoes-titulo" className={styles.titulo}>Quem passou por aqui conta como foi.</h2>
        <p className={styles.texto}>
          Veja no Google a localização do estúdio, os horários e as avaliações de quem já foi atendido pelo Tales e pela Naju.
        </p>
        <Botao href={linkGoogle} variant="claro">
          Ver Empresa, Localização e Avaliações no Google
        </Botao>
      </div>
    </section>
  );
}
