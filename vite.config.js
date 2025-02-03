import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: 'index.html' // 🔥 Certifique-se de que está apontando para a raiz
    }
  }
});
