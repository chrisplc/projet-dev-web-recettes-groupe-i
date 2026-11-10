import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Le front appelle /api, Vite relaie vers le back. Pas besoin de CORS.
    proxy: { '/api': process.env.API_URL ?? 'http://localhost:3000' },
  },
})
