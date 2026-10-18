import { useState } from "react";
import { Modal } from "./Modal";
import { Botao } from "./Botao";
import { FotoSlot } from "./FotoSlot";
import { regioesPiercing, type RegiaoPiercing } from "../helpers/opcoes";
import { fotos } from "../helpers/fotos";
import { contatos } from "../helpers/contatos";
import { whatsappLink } from "../helpers/whatsappLink";
import styles from "./Opcoes.module.css";

// Botões das regiões. Cada um abre uma janela com foto, lista de perfurações e pedido de orçamento.
export function PiercingRegioes() {
  const [aberta, setAberta] = useState<RegiaoPiercing | null>(null);
  const naju = contatos.piercing;

  return (
    <>
      <div className={styles.chips}>
        {regioesPiercing.map((r) => (
          <button key={r.id} type="button" className={styles.chip} onClick={() => setAberta(r)} aria-haspopup="dialog">
            <i /> {r.nome}
          </button>
        ))}
      </div>

      <Modal aberto={aberta !== null} onFechar={() => setAberta(null)} titulo={aberta ? `Piercing: ${aberta.nome}` : ""}>
        {aberta && (
          <div>
            <div className={styles.foto}>
              <FotoSlot src={fotos.regioes[aberta.id]} alt={`Piercing de ${aberta.nome.toLowerCase()} aplicado pela Naju`} />
            </div>
            <div className={styles.corpo}>
              <h3 className={styles.titulo}>{aberta.nome}</h3>
              <ul className={styles.lista}>
                {aberta.itens.map((i) => (
                  <li key={i.nome}>
                    <b>{i.nome}</b>
                    {i.detalhe && <span> ({i.detalhe})</span>}
                  </li>
                ))}
              </ul>
              <Botao
                block
                href={whatsappLink(
                  naju.numero,
                  `Olá, Naju! Vim pelo site do Studio Balotty.\nQuero fazer um piercing na região: ${aberta.nome}.`,
                )}
              >
                Pedir Orçamento
              </Botao>
              <p className={styles.nota}>Abre o WhatsApp da Naju com a mensagem pronta.</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
