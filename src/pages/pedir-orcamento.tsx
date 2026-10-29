import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { Botao } from "../components/Botao";
import { HeroInterno } from "../components/HeroInterno";
import { servicos, type ServicoId, type Destino } from "../helpers/servicos";
import { contatos } from "../helpers/contatos";
import { promocao, promocaoVigente } from "../helpers/promocao";
import { whatsappLink } from "../helpers/whatsappLink";
import styles from "./pedir-orcamento.module.css";

type FalarCom = "auto" | "tatuagem" | "piercing" | "ambos";

const opcoesFalar: { id: FalarCom; rotulo: string }[] = [
  { id: "auto", rotulo: "Automático" },
  { id: "tatuagem", rotulo: "Tales" },
  { id: "piercing", rotulo: "Naju" },
  { id: "ambos", rotulo: "Os dois" },
];

const grupos: { titulo: string; destino: Destino }[] = [
  { titulo: "Com o Tales", destino: "tatuagem" },
  { titulo: "Com a Naju", destino: "piercing" },
];

type Servico = (typeof servicos)[number];

// Página de orçamento sem formulário de dados: a pessoa marca o que quer e o site abre o WhatsApp
// do Tales ou da Naju com a mensagem pronta. Nada é guardado em servidor.
export default function PedirOrcamentoPage() {
  const [searchParams] = useSearchParams();
  const servicoInicial = searchParams.get("servico");
  const estiloInicial = (searchParams.get("estilo") ?? "").slice(0, 80);

  const [selecionados, setSelecionados] = useState<ServicoId[]>(
    servicos.some((s) => s.id === servicoInicial) ? [servicoInicial as ServicoId] : [],
  );
  const [falarCom, setFalarCom] = useState<FalarCom>("auto");
  const [descricao, setDescricao] = useState(estiloInicial ? `Tenho interesse em: ${estiloInicial}. ` : "");

  const promoAtiva = promocaoVigente();

  const alternar = (id: ServicoId) =>
    setSelecionados((atual) => (atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id]));

  const escolhidos = selecionados
    .map((id) => servicos.find((s) => s.id === id))
    .filter((s): s is Servico => Boolean(s));

  // Quem recebe a mensagem: no automático, quem atende os serviços marcados.
  const destinos: Destino[] =
    falarCom === "ambos"
      ? ["tatuagem", "piercing"]
      : falarCom === "tatuagem" || falarCom === "piercing"
        ? [falarCom]
        : (["tatuagem", "piercing"] as Destino[]).filter((d) => escolhidos.some((s) => s.destino === d));

  const linkPara = (destino: Destino) => {
    const daquele = escolhidos.filter((s) => s.destino === destino);
    // Se a pessoa escolheu falar com alguém que não atende o serviço, a mensagem lista tudo.
    const lista = daquele.length > 0 ? daquele : escolhidos;
    const contato = contatos[destino];
    const mensagem = [
      `Olá, ${contato.nome.split(" ")[0]}! Vim pelo site do Studio Balotty.`,
      `Tenho interesse em: ${lista.map((s) => s.nome).join(", ")}.`,
      promoAtiva && destino === "tatuagem"
        ? `Quero o desconto de ${promocao.percentual}% da promoção de tatuagem.`
        : "",
      descricao.trim() ? `Sobre a ideia: ${descricao.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    return whatsappLink(contato.numero, mensagem);
  };

  const pronto = escolhidos.length > 0 && destinos.length > 0;

  return (
    <div>
      <Helmet>
        <title>Pedir orçamento | Studio Balotty Tattoo e Naju Piercer</title>
        <meta
          name="description"
          content="Escolha os serviços que você quer e fale direto com o Tales ou a Naju pelo WhatsApp."
        />
      </Helmet>

      <HeroInterno
        titulo="Conte o que você imagina."
        texto="Marque um ou mais serviços. O botão abre o WhatsApp do profissional certo, com as suas escolhas já escritas."
      />

      <div className={styles.fundo}>
        <div className={styles.card}>
          {promoAtiva && (
            <p className={styles.promo}>
              <b>{promocao.percentual}% de desconto na tatuagem</b>. {promocao.texto} {promocao.validade}
            </p>
          )}
          <fieldset className={styles.passo}>
            <legend className={styles.passoTitulo}>O que você procura?</legend>
            <p className={styles.ajuda}>Pode marcar mais de um.</p>
            {grupos.map((g) => (
              <div key={g.destino}>
                <p className={styles.grupoNome}>{g.titulo}</p>
                <div className={styles.chips}>
                  {servicos
                    .filter((s) => s.destino === g.destino)
                    .map((s) => {
                      const ativo = selecionados.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          aria-pressed={ativo}
                          className={`${styles.chip} ${ativo ? styles.chipAtivo : ""}`}
                          onClick={() => alternar(s.id)}
                        >
                          <i /> {s.nome}
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </fieldset>

          <fieldset className={styles.passo}>
            <legend className={styles.passoTitulo}>Com quem quer falar?</legend>
            <p className={styles.ajuda}>No automático, o site escolhe pelos serviços marcados.</p>
            <div className={styles.seg} role="group" aria-label="Com quem falar">
              {opcoesFalar.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  aria-pressed={falarCom === o.id}
                  className={`${styles.segBtn} ${falarCom === o.id ? styles.segAtivo : ""}`}
                  onClick={() => setFalarCom(o.id)}
                >
                  {o.rotulo}
                </button>
              ))}
            </div>
          </fieldset>

          <div className={styles.passo}>
            <h2 className={styles.passoTitulo}>Sua ideia</h2>
            <div className={styles.campos}>
              <div className={styles.campo}>
                <label htmlFor="descricao">Conte a ideia (opcional)</label>
                <textarea
                  id="descricao"
                  rows={4}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Tamanho aproximado, local do corpo, referências..."
                />
              </div>
            </div>
          </div>

          <div className={styles.botoes}>
            {pronto ? (
              destinos.map((d) => (
                <Botao key={d} href={linkPara(d)} block={destinos.length === 1}>
                  Continuar no WhatsApp com {contatos[d].nome.split(" ")[0]}
                </Botao>
              ))
            ) : (
              <Botao disabled block>Continuar no WhatsApp</Botao>
            )}
          </div>
          {!pronto && <p className={styles.dica}>Marque pelo menos um serviço para continuar.</p>}
          <p className={styles.dica}>Nenhum dado seu é guardado pelo site. A conversa acontece direto no WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
