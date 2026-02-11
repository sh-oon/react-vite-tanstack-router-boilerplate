import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [tanstackRouter({ target: 'react', autoCodeSplitting: true }), react(), styleX()],
  resolve: {
    alias: { '@': '/src' },
  },
});
