import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        breakoutHelper: 'apps/breakout-helper/index.html',
        breakoutHelperPrivacy: 'apps/breakout-helper/privacy/index.html',
      },
    },
  },
})
