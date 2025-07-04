import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  assetsInclude: [
    '**/*.ttf',
  ],
  publicDir: 'public', // Make sure this points to your public directory
});