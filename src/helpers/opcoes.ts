// Regiões de piercing e estilos de tatuagem. Para mudar um nome ou uma perfuração, edite aqui.
export interface RegiaoPiercing {
  id: "orelha" | "nariz" | "umbigo" | "sobrancelha" | "labio" | "lingua" | "mamilo" | "outras";
  nome: string;
  itens: { nome: string; detalhe?: string }[];
}

export const regioesPiercing: RegiaoPiercing[] = [
  {
    id: "orelha",
    nome: "Orelha",
    itens: [
      { nome: "Lóbulo", detalhe: "1º, 2º ou 3º furo" },
      { nome: "Hélix / Forward Hélix", detalhe: "borda superior" },
      { nome: "Conch", detalhe: "concha central" },
      { nome: "Daith", detalhe: "dobra interna central" },
      { nome: "Tragus", detalhe: "entrada da orelha" },
      { nome: "Flat / Rook", detalhe: "topo plano ou dobra superior" },
      { nome: "Industrial", detalhe: "haste conectando dois pontos" },
    ],
  },
  {
    id: "nariz",
    nome: "Nariz",
    itens: [
      { nome: "Nostril", detalhe: "lateral com ponto de luz ou argola" },
      { nome: "Septo", detalhe: "entre as narinas" },
      { nome: "Bridge", detalhe: "topo do nariz" },
    ],
  },
  {
    id: "umbigo",
    nome: "Umbigo",
    itens: [
      { nome: "Tradicional", detalhe: "borda superior" },
      { nome: "Floating Navel", detalhe: "base interna plana" },
      { nome: "Invertido", detalhe: "borda inferior" },
    ],
  },
  {
    id: "sobrancelha",
    nome: "Sobrancelha",
    itens: [
      { nome: "Vertical", detalhe: "clássico na cauda" },
      { nome: "Horizontal", detalhe: "acima do arco" },
      { nome: "Anti-Eyebrow", detalhe: "maçã do rosto" },
    ],
  },
  {
    id: "labio",
    nome: "Lábio",
    itens: [
      { nome: "Labret", detalhe: "abaixo do lábio" },
      { nome: "Vertical Labret", detalhe: "atravessa o lábio inferior" },
      { nome: "Medusa", detalhe: "arco do cupido" },
      { nome: "Monroe", detalhe: "lateral superior" },
      { nome: "Ashley", detalhe: "centro do lábio inferior" },
      { nome: "Smiley", detalhe: "freio superior" },
    ],
  },
  {
    id: "lingua",
    nome: "Língua",
    itens: [
      { nome: "Tradicional", detalhe: "haste central" },
      { nome: "Web", detalhe: "freio abaixo da língua" },
    ],
  },
  {
    id: "mamilo",
    nome: "Mamilo",
    itens: [
      { nome: "Horizontal", detalhe: "haste reta clássica" },
      { nome: "Vertical / Diagonal", detalhe: "angulação personalizada" },
    ],
  },
  {
    id: "outras",
    nome: "Outras regiões",
    itens: [
      { nome: "Microdermal", detalhe: "ponto único" },
      { nome: "Surface", detalhe: "áreas planas" },
      { nome: "Íntimos", detalhe: "sob avaliação com total privacidade" },
    ],
  },
];

export const estilosTatuagem = [
  "Realismo",
  "Fine line",
  "Blackwork",
  "Old school",
  "Neotradicional",
  "Aquarela",
  "Geométrico",
  "Lettering",
  "Oriental",
  "Preto e cinza",
];

// Link da empresa no Google (endereço, mapa e avaliações).
export const linkGoogle = "https://share.google/5PHjOYdiXZrbwpIrr";
