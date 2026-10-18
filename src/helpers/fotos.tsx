// ============================================================================
// ONDE COLOCAR AS FOTOS
// 1) Copie a foto para a pasta  public/fotos  (ex.: public/fotos/tatuagem-1.jpg).
// 2) Aqui embaixo, troque  null  por  foto("tatuagem-1.jpg")  no lugar certo.
// Enquanto estiver null (ou a lista vazia), o site mostra um espaço "Adicionar foto".
// Para trocar uma foto que já existe: substitua o arquivo com o mesmo nome.
// ============================================================================
const foto = (arquivo: string) => `${import.meta.env.BASE_URL}fotos/${arquivo}`;

export const fotos = {
  logo: foto("logo.png") as string | null,
  casalEspaco: foto("casal-espaco.jpg") as string | null, // hero no computador (horizontal)
  casalRetrato: foto("casal-retrato.jpg") as string | null, // hero no celular (vertical)
  casal2: foto("casal-2.jpg") as string | null,
  casal3: foto("casal-3.jpg") as string | null,
  tales: foto("tales.jpg") as string | null,
  talesEspaco: foto("tales-espaco.jpg") as string | null,
  naju: foto("naju.jpg") as string | null,
  // Piercings aplicados pela Naju (7 fotos quadradas)
  piercing: [foto("piercing-1.jpg"), foto("piercing-2.jpg"), foto("piercing-3.jpg"), foto("piercing-4.jpg"), foto("piercing-5.jpg"), foto("piercing-6.jpg"), foto("piercing-7.jpg")] as (string | null)[],
  piercingNaju: null as string | null, // retrato da Naju na página de piercing
  orelhaProjeto: null as string | null,
  orelha: null as string | null,
  umbigo: null as string | null,
  // Foto de cada região de piercing (abre dentro da janela de cada botão).
  // Exemplo: umbigo: foto("umbigo.jpg"),
  regioes: {
    orelha: foto("piercing-1.jpg"),
    nariz: foto("piercing-6.jpg"),
    umbigo: null,
    sobrancelha: null,
    labio: null,
    lingua: null,
    mamilo: null,
    outras: null,
  } as Record<"orelha" | "nariz" | "umbigo" | "sobrancelha" | "labio" | "lingua" | "mamilo" | "outras", string | null>,
  // Trabalhos do Tales (tatuagens e coberturas). "cobertura: true" marca as coberturas.
  // Exemplo (uma linha por foto):
  //   { src: foto("tatuagem-1.jpg"), alt: "Tatuagem fine line no antebraço" },
  //   { src: foto("cobertura-1.jpg"), alt: "Cobertura de tatuagem antiga", cobertura: true },
  tatuagens: [] as { src: string; alt: string; cobertura?: boolean }[],
  // Furinho humanizado
  furinhoHero: null as string | null,
  furinhoDetalhe: [null, null] as (string | null)[],
  // Exemplo: { src: foto("familia-1.jpg"), alt: "Família com o bebê após o furinho" },
  familias: [] as { src: string; alt: string }[],
  // Resultados reais de remoção
  // Exemplo: { src: foto("remocao-1.jpg"), alt: "Resultado de remoção de tatuagem" },
  remocao: [] as { src: string; alt: string }[],
};
