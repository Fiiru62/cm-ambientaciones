import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  css: {
    devSourcemap: true,
  },
  base: './', // Usa rutas relativas para que funcione en Netlify
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'pages', // Carpeta que contiene las páginas adicionales
          dest: '' // Copia las páginas directamente en dist/
        },
        {
          src: 'img', // Carpeta de imágenes
          dest: '' // Copia las imágenes directamente en dist/
        }
      ]
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html', // Página principal
        carteleria: './pages/carteleria.html' // Página adicional
      }
    }
  }
})