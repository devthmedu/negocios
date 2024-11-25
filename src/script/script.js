// Seleciona os itens da lista de estatísticas e o bloco de citação
const statItems = document.querySelectorAll('.stat-item');
const blockquote = document.querySelector('blockquote');

// Função que verifica a visibilidade no viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Função para animar a entrada das estatísticas
function animateStatistics() {
  statItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add('animate__fadeInUp'); // Adiciona animação
    }
  });
}

// Função para animar a entrada do bloco de citação
function animateBlockquote() {
  if (isElementInViewport(blockquote)) {
    blockquote.classList.add('animate__fadeIn'); // Adiciona animação para a citação
  }
}

// Evento de rolagem para verificar a visibilidade e animar os itens
window.addEventListener('scroll', () => {
  animateStatistics();
  animateBlockquote();
});

// Função de inicialização para aplicar animações quando a página for carregada
document.addEventListener('DOMContentLoaded', () => {
  animateStatistics();
  animateBlockquote();
});



  // Inicialize o Keen Slider
  const slider = new KeenSlider("#keen-slider", {
    loop: true,
    slideChanged(s) {
      console.log("Slide index changed to", s.details().relativeSlide);
    }
  });

  // Botões de navegação para a versão desktop
  document.getElementById("keen-slider-next-desktop").addEventListener("click", () => slider.next());
  document.getElementById("keen-slider-previous-desktop").addEventListener("click", () => slider.prev());

  // Botões de navegação para a versão mobile
  document.getElementById("keen-slider-next").addEventListener("click", () => slider.next());
  document.getElementById("keen-slider-previous").addEventListener("click", () => slider.prev());








document.addEventListener("DOMContentLoaded", function () {
  // Verifica se o usuário já tomou uma decisão sobre os cookies
  if (!localStorage.getItem('cookies_aceitos')) {
    // Exibe o modal de cookies caso o usuário ainda não tenha tomado uma decisão
    const modal = document.getElementById('cookies-with-stacked-buttons');
    modal.classList.remove('hidden'); // Remove a classe 'hidden' para exibir o modal
  }

  // Seleciona o botão de fechar (dismiss)
  const dismissButton = document.querySelector('[data-hs-remove-element="#cookies-with-stacked-buttons"]');

  // Função para fechar o modal
  function fecharModal() {
    const modal = document.getElementById('cookies-with-stacked-buttons');
    modal.classList.add('hidden'); // Adiciona a classe 'hidden' para esconder o modal
    // Armazena a escolha do usuário no localStorage (usuário fechou sem decidir)
    localStorage.setItem('cookies_aceitos', 'dismissed');
  }

  // Evento para fechar o modal quando o usuário clicar em "Fechar"
  dismissButton.addEventListener('click', fecharModal);

  // Seleciona os botões de "Permitir todos" e "Rejeitar todos"
  const permitirTodos = document.getElementById('allow-cookies');
  const rejeitarTodos = document.getElementById('reject-cookies');

  // Função para armazenar a escolha do usuário (permitir ou rejeitar cookies)
  function escolherCookies(permitir) {
    const modal = document.getElementById('cookies-with-stacked-buttons');
    modal.classList.add('hidden'); // Esconde o modal após a escolha
    localStorage.setItem('cookies_aceitos', permitir ? 'true' : 'false'); // Salva a escolha no localStorage
  }

  // Adiciona eventos de clique nos botões "Permitir todos" e "Rejeitar todos"
  permitirTodos.addEventListener('click', function() {
    escolherCookies(true); // O usuário permite todos os cookies
  });
  
  rejeitarTodos.addEventListener('click', function() {
    escolherCookies(false); // O usuário rejeita todos os cookies
  });

  // Verificar a escolha do usuário e exibir informações baseadas nela
  function verificarCookies() {
    const cookiesStatus = localStorage.getItem('cookies_aceitos');
    const statusElement = document.getElementById('status-cookies');
    
    if (cookiesStatus === 'true') {
      statusElement.textContent = "Você permitiu todos os cookies.";
    } else if (cookiesStatus === 'false') {
      statusElement.textContent = "Você rejeitou todos os cookies.";
    } else if (cookiesStatus === 'dismissed') {
      statusElement.textContent = "Você fechou o aviso de cookies sem fazer uma escolha.";
    } else {
      statusElement.textContent = "Você ainda não tomou uma decisão sobre os cookies.";
    }
  }

  // Exibe o status atual dos cookies na página
  verificarCookies();

  // Função para gerenciar as opções avançadas de cookies (como desmarcar cookies específicos)
  const gerenciarCookiesButton = document.querySelector('.gerenciar-cookies'); // Botão de Gerenciar cookies
  gerenciarCookiesButton.addEventListener('click', function () {
    const gerenciamentoModal = document.createElement('div');
    gerenciamentoModal.classList.add('modal-gerenciamento-cookies');
    gerenciamentoModal.innerHTML = `
      <div class="modal-content">
        <h3>Gerenciar Cookies</h3>
        <p>Escolha os tipos de cookies que você permite:</p>
        <label>
          <input type="checkbox" id="cookies-necessarios" checked disabled>
          Necessários
        </label>
        <label>
          <input type="checkbox" id="cookies-marketing">
          Marketing
        </label>
        <label>
          <input type="checkbox" id="cookies-analytics">
          Analytics
        </label>
        <button class="btn-salvar">Salvar configurações</button>
        <button class="btn-fechar">Fechar</button>
      </div>
    `;
    document.body.appendChild(gerenciamentoModal);

    // Fechar o modal de gerenciamento
    const btnFechar = gerenciamentoModal.querySelector('.btn-fechar');
    btnFechar.addEventListener('click', function() {
      gerenciamentoModal.remove(); // Remove o modal da tela
    });

    // Salvar as configurações de cookies
    const btnSalvar = gerenciamentoModal.querySelector('.btn-salvar');
    btnSalvar.addEventListener('click', function() {
      const marketing = document.getElementById('cookies-marketing').checked;
      const analytics = document.getElementById('cookies-analytics').checked;
      // Salve as preferências de cookies no localStorage
      localStorage.setItem('cookies_marketing', marketing);
      localStorage.setItem('cookies_analytics', analytics);
      gerenciamentoModal.remove(); // Fecha o modal de gerenciamento
      alert('Configurações de cookies salvas!');
    });
  });
});





  // Inicializar Swiper com configurações automáticas
  const swiper = new Swiper('.swiper', {
    loop: true,  // Faz com que o swiper repita o ciclo
    slidesPerView: 1,  // Exibe uma slide por vez
    autoplay: {
      delay: 5000,  // Transita entre os slides a cada 5 segundos
      disableOnInteraction: false,  // Permite a navegação manual sem parar o autoplay
    },
    effect: 'fade',  // Efeito de transição suave entre slides
    pagination: {
      el: '.swiper-pagination',  // Ativa a paginação dos slides
      clickable: true,  // Torna a paginação clicável
    },
    navigation: {
      nextEl: '.swiper-next-button',
      prevEl: '.swiper-prev-button',
    },
  });
