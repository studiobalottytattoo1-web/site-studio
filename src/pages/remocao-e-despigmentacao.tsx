import { Helmet } from "react-helmet";
import { Botao } from "../components/Botao";
import { Bloco } from "../components/Bloco";
import { HeroInterno } from "../components/HeroInterno";
import { GradeFotos } from "../components/GradeFotos";
import { BiosegurancaSecao } from "../components/BiosegurancaSecao";
import { FaixaCTA } from "../components/FaixaCTA";
import { fotos, topos } from "../helpers/fotos";
import styles from "./remocao-e-despigmentacao.module.css";

export default function RemocaoPage() {
  const resultados = fotos.remocao.map((f) => ({ src: f.src as string | null, alt: f.alt }));
  return (
    <div>
      <Helmet>
        <title>Remoção de tatuagem e despigmentação | Studio Balotty</title>
        <meta
          name="description"
          content="Remoção de tatuagem e despigmentação de sobrancelhas com a Naju, com avaliação individual e plano de sessões, em Guanhães (MG)."
        />
      </Helmet>

      <HeroInterno
        fotoComputador={topos.laser.computador}
        fotoCelular={topos.laser.celular}
        escurecer={0.3}
        titulo="Remoção de tatuagem e despigmentação, com avaliação individual."
        texto="A Naju e o Tales são formados em remoção de pigmentos. Os atendimentos são com a Naju, em sessões planejadas para cada caso."
      >
        <Botao to="/pedir-orcamento?servico=remocao" variant="claro">Pedir orçamento</Botao>
      </HeroInterno>

      <Bloco>
        <div className={styles.duas}>
          <div className={styles.cartao}>
            <h2 className={styles.titulo}>Remoção de tatuagem</h2>
            <p className={styles.texto}>
              Para clarear ou remover uma tatuagem, a Naju avalia o tamanho, as cores, a profundidade do pigmento e a sua
              pele. Depois monta um plano com o número estimado de sessões e o intervalo entre elas.
            </p>
            <p className={styles.texto}>
              O resultado varia de pessoa para pessoa. Por isso a conversa começa pela avaliação, com fotos da tatuagem.
            </p>
            <div className={styles.acoes}>
              <Botao to="/pedir-orcamento?servico=remocao">Pedir orçamento</Botao>
            </div>
          </div>
          <div id="sobrancelhas" className={styles.cartao}>
            <h2 className={styles.titulo}>Despigmentação de sobrancelhas</h2>
            <p className={styles.texto}>
              Para quem quer retirar ou suavizar o pigmento de uma sobrancelha feita antes, seja para refazer o desenho ou
              corrigir a cor.
            </p>
            <p className={styles.texto}>
              A Naju avalia a sobrancelha, explica as etapas e combina as sessões necessárias.
            </p>
            <div className={styles.acoes}>
              <Botao to="/pedir-orcamento?servico=sobrancelha">Pedir orçamento</Botao>
            </div>
          </div>
        </div>
      </Bloco>

      <Bloco tom="branco" titulo="Resultados reais" intro="Fotos de atendimentos feitos no estúdio, com autorização.">
        <GradeFotos itens={resultados} minimo={4} proporcao="280 / 380" colunas={4} />
      </Bloco>

      <Bloco titulo="Como funciona">
        <div className={styles.etapas}>
          {[
            ["Avaliação", "Você manda fotos e a Naju avalia o seu caso."],
            ["Plano", "Ela explica o que esperar e quantas sessões são estimadas."],
            ["Sessões", "Atendimento com hora marcada, no intervalo combinado entre uma e outra."],
            ["Acompanhamento", "Orientação de cuidados e retorno pelo WhatsApp."],
          ].map(([t, d]) => (
            <div key={t} className={styles.etapa}>
              <h3 className={styles.etapaTitulo}>{t}</h3>
              <p className={styles.etapaTexto}>{d}</p>
            </div>
          ))}
        </div>
      </Bloco>

      <BiosegurancaSecao />
      <FaixaCTA titulo="Quer avaliar a remoção?" texto="Escolha o serviço e fale direto com a Naju." to="/pedir-orcamento?servico=remocao" />
    </div>
  );
}
