// /** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    flowbite.content(), // Escanea archivos JS, JSX, TS y TSX en la carpeta src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('/back-header.webp')",
        'fondo': "url('fondo.webp')",
      }
    },
  },
  plugins: [flowbite.plugin()],
};
