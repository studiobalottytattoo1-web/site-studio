// ============================================================
// DADOS. Formato de cada profissão:
// [nome, segmento, apelidos, [ [servico, [ [variacao, horas, materiais], ... ] ], ... ] ]
// horas = tempo de mão de obra por atendimento (antes do ajuste de experiência); materiais = R$ por atendimento.
// TODOS os valores são exemplos para revisar com a experiência de cada profissional.
// ============================================================
const PROFISSOES = [
  // ---------- Beleza e estética ----------
  ["Cabeleireiro(a)", "Beleza e estética", "cabelo hair salao corte", [
    ["Corte", [["Corte simples", 0.75, 3], ["Corte com finalização", 1.25, 8]]],
    ["Coloração", [["Raiz", 1.5, 30], ["Coloração completa", 2.5, 55]]]]],
  ["Barbeiro(a)", "Beleza e estética", "barba barbearia corte masculino", [
    ["Corte masculino", [["Corte simples", 0.5, 2], ["Corte + barba", 0.8, 4]]]]],
  ["Manicure e pedicure", "Beleza e estética", "unha unhas manicure pedicure esmalte", [
    ["Manicure", [["Mão com esmaltação", 0.75, 5], ["Mão com gel", 1.25, 20]]],
    ["Pedicure", [["Pé com esmaltação", 0.75, 5]]]]],
  ["Designer de unhas", "Beleza e estética", "nail designer unha de gel fibra alongamento", [
    ["Alongamento", [["Fibra", 2, 35], ["Gel", 2.5, 45]]]]],
  ["Maquiador(a)", "Beleza e estética", "maquiagem make maquiadora noiva", [
    ["Maquiagem social", [["Festa simples", 1, 25], ["Maquiagem de noiva", 2, 60]]]]],
  ["Designer de sobrancelhas", "Beleza e estética", "sobrancelha design brow henna", [
    ["Design", [["Design com pinça", 0.5, 3], ["Design com henna", 0.75, 10]]]]],
  ["Lash designer", "Beleza e estética", "cílios lash extensão de cílios volume", [
    ["Extensão de cílios", [["Fio a fio clássico", 1.5, 25], ["Volume russo", 2, 35]]]]],
  ["Esteticista", "Beleza e estética", "estetica limpeza de pele peeling facial", [
    ["Limpeza de pele", [["Limpeza simples", 1, 15], ["Limpeza profunda", 1.5, 30]]]]],
  ["Depilador(a)", "Beleza e estética", "depilacao cera depilar", [
    ["Depilação com cera", [["Axila ou buço", 0.25, 4], ["Pernas inteiras", 0.75, 12]]]]],
  ["Visagista", "Beleza e estética", "visagismo visagista consultoria de imagem", [
    ["Consultoria de imagem", [["Consulta online", 1, 0], ["Consulta presencial com roupas", 2, 0]]]]],

  // ---------- Tatuagem e piercing ----------
  ["Tatuador(a)", "Tatuagem e piercing", "tatuagem tattoo tatuadora tatuador", [
    ["Tatuagem", [["Pequena (até 5 cm)", 1.5, 15], ["Média (5 a 15 cm)", 3, 25], ["Grande (acima de 15 cm), sessão única", 5, 35]]],
    ["Camuflagem de cicatriz", [["Até 10 cm", 2, 30], ["Mais de 10 cm", 3.5, 45]]]]],
  ["Body piercer", "Tatuagem e piercing", "piercing piercer body piercing", [
    ["Piercing", [["Orelha ou nariz", 0.5, 25], ["Cartilagem ou umbigo", 0.75, 35]]]]],
  ["Micropigmentador(a)", "Tatuagem e piercing", "micropigmentacao micro pigmentacao sobrancelha labial", [
    ["Micropigmentação", [["Sobrancelha", 2, 40], ["Lábios", 2.5, 45]]]]],
  ["Técnico de remoção de tatuagem", "Tatuagem e piercing", "remocao de tatuagem remocao de pigmentos laser", [
    ["Remoção a laser", [["Sessão pequena", 0.5, 0], ["Sessão média", 0.75, 0]]]]],

  // ---------- Reparos e construção ----------
  ["Eletricista", "Reparos e construção", "eletrica instalacao eletrica tomada interruptor", [
    ["Troca de tomada ou interruptor", [["Uma peça", 1, 12], ["Três peças", 2, 35]]],
    ["Instalação de ponto de luz", [["Ponto simples", 2.5, 60], ["Ponto com fiação nova", 5, 120]]]]],
  ["Encanador(a)", "Reparos e construção", "encanamento hidraulico vazamento cano", [
    ["Reparo hidráulico", [["Troca de torneira", 1, 20], ["Vazamento em cano", 2.5, 60]]]]],
  ["Pintor(a)", "Reparos e construção", "pintura pintor parede tinta", [
    ["Pintura de parede", [["Cômodo pequeno", 6, 90], ["Cômodo grande", 12, 180]]]]],
  ["Gesseiro(a)", "Reparos e construção", "gesso gesseiro forro sanca drywall", [
    ["Forro de gesso", [["Até 10 m²", 6, 80], ["10 a 30 m²", 14, 200]]]]],
  ["Marceneiro(a)", "Reparos e construção", "marcenaria marceneiro movel sob medida", [
    ["Móvel sob medida", [["Armário pequeno", 16, 250], ["Armário grande", 40, 600]]]]],
  ["Serralheiro(a)", "Reparos e construção", "serralheria portao grade ferro", [
    ["Portão ou grade", [["Grade simples", 6, 150], ["Portão de correr", 14, 450]]]]],
  ["Vidraceiro(a)", "Reparos e construção", "vidro vidraceiro box espelho", [
    ["Troca de vidro", [["Vidro pequeno", 1.5, 80], ["Box de banheiro", 4, 350]]]]],
  ["Azulejista", "Reparos e construção", "azulejo ceramica revestimento piso", [
    ["Assentamento", [["Banheiro pequeno", 8, 120], ["Cozinha", 12, 200]]]]],
  ["Pedreiro(a)", "Reparos e construção", "pedreiro reforma construcao alvenaria", [
    ["Pequeno reparo", [["Reboco de parede pequena", 4, 40], ["Pequena alvenaria", 8, 120]]]]],
  ["Impermeabilizador(a)", "Reparos e construção", "impermeabilizacao telhado laje infiltracao", [
    ["Impermeabilização", [["Laje pequena", 8, 200], ["Laje média", 16, 420]]]]],
  ["Técnico de ar-condicionado", "Reparos e construção", "ar condicionado ar-condicionado split instalacao manutencao", [
    ["Instalação de split", [["Split 9.000 BTU", 3, 180], ["Split 12.000 BTU", 4, 230]]],
    ["Manutenção", [["Limpeza simples", 1.5, 15], ["Limpeza completa com gás", 2.5, 60]]]]],
  ["Técnico em refrigeração", "Reparos e construção", "geladeira refrigeracao freezer conserto", [
    ["Conserto de eletrodoméstico", [["Diagnóstico e ajuste", 1, 10], ["Troca de componente", 2.5, 80]]]]],
  ["Dedetizador(a)", "Reparos e construção", "dedetizacao desinsetizacao controle de pragas", [
    ["Dedetização", [["Residência pequena", 2, 60], ["Residência grande", 4, 120]]]]],
  ["Montador(a) de móveis", "Reparos e construção", "montagem de movel montador", [
    ["Montagem", [["Guarda-roupa pequeno", 1.5, 0], ["Guarda-roupa grande", 3, 0]]]]],
  ["Chaveiro(a)", "Reparos e construção", "chaveiro chave cópia fechadura", [
    ["Serviço de chaveiro", [["Cópia de chave", 0.25, 2], ["Troca de fechadura", 1, 60]]]]],
  ["Instalador de drywall", "Reparos e construção", "drywall parede divisoria painel", [
    ["Divisória", [["Até 5 m²", 6, 120], ["5 a 15 m²", 12, 260]]]]],
  ["Instalador de box", "Reparos e construção", "box de banheiro box vidro temperado", [
    ["Instalação de box", [["Box de correr", 3, 150], ["Box de abrir", 4, 220]]]]],

  // ---------- Serviços domésticos ----------
  ["Diarista", "Serviços domésticos", "faxina limpeza casa diaria diarista", [
    ["Diária de limpeza", [["Apartamento pequeno (4h)", 4, 10], ["Casa média (6h)", 6, 15]]]]],
  ["Faxineiro(a) pós-obra", "Serviços domésticos", "limpeza pos obra faxina pesada", [
    ["Limpeza pós-obra", [["Apartamento pequeno", 8, 60], ["Casa média", 14, 120]]]]],
  ["Passadeira(o)", "Serviços domésticos", "passar roupa passadeira ferro", [
    ["Passar roupas", [["Até 20 peças", 2, 0], ["Até 50 peças", 4, 0]]]]],
  ["Jardineiro(a)", "Serviços domésticos", "jardim jardinagem poda gramado paisagismo", [
    ["Manutenção de jardim", [["Jardim pequeno", 2, 10], ["Jardim médio", 4, 25]]]]],
  ["Cuidador(a) de idosos", "Serviços domésticos", "cuidador idoso acompanhante cuidadora", [
    ["Acompanhamento", [["Plantão de 4h", 4, 0], ["Plantão de 8h", 8, 0]]]]],
  ["Babá", "Serviços domésticos", "baba cuidadora de criancas", [
    ["Cuidado infantil", [["Turno de 4h", 4, 0], ["Turno de 8h", 8, 0]]]]],
  ["Lavador(a) de estofados", "Serviços domésticos", "estofado sofa lavagem higienizacao", [
    ["Higienização", [["Sofá 2 lugares", 2, 25], ["Sofá 3 lugares", 3, 35]]]]],
  ["Organizador(a) de ambientes", "Serviços domésticos", "organizacao organizador armario", [
    ["Organização", [["Um cômodo", 4, 0], ["Casa inteira", 10, 0]]]]],

  // ---------- Saúde e bem-estar ----------
  ["Personal trainer", "Saúde e bem-estar", "personal treino academia musculacao", [
    ["Aula individual", [["Aula de 1h", 1, 0], ["Pacote de 4 aulas", 4, 0]]]]],
  ["Instrutor(a) de pilates", "Saúde e bem-estar", "pilates aula de pilates", [
    ["Aula", [["Aula individual", 1, 0], ["Aula em grupo", 1, 0]]]]],
  ["Massoterapeuta", "Saúde e bem-estar", "massagem massoterapia relaxante", [
    ["Massagem", [["Relaxante 50 min", 1, 10], ["Terapêutica 1h30", 1.5, 15]]]]],
  ["Nutricionista", "Saúde e bem-estar", "nutri nutricao dieta plano alimentar", [
    ["Consulta", [["Primeira consulta", 1.5, 0], ["Retorno", 0.75, 0]]]]],
  ["Fisioterapeuta", "Saúde e bem-estar", "fisio fisioterapia reabilitacao", [
    ["Sessão", [["Sessão individual", 1, 5], ["Sessão de 1h30", 1.5, 8]]]]],
  ["Psicólogo(a)", "Saúde e bem-estar", "psicologia psicoterapia terapia", [
    ["Sessão", [["Sessão de 50 min", 1, 0], ["Avaliação inicial", 1.5, 0]]]]],
  ["Fonoaudiólogo(a)", "Saúde e bem-estar", "fono fonoaudiologia fala terapia", [
    ["Sessão", [["Sessão de 40 min", 0.75, 0], ["Avaliação", 1.5, 0]]]]],
  ["Podólogo(a)", "Saúde e bem-estar", "podologia pés unha encravada calo", [
    ["Atendimento", [["Cuidado de pés", 1, 15], ["Unha encravada", 1.5, 30]]]]],
  ["Acupunturista", "Saúde e bem-estar", "acupuntura agulhas terapia chinesa", [
    ["Sessão", [["Sessão de 1h", 1, 5], ["Primeira consulta", 1.5, 8]]]]],
  ["Enfermeiro(a) de home care", "Saúde e bem-estar", "enfermagem home care curativo cuidado domiciliar", [
    ["Atendimento domiciliar", [["Curativo simples", 1, 15], ["Visita de 4h", 4, 30]]]]],

  // ---------- Criativos e digitais ----------
  ["Designer gráfico", "Criativos e digitais", "design grafico logo identidade visual", [
    ["Logo", [["Logo simples, 2 propostas", 6, 0], ["Logo com manual de marca", 14, 0]]],
    ["Post para redes sociais", [["Post único", 1.5, 0], ["Pacote de 10 posts", 12, 0]]]]],
  ["Designer de interiores", "Criativos e digitais", "interiores projeto decoracao ambientes", [
    ["Projeto", [["Projeto de um cômodo", 12, 0], ["Projeto de apartamento", 30, 0]]]]],
  ["Fotógrafo(a)", "Criativos e digitais", "foto fotografia ensaio fotografo", [
    ["Ensaio", [["Ensaio de 1h", 2, 0], ["Ensaio de 3h com edição", 6, 0]]]]],
  ["Videomaker", "Criativos e digitais", "video filmagem filmar produção de video", [
    ["Vídeo", [["Vídeo curto (até 1 min)", 4, 0], ["Vídeo institucional", 12, 0]]]]],
  ["Editor(a) de vídeo", "Criativos e digitais", "edicao de video editor reels", [
    ["Edição", [["Reels (até 1 min)", 2, 0], ["Vídeo longo (até 10 min)", 6, 0]]]]],
  ["Social media", "Criativos e digitais", "redes sociais gestao instagram conteudo", [
    ["Gestão mensal", [["Até 12 posts por mês", 10, 0], ["Até 20 posts por mês", 16, 0]]]]],
  ["Gestor(a) de tráfego", "Criativos e digitais", "trafego pago anuncios meta ads google ads", [
    ["Gestão de campanhas", [["Até 1 campanha", 4, 0], ["Até 3 campanhas", 8, 0]]]]],
  ["Copywriter", "Criativos e digitais", "redacao texto copy textos vendas", [
    ["Texto", [["Post ou legenda", 1, 0], ["Página de vendas", 6, 0]]]]],
  ["Desenvolvedor(a) web", "Criativos e digitais", "site programador desenvolvedor web landing page", [
    ["Site", [["Landing page", 16, 0], ["Site institucional", 40, 0]]]]],
  ["Desenvolvedor(a) de apps", "Criativos e digitais", "aplicativo app mobile programador", [
    ["Aplicativo", [["App simples", 80, 0], ["App com login e banco de dados", 160, 0]]]]],
  ["Ilustrador(a)", "Criativos e digitais", "ilustracao desenho ilustrador arte", [
    ["Ilustração", [["Ilustração simples", 3, 0], ["Ilustração completa", 8, 0]]]]],
  ["Tradutor(a)", "Criativos e digitais", "traducao tradutor interprete", [
    ["Tradução", [["Página de texto", 1, 0], ["Documento de 10 páginas", 8, 0]]]]],
  ["Redator(a) de currículos", "Criativos e digitais", "curriculo cv carta de apresentacao", [
    ["Currículo", [["Currículo simples", 2, 0], ["Currículo com LinkedIn", 3.5, 0]]]]],
  ["Arquiteto(a)", "Criativos e digitais", "arquitetura projeto arquitetonico planta", [
    ["Projeto", [["Reforma pequena", 16, 0], ["Casa nova", 60, 0]]]]],

  // ---------- Educação ----------
  ["Professor(a) particular", "Educação", "aula particular reforco explicacao professor", [
    ["Aula", [["Aula de 1h", 1, 0], ["Pacote de 4 aulas", 4, 0]]]]],
  ["Professor(a) de idiomas", "Educação", "ingles espanhol idioma aula de ingles", [
    ["Aula", [["Aula individual de 1h", 1, 0], ["Aula em grupo de 1h", 1, 0]]]]],
  ["Professor(a) de música", "Educação", "musica aula de violao piano canto", [
    ["Aula", [["Aula de 50 min", 0.85, 0], ["Pacote de 4 aulas", 3.4, 0]]]]],
  ["Instrutor(a) de informática", "Educação", "informatica computador curso word excel", [
    ["Aula", [["Aula individual de 1h", 1, 0], ["Curso de 8 aulas", 8, 0]]]]],
  ["Professor(a) de reforço escolar", "Educação", "reforco escolar matematica lição de casa", [
    ["Aula", [["Aula de 1h", 1, 0], ["Pacote de 4 aulas", 4, 0]]]]],
  ["Revisor(a) acadêmico", "Educação", "revisao tcc monografia artigo academico", [
    ["Revisão", [["Até 20 páginas", 4, 0], ["Até 60 páginas", 10, 0]]]]],
  ["Instrutor(a) de direção", "Educação", "aula de direcao autoescola motorista", [
    ["Aula prática", [["Aula de 50 min", 0.85, 0], ["Pacote de 5 aulas", 4.25, 0]]]]],

  // ---------- Automotivo ----------
  ["Mecânico(a)", "Automotivo", "mecanica carro oficina revisao motor", [
    ["Serviço", [["Troca de óleo", 1, 60], ["Revisão básica", 3, 150]]]]],
  ["Lavador(a) de carros", "Automotivo", "lavagem lava jato carro lavar carro detalhamento", [
    ["Lavagem", [["Lavagem simples", 0.75, 8], ["Lavagem completa", 1.5, 20]]]]],
  ["Funileiro(a)", "Automotivo", "funilaria lataria batida pintura carro", [
    ["Reparo de lataria", [["Amassado pequeno", 3, 80], ["Porta inteira", 8, 250]]]]],
  ["Auto elétrico", "Automotivo", "eletrica do carro auto eletrico bateria", [
    ["Serviço elétrico", [["Diagnóstico", 1, 0], ["Troca de componente", 2, 60]]]]],
  ["Borracheiro(a)", "Automotivo", "borracharia pneu conserto de pneu", [
    ["Pneu", [["Conserto de furo", 0.5, 5], ["Troca de pneu", 0.5, 0]]]]],
  ["Instalador de som e insulfilm", "Automotivo", "insulfilm pelicula som automotivo", [
    ["Instalação", [["Insulfilm em um vidro", 1.5, 40], ["Insulfilm completo", 4, 180]]]]],

  // ---------- Eventos ----------
  ["DJ", "Eventos", "dj festa som evento balada", [
    ["Apresentação", [["Festa de 4h", 4, 0], ["Evento corporativo de 6h", 6, 0]]]]],
  ["Buffet", "Eventos", "buffet festa comida evento", [
    ["Serviço de buffet", [["Até 50 convidados", 10, 350], ["Até 150 convidados", 18, 1100]]]]],
  ["Decorador(a) de festas", "Eventos", "decoracao festa decorador balões", [
    ["Decoração", [["Decoração simples", 6, 250], ["Decoração completa", 12, 800]]]]],
  ["Cerimonialista", "Eventos", "cerimonial casamento organizacao de eventos", [
    ["Assessoria", [["Dia do evento", 10, 0], ["Assessoria completa", 40, 0]]]]],
  ["Animador(a) infantil", "Eventos", "animacao festa infantil palhaco recreacao", [
    ["Animação", [["Festa de 2h", 2, 40], ["Festa de 4h", 4, 80]]]]],
  ["Músico para eventos", "Eventos", "musico banda cantor show evento", [
    ["Apresentação", [["Voz e violão, 2h", 2, 0], ["Banda, 4h", 4, 0]]]]],
  ["Locutor(a)", "Eventos", "locucao narracao voz locutor", [
    ["Gravação", [["Spot de até 30 s", 1, 0], ["Narração de 5 min", 2, 0]]]]],

  // ---------- Alimentação ----------
  ["Confeiteiro(a)", "Alimentação", "bolo confeitaria doce bolos de pote", [
    ["Bolo", [["Bolo simples (até 20 fatias)", 4, 60], ["Bolo decorado (até 50 fatias)", 8, 150]]]]],
  ["Chef de cozinha em domicílio", "Alimentação", "chef cozinheiro jantar cozinha particular", [
    ["Jantar", [["Jantar para 4 pessoas", 4, 120], ["Jantar para 10 pessoas", 7, 300]]]]],
  ["Padeiro(a) artesanal", "Alimentação", "pao padaria artesanal fermentacao", [
    ["Pães", [["Lote de 10 pães", 3, 25], ["Lote de 30 pães", 6, 70]]]]],
  ["Marmiteiro(a)", "Alimentação", "marmita marmitas quentinha comida caseira", [
    ["Marmitas", [["Lote de 10", 2.5, 60], ["Lote de 30", 5, 170]]]]],
  ["Salgadeiro(a) para festas", "Alimentação", "salgados festa coxinha salgadinho", [
    ["Salgados", [["100 salgados", 4, 90], ["300 salgados", 9, 250]]]]],

  // ---------- Administrativo e jurídico ----------
  ["Contador(a)", "Administrativo e jurídico", "contabilidade contador imposto mei declaracao", [
    ["Serviço", [["Abertura de MEI", 2, 0], ["Declaração anual", 3, 0]]]]],
  ["Advogado(a)", "Administrativo e jurídico", "advocacia advogado consultoria juridica", [
    ["Consulta", [["Consulta de 1h", 1, 0], ["Elaboração de contrato", 4, 0]]]]],
  ["Despachante", "Administrativo e jurídico", "despachante documentos cartorio detran", [
    ["Serviço", [["Documento simples", 2, 20], ["Processo completo", 6, 80]]]]],
  ["Corretor(a) de imóveis", "Administrativo e jurídico", "imoveis corretor aluguel venda imobiliaria", [
    ["Intermediação", [["Locação (visita e contrato)", 6, 0], ["Venda (acompanhamento)", 20, 0]]]]],
  ["Assistente virtual", "Administrativo e jurídico", "assistente virtual secretaria agenda email", [
    ["Serviço mensal", [["Até 20 horas por mês", 20, 0], ["Até 40 horas por mês", 40, 0]]]]],
  ["Consultor(a) de negócios", "Administrativo e jurídico", "consultoria negocios gestao empresa", [
    ["Consultoria", [["Diagnóstico de 2h", 2, 0], ["Projeto de 1 mês", 30, 0]]]]],

  // ---------- Pets ----------
  ["Banho e tosa", "Pets", "pet petshop banho cachorro tosa gato", [
    ["Banho e tosa", [["Cão pequeno", 1.5, 15], ["Cão grande", 2.5, 25]]]]],
  ["Adestrador(a) de cães", "Pets", "adestramento adestrador cachorro treino", [
    ["Sessão", [["Sessão avulsa de 1h", 1, 0], ["Pacote de 8 sessões", 8, 0]]]]],
  ["Passeador(a) de cães", "Pets", "passeio cachorro dog walker passear", [
    ["Passeio", [["Passeio de 30 min", 0.5, 0], ["Passeio de 1h", 1, 0]]]]],
  ["Veterinário(a) a domicílio", "Pets", "veterinario vet consulta animal domicilio", [
    ["Atendimento", [["Consulta a domicílio", 1.5, 10], ["Vacinação", 1, 40]]]]],
  ["Cuidador(a) de pets", "Pets", "hospedagem pet cuidador animais de estimacao", [
    ["Hospedagem", [["Diária de hospedagem", 2, 10], ["Visita de 1h", 1, 0]]]]],

  // ---------- Outros ----------
  ["Motoboy / entregador autônomo", "Outros", "entrega motoboy moto frete delivery", [
    ["Entrega", [["Entrega até 5 km", 0.5, 0], ["Entrega até 15 km", 1, 0]]]]],
  ["Fotógrafo de eventos", "Outros", "cobertura de evento fotos casamento foto evento", [
    ["Cobertura", [["Evento de 3h", 4, 0], ["Evento de 8h", 9, 0]]]]],
  ["Costureiro(a) / ajustes", "Outros", "costura ajuste de roupa alfaiate barra", [
    ["Ajuste", [["Barra de calça", 1, 3], ["Ajuste de vestido", 2, 5]]]]],
  ["Sapateiro(a)", "Outros", "conserto de sapato sapataria salto", [
    ["Conserto", [["Troca de salto", 0.5, 15], ["Solado completo", 1.5, 45]]]]],
  ["Relojoeiro(a)", "Outros", "relogio conserto relogio bateria", [
    ["Conserto", [["Troca de bateria", 0.5, 15], ["Revisão completa", 2, 40]]]]]
];

