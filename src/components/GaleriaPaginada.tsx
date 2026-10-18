import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FotoSlot } from "./FotoSlot";
import styles from "./GaleriaPaginada.module.css";

interface Item {
  src: string | null;
  alt: string;
  cobertura?: boolean;
}

interface Props {
  itens: Item[];
  porPagina?: number; // quantas fotos por grupo
  rotulo?: string; // nome da galeria para leitores de tela
}

// Galeria em grupos (páginas) de 6 fotos. Passa de lado com as setas, os pontos ou arrastando o dedo.
export function GaleriaPaginada({ itens, porPagina = 6, rotulo = "Galeria de trabalhos" }: Props) {
  const paginas = useMemo(() => {
    const lista = [...itens];
    while (lista.length < porPagina) lista.push({ src: null, alt: `Foto ${lista.length + 1}` });
    const grupos: Item[][] = [];
    for (let i = 0; i < lista.length; i += porPagina) grupos.push(lista.slice(i, i + porPagina));
    return grupos;
  }, [itens, porPagina]);

  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false });
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const atualizar = () => setAtual(embla.selectedScrollSnap());
    atualizar();
    embla.on("select", atualizar);
    embla.on("reInit", atualizar);
    return () => {
      embla.off("select", atualizar);
      embla.off("reInit", atualizar);
    };
  }, [embla]);

  const anterior = useCallback(() => embla?.scrollPrev(), [embla]);
  const proximo = useCallback(() => embla?.scrollNext(), [embla]);
  const total = paginas.length;

  return (
    <div className={styles.raiz}>
      <div className={styles.janela} ref={emblaRef} aria-roledescription="carrossel" aria-label={rotulo}>
        <div className={styles.trilho}>
          {paginas.map((grupo, p) => (
            <div
              key={p}
              className={styles.pagina}
              aria-roledescription="slide"
              aria-label={`Grupo ${p + 1} de ${total}`}
            >
              <div className={styles.grade}>
                {grupo.map((f, i) => (
                  <div key={i} className={styles.item}>
                    <FotoSlot src={f.src} alt={f.alt} rotulo="Adicionar foto" />
                    {f.cobertura && <span className={styles.tag}>Cobertura</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {total > 1 && (
        <div className={styles.controles}>
          <button
            type="button"
            className={styles.seta}
            onClick={anterior}
            disabled={atual === 0}
            aria-label="Grupo anterior de fotos"
          >
            <ChevronLeft size={20} />
          </button>
          <div className={styles.pontos}>
            {paginas.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`${styles.ponto} ${i === atual ? styles.pontoAtivo : ""}`}
                aria-label={`Ir para o grupo ${i + 1}`}
                aria-current={i === atual}
                onClick={() => embla?.scrollTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.seta}
            onClick={proximo}
            disabled={atual === total - 1}
            aria-label="Próximo grupo de fotos"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
      {total > 1 && (
        <p className={styles.contagem} aria-live="polite">
          Grupo {atual + 1} de {total}
        </p>
      )}
    </div>
  );
}
