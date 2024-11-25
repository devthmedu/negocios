// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

  // Referência para o botão flutuante e modal
  const floatingBtn = document.getElementById('floating-btn');
  const brindeModal = document.getElementById('brinde-modal');
  const closeBtn = document.getElementById('close-btn');

  // Referência para a contagem de notificações
  const notificationCount = document.getElementById('notification-count');

  // Função para abrir o modal de brinde
  floatingBtn.addEventListener('click', function() {
    // Exibe o modal de brinde
    brindeModal.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o modal
  });

  // Função para fechar o modal de brinde
  closeBtn.addEventListener('click', function() {
    // Esconde o modal de brinde
    brindeModal.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o modal
  });

  // Exemplo de como atualizar o contador de notificações
  // Essa lógica pode ser ajustada dependendo de como você deseja gerenciar as notificações
  setInterval(function() {
    let currentCount = parseInt(notificationCount.textContent, 10);
    if (currentCount > 0) {
      notificationCount.textContent = currentCount + 1; // Aumenta a contagem de notificações
    }
  }, 5000); // A cada 5 segundos, a contagem de notificações será aumentada

});