// Semanas por mês: 52 semanas divididas por 12 meses
const SEMANAS_MES = 52 / 12;

// ============================================================
// UTILITÁRIOS
// ============================================================
const $ = (id) => document.getElementById(id);
const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const num = (id) => parseFloat(String($(id).value).replace(",", ".")) || 0;
const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const fmt = (v, casas = 1) => v.toLocaleString("pt-BR", { maximumFractionDigits: casas, minimumFractionDigits: 0 });
const horasTxt = (h) => `${fmt(h, 1)} h`;

function bigramas(s) {
  const t = norm(s).replace(/\s+/g, " ");
  const out = new Map();
  for (let i = 0; i < t.length - 1; i++) { const b = t.substr(i, 2); out.set(b, (out.get(b) || 0) + 1); }
  return out;
}
function dice(a, b) {
  if (!a || !b) return 0;
  const A = bigramas(a), B = bigramas(b);
  let inter = 0, totA = 0, totB = 0;
  A.forEach((v) => totA += v);
  B.forEach((v, k) => { totB += v; if (A.has(k)) inter += Math.min(v, A.get(k)); });
  return totA + totB ? (2 * inter) / (totA + totB) : 0;
}
function pontuar(q, p) {
  const qn = norm(q);
  const alvos = [p[0], ...p[2].split(" ")];
  let melhor = 0;
  for (const alvo of alvos) {
    const an = norm(alvo);
    if (an.startsWith(qn)) melhor = Math.max(melhor, 1);
    else if (an.includes(qn) && qn.length >= 3) melhor = Math.max(melhor, 0.9);
    else melhor = Math.max(melhor, dice(qn, an));
  }
  return Math.max(melhor, dice(qn, norm(p[0])) * 0.95);
}

