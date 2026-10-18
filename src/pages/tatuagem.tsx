import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Botao } from "../components/Botao";
import { Bloco } from "../components/Bloco";
import { HeroInterno } from "../components/HeroInterno";
import { FotoSlot } from "../components/FotoSlot";
import { GaleriaPaginada } from "../components/GaleriaPaginada";
import { FaixaCTA } from "../components/FaixaCTA";
import { EstilosTatuagem } from "../components/EstilosTatuagem";
import { fotos } from "../helpers/fotos";
import styles from "./tatuagem.module.css";

const etapas = [
  { titulo: "Conversa", texto: "Você conta a ideia, o local do corpo e o tamanho. Pode mandar referências." },
  { titulo: "Projeto", texto: "O Tales desenha e ajusta com você antes de marcar a sessão." },
  { titulo: "Sessão", texto: "Atendimento com hora marcada, em ambiente preparado e com materiais descartáveis." },
  { titulo: "Cuidados", texto: "Você recebe a orientação de cicatrização e pode tirar dúvidas depois." },
];

export default function TatuagemPage() {
  const trabalhos = fotos.tatuagens.map((t) => ({ src: t.src as string | null, alt: t.alt, cobertura: t.cobertura }));
  return (
    <div>
      <Helmet>
        <title>Tatuagem com o Tales | Studio Balotty</title>
        <meta
          name="description"
          content="Tatuagem autoral em vários estilos, cobertura (cover up) de tatuagem antiga e camuflagem de cicatrizes, com o Tales, em Guanhães (MG)."
        />
      </Helmet>

      <HeroInterno
        titulo="Tatuagem feita com projeto e conversa."
        texto="O Tales tatua desde 2018 e trabalha quase todos os estilos. Você conta a ideia, ele desenha e ajusta com você."
      >
        <Botao to="/pedir-orcamento?servico=tatuagem" variant="claro">Pedir orçamento</Botao>
        <Botao to="#trabalhos" variant="linha">Ver trabalhos</Botao>
      </HeroInterno>

      <Bloco titulo="Estilos que o Tales faz" intro="Não achou o seu estilo? Chame no WhatsApp, ele avalia a sua ideia.">
        <EstilosTatuagem />
      </Bloco>

      <Bloco id="trabalhos" tom="escuro" titulo="Trabalhos do Tales" intro="Alguns trabalhos feitos no estúdio.">
        <GaleriaPaginada itens={trabalhos} porPagina={6} rotulo="Trabalhos do Tales" />
      </Bloco>

      <Bloco id="cobertura" titulo="Cobertura (cover up) de tatuagem" intro="Transformamos uma tatuagem antiga em um desenho novo.">
        <div className={styles.duas}>
          <div className={styles.cartao}>
            <h3 className={styles.cartaoTitulo}>Como funciona</h3>
            <p className={styles.texto}>
              O Tales avalia a tatuagem que você já tem (tamanho, cor e traço) e desenha um projeto que cobre o desenho
              antigo. Mande uma foto da tatuagem pelo WhatsApp para a primeira avaliação.
            </p>
            <p className={styles.texto}>
              Nem toda tatuagem pode ser coberta com qualquer desenho. Por isso a avaliação vem antes do projeto.
            </p>
            <div className={styles.acoes}>
              <Botao to="/pedir-orcamento?servico=cobertura">Pedir orçamento de cobertura</Botao>
            </div>
          </div>
          <div className={styles.cartao}>
            <h3 className={styles.cartaoTitulo}>Antes de pedir</h3>
            <ul className={styles.lista}>
              <li>Foto da tatuagem atual, com boa luz.</li>
              <li>Tamanho aproximado e local do corpo.</li>
              <li>Ideias ou referências do desenho novo.</li>
            </ul>
            <p className={styles.texto}>
              Se a ideia for apagar a tatuagem, veja a <Link to="/remocao-e-despigmentacao" className={styles.linkSub}>remoção de tatuagem</Link> com a Naju.
            </p>
          </div>
        </div>
      </Bloco>

      <Bloco id="camuflagem" tom="branco" titulo="Camuflagem e cobertura de cicatrizes" intro="Tatuagem para suavizar a aparência de cicatrizes e marcas.">
        <div className={styles.camuflagem}>
          <div>
            <p className={styles.texto}>
              A camuflagem usa a técnica da tatuagem para aproximar a cor da área marcada do tom da pele ao redor, ou para
              integrar a marca a um desenho. O resultado depende do tipo de cicatriz, da cor e da textura da pele.
            </p>
            <p className={styles.texto}>
              Por isso o Tales faz uma avaliação antes, para explicar com sinceridade o que o procedimento pode e o que não
              pode fazer no seu caso.
            </p>
            <div className={styles.acoes}>
              <Botao to="/pedir-orcamento?servico=camuflagem">Pedir avaliação</Botao>
            </div>
          </div>
          <div className={styles.camuflagemFoto}>
            <FotoSlot src={fotos.talesEspaco} alt="Tales atendendo no estúdio" posicao="50% 30%" />
          </div>
        </div>
      </Bloco>

      <Bloco titulo="Como é o atendimento">
        <div className={styles.etapas}>
          {etapas.map((e, i) => (
            <div key={e.titulo} className={styles.etapa}>
              <span className={styles.numero}>{i + 1}</span>
              <h3 className={styles.etapaTitulo}>{e.titulo}</h3>
              <p className={styles.etapaTexto}>{e.texto}</p>
            </div>
          ))}
        </div>
      </Bloco>

      <FaixaCTA titulo="Conte a sua ideia para o Tales." texto="Você escolhe o serviço e segue direto para o WhatsApp dele." to="/pedir-orcamento?servico=tatuagem" />
    </div>
  );
}
