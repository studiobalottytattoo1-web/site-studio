// Promoção do site. Mudar aqui muda a faixa da página inicial e o aviso no pedido de orçamento.
// Para encerrar, troque "ativa" por false.
// Se preencher "fim" (ex.: "2026-11-30"), a promoção some sozinha depois dessa data, sem mexer no código.
export const promocao = {
  ativa: true,
  percentual: 5,
  texto: "Vale para quem pedir orçamento pelo site, com o Tales.",
  fim: null as string | null,
};

export function promocaoVigente(): boolean {
  if (!promocao.ativa) return false;
  if (!promocao.fim) return true;
  return new Date() < new Date(`${promocao.fim}T23:59:59`);
}
