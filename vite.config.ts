import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Configure path aliases for absolute imports (e.g., import Component from '@/components/Component')
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});