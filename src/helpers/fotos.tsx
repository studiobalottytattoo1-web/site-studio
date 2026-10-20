// ============================================================================
// ONDE COLOCAR AS FOTOS
// 1) Copie a foto para a pasta  public/fotos  (ex.: public/fotos/tatuagem-1.jpg).
// 2) Aqui embaixo, troque  null  por  foto("tatuagem-1.jpg")  no lugar certo.
// Enquanto estiver null (ou a lista vazia), o site mostra um espaço "Adicionar foto".
// Para trocar uma foto que já existe: substitua o arquivo com o mesmo nome.
// ============================================================================
const foto = (arquivo: string) => `${import.meta.env.BASE_URL}fotos/${arquivo}`;

// Fotos de fundo do cabeçalho das páginas (computador = horizontal, celular = vertical).
// Basta colocar os arquivos em public/fotos com estes nomes. Sem o arquivo, o cabeçalho fica liso.
export const topos = {
  quemSomos: { computador: foto("quem-somos-topo.jpg"), celular: foto("quem-somos-topo-celular.jpg") },
  tatuagem: { computador: foto("tatuagem-topo.jpg"), celular: foto("tatuagem-topo-celular.jpg") },
  piercing: { computador: foto("piercing-topo.jpg"), celular: foto("piercing-topo-celular.jpg") },
  contato: { computador: foto("contato-topo.jpg"), celular: foto("contato-topo-celular.jpg") },
  furinho: { computador: foto("furinho-topo.jpg"), celular: foto("furinho-topo-celular.jpg") },
  laser: { computador: foto("laser-topo.jpg"), celular: foto("laser-topo-celular.jpg") },
  cuidados: { computador: foto("cuidados-topo.jpg"), celular: foto("cuidados-topo-celular.jpg") },
};

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
  piercing: [foto("piercing-8.jpg"), foto("piercing-2.jpg"), foto("piercing-3.jpg"), foto("piercing-4.jpg"), foto("piercing-5.jpg"), foto("piercing-6.jpg"), foto("piercing-7.jpg")] as (string | null)[],
  najuCartao: foto("piercing-1.jpg") as string | null, // foto da Naju no cartão "Piercing" da página inicial
  piercingNaju: foto("naju-piercing.jpg") as string | null, // retrato da Naju na página de piercing
  orelhaProjeto: foto("orelha-projeto.jpg") as string | null,
  orelha: foto("orelha.jpg") as string | null,
  umbigo: foto("umbigo-galeria.jpg") as string | null,
  // Foto de cada região de piercing (abre dentro da janela de cada botão).
  // Exemplo: umbigo: foto("umbigo.jpg"),
  regioes: {
    orelha: foto("piercing-8.jpg"),
    nariz: foto("piercing-6.jpg"),
    umbigo: foto("umbigo.jpg"),
    sobrancelha: foto("sobrancelha.jpg"),
    labio: foto("labio.jpg"),
    lingua: foto("lingua.jpg"),
    mamilo: foto("mamilo.jpg"),
    outras: foto("outras-regioes.jpg"),
  } as Record<"orelha" | "nariz" | "umbigo" | "sobrancelha" | "labio" | "lingua" | "mamilo" | "outras", string | null>,
  // Trabalhos do Tales (tatuagens e coberturas). "cobertura: true" marca as coberturas.
  // Exemplo (uma linha por foto):
  //   { src: foto("tatuagem-1.jpg"), alt: "Tatuagem fine line no antebraço" },
  //   { src: foto("cobertura-1.jpg"), alt: "Cobertura de tatuagem antiga", cobertura: true },
  tatuagens: [
    { src: foto("cobertura-1.jpg"), alt: "Cobertura de tatuagem antiga", cobertura: true },
    { src: foto("cobertura-2.jpg"), alt: "Cobertura de tatuagem antiga", cobertura: true },
    { src: foto("tatuagem-1.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-2.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-3.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-4.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-5.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-6.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-7.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-8.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-9.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-10.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-11.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-12.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-13.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-14.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-15.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-16.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-17.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-19.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-20.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-21.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-22.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-23.jpg"), alt: "Tatuagem feita pelo Tales" },
    { src: foto("tatuagem-24.jpg"), alt: "Tatuagem feita pelo Tales" },
  ] as { src: string; alt: string; cobertura?: boolean }[],
  // Fotos do espaço do estúdio (página Quem somos, 2 em cima e 2 embaixo)
  espaco: [
    { src: foto("espaco-1.jpg"), alt: "Mesa de café e frase na parede do estúdio", posicao: "12% 50%" },
    { src: foto("espaco-2.jpg"), alt: "Naju na sala de piercing do estúdio", posicao: "60% 50%" },
    { src: foto("espaco-3.jpg"), alt: "Tales na sala de tatuagem do estúdio", posicao: "62% 50%" },
    { src: foto("espaco-4.jpg"), alt: "Sala do estúdio com prateleiras e quadro", posicao: "35% 50%" },
  ] as { src: string; alt: string; posicao?: string }[],
  // Camuflagem de cicatrizes (miniaturas na página Tatuagem)
  camuflagem: [
    { src: foto("camuflagem-1.jpg"), alt: "Cicatriz no antebraço antes da camuflagem" },
    { src: foto("camuflagem-2.jpg"), alt: "Antebraço com cicatriz camuflada por tatuagem de flores" },
    { src: foto("camuflagem-3.jpg"), alt: "Cobertura de cicatriz no ombro com tatuagem colorida" },
    { src: foto("camuflagem-4.jpg"), alt: "Cicatriz no ombro camuflada por tatuagem de flores" },
  ] as { src: string; alt: string }[],
  // Furinho humanizado
  furinhoHero: foto("furinho-hero.jpg") as string | null,
  furinhoDetalhe: [foto("furinho-detalhe-1.jpg"), foto("furinho-detalhe-2.jpg")] as (string | null)[],
  // Exemplo: { src: foto("familia-1.jpg"), alt: "Família com o bebê após o furinho" },
  familias: [
    { src: foto("familia-1.jpg"), alt: "Família com o bebê após o furinho humanizado" },
    { src: foto("familia-2.jpg"), alt: "Família com o bebê após o furinho humanizado" },
    { src: foto("familia-3.jpg"), alt: "Família com o bebê após o furinho humanizado" },
    { src: foto("familia-4.jpg"), alt: "Família com o bebê após o furinho humanizado" },
    { src: foto("familia-5.jpg"), alt: "Família com o bebê após o furinho humanizado" },
    { src: foto("familia-6.jpg"), alt: "Família com o bebê após o furinho humanizado" },
  ] as { src: string; alt: string }[],
  // Resultados reais de remoção
  // Exemplo: { src: foto("remocao-1.jpg"), alt: "Resultado de remoção de pigmento de sobrancelha" },
  remocao: [
    { src: foto("remocao-1.jpg"), alt: "Resultado de remoção de pigmento de sobrancelha" },
    { src: foto("remocao-2.jpg"), alt: "Remoção de tatuagem a laser em andamento" },
    { src: foto("remocao-3.jpg"), alt: "Resultado de remoção de pigmento de sobrancelha" },
    { src: foto("remocao-4.jpg"), alt: "Resultado de remoção de pigmento de sobrancelha" },
  ] as { src: string; alt: string }[],
};
