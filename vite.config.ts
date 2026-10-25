import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

//this is responsible for creating the bundle_> 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  }
})
