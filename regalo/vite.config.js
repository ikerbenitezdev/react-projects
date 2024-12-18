import { defineConfig } from 'vite'
// import multiPages from 'vite-plugin-multi-pages';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html', // Página principal
        certificado: 'certificado.html', // Página adicional
      },
    },
  },
})
