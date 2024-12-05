/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea archivos JS, JSX, TS y TSX en la carpeta src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('back-header.webp')",
        'fondo': "url('fondo.webp')",
      }
    },
  },
  plugins: [],
};
