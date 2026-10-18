// Serviços do site. "destino" define para qual WhatsApp o pedido vai:
// "tatuagem" = Tales, "piercing" = Naju.
export type ServicoId =
  | "tatuagem"
  | "cobertura"
  | "camuflagem"
  | "piercing"
  | "furinho"
  | "remocao"
  | "sobrancelha";

export type Destino = "tatuagem" | "piercing";

export const servicos: {
  id: ServicoId;
  nome: string;
  destino: Destino;
  pagina: string;
}[] = [
  { id: "tatuagem", nome: "Tatuagem", destino: "tatuagem", pagina: "/tatuagem" },
  { id: "cobertura", nome: "Cobertura (cover up) de tatuagem", destino: "tatuagem", pagina: "/tatuagem#cobertura" },
  { id: "camuflagem", nome: "Camuflagem e cobertura de cicatrizes", destino: "tatuagem", pagina: "/tatuagem#camuflagem" },
  { id: "piercing", nome: "Piercing", destino: "piercing", pagina: "/piercing" },
  { id: "furinho", nome: "Furinho humanizado (bebê)", destino: "piercing", pagina: "/furinho-humanizado" },
  { id: "remocao", nome: "Remoção de tatuagem", destino: "piercing", pagina: "/remocao-e-despigmentacao" },
  { id: "sobrancelha", nome: "Despigmentação de sobrancelhas", destino: "piercing", pagina: "/remocao-e-despigmentacao#sobrancelhas" },
];

// Links do menu flutuante e do rodapé. Todas as páginas do site.
export const paginas: { rotulo: string; url: string }[] = [
  { rotulo: "Quem somos", url: "/quem-somos" },
  { rotulo: "Tatuagem", url: "/tatuagem" },
  { rotulo: "Piercing", url: "/piercing" },
  { rotulo: "Furinho humanizado", url: "/furinho-humanizado" },
  { rotulo: "Remoção e despigmentação", url: "/remocao-e-despigmentacao" },
  { rotulo: "Cuidados e FAQ", url: "/cuidados-e-faq" },
  { rotulo: "Contato", url: "/contato" },
];
