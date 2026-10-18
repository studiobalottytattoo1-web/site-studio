import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Bloco } from "../components/Bloco";
import { HeroInterno } from "../components/HeroInterno";
import { FaixaCTA } from "../components/FaixaCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/Accordion";
import styles from "./cuidados-e-faq.module.css";

const cuidados = [
  { t: "Tatuagem", d: "Lave com sabonete neutro, seque sem esfregar e use a pomada indicada pelo Tales. Evite sol, piscina e mar enquanto cicatriza." },
  { t: "Piercing", d: "Não gire nem mexa na joia. Limpe como a Naju orientar e evite dormir sobre a região." },
  { t: "Furinho do bebê", d: "Mãos limpas antes de tocar no brinco, limpeza conforme a orientação da Naju e atenção a qualquer vermelhidão diferente." },
  { t: "Remoção e despigmentação", d: "Proteja a pele do sol, não arranque casquinhas e siga o intervalo combinado entre as sessões." },
];

const perguntas = [
  { p: "Como faço para agendar?", r: "Peça o orçamento pelo site ou chame direto no WhatsApp. O atendimento é de segunda a sábado, sempre com horário agendado." },
  { p: "Quanto custa?", r: "O valor depende do tamanho, do local e da complexidade, por isso é combinado no WhatsApp, depois de entender a sua ideia." },
  { p: "Posso levar um desenho de referência?", r: "Pode e é bem-vindo. O Tales usa a referência como ponto de partida e desenha um projeto para você." },
  { p: "É possível cobrir uma tatuagem antiga?", r: "Em muitos casos, sim. Mande uma foto da tatuagem para o Tales avaliar. A cobertura depende do tamanho, da cor e do traço do desenho atual." },
  { p: "Vocês fazem remoção de tatuagem?", r: "Sim, com a Naju. Ela avalia o seu caso e monta um plano de sessões. O resultado varia de pessoa para pessoa." },
  { p: "A Naju faz furinho em bebê?", r: "Faz. É o furinho humanizado, com calma e acompanhamento da família. Veja a página do furinho humanizado." },
  { p: "Como é a higiene do estúdio?", r: "Usamos autoclave, materiais descartáveis, higienização entre atendimentos e equipamentos de proteção em todos os procedimentos." },
  { p: "Posso levar acompanhante?", r: "Pode. Combine antes pelo WhatsApp para organizarmos o espaço, principalmente em atendimentos de bebê." },
  { p: "Onde fica o estúdio?", r: "Av. Governador Milton Campos, 2132, Loja A, Centro, Guanhães (MG)." },
  { p: "Profissionais independentes podem atender no espaço?", r: "Sim, o estúdio tem salas disponíveis. Fale com o Tales pelo WhatsApp." },
];

export default function CuidadosFaqPage() {
  return (
    <div>
      <Helmet>
        <title>Cuidados e perguntas frequentes | Studio Balotty</title>
        <meta
          name="description"
          content="Cuidados depois da tatuagem, do piercing, do furinho do bebê e da remoção, e respostas às dúvidas mais comuns sobre o estúdio."
        />
      </Helmet>

      <HeroInterno
        titulo="Cuidados e perguntas frequentes."
        texto="O que fazer depois do atendimento e as respostas para as dúvidas que mais aparecem."
      />

      <Bloco titulo="Cuidados depois do atendimento" intro="Orientações gerais. Cada caso recebe a orientação completa no dia do atendimento.">
        <div className={styles.cuidados}>
          {cuidados.map((c) => (
            <div key={c.t} className={styles.cuidado}>
              <h3 className={styles.cuidadoTitulo}>{c.t}</h3>
              <p className={styles.cuidadoTexto}>{c.d}</p>
            </div>
          ))}
        </div>
      </Bloco>

      <Bloco tom="branco" titulo="Perguntas frequentes">
        <div className={styles.faq}>
          <Accordion type="single" collapsible>
            {perguntas.map((q, i) => (
              <AccordionItem key={q.p} value={`q${i}`}>
                <AccordionTrigger>{q.p}</AccordionTrigger>
                <AccordionContent>
                  {q.r}
                  {q.p.startsWith("A Naju faz furinho") && (
                    <>
                      {" "}
                      <Link to="/furinho-humanizado" className={styles.link}>Ver a página</Link>.
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Bloco>

      <FaixaCTA titulo="Ficou com alguma dúvida?" texto="Chame o Tales ou a Naju no WhatsApp." rotulo="Ver contatos" to="/contato" />
    </div>
  );
}