let profSel = null;

// ============================================================
// BUSCA COM SUGESTÕES
// ============================================================
function mostrarSugestoes() {
  const q = $("buscaProf").value.trim();
  const lista = $("listaSugg");
  if (q.length < 2) { lista.classList.add("hidden"); lista.innerHTML = ""; return; }
  const ranking = PROFISSOES.map((p, i) => ({ p, i, s: pontuar(q, p) })).sort((a, b) => b.s - a.s).slice(0, 6);
  const exato = ranking[0].s >= 0.9;
  let html = `<div class="head">${exato ? "Encontradas" : "Nenhuma exata. As mais parecidas"}</div>`;
  ranking.forEach(({ p, i }) => { html += `<div data-i="${i}">${p[0]}<small>${p[1]}</small></div>`; });
  lista.innerHTML = html;
  lista.classList.remove("hidden");
  lista.querySelectorAll("div[data-i]").forEach((el) => {
    el.addEventListener("mousedown", (e) => { e.preventDefault(); escolherProf(+el.dataset.i); });
    el.addEventListener("touchstart", (e) => { e.preventDefault(); escolherProf(+el.dataset.i); }, { passive: false });
  });
}

function escolherProf(i) {
  profSel = PROFISSOES[i];
  $("buscaProf").value = profSel[0];
  $("listaSugg").classList.add("hidden");
  $("profEscolhida").textContent = `Selecionada: ${profSel[0]} (${profSel[1]})`;
  $("escolhas").classList.remove("hidden");
  preencher($("servico"), profSel[3].map((s) => s[0]));
  atualizarVariacoes();
  $("resultadoServico").classList.add("hidden");
}

