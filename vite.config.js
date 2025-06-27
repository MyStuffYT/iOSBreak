// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/iOSBreak/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        compatibility: 'compatibility.html',
      }
    }
  }
})
