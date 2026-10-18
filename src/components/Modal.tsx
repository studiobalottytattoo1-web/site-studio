import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import styles from "./Modal.module.css";

interface ModalProps {
  aberto: boolean;
  onFechar: () => void;
  titulo: string;
  children: ReactNode;
}

const FOCAVEIS = 'a[href],button:not([disabled]),input,textarea,select,[tabindex]:not([tabindex="-1"])';

// Janela sobre a página. Fecha com Escape, com o X ou clicando fora. Mantém o foco dentro enquanto aberta.
export function Modal({ aberto, onFechar, titulo, children }: ModalProps) {
  const caixa = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aberto) return;
    const anterior = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    caixa.current?.focus();

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onFechar();
        return;
      }
      if (e.key !== "Tab" || !caixa.current) return;
      const itens = Array.from(caixa.current.querySelectorAll<HTMLElement>(FOCAVEIS));
      if (itens.length === 0) return;
      const primeiro = itens[0];
      const ultimo = itens[itens.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = overflow;
      anterior?.focus();
    };
  }, [aberto, onFechar]);

  if (!aberto) return null;
  return (
    <div className={styles.fundo} onMouseDown={(e) => e.target === e.currentTarget && onFechar()}>
      <div ref={caixa} className={styles.caixa} role="dialog" aria-modal="true" aria-label={titulo} tabIndex={-1}>
        <button type="button" className={styles.fechar} onClick={onFechar} aria-label="Fechar">
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
