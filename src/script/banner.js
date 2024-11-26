const texts = [
  "Transforme seu Atendimento com CRM e Bots",
  "Aumente suas Vendas com Funis de Vendas Eficientes",
  "Maximize seu Engajamento nas Redes Sociais",
  "Crie Campanhas Publicitárias Personalizadas para Seu Público",
  "Envolva Seu Público com Mensagens Rápidas e Eficientes",
  "Automatize Processos e Ganhe Mais Tempo para o Que Importa",
  "Converta Mais Leads com Estratégias de Marketing de Conteúdo",
  "Melhore a Experiência do Cliente com Soluções Inteligentes",
  "Analise Dados em Tempo Real para Decisões Mais Eficazes",
  "Otimize Seu Site para Ranquear no Topo das Pesquisas",
  "Capte Leads de Forma Inteligente e Sustentável",
  "Aumente a Retenção de Clientes com Ações de Fidelização",
  "Aproveite ao Máximo o Poder do Marketing Digital",
  "Revolucione Suas Estratégias de E-commerce Agora Mesmo",
  "Impacte Seu Público com Comunicação Autêntica e Criativa"
];

// Função para trocar o texto
function updateText() {
  const textElement = document.getElementById('dynamic-text');
  let currentIndex = texts.indexOf(textElement.innerText);

  // Encontra o próximo índice, ou volta ao início da lista
  currentIndex = (currentIndex + 1) % texts.length;

  // Atualiza o texto do elemento
  textElement.innerText = texts[currentIndex];
}

// Atualiza o texto a cada 5 segundos (5000 ms)
setInterval(updateText, 9000);
