module.exports = {
  content: [
    './src/**/*.{html,js}', // Ajuste conforme a estrutura do seu projeto
  ],
  darkMode: 'class', // Modo escuro ativado via classe

  theme: {
    extend: {
      colors: {
        // Cores Primárias
        primary: '#000000',  // Preto
        secondary: '#ffffff',  // Branco

        // Cores de fundo
        'light-background': '#ffffff',  // Cor de fundo claro
        'dark-background': '#0B0B0BFF',  // Fundo escuro mais suave

        // Cores de texto
        'light-text': '#000000',  // Texto escuro para modo claro
        'dark-text': '#ffffff', // Texto claro para o modo escuro

        // Cores de destaque
        accent: '#131313',  // Escuro
        'accent-dark': '#212121',  // Cinza mais claro
        highlight: '#ff781e',  // Cor de destaque laranja
        dark: '#070707FF',  // Cor de fundo escuro

        // Outras cores
        'link-color': '#ff781e', // Cor do link padrão
        'hover-link-color': '#e64a19', // Cor do link ao passar o mouse
      },

      typography: {
        DEFAULT: {
          css: {
            color: '#131415FF', // Cor do texto padrão
            'font-family': 'Roboto, sans-serif', // Fonte personalizada
            'line-height': '1.75', // Espaçamento entre linhas padrão
            'font-size': '1rem', // Tamanho da fonte padrão

            // Estilos para links
            'a': {
              color: '#ff781e', // Cor do link padrão
              textDecoration: 'none', // Remover underline por padrão
              '&:hover': {
                color: '#e64a19', // Cor do link ao passar o mouse
                textDecoration: 'underline', // Adicionar underline no hover
              },
            },

            // Estilos para parágrafos
            'p': {
              marginBottom: '1.5rem', // Espaço entre parágrafos
              color: '#333', // Cor dos parágrafos
            },

            // Estilos para títulos
            'h1': {
              color: '#070707FF', // Cor do título h1
              fontSize: '2.25rem', // Tamanho da fonte h1
              fontWeight: '700', // Peso da fonte h1 (negrito)
              lineHeight: '1.2', // Espaçamento entre linhas para h1
              marginBottom: '0.75rem', // Margem inferior para h1
            },
            'h2': {
              color: '#1B1B1BFF', // Cor do título h2
              fontSize: '1.875rem', // Tamanho da fonte h2
              fontWeight: '600', // Peso da fonte h2
              lineHeight: '1.3',
              marginBottom: '0.5rem', // Margem inferior para h2
            },
            'h3': {
              color: '#08090AFF', // Cor do título h3
              fontSize: '1.5rem', // Tamanho da fonte h3
              fontWeight: '500', // Peso da fonte h3
              lineHeight: '1.4',
              marginBottom: '0.5rem', // Margem inferior para h3
            },

            // Estilos para listas
            'ul': {
              listStyleType: 'disc',
              marginLeft: '1.5rem', // Margem à esquerda para listas
            },
            'ol': {
              listStyleType: 'decimal',
              marginLeft: '1.5rem',
            },
            'li': {
              marginBottom: '0.75rem', // Espaçamento entre itens da lista
            },

            // Estilo para citações
            'blockquote': {
              borderLeft: '4px solid #ff781e', // Bordas para citações
              paddingLeft: '1.25rem',
              color: '#131415FF',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
            },

            // Estilos para tabelas
            'table': {
              width: '100%',
              borderCollapse: 'collapse', // Colapsar as bordas da tabela
              marginBottom: '1.5rem',
            },
            'th, td': {
              border: '1px solid #e2e8f0', // Cor da borda das células
              padding: '0.75rem',
              textAlign: 'left',
            },
            'th': {
              backgroundColor: '#f7fafc', // Cor de fundo para cabeçalhos de tabela
              fontWeight: '600',
            },
            'td': {
              backgroundColor: '#fff', // Cor de fundo para células de tabela
            },
          },
        },
      },

      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      boxShadow: {
        'outline-blue': '0 0 0 3px rgba(59, 130, 246, 0.5)',
        'xl-lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
      },

      borderRadius: {
        '4xl': '2rem',
      },

      maxWidth: {
        'screen-sm': '640px',
        'screen-md': '768px',
        'screen-lg': '1024px',
        'screen-xl': '1280px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
    require('animate.css/tailwind'),
    require('tailwind-scrollbar'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],

  prefix: 'hs-', // Prefixo para classes
};
