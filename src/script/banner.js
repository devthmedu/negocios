// Lista de textos que você deseja exibir automaticamente
const texts = [
  "Transforme seu Atendimento com CRM e Bots",
  "Aumente suas Vendas com Funis de Vendas Eficientes",
  "Maximize seu Engajamento nas Redes Sociais",
  "Crie Campanhas Publicitárias Personalizadas para Seu Público",
  "Envolva Seu Público com Mensagens Rápidas e Eficientes"
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
setInterval(updateText, 5000);
