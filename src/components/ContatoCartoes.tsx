import { contatos } from "../helpers/contatos";
import { whatsappLink } from "../helpers/whatsappLink";
import { Botao } from "./Botao";
import styles from "./ContatoCartoes.module.css";

// Dois cartões de WhatsApp: Tales (tatuagem) e Naju (piercing, furinho, remoção).
export function ContatoCartoes() {
  return (
    <div className={styles.grade}>
      <div className={styles.cartao}>
        <span className={styles.funcao}>Tatuagem, cobertura e camuflagem</span>
        <h3 className={styles.nome}>Tales</h3>
        <span className={styles.numero}>{contatos.tatuagem.numeroExibicao}</span>
        <Botao
          variant="claro"
          href={whatsappLink(contatos.tatuagem.numero, "Olá, Tales! Vim pelo site do Studio Balotty.")}
        >
          Chamar o Tales no WhatsApp
        </Botao>
      </div>
      <div className={styles.cartao}>
        <span className={styles.funcao}>Piercing, furinho humanizado, remoção e despigmentação</span>
        <h3 className={styles.nome}>Naju</h3>
        <span className={styles.numero}>{contatos.piercing.numeroExibicao}</span>
        <Botao
          variant="claro"
          href={whatsappLink(contatos.piercing.numero, "Olá, Naju! Vim pelo site do Studio Balotty.")}
        >
          Chamar a Naju no WhatsApp
        </Botao>
      </div>
    </div>
  );
}
