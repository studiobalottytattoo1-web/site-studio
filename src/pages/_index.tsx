import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Botao } from "../components/Botao";
import { Bloco } from "../components/Bloco";
import { FotoSlot } from "../components/FotoSlot";
import { Rombos } from "../components/Rombos";
import { CarrosselTrabalhos } from "../components/CarrosselTrabalhos";
import { BiosegurancaSecao } from "../components/BiosegurancaSecao";
import { AvaliacoesGoogle } from "../components/AvaliacoesGoogle";
import { ContatoCartoes } from "../components/ContatoCartoes";
import { fotos } from "../helpers/fotos";
import { contatos } from "../helpers/contatos";
import styles from "./_index.module.css";

export default function InicioPage() {
  return (
    <div>
      <Helmet>
        <title>Studio Balotty Tattoo e Naju Piercer | Guanhães (MG)</title>
        <meta
          name="description"
          content="Tatuagem com o Tales e piercing com a Naju, em Guanhães (MG). Atendimento de segunda a sábado, com horário agendado."
        />
      </Helmet>

      <section className={styles.hero}>
        <div className={styles.fundo}>
          {fotos.casalEspaco || fotos.casalRetrato ? (
            <picture>
              {fotos.casalEspaco && <source media="(min-width: 900px)" srcSet={fotos.casalEspaco} />}
              <img
                src={fotos.casalRetrato ?? fotos.casalEspaco ?? ""}
                alt="Tales e Naju no Studio Balotty"
                className={styles.fotoHero}
              />
            </picture>
          ) : (
            <div className={styles.semFoto} aria-hidden="true" />
          )}
        </div>
        <div className={styles.veu} />
        <div className={styles.heroDentro}>
          <div className={styles.heroTexto}>
            <h1 className={styles.heroTitulo}>Tatuagem e piercing com hora marcada e sem pressa.</h1>
            <p className={styles.heroSub}>Tales e Naju atendem de segunda a sábado, no centro de Guanhães.</p>
            <div className={styles.heroAcoes}>
              <Botao to="/pedir-orcamento" variant="claro">Pedir orçamento</Botao>
              <Botao to="/#servicos" variant="linha">Ver serviços</Botao>
            </div>
            <div className={styles.heroInfo}>
              <span><b>Segunda a sábado</b>, com horário agendado</span>
              <span>Av. Governador Milton Campos, 2132</span>
            </div>
          </div>
        </div>
      </section>

      <Bloco
        id="servicos"
        titulo="O que fazemos no estúdio"
        intro="Escolha o serviço para ver os detalhes ou peça o orçamento direto. O valor é combinado no WhatsApp, depois de entender a sua ideia."
      >
        <div className={styles.pilares}>
          <article className={styles.pilar}>
            <div className={styles.pilarFoto}>
              <FotoSlot src={fotos.tales} alt="Tales preparando a máquina de tatuagem" posicao="50% 25%" />
            </div>
            <div className={styles.pilarCorpo}>
              <span className={styles.quem}>Com o Tales</span>
              <h3 className={styles.pilarTitulo}>Tatuagem</h3>
              <p className={styles.pilarTexto}>
                Projetos autorais em vários estilos, cobertura de tatuagem antiga (cover up) e camuflagem de cicatrizes.
              </p>
              <div className={styles.pilarLinhas}>
                <Botao to="/pedir-orcamento?servico=tatuagem" size="sm">Pedir orçamento</Botao>
                <Link to="/tatuagem" className={styles.mais}>Saiba mais</Link>
              </div>
            </div>
          </article>

          <article className={styles.pilar}>
            <div className={styles.pilarFoto}>
              <FotoSlot src={fotos.najuCartao} alt="Naju, body piercer" posicao="50% 20%" />
            </div>
            <div className={styles.pilarCorpo}>
              <span className={styles.quem}>Com a Naju</span>
              <h3 className={styles.pilarTitulo}>Piercing</h3>
              <p className={styles.pilarTexto}>
                Joias premium e avaliação da sua anatomia antes de qualquer aplicação.
              </p>
              <div className={styles.pilarLinhas}>
                <Botao to="/pedir-orcamento?servico=piercing" size="sm">Pedir orçamento</Botao>
                <Link to="/piercing" className={styles.mais}>Saiba mais</Link>
              </div>
            </div>
          </article>

          <article className={styles.pilar}>
            <div className={styles.pilarFoto}>
              <FotoSlot src={fotos.remocao[1]?.src ?? null} alt="Remoção de tatuagem a laser em andamento" posicao="50% 30%" />
            </div>
            <div className={styles.pilarCorpo}>
              <span className={styles.quem}>Com a Naju</span>
              <h3 className={styles.pilarTitulo}>Remoção e despigmentação</h3>
              <p className={styles.pilarTexto}>
                Remoção de tatuagem e despigmentação de sobrancelhas, com avaliação individual e plano de sessões.
              </p>
              <div className={styles.pilarLinhas}>
                <Botao to="/pedir-orcamento?servico=remocao" size="sm">Pedir orçamento</Botao>
                <Link to="/remocao-e-despigmentacao" className={styles.mais}>Saiba mais</Link>
              </div>
            </div>
          </article>
        </div>
      </Bloco>

      <section className={styles.furinho}>
        <div className={styles.furinhoDentro}>
          <div className={styles.furinhoFoto}>
            <FotoSlot src={fotos.furinhoDetalhe[0]} alt="Furinho humanizado em bebê" />
          </div>
          <div>
            <span className={styles.furinhoQuem}>Com a Naju</span>
            <h2 className={styles.furinhoTitulo}>Furinho humanizado</h2>
            <p className={styles.furinhoTexto}>
              O primeiro brinco do bebê, feito com calma, técnica e cuidado com a família. Um dos atendimentos que mais
              marcam a Naju.
            </p>
            <div className={styles.furinhoAcoes}>
              <Botao to="/furinho-humanizado" variant="claro">Conheça o furinho humanizado</Botao>
            </div>
          </div>
        </div>
      </section>

      <Bloco tom="marrom">
        <div className={styles.casal}>
          <div className={styles.casalFoto}>
            <FotoSlot src={fotos.casal2} alt="Tales e Naju sorrindo" posicao="50% 20%" />
          </div>
          <div>
            <h2 className={styles.casalTitulo}>Dois profissionais, um só estúdio.</h2>
            <div className={styles.pessoas}>
              <div>
                <h3 className={styles.pessoaNome}>Tales Balotty</h3>
                <span className={styles.funcao}>Tatuador</span>
                <p className={styles.pessoaTexto}>
                  Tatuador profissional desde 2018, faz quase todos os estilos. Formado em remoção de pigmentos.
                </p>
              </div>
              <div>
                <h3 className={styles.pessoaNome}>Naju</h3>
                <span className={styles.funcao}>Body piercer</span>
                <p className={styles.pessoaTexto}>
                  Muitos piercings aplicados, com joias premium. Formada em remoção de pigmentos e professora de curso de
                  piercing.
                </p>
              </div>
            </div>
            <Botao to="/quem-somos" variant="claro">Conheça a nossa história</Botao>
          </div>
        </div>
      </Bloco>

      <Bloco
        tom="escuro"
        titulo="Trabalhos do estúdio"
        intro="Tatuagens e coberturas feitas pelo Tales. Passe, arraste ou filtre."
        acao={<Botao to="/tatuagem#trabalhos" variant="linha">Ver mais tatuagens</Botao>}
      >
        <CarrosselTrabalhos />
      </Bloco>

      <Bloco
        titulo="Detalhes que ficam."
        intro="Alguns piercings aplicados pela Naju."
        acao={<Botao to="/piercing" variant="linhaEscura">Ver piercing</Botao>}
      >
        <Rombos
          fotos={[fotos.piercing[1], fotos.piercing[3], fotos.piercing[6], fotos.piercing[2], fotos.piercing[4]]}
          alts={[
            "Piercing de orelha com argola e joia",
            "Joia de flor aplicada na orelha",
            "Piercing de nariz com brilhante",
            "Joia de brilhantes aplicada na orelha",
            "Piercing de nariz com brilhante",
          ]}
        />
      </Bloco>

      <BiosegurancaSecao />

      <AvaliacoesGoogle />

      <Bloco tom="escuro" titulo="Fale com a gente." intro="Atendemos de segunda a sábado, com horário agendado. Escolha com quem quer falar.">
        <ContatoCartoes />
        <p className={styles.redes}>
          Também estamos no Instagram:
          {[contatos.tatuagem.instagram, contatos.studio.instagram, contatos.piercing.instagram].map((h) => (
            <a key={h} href={`https://instagram.com/${h}`} target="_blank" rel="noopener noreferrer">
              @{h}
            </a>
          ))}
        </p>
      </Bloco>
    </div>
  );
}
