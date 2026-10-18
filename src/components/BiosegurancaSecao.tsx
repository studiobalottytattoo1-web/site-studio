import { Bloco } from "./Bloco";
import styles from "./BiosegurancaSecao.module.css";

const itens = [
  {
    titulo: "Autoclave",
    texto: "Instrumentos esterilizados antes de cada procedimento.",
    icone: <path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0Z" />,
  },
  {
    titulo: "Materiais descartáveis",
    texto: "Agulhas e insumos descartáveis, abertos na sua frente.",
    icone: (
      <path d="m7.5 4.3 9 5.2M21 8v8a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.7l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8ZM3.3 7 12 12l8.7-5M12 22V12" />
    ),
  },
  {
    titulo: "Higiene",
    texto: "Ambiente e bancadas higienizados entre um atendimento e outro.",
    icone: <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7Z" />,
  },
  {
    titulo: "Proteção",
    texto: "Luvas e equipamentos de proteção em todos os procedimentos.",
    icone: (
      <path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z" />
    ),
  },
];

export function BiosegurancaSecao() {
  return (
    <Bloco tom="branco" titulo="Segurança em cada atendimento.">
      <div className={styles.grade}>
        {itens.map((i) => (
          <div key={i.titulo} className={styles.item}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              {i.icone}
            </svg>
            <h3 className={styles.nome}>{i.titulo}</h3>
            <p className={styles.texto}>{i.texto}</p>
          </div>
        ))}
      </div>
    </Bloco>
  );
}
