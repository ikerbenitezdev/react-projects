import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './stats.html',
      open: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Agrupar todas las dependencias en un chunk llamado 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          // Puedes añadir más lógica aquí si deseas dividir otros módulos específicos
          if (id.includes('src/three')) { // Ejemplo de agrupar archivos específicos de Three.js
            return 'three'; // Crea un chunk separado para Three.js
          }
        },
      },
    },
  },

})