function preencher(el, opcoes) {
  el.innerHTML = "";
  opcoes.forEach((o, i) => { const opt = document.createElement("option"); opt.value = i; opt.textContent = o; el.appendChild(opt); });
}

function atualizarVariacoes() {
  const serv = profSel[3][$("servico").value];
  preencher($("variacao"), serv[1].map((v) => v[0]));
}

// ============================================================
// HORAS DO MÊS (calculadora de 2 campos)
// ============================================================
function horasSemana() { return num("diasSemana") * num("horasDia"); }
function horasMes() { return horasSemana() * SEMANAS_MES; }

function atualizarHoras() {
  $("horasSemana").textContent = horasTxt(horasSemana());
  $("horasMesTxt").textContent = horasTxt(horasMes());
}

// ============================================================
// PARÂMETROS COMUNS
// ============================================================
function parametros() {
  return {
    custosFixos: num("custosFixos"),
    proLabore: num("proLabore"),
    horasMes: Math.max(horasMes(), 1),
    imposto: num("imposto"),
    iss: num("iss"),
    cartao: num("taxaCartao"),
    margem: num("margem")
  };
}
// Parte do preço que sobra depois de impostos e taxas (o lucro em R$ é somado ao custo)
function divisor(p) { return Math.max(1 - (p.imposto + p.iss + p.cartao) / 100, 0.05); }

