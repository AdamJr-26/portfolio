import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Relative asset paths, so the same build works at a domain root (Netlify)
  // and under a sub-path (https://AdamJr-26.github.io/portfolio/).
  base: './',
  plugins: [react()],
})
