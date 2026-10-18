import { Link } from "react-router-dom";
import { contatos } from "../helpers/contatos";
import { paginas } from "../helpers/servicos";
import { whatsappLink } from "../helpers/whatsappLink";
import { LogoMarca } from "./SiteHeader";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.rodape}>
      <div className={styles.grade}>
        <div className={styles.coluna}>
          <div className={styles.logo}>
            <LogoMarca tamanho={52} />
          </div>
          <p className={styles.marca}>Studio Balotty</p>
          <p className={styles.sub}>Tattoo e Naju Piercer</p>
          <p className={styles.texto}>{contatos.studio.endereco}</p>
          <p className={styles.texto}>Segunda a sábado, com horário agendado.</p>
        </div>

        <div className={styles.coluna}>
          <p className={styles.titulo}>Páginas</p>
          <Link to="/" className={styles.link}>Início</Link>
          {paginas.map((p) => (
            <Link key={p.url} to={p.url} className={styles.link}>
              {p.rotulo}
            </Link>
          ))}
          <Link to="/pedir-orcamento" className={styles.link}>Pedir orçamento</Link>
        </div>

        <div className={styles.coluna}>
          <p className={styles.titulo}>Fale com a gente</p>
          <a
            href={whatsappLink(contatos.tatuagem.numero, "Olá, Tales! Vim pelo site do Studio Balotty.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            WhatsApp do Tales · {contatos.tatuagem.numeroExibicao}
          </a>
          <a
            href={whatsappLink(contatos.piercing.numero, "Olá, Naju! Vim pelo site do Studio Balotty.")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            WhatsApp da Naju · {contatos.piercing.numeroExibicao}
          </a>
          {[contatos.tatuagem.instagram, contatos.studio.instagram, contatos.piercing.instagram].map((h) => (
            <a
              key={h}
              href={`https://instagram.com/${h}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              @{h}
            </a>
          ))}
        </div>
      </div>
      <p className={styles.direitos}>© Studio Balotty Tattoo e Naju Piercer · Guanhães (MG)</p>
    </footer>
  );
}