// ============================================================
// CÁLCULO: SERVIÇO
// ============================================================
function calcularServico() {
  if (!profSel) { $("profEscolhida").textContent = "Escolha uma profissão primeiro."; return; }
  const serv = profSel[3][$("servico").value];
  const [nomeVar, horasBase, materiais] = serv[1][$("variacao").value];
  const fator = parseFloat($("experiencia").value);
  const horas = horasBase * fator;
  const expTxt = $("experiencia").options[$("experiencia").selectedIndex].text;
  const p = parametros();
  const dv = divisor(p);

  const custoHora = (p.custosFixos + p.proLabore) / p.horasMes;   // quanto custa cada hora sua
  const lucroDesejado = p.margem;                                  // lucro em R$ neste serviço
  const lucroPorHora = horas > 0 ? lucroDesejado / horas : 0;
  const horaCobrar = (custoHora + lucroPorHora) / dv;              // quanto cobrar por hora, já com impostos, taxas e lucro
  const custoServico = materiais + horas * custoHora;
  const preco = (custoServico + lucroDesejado) / dv;
  const faixaMin = preco * 0.9, faixaMax = preco * 1.1;

  const faturamentoMes = (p.custosFixos + p.proLabore) / dv;      // quanto precisa entrar no mês
  const atendMes = Math.ceil(faturamentoMes / preco);
  const atendSem = atendMes / SEMANAS_MES;

  const impV = preco * p.imposto / 100, issV = preco * p.iss / 100;
  const cartV = preco * p.cartao / 100, margV = lucroDesejado;
  const sobra = preco - impV - issV - cartV;

  $("resultadoServico").innerHTML = `
    <div class="res-topo">
      <div class="pre">Para <b>${profSel[0]}</b>, você deve cobrar, no mínimo, por hora:</div>
      <div class="hora">${brl(horaCobrar)} <small>por hora</small></div>
      <p class="explica">Esse valor já inclui impostos, taxas e o seu lucro. Cada hora que você trabalha precisa render pelo menos isso para você cumprir seus objetivos.</p>
    </div>

    <div class="grid3">
      <div class="mini"><b>Preço deste serviço</b><span>${brl(preco)}</span><small>faixa de ${brl(faixaMin)} a ${brl(faixaMax)}</small></div>
      <div class="mini"><b>Tempo deste serviço</b><span>${horasTxt(horas)}</span><small>${horasTxt(horasBase)} base × ${fmt(fator, 2)} (${expTxt.toLowerCase()})</small></div>
      <div class="mini"><b>Faturamento mínimo no mês</b><span>${brl(faturamentoMes)}</span><small>para pagar contas e seu salário</small></div>
    </div>

    <div class="bloco">
      <h3>Quantos atendimentos por mês?</h3>
      <p>Com o seu tempo de trabalho de <b>${horasTxt(horasMes())}</b> por mês, você precisa fazer cerca de <b>${atendMes} atendimento${atendMes > 1 ? "s" : ""} deste tipo por mês</b> (aproximadamente ${fmt(atendSem, 1)} por semana).</p>
      <div class="frase">Se fizer menos que isso, o mês não fecha com o que você quer ganhar. Se fizer mais, sobra lucro.</div>
    </div>

    <div class="bloco">
      <h3>De onde vem esse preço de ${brl(preco)}</h3>
      <table>
        <tr><td>Materiais<small>agulhas, tintas, descartáveis, produtos usados no atendimento</small></td><td class="v">${brl(materiais)}</td></tr>
        <tr><td>Seu tempo de trabalho<small>${horasTxt(horas)} × ${brl(custoHora)} por hora (seus custos fixos + salário, divididos pelas horas do mês)</small></td><td class="v">${brl(horas * custoHora)}</td></tr>
        <tr class="total"><td>Custo do serviço</td><td class="v">${brl(custoServico)}</td></tr>
        <tr><td>Impostos (${fmt(p.imposto)}%)<small>vai para o governo, calculado sobre o preço final</small></td><td class="v">${brl(impV)}</td></tr>
        <tr><td>ISS da prefeitura (${fmt(p.iss)}%)<small>imposto municipal sobre serviços</small></td><td class="v">${brl(issV)}</td></tr>
        <tr><td>Taxa da maquininha (${fmt(p.cartao)}%)<small>cobrada quando o cliente paga no cartão</small></td><td class="v">${brl(cartV)}</td></tr>
        <tr><td>Seu lucro neste serviço<small>o valor em reais que você quer ganhar</small></td><td class="v">${brl(margV)}</td></tr>
        <tr class="total"><td>Preço final ao cliente</td><td class="v">${brl(preco)}</td></tr>
      </table>
      <div class="frase">Depois de impostos e taxas, sobram <b>${brl(sobra)}</b> deste atendimento para pagar seu custo de trabalho e o seu lucro.</div>
    </div>

    <div class="bloco">
      <h3>Resumo em uma frase</h3>
      <p>Para ganhar <b>${brl(p.proLabore)}</b> por mês e pagar <b>${brl(p.custosFixos)}</b> de custos, você precisa faturar cerca de <b>${brl(faturamentoMes)}</b> com impostos incluídos. Cobrando <b>${brl(preco)}</b> por este serviço, são cerca de <b>${atendMes}</b> atendimentos por mês.</p>
    </div>

    <p class="aviso">Estimativa com os tempos e materiais de exemplo. Ajuste com a sua experiência real.</p>
  `;
  $("resultadoServico").classList.remove("hidden");
  $("resultadoServico").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================================
// CÁLCULO: PRODUTO
// ============================================================
function calcularProduto() {
  const nome = $("nomeProduto").value.trim() || "seu produto";
  const mat = num("matProduto");
  const emb = num("embProduto");
  const outros = num("outrosProduto");
  const min = num("tempoProduto");
  const lucro = num("lucroProduto");
  const qtd = Math.max(num("qtdMesProduto"), 0);
  const imp = num("prodImposto");
  const cartao = num("prodCartao");

  const dv = Math.max(1 - (imp + cartao) / 100, 0.05);
  const custo = mat + emb + outros;
  const preco = (custo + lucro) / dv;
  const impV = preco * imp / 100;
  const cartV = preco * cartao / 100;
  const horas = min / 60;
  const lucroHora = horas > 0 ? lucro / horas : 0;
  const faturamentoMes = preco * qtd;
  const lucroMes = lucro * qtd;

  $("resultadoProduto").innerHTML = `
    <div class="res-topo">
      <div class="pre">Para <b>${nome}</b>, você deve cobrar por unidade:</div>
      <div class="hora">${brl(preco)} <small>por unidade</small></div>
      <p class="explica">Esse preço deixa <b>${brl(lucro)}</b> de lucro para você em cada unidade vendida, depois de pagar os custos, os impostos e a taxa do cartão.</p>
    </div>

    <div class="grid3">
      <div class="mini"><b>Seu lucro por unidade</b><span>${brl(lucro)}</span><small>o que você quer ganhar</small></div>
      <div class="mini"><b>Lucro por hora de produção</b><span>${horas > 0 ? brl(lucroHora) : "—"}</span><small>${fmt(min, 0)} min por unidade</small></div>
      <div class="mini"><b>Lucro no mês</b><span>${brl(lucroMes)}</span><small>com ${fmt(qtd, 0)} unidades</small></div>
    </div>

    <div class="bloco">
      <h3>De onde vem esse preço de ${brl(preco)}</h3>
      <table>
        <tr><td>Ingredientes ou material<small>o valor gasto em cada unidade</small></td><td class="v">${brl(mat)}</td></tr>
        <tr><td>Embalagem<small>pote, caixinha, saquinho, etiqueta</small></td><td class="v">${brl(emb)}</td></tr>
        <tr><td>Outros custos<small>gás, energia, perdas, entrega</small></td><td class="v">${brl(outros)}</td></tr>
        <tr class="total"><td>Custo para fazer uma unidade</td><td class="v">${brl(custo)}</td></tr>
        <tr><td>Seu lucro desejado<small>o que você quer ganhar por unidade</small></td><td class="v">${brl(lucro)}</td></tr>
        <tr><td>Impostos (${fmt(imp)}%)<small>vai para o governo, sobre o preço final</small></td><td class="v">${brl(impV)}</td></tr>
        <tr><td>Taxa da maquininha (${fmt(cartao)}%)<small>quando o cliente paga no cartão</small></td><td class="v">${brl(cartV)}</td></tr>
        <tr class="total"><td>Preço final por unidade</td><td class="v">${brl(preco)}</td></tr>
      </table>
      <div class="frase">Dos <b>${brl(preco)}</b> que o cliente paga, <b>${brl(custo)}</b> são para produzir, <b>${brl(impV + cartV)}</b> vão para impostos e taxas, e <b>${brl(lucro)}</b> ficam com você.</div>
    </div>

    <div class="bloco">
      <h3>Resumo em uma frase</h3>
      <p>Para ganhar <b>${brl(lucroMes)}</b> por mês vendendo <b>${fmt(qtd, 0)}</b> unidades, você precisa cobrar <b>${brl(preco)}</b> por unidade. O faturamento do mês será de <b>${brl(faturamentoMes)}</b>.</p>
    </div>

    <p class="aviso">Estimativa com os valores que você informou. Ajuste os custos com o que você gastou de verdade em um lote.</p>
  `;
  $("resultadoProduto").classList.remove("hidden");
  $("resultadoProduto").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================================
// EVENTOS
// ============================================================
$("buscaProf").addEventListener("input", () => {
  profSel = null;
  $("escolhas").classList.add("hidden");
  $("profEscolhida").textContent = "";
  mostrarSugestoes();
});
$("buscaProf").addEventListener("blur", () => setTimeout(() => $("listaSugg").classList.add("hidden"), 150));
$("servico").addEventListener("change", () => { atualizarVariacoes(); $("resultadoServico").classList.add("hidden"); });
$("variacao").addEventListener("change", () => $("resultadoServico").classList.add("hidden"));
$("diasSemana").addEventListener("change", atualizarHoras);
$("horasDia").addEventListener("input", atualizarHoras);
$("calcularServico").addEventListener("click", calcularServico);
$("maquininhaServico").addEventListener("change", () => {
  const v = $("maquininhaServico").value;
  const outra = v === "custom";
  $("blocoTaxaCustomServ").classList.toggle("hidden", !outra);
  if (!outra) $("taxaCartao").value = v;
  else $("taxaCartao").value = "";
});
$("maquininhaProduto").addEventListener("change", () => {
  const v = $("maquininhaProduto").value;
  const outra = v === "custom";
  $("blocoTaxaCustom").classList.toggle("hidden", !outra);
  if (!outra) $("prodCartao").value = v;
  else $("prodCartao").value = "";
});
$("calcularProduto").addEventListener("click", calcularProduto);

$("tabServico").addEventListener("click", () => trocarAba("servico"));
$("tabProduto").addEventListener("click", () => trocarAba("produto"));
function trocarAba(aba) {
  const ser = aba === "servico";
  $("blocoServico").classList.toggle("hidden", !ser);
  $("blocoProduto").classList.toggle("hidden", ser);
  $("tabServico").classList.toggle("on", ser);
  $("tabProduto").classList.toggle("on", !ser);
}

atualizarHoras();
