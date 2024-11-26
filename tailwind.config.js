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
        'light-background': '#ffffff',  // Cor de fundo claro
        'dark-background': '#0B0B0BFF',  // Fundo escuro mais suave
        'light-text': '#000000',  // Texto escuro para modo claro
        'dark-text': '#ffffff', // Texto claro para o modo escuro
        accent: '#131313',  // Escuro
        'accent-dark': '#212121',  // Cinza mais claro
        highlight: '#ff781e',  // Cor de destaque laranja
        dark: '#070707FF',  // Cor de fundo escuro
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
            'a': {
              color: '#ff781e', // Cor do link
              textDecoration: 'none', // Remover underline por padrão
              '&:hover': {
                color: '#e64a19', // Cor do link no hover
                textDecoration: 'underline', // Adicionar underline no hover
              },
            },
            'p': {
              marginBottom: '1.5rem', // Espaço entre parágrafos
            },
            'h1': {
              color: '#070707FF', // Cor do título h1
              fontSize: '2.25rem', // Tamanho da fonte h1
              fontWeight: '700', // Peso da fonte h1
            },
            'h2': {
              color: '#1B1B1BFF', // Cor do título h2
              fontSize: '1.875rem', // Tamanho da fonte h2
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

  prefix: 'hs-', // Prefixo para as classes
};
