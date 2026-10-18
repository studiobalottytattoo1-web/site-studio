import { Helmet } from "react-helmet";
import { Bloco } from "../components/Bloco";
import { AvaliacoesGoogle } from "../components/AvaliacoesGoogle";
import { Botao } from "../components/Botao";
import { HeroInterno } from "../components/HeroInterno";
import { ContatoCartoes } from "../components/ContatoCartoes";
import { contatos } from "../helpers/contatos";
import styles from "./contato.module.css";

const mapa =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Av. Governador Milton Campos, 2132, Centro, Guanhães, MG, 39740-000") +
  "&output=embed";

export default function ContatoPage() {
  return (
    <div>
      <Helmet>
        <title>Contato | Studio Balotty Tattoo e Naju Piercer</title>
        <meta
          name="description"
          content="WhatsApp do Tales e da Naju, Instagram e endereço do Studio Balotty, em Guanhães (MG)."
        />
      </Helmet>

      <HeroInterno
        titulo="Fale com a gente."
        texto="Atendemos de segunda a sábado, com horário agendado. Escolha com quem quer falar."
      >
        <Botao to="/pedir-orcamento" variant="claro">Pedir orçamento</Botao>
      </HeroInterno>

      <Bloco tom="escuro" titulo="WhatsApp">
        <ContatoCartoes />
      </Bloco>

      <Bloco titulo="Onde estamos">
        <div className={styles.local}>
          <div>
            <p className={styles.endereco}>{contatos.studio.endereco}</p>
            <p className={styles.texto}>Segunda a sábado, com horário agendado.</p>
            <div className={styles.redes}>
              {[contatos.tatuagem.instagram, contatos.studio.instagram, contatos.piercing.instagram].map((h) => (
                <a key={h} href={`https://instagram.com/${h}`} target="_blank" rel="noopener noreferrer">
                  @{h}
                </a>
              ))}
            </div>
            <div className={styles.acoes}>
              <Botao
                variant="verde"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contatos.studio.endereco)}`}
              >
                Abrir no mapa
              </Botao>
            </div>
          </div>
          <div className={styles.mapa}>
            <iframe
              title="Mapa do Studio Balotty em Guanhães"
              src={mapa}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Bloco>
      <AvaliacoesGoogle />
    </div>
  );
}
