import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { Botao } from "./Botao";
import { estilosTatuagem } from "../helpers/opcoes";
import { contatos } from "../helpers/contatos";
import { whatsappLink } from "../helpers/whatsappLink";
import styles from "./Opcoes.module.css";

// Botões dos estilos. Cada um abre uma janela com o nome, o campo de foto de referência e o pedido de orçamento.
export function EstilosTatuagem() {
  const [estilo, setEstilo] = useState<string | null>(null);
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [previa, setPrevia] = useState<string | null>(null);
  const tales = contatos.tatuagem;

  useEffect(() => {
    if (!arquivo) {
      setPrevia(null);
      return;
    }
    const url = URL.createObjectURL(arquivo);
    setPrevia(url);
    return () => URL.revokeObjectURL(url);
  }, [arquivo]);

  const fechar = () => {
    setEstilo(null);
    setArquivo(null);
  };

  const mensagem = [
    "Olá, Tales! Vim pelo site do Studio Balotty.",
    `Quero um orçamento de tatuagem no estilo: ${estilo}.`,
    arquivo ? "Vou te enviar uma foto de referência aqui na conversa." : "",
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <>
      <div className={styles.chips}>
        {estilosTatuagem.map((e) => (
          <button key={e} type="button" className={styles.chip} onClick={() => setEstilo(e)} aria-haspopup="dialog">
            <i /> {e}
          </button>
        ))}
      </div>

      <Modal aberto={estilo !== null} onFechar={fechar} titulo={estilo ? `Tatuagem: ${estilo}` : ""}>
        {estilo && (
          <div className={styles.corpoSolo}>
            <h3 className={styles.titulo}>{estilo}</h3>

            <label className={styles.upload}>
              {previa ? (
                <img src={previa} alt="Foto de referência escolhida" className={styles.previa} />
              ) : (
                <span className={styles.uploadVazio}>
                  <span className={styles.losango} aria-hidden="true" />
                  Adicionar foto de referência
                </span>
              )}
              <input
                type="file"
                accept="image/*"
                className={styles.arquivo}
                onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
              />
            </label>
            {arquivo && (
              <button type="button" className={styles.remover} onClick={() => setArquivo(null)}>
                Remover foto
              </button>
            )}
            <p className={styles.nota}>
              A foto fica só no seu aparelho. Depois de abrir o WhatsApp, é só anexá-la na conversa com o Tales.
            </p>

            <Botao block href={whatsappLink(tales.numero, mensagem)}>
              Pedir Orçamento
            </Botao>
          </div>
        )}
      </Modal>
    </>
  );
}
