import { defineConfig } from 'vite';

export default defineConfig({
  // Rutas relativas: el sitio funciona igual en la raíz del dominio o en una subcarpeta.
  base: './',

  server: {
    // Permite abrir el sitio desde el celular en la misma red Wi-Fi (npm run dev muestra la IP).
    host: true,
  },

  build: {
    outDir: 'dist',
    // No incrustar imágenes en el CSS/JS como base64; cada foto queda como archivo.
    assetsInlineLimit: 0,
  },
});
