// preline.js

// Função para inicializar componentes do Preline
function initPrelineComponents() {
  // Inicialização de componentes de seleção
  document.querySelectorAll('[data-hs-select]').forEach(el => {
    new HSSelect(el);
  });

  // Inicialização de outros componentes, se necessário
  // Exemplo: inicialização de modais, tooltips, etc.
}

// Função para alternar visibilidade de elementos
function toggleVisibility(element) {
  if (element.style.display === 'none' || element.style.display === '') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Event Listener para botões de toggle
document.addEventListener('click', (event) => {
  if (event.target.matches('[data-toggle]')) {
    const targetId = event.target.getAttribute('data-toggle');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      toggleVisibility(targetElement);
    }
  }
});

// Inicializar todos os componentes quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  initPrelineComponents();
});

// Exportar funções se necessário (para uso em outros módulos)
export { initPrelineComponents, toggleVisibility };