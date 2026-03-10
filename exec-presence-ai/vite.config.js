import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add this base path for GitHub Pages sub-directory hosting
  base: '/executive-presence-ai-poc/', 
})