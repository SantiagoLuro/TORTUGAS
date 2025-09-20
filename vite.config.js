// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // 👈 SWC, no plugin-react

export default defineConfig({
  plugins: [react()],
  base: '/TORTUGAS/',                           // para GitHub Pages
})
