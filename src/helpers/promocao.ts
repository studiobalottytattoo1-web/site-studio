// Promoção do site. Mudar aqui muda a faixa da página inicial e o aviso no pedido de orçamento.
// Para encerrar, troque "ativa" por false.
// "fim" é o momento em que a promoção termina, com o fuso de Brasília (ex.: "2026-11-30T23:59:00-03:00").
// Depois desse horário a faixa e o aviso somem sozinhos. Deixe null para não ter prazo.
export const promocao = {
  ativa: true,
  percentual: 5,
  texto: "Vale para quem pedir orçamento pelo site, com o Tales.",
  validade: "Válido até 1º de novembro.", // mantenha igual ao "fim" abaixo
  fim: "2026-11-01T23:59:00-03:00" as string | null, // fim do dia 1º de novembro, horário de Brasília
};

export function promocaoVigente(): boolean {
  if (!promocao.ativa) return false;
  if (!promocao.fim) return true;
  return new Date() < new Date(promocao.fim);
}
