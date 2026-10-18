import { Helmet } from "react-helmet";
import { Botao } from "../components/Botao";
import { Bloco } from "../components/Bloco";
import { HeroInterno } from "../components/HeroInterno";
import { FotoSlot } from "../components/FotoSlot";
import { Rombos } from "../components/Rombos";
import { BiosegurancaSecao } from "../components/BiosegurancaSecao";
import { FaixaCTA } from "../components/FaixaCTA";
import { PiercingRegioes } from "../components/PiercingRegioes";
import { fotos } from "../helpers/fotos";
import styles from "./piercing.module.css";

export default function PiercingPage() {
  const galeria = [
    fotos.piercing[0],
    fotos.piercing[1],
    fotos.piercing[2],
    fotos.piercing[3],
    fotos.orelhaProjeto,
    fotos.orelha,
    fotos.umbigo,
    fotos.piercing[6],
    fotos.piercing[4],
  ];
  return (
    <div>
      <Helmet>
        <title>Piercing com a Naju | Studio Balotty</title>
        <meta
          name="description"
          content="Piercing com joias premium e avaliação da sua anatomia antes de qualquer aplicação, com a Naju, em Guanhães (MG)."
        />
      </Helmet>

      <HeroInterno
        titulo="Piercing com joia certa e anatomia avaliada."
        texto="A Naju aplica piercing com joias premium e avalia a sua anatomia antes de furar. Cada projeto de orelha é pensado para você."
      >
        <Botao to="/pedir-orcamento?servico=piercing" variant="claro">Pedir orçamento</Botao>
        <Botao to="/furinho-humanizado" variant="linha">Furinho humanizado</Botao>
      </HeroInterno>

      <Bloco>
        <div className={styles.perfil}>
          <div className={styles.perfilFoto}>
            <FotoSlot src={fotos.piercingNaju ?? fotos.naju} alt="Naju, body piercer" posicao="50% 15%" />
          </div>
          <div>
            <h2 className={styles.titulo}>Naju, body piercer</h2>
            <p className={styles.texto}>
              Muitos piercings aplicados e uma regra: nada de pressa. Antes de qualquer aplicação, a Naju olha a sua
              anatomia, explica o que cabe em cada região e ajuda a escolher a joia.
            </p>
            <p className={styles.texto}>
              Também é professora de curso de piercing e formada em remoção de pigmentos.
            </p>
            <PiercingRegioes />
          </div>
        </div>
      </Bloco>

      <Bloco tom="branco" titulo="Detalhes que ficam." intro="Piercings aplicados pela Naju.">
        <Rombos
          fotos={galeria.slice(0, 5)}
          alts={galeria.slice(0, 5).map((_, i) => `Piercing aplicado pela Naju, foto ${i + 1}`)}
        />
        <Rombos
          fotos={galeria.slice(5)}
          alts={galeria.slice(5).map((_, i) => `Piercing aplicado pela Naju, foto ${i + 6}`)}
        />
      </Bloco>

      <Bloco titulo="Como é o atendimento">
        <div className={styles.etapas}>
          {[
            ["Avaliação", "A Naju olha a região e explica o que é possível no seu caso."],
            ["Joia", "Você escolhe a joia entre as opções premium do estúdio."],
            ["Aplicação", "Com materiais descartáveis, luvas e tudo esterilizado na autoclave."],
            ["Cuidados", "Orientação por escrito e a Naju acompanha pelo WhatsApp."],
          ].map(([t, d]) => (
            <div key={t} className={styles.etapa}>
              <h3 className={styles.etapaTitulo}>{t}</h3>
              <p className={styles.etapaTexto}>{d}</p>
            </div>
          ))}
        </div>
      </Bloco>

      <BiosegurancaSecao />
      <FaixaCTA titulo="Quer fazer um piercing?" texto="Escolha a região e fale direto com a Naju." to="/pedir-orcamento?servico=piercing" />
    </div>
  );
}
