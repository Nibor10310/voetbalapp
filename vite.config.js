import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures Vercel correctly finds index.html
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensures Vite finds the entry file
    },
  },
});
