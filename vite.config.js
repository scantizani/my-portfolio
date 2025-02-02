import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Define o caminho base para GitHub Pages
});
