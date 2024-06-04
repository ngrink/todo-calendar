import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  resolve: {
    alias: {
      "@/screens": path.resolve(__dirname, './src/views/screens'),
      "@/components": path.resolve(__dirname, './src/views/components'),
      "@": path.resolve(__dirname, './src')
    }
  }
})
