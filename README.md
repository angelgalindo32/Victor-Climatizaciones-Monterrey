# Climatización Monterrey · Página web

Landing page de **Victor / Climatización Monterrey**: mantenimiento, reparación, instalación y venta de minisplits en Monterrey y área metropolitana. El objetivo de la página es uno solo: que el cliente escriba por **WhatsApp (81 1918 6070)**.

Hecha con HTML, CSS y JavaScript sin frameworks. [Vite](https://vite.dev) se usa para desarrollar con recarga en vivo y para generar la versión optimizada que se sube al hosting.

---

## Requisitos

- [Node.js](https://nodejs.org) 20 o más nuevo (`node -v` para revisar)

## Comandos

```bash
npm install       # una sola vez, instala Vite y la fuente
npm run dev       # servidor local con recarga en vivo → http://localhost:5173
npm run build     # genera la carpeta dist/ lista para subir
npm run preview   # revisa dist/ tal como quedará publicado
```

**Probar en el celular:** con `npm run dev`, la terminal muestra una dirección `Network: http://192.168.x.x:5173`. Ábrela en el celular conectado al mismo Wi-Fi.

---

## Estructura

```
climatizacion-monterrey-web/
├── index.html                 Contenido de la página (textos, secciones, fotos)
├── public/                    Archivos que se copian tal cual al publicar
│   ├── favicon.svg            Ícono de la pestaña (provisional)
│   ├── og-image.jpg           Imagen al compartir el link en WhatsApp/Facebook
│   └── robots.txt
├── src/
│   ├── main.js                Punto de entrada: carga fuente, estilos y scripts
│   ├── config.js              ★ Número, mensajes de WhatsApp, IDs de Google/Meta, calculadora
│   ├── scripts/
│   │   ├── whatsapp.js        Arma los links de WhatsApp con mensaje
│   │   ├── tracking.js        Google Analytics, Google Ads y Pixel de Meta
│   │   ├── fallas.js          Selector "¿Qué le pasa a tu clima?"
│   │   ├── calculadora.js     Calculadora de toneladas
│   │   ├── copiar-telefono.js Botón "Copiar" del número
│   │   └── galeria.js         Reproduce el video solo cuando está en pantalla
│   ├── styles/
│   │   ├── main.css           Solo importa los demás, en orden
│   │   ├── base/              tokens.css (★ colores y medidas), reset, tipografía
│   │   ├── layout/            Contenedor, secciones, header, footer
│   │   ├── components/        Botones, tarjetas, chips, slider, switch, acordeón...
│   │   └── sections/          Estilos propios de cada sección
│   └── assets/
│       ├── img/perfil/        Portada y foto de perfil (inicio estilo Facebook)
│       ├── img/servicios/     Una foto por servicio (4:3)
│       ├── img/trabajos/      Galería (4:5, vertical)
│       └── video/             Video de la galería + su imagen de portada
└── docs/
    ├── PENDIENTES.md          Lo que falta confirmar con Victor
    ├── MEDICION.md            Cómo activar Google Analytics, Ads y Pixel
    └── DISENO.md              Colores, tipografía, fotos y reglas de diseño
```

---

## Dónde cambiar cada cosa

| Quiero cambiar…                         | Archivo                                       |
| --------------------------------------- | --------------------------------------------- |
| Número de WhatsApp o mensajes           | `src/config.js` → `WHATSAPP`                  |
| IDs de Google Analytics / Ads / Pixel   | `src/config.js` → `TRACKING`                  |
| Tabla de toneladas de la calculadora    | `src/config.js` → `CALCULADORA`               |
| Textos, servicios, preguntas, municipios| `index.html`                                  |
| Colores, radios, espacios               | `src/styles/base/tokens.css`                  |
| Estilo de una sección                   | `src/styles/sections/<seccion>.css`           |
| Una foto                                | Reemplaza el archivo en `src/assets/img/...` con el mismo nombre |
| Portada o foto de perfil del inicio     | `src/assets/img/perfil/portada.jpg` y `foto-perfil.jpg` |
| Título y descripción para Google        | `<title>` y `<meta name="description">` en `index.html` |
| Logo                                    | Ver comentario en `src/styles/components/brand.css` |

**Botones de WhatsApp:** cada botón tiene `data-wa="clave"` (qué mensaje lleva, de `config.js`) y `data-track="nombre"` (de dónde vino el lead, para Analytics). Para agregar un botón nuevo copia uno existente y cambia esos dos atributos.

---

## Publicar

1. `npm run build`
2. Sube **el contenido** de la carpeta `dist/` (no la carpeta `src/`).

- **Netlify / Cloudflare Pages / Vercel (gratis):** conecta el repositorio de GitHub con comando de build `npm run build` y carpeta de salida `dist`. Cada cambio que subas se publica solo. Para una prueba rápida en Netlify también puedes arrastrar la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop).
- **Hosting tradicional (Hostinger, GoDaddy, cPanel):** sube el contenido de `dist/` a `public_html/`.

Después de publicar con el dominio definitivo, revisa `docs/PENDIENTES.md` → sección Dominio.

---

## Convenciones

- **CSS:** clases tipo BEM (`bloque__elemento--variante`), colores y medidas solo desde `tokens.css`, mobile-first (estilos base para celular, `@media (min-width: …)` para pantallas grandes).
- **JS:** un módulo por función, cada uno exporta un `init…()` que se llama en `main.js`. Los elementos se buscan por `id` o `data-*`, nunca por clases de estilo.
- **Fotos:** JPG de máximo ~200 KB, con `width`/`height` en el HTML y `loading="lazy"` (menos la portada).
