import { Helmet } from "react-helmet";
import { Botao } from "../components/Botao";
import { Bloco } from "../components/Bloco";
import { HeroInterno } from "../components/HeroInterno";
import { FotoSlot } from "../components/FotoSlot";
import { GradeFotos } from "../components/GradeFotos";
import { BiosegurancaSecao } from "../components/BiosegurancaSecao";
import { FaixaCTA } from "../components/FaixaCTA";
import { fotos } from "../helpers/fotos";
import { contatos } from "../helpers/contatos";
import { whatsappLink } from "../helpers/whatsappLink";
import styles from "./furinho-humanizado.module.css";

const passos = [
  { t: "Conversa com a família", d: "A Naju explica como é o procedimento, tira as dúvidas e combina o melhor momento." },
  { t: "Escolha do brinco", d: "A família escolhe a joia com a Naju, com materiais próprios para pele de bebê." },
  { t: "Atendimento com calma", d: "Ambiente preparado, materiais descartáveis e tempo para o bebê e para os pais ficarem à vontade." },
  { t: "Cuidados em casa", d: "Orientação clara de limpeza e acompanhamento pelo WhatsApp." },
];

export default function FurinhoHumanizadoPage() {
  const familias = fotos.familias.map((f) => ({ src: f.src as string | null, alt: f.alt }));
  return (
    <div>
      <Helmet>
        <title>Furinho humanizado para bebês | Studio Balotty</title>
        <meta
          name="description"
          content="O primeiro brinco do bebê feito com calma, técnica e cuidado com a família, pela Naju, em Guanhães (MG)."
        />
      </Helmet>

      <HeroInterno
        comLogo
        titulo="O primeiro brinco do seu bebê, com calma e cuidado."
        texto="O furinho humanizado é um dos atendimentos mais especiais da Naju. A família participa de cada passo."
      >
        <Botao to="/pedir-orcamento?servico=furinho" variant="claro">Pedir orçamento</Botao>
        <Botao
          variant="linha"
          href={whatsappLink(contatos.piercing.numero, "Olá, Naju! Vim pelo site e quero saber mais sobre o furinho humanizado.")}
        >
          Chamar a Naju
        </Botao>
      </HeroInterno>

      <Bloco>
        <div className={styles.intro}>
          <div className={styles.heroFoto}>
            <FotoSlot src={fotos.furinhoHero} alt="Bebê com brinco, no colo da família" posicao="50% 25%" />
          </div>
          <div>
            <h2 className={styles.titulo}>O que é o furinho humanizado</h2>
            <p className={styles.texto}>
              É o furo de orelha do bebê feito com atenção ao momento da criança e da família. Sem pressa, sem susto e com
              explicação de cada etapa, para que os pais acompanhem e se sintam seguros.
            </p>
            <p className={styles.texto}>
              A Naju é body piercer e atende com joias selecionadas, materiais descartáveis e todo o cuidado de
              biossegurança do estúdio.
            </p>
            <div className={styles.detalhes}>
              <div className={styles.detalhe}>
                <FotoSlot src={fotos.furinhoDetalhe[0]} alt="Detalhe do brinco em orelha de bebê" />
              </div>
              <div className={styles.detalhe}>
                <FotoSlot src={fotos.furinhoDetalhe[1]} alt="Detalhe do brinco em orelha de bebê" />
              </div>
            </div>
          </div>
        </div>
      </Bloco>

      <Bloco tom="branco" titulo="Como funciona">
        <div className={styles.passos}>
          {passos.map((p) => (
            <div key={p.t} className={styles.passo}>
              <h3 className={styles.passoTitulo}>{p.t}</h3>
              <p className={styles.passoTexto}>{p.d}</p>
            </div>
          ))}
        </div>
      </Bloco>

      <Bloco tom="marrom" titulo="Famílias que passaram por aqui" intro="Alguns bebês e famílias atendidos pela Naju, com autorização.">
        <GradeFotos itens={familias} minimo={6} proporcao="3 / 4" colunas={3} tom="escuro" />
      </Bloco>

      <BiosegurancaSecao />
      <FaixaCTA titulo="Quer agendar o furinho do seu bebê?" texto="Conte a idade do bebê e a Naju responde pelo WhatsApp." to="/pedir-orcamento?servico=furinho" />
    </div>
  );
}
