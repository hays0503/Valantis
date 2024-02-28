import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@utils': path.resolve('./src/utils'),
      '@pages': path.resolve('./src/pages'),
      '@img': path.resolve('./public')

    }
  }
})
