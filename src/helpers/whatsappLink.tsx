// Monta o link de WhatsApp com a mensagem já preenchida.
export function whatsappLink(numero: string, mensagem: string): string {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

