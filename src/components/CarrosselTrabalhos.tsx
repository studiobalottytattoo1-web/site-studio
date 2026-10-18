import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { FotoSlot } from "./FotoSlot";
import { fotos } from "../helpers/fotos";
import styles from "./CarrosselTrabalhos.module.css";

type Filtro = "todos" | "tatuagens" | "coberturas";
const filtros: { id: Filtro; rotulo: string }[] = [
  { id: "todos", rotulo: "Todos" },
  { id: "tatuagens", rotulo: "Tatuagens" },
  { id: "coberturas", rotulo: "Coberturas" },
];

const INTERVALO = 4500;

// Carrossel interativo dos trabalhos do estúdio: passa sozinho, para ao tocar ou passar o mouse,
// tem setas, pontos, filtros e respeita quem prefere menos movimento.
export function CarrosselTrabalhos() {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const [atual, setAtual] = useState(0);
  const [pontos, setPontos] = useState<number[]>([]);
  const [pausado, setPausado] = useState(false);
  const [manual, setManual] = useState(false); // pausa pelo botão
  const [reduzido, setReduzido] = useState(false);
  const sobre = useRef(false);

  const itens = useMemo(() => {
    const todos = fotos.tatuagens;
    if (filtro === "coberturas") return todos.filter((t) => t.cobertura);
    if (filtro === "tatuagens") return todos.filter((t) => !t.cobertura);
    return todos;
  }, [filtro]);

  const vazio = fotos.tatuagens.length === 0;
  // Sem fotos ainda: mostra espaços reservados para preencher depois.
  const slides = vazio
    ? Array.from({ length: 5 }, (_, i) => ({ src: null as string | null, alt: `Trabalho ${i + 1}`, cobertura: false }))
    : itens.map((t) => ({ src: t.src as string | null, alt: t.alt, cobertura: Boolean(t.cobertura) }));

  const [emblaRef, embla] = useEmblaCarousel({ align: "center", loop: slides.length > 2, skipSnaps: false });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduzido(mq.matches);
    const aoMudar = () => setReduzido(mq.matches);
    mq.addEventListener("change", aoMudar);
    return () => mq.removeEventListener("change", aoMudar);
  }, []);

  useEffect(() => {
    if (!embla) return;
    const atualizar = () => {
      setAtual(embla.selectedScrollSnap());
      setPontos(embla.scrollSnapList());
    };
    atualizar();
    embla.on("select", atualizar);
    embla.on("reInit", atualizar);
    return () => {
      embla.off("select", atualizar);
      embla.off("reInit", atualizar);
    };
  }, [embla]);

  useEffect(() => {
    embla?.reInit();
    embla?.scrollTo(0, true);
  }, [filtro, embla, slides.length]);

  useEffect(() => {
    if (!embla || reduzido || manual || pausado || slides.length < 2) return;
    const t = setInterval(() => {
      if (document.hidden) return;
      embla.scrollNext();
    }, INTERVALO);
    return () => clearInterval(t);
  }, [embla, reduzido, manual, pausado, slides.length]);

  const anterior = useCallback(() => embla?.scrollPrev(), [embla]);
  const proximo = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <div
      className={styles.raiz}
      onMouseEnter={() => {
        sobre.current = true;
        setPausado(true);
      }}
      onMouseLeave={() => {
        sobre.current = false;
        setPausado(false);
      }}
      onTouchStart={() => setPausado(true)}
      onTouchEnd={() => setTimeout(() => setPausado(sobre.current), 3000)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(sobre.current)}
    >
      <div className={styles.filtros} role="group" aria-label="Filtrar trabalhos">
        {filtros.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filtro === f.id}
            className={`${styles.filtro} ${filtro === f.id ? styles.filtroAtivo : ""}`}
            onClick={() => setFiltro(f.id)}
          >
            {f.rotulo}
          </button>
        ))}
      </div>

      <div className={styles.janela} ref={emblaRef} aria-roledescription="carrossel" aria-label="Trabalhos do estúdio">
        <div className={styles.trilho}>
          {slides.length === 0 && <p className={styles.nada}>Ainda não há trabalhos neste filtro.</p>}
          {slides.map((s, i) => (
            <div
              key={`${filtro}-${i}`}
              className={`${styles.slide} ${i === atual ? styles.slideAtual : ""}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${slides.length}`}
            >
              <div className={styles.cartao}>
                <FotoSlot src={s.src} alt={s.alt} rotulo="Adicionar foto" />
                {s.cobertura && <span className={styles.tag}>Cobertura</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controles}>
        <button type="button" className={styles.seta} onClick={anterior} aria-label="Trabalho anterior">
          <ChevronLeft size={20} />
        </button>
        <div className={styles.pontos}>
          {pontos.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.ponto} ${i === atual ? styles.pontoAtivo : ""}`}
              aria-label={`Ir para o trabalho ${i + 1}`}
              aria-current={i === atual}
              onClick={() => embla?.scrollTo(i)}
            />
          ))}
        </div>
        <button type="button" className={styles.seta} onClick={proximo} aria-label="Próximo trabalho">
          <ChevronRight size={20} />
        </button>
        {!reduzido && (
          <button
            type="button"
            className={styles.seta}
            onClick={() => setManual((v) => !v)}
            aria-label={manual ? "Retomar a passagem automática" : "Pausar a passagem automática"}
          >
            {manual ? <Play size={16} /> : <Pause size={16} />}
          </button>
        )}
      </div>
    </div>
  );
}
