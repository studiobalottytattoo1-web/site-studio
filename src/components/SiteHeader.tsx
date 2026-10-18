import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { paginas } from "../helpers/servicos";
import { fotos } from "../helpers/fotos";
import { Botao } from "./Botao";
import styles from "./SiteHeader.module.css";

export function LogoMarca({ tamanho }: { tamanho: number }) {
  if (fotos.logo) {
    return <img src={fotos.logo} alt="" width={tamanho} height={tamanho} className={styles.logoImg} />;
  }
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M20 2 38 20 20 38 2 20Z" />
      <path d="M20 10 30 20 20 30 10 20Z" opacity=".6" />
    </svg>
  );
}

// Menu flutuante em vidro. No computador mostra todos os links; no celular abre em tela cheia.
export function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    const aoTecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    window.addEventListener("keydown", aoTecla);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", aoTecla);
    };
  }, [aberto]);

  return (
    <header className={styles.wrap}>
      <nav className={styles.barra} aria-label="Principal">
        <Link to="/" className={styles.marca} aria-label="Studio Balotty, página inicial">
          <LogoMarca tamanho={40} />
          <span className={styles.textoMarca}>
            <span className={styles.nome}>Studio Balotty</span>
            <span className={styles.sub}>Tattoo e Naju Piercer</span>
          </span>
        </Link>

        <div className={styles.links}>
          {paginas.map((p) => (
            <NavLink
              key={p.url}
              to={p.url}
              className={({ isActive }) => `${styles.link} ${isActive ? styles.ativo : ""}`}
            >
              {p.rotulo}
            </NavLink>
          ))}
        </div>

        <Botao to="/pedir-orcamento" size="sm" className={styles.cta}>
          Pedir orçamento
        </Botao>

        <button
          type="button"
          className={styles.burger}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          aria-controls="menu-cheio"
          onClick={() => setAberto((v) => !v)}
        >
          <i className={aberto ? styles.x1 : ""} />
          <i className={aberto ? styles.x2 : ""} />
        </button>
      </nav>

      <div
        id="menu-cheio"
        className={`${styles.cheio} ${aberto ? styles.cheioAberto : ""}`}
        aria-hidden={!aberto}
      >
        <div className={styles.cheioLinks}>
          <Link to="/" className={styles.cheioLink} tabIndex={aberto ? 0 : -1}>
            Início
          </Link>
          {paginas.map((p) => (
            <Link key={p.url} to={p.url} className={styles.cheioLink} tabIndex={aberto ? 0 : -1}>
              {p.rotulo}
            </Link>
          ))}
        </div>
        <Botao to="/pedir-orcamento" className={styles.cheioCta}>
          Pedir orçamento
        </Botao>
      </div>
    </header>
  );
}
