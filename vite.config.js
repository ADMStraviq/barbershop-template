import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lädt die wichtigste Schrift (Montserrat 400, Fließtext) per <link rel="preload">
// vor, damit der Text nicht erst nach dem CSS die Schrift anfordert. Der
// Dateiname enthält einen Hash und steht erst nach dem Build fest, deshalb
// wird er hier aus dem Bundle gelesen. Im Dev-Server gibt es kein Preload.
function preloadCriticalFont() {
  return {
    name: 'preload-critical-font',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html
      const file = Object.keys(ctx.bundle).find((name) =>
        /montserrat-latin-400-normal-[\w-]+\.woff2$/.test(name),
      )
      if (!file) return html
      return [
        {
          tag: 'link',
          attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
          injectTo: 'head',
        },
      ]
    },
  }
}

export default defineConfig({
  plugins: [react(), preloadCriticalFont()],
})
