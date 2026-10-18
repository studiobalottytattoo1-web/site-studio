import type { ReactNode, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import styles from "./Botao.module.css";

interface BotaoProps {
  variant?: "verde" | "claro" | "linha" | "linhaEscura";
  size?: "md" | "sm";
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  type?: "button" | "submit";
  disabled?: boolean;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

// Botão do site. Com "to" navega dentro do site; com "href" abre link externo (WhatsApp, Instagram).
export function Botao({
  variant = "verde",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  disabled,
  block,
  className,
  children,
}: BotaoProps) {
  const cls = [
    styles.btn,
    styles[variant],
    size === "sm" ? styles.sm : "",
    block ? styles.block : "",
    className ?? "",
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
