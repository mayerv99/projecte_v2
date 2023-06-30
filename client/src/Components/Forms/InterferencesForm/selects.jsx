// Tipo Corpo Hídrico
export const tipoCorpohidricoOptions = [
  { label: "Rio", value: "Rio" },
  { label: "Reservatório", value: "Reservatório" },
  { label: "Cacimba", value: "Cacimba" },
  {
    label: "Poço raso, cacimba, cacimbão",
    value: "Poço raso, cacimba, cacimbão",
  },
  { label: "Poço profundo", value: "Poço profundo" },
];

// Domínio
export const dominioOptions = [
  { label: "Federal", value: "Federal" },
  { label: "Estadual", value: "Estadual" },
];

// Tipo Interferência
export const tipoInterferenciaOptions = [
  { label: "Captação", value: "Captação" },
  { label: "Lançamento", value: "Lançamento" },
  { label: "Barragem", value: "Barragem" },
  { label: "Ponto de Referência", value: "Ponto de Referência" },
];

// Situação Interferência
export const situacaoInterferenciaOptions = [
  { label: "Projeto", value: "Projeto" },
  { label: "export construção", value: "export construção" },
  { label: "Operação", value: "Operação" },
  { label: "Desativada", value: "Desativada" },
];

// Subtipo Interferência
export const subtipoInterferenciaOptions = [
  { label: "Superficial", value: "Superficial" },
  { label: "Subterrânea", value: "Subterrânea" },
];

// Finalidade
export const finalidadeOptions = [
  { label: "Sem Finalidade", value: "Sem Finalidade" },
  { label: "Abastecimento Público", value: "Abastecimento Público" },
  { label: "Esgotamento Sanitário", value: "Esgotamento Sanitário" },
  { label: "Indústria", value: "Indústria" },
  {
    label: "Mineração – Extração de Areia/Cascalho em Leito de Rio",
    value: "Mineração – Extração de Areia/Cascalho em Leito de Rio",
  },
  { label: "Irrigação", value: "Irrigação" },
  { label: "Criação Animal", value: "Criação Animal" },
  {
    label: "Aquicultura em Tanque Escavado",
    value: "Aquicultura em Tanque Escavado",
  },
  { label: "Termoelétrica", value: "Termoelétrica" },
  { label: "Transposição", value: "Transposição" },
  {
    label: "Aproveitamento Hidroelétrico",
    value: "Aproveitamento Hidroelétrico",
  },
  {
    label:
      "Reservatório/Barramento/Regularização de Vazões para Usos Múltiplos Consumo Humano",
    value:
      "Reservatório/Barramento/Regularização de Vazões para Usos Múltiplos Consumo Humano",
  },
  {
    label: "Mineração – Outros Processos Extrativos",
    value: "Mineração – Outros Processos Extrativos",
  },
  { label: "Obras Hidráulicas", value: "Obras Hidráulicas" },
  { label: "Serviços", value: "Serviços" },
  { label: "Aquicultura em Tanque Rede", value: "Aquicultura em Tanque Rede" },
  { label: "Outras", value: "Outras" },
];

// Margem
export const margemOptions = [
  { label: "Direita", value: "Direita" },
  { label: "Esquerda", value: "Esquerda" },
];

// Criação Animal
export const criacaoAnimalOptions = [
  { label: "Bovino de Corte", value: "Bovino de Corte" },
  { label: "Bovino de Leite", value: "Bovino de Leite" },
  { label: "Equino ou Asinino", value: "Equino ou Asinino" },
  { label: "Caprino ou Ovino", value: "Caprino ou Ovino" },
  { label: "Suíno", value: "Suíno" },
  { label: "Bubalino", value: "Bubalino" },
  { label: "Galinha de Postura", value: "Galinha de Postura" },
  { label: "Frango de Corte", value: "Frango de Corte" },
];

// Sistema de Criação
export const sistemaCriacaoOptions = [
  { label: "Intensivo", value: "Intensivo" },
  { label: "Extensivo", value: "Extensivo" },
];

// Cultivo Aquicultura
export const cultivoAquiculturaOptions = [
  { label: "Piscicultura Tilápia", value: "Piscicultura Tilápia" },
  { label: "Piscicultura Tambaqui", value: "Piscicultura Tambaqui" },
  { label: "Piscicultura ornamentais", value: "Piscicultura ornamentais" },
  {
    label: "Malacultura (mariscos, ostras, etc)",
    value: "Malacultura (mariscos, ostras, etc)",
  },
  { label: "Ranicultura", value: "Ranicultura" },
  {
    label: "Carcinocultura (camarões e outros crustáceos)",
    value: "Carcinocultura (camarões e outros crustáceos)",
  },
  { label: "Outros (não ornamentais)", value: "Outros (não ornamentais)" },
  { label: "Alginocultura", value: "Alginocultura" },
];

// Sistema Irrigação
export const sistemaIrrigacaoOptions = [
  { label: "Sulcos abertos em desnível", value: "Sulcos abertos em desnível" },
  {
    label: "Inundação permanente (diques em nível)",
    value: "Inundação permanente (diques em nível)",
  },
  {
    label: "Aspersão por sistema convencional",
    value: "Aspersão por sistema convencional",
  },
  {
    label: "Aspersão por sistema autopropelido",
    value: "Aspersão por sistema autopropelido",
  },
  {
    label: "Aspersão por sistema pivô central",
    value: "Aspersão por sistema pivô central",
  },
  { label: "Gotejamento", value: "Gotejamento" },
  { label: "Micro-aspersão", value: "Micro-aspersão" },
  { label: "Tubos perfurados (tripa)", value: "Tubos perfurados (tripa)" },
  {
    label: "Sulcos interligados em bacias",
    value: "Sulcos interligados em bacias",
  },
  { label: "Sub-irrigação", value: "Sub-irrigação" },
  {
    label: "Aspersão por sistema pivô central com LEPA",
    value: "Aspersão por sistema pivô central com LEPA",
  },
  {
    label: "Aspersão por canhão hidráulico",
    value: "Aspersão por canhão hidráulico",
  },
  {
    label: "Aspersão por sistema deslocamento linear",
    value: "Aspersão por sistema deslocamento linear",
  },
  {
    label: "Aspersão por sistema em malha",
    value: "Aspersão por sistema em malha",
  },
  {
    label: "Aspersão por sistema pivô central rebocável",
    value: "Aspersão por sistema pivô central rebocável",
  },
  { label: "Caminhão regadeira", value: "Caminhão regadeira" },
  {
    label: "Gotejamento subterrâneo - tubo poroso",
    value: "Gotejamento subterrâneo - tubo poroso",
  },
  { label: "Sulcos fechados", value: "Sulcos fechados" },
  {
    label: "Inundação temporária (diques em desnível)",
    value: "Inundação temporária (diques em desnível)",
  },
];

// Fonte Energia
export const fonteEnergiaOptions = [
  { label: "Elétrica", value: "Elétrica" },
  { label: "Diesel", value: "Diesel" },
];
