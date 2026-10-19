import { Helmet } from "react-helmet";
import { Botao } from "../components/Botao";
import { Bloco } from "../components/Bloco";
import { HeroInterno } from "../components/HeroInterno";
import { FotoSlot } from "../components/FotoSlot";
import { BiosegurancaSecao } from "../components/BiosegurancaSecao";
import { FaixaCTA } from "../components/FaixaCTA";
import { fotos, topos } from "../helpers/fotos";
import { contatos } from "../helpers/contatos";
import { whatsappLink } from "../helpers/whatsappLink";
import styles from "./quem-somos.module.css";

export default function QuemSomosPage() {
  return (
    <div>
      <Helmet>
        <title>Quem somos | Studio Balotty Tattoo e Naju Piercer</title>
        <meta
          name="description"
          content="Conheça o Tales, tatuador desde 2018, e a Naju, body piercer. Um estúdio em Guanhães (MG) feito com calma, técnica e segurança."
        />
      </Helmet>

      <HeroInterno
        fotoComputador={topos.quemSomos.computador}
        fotoCelular={topos.quemSomos.celular}
        titulo="Um estúdio feito por duas pessoas que levam o ofício a sério."
        texto="O Studio Balotty nasceu em 2018, em São João Evangelista, e hoje atende em Guanhães. Aqui cada pessoa tem hora marcada e tempo para conversar."
      >
        <Botao to="/pedir-orcamento" variant="claro">Pedir orçamento</Botao>
      </HeroInterno>

      <Bloco>
        <div className={styles.casalLinha}>
          <div className={styles.moldura}>
            <FotoSlot src={fotos.casal3} alt="Tales e Naju no estúdio" posicao="50% 20%" />
          </div>
          <div>
            <h2 className={styles.titulo}>Nossa história</h2>
            <p className={styles.texto}>
              Tales e Naju abriram o estúdio em 2018, em São João Evangelista (MG). Hoje o Studio Balotty fica no centro de
              Guanhães, num espaço amplo, com salas separadas para cada atendimento.
            </p>
            <p className={styles.texto}>
              O combinado é simples: atendimento com horário marcado, conversa antes de qualquer procedimento e todo o
              cuidado com a biossegurança.
            </p>
          </div>
        </div>

        <div className={styles.perfil}>
          <div className={styles.perfilFoto}>
            <FotoSlot src={fotos.tales} alt="Tales Balotty, tatuador" posicao="50% 15%" />
          </div>
          <div>
            <h2 className={styles.titulo}>Tales Balotty</h2>
            <span className={styles.funcao}>Tatuador</span>
            <p className={styles.texto}>
              Tatuador profissional desde 2018, faz quase todos os estilos. Também faz cobertura de tatuagens antigas (cover
              up) e camuflagem de cicatrizes. É formado em remoção de pigmentos.
            </p>
            <div className={styles.acoes}>
              <Botao
                variant="verde"
                href={whatsappLink(contatos.tatuagem.numero, "Olá, Tales! Vim pelo site do Studio Balotty.")}
              >
                Chamar o Tales no WhatsApp
              </Botao>
              <a className={styles.link} href={`https://instagram.com/${contatos.tatuagem.instagram}`} target="_blank" rel="noopener noreferrer">
                @{contatos.tatuagem.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.perfil} ${styles.inverso}`}>
          <div className={styles.perfilFoto}>
            <FotoSlot src={fotos.naju} alt="Naju, body piercer" posicao="50% 15%" />
          </div>
          <div>
            <h2 className={styles.titulo}>Naju</h2>
            <span className={styles.funcao}>Body piercer</span>
            <p className={styles.texto}>
              Body piercer com muitos piercings aplicados e joias premium. Atende também o furinho humanizado dos bebês,
              remoção de tatuagem e despigmentação de sobrancelhas. É formada em remoção de pigmentos e professora de curso de
              piercing.
            </p>
            <div className={styles.acoes}>
              <Botao
                variant="verde"
                href={whatsappLink(contatos.piercing.numero, "Olá, Naju! Vim pelo site do Studio Balotty.")}
              >
                Chamar a Naju no WhatsApp
              </Botao>
              <a className={styles.link} href={`https://instagram.com/${contatos.piercing.instagram}`} target="_blank" rel="noopener noreferrer">
                @{contatos.piercing.instagram}
              </a>
            </div>
          </div>
        </div>
      </Bloco>

      <Bloco id="nosso-espaco" tom="escuro" titulo="Nosso espaço">
        <div className={styles.espaco}>
          <div className={styles.espacoGrade}>
            {fotos.espaco.map((f) => (
              <div key={f.src} className={styles.espacoFoto}>
                <FotoSlot src={f.src} alt={f.alt} posicao={f.posicao} />
              </div>
            ))}
          </div>
          <div>
            <p className={styles.espacoTexto}>
              Um espaço amplo, claro e organizado, pensado para você ficar à vontade durante todo o atendimento.
            </p>
            <ul className={styles.fatos}>
              <li><i /><span><b>Ambiente amplo</b> com salas separadas para cada procedimento.</span></li>
              <li><i /><span><b>Atendimento com horário marcado</b>, de segunda a sábado.</span></li>
              <li><i /><span><b>Biossegurança</b> em todos os procedimentos.</span></li>
            </ul>
          </div>
        </div>
      </Bloco>

      <Bloco>
        <div className={styles.parceria}>
          <img src={fotos.logo ?? ""} alt="Logo do Studio Balotty Tattoo e Naju Piercer" className={styles.parceriaLogo} loading="lazy" />
          <div>
            <h2 className={styles.parceriaTitulo}>Profissional independente? Tem sala para você.</h2>
            <p className={styles.parceriaTexto}>
              O espaço é grande e tem salas disponíveis. Se você é tatuador, piercer ou trabalha com estética e quer
              atender aqui, fale com o Tales.
            </p>
          </div>
          <Botao
            variant="verde"
            href={whatsappLink(
              contatos.tatuagem.numero,
              "Olá, Tales! Sou profissional independente e vi no site que o estúdio tem salas disponíveis. Podemos conversar?",
            )}
          >
            Falar com o Tales
          </Botao>
        </div>
      </Bloco>

      <BiosegurancaSecao />
      <FaixaCTA titulo="Vamos conversar sobre a sua ideia?" texto="Conte o que você imagina e a gente responde pelo WhatsApp." />
    </div>
  );
}
