# Diseño

## Idea

Página de negocio local, no de startup. Lo que genera confianza es ver **trabajos reales**, ver **quién es Victor** y poder escribir por **WhatsApp** en un toque. El verde de WhatsApp es la única acción que destaca.

El inicio imita una página de Facebook (lo pidió el cliente): portada, foto de perfil montada a la izquierda, título a la derecha y los botones abajo. Estilos en `src/styles/sections/perfil.css`.

## Colores (`src/styles/base/tokens.css`)

| Token            | Color     | Uso                                                     |
| ---------------- | --------- | ------------------------------------------------------- |
| `--brand`        | `#0B5CAD` | Azul principal: marca, íconos, banda final. Confianza y frío. |
| `--ink`          | `#0F2233` | Texto principal                                         |
| `--ink-2`        | `#475B6C` | Texto secundario                                        |
| `--bg-alt`       | `#F1F5F8` | Fondo de secciones alternas                             |
| `--heat`         | `#B83C09` | Naranja "calor". Solo acentos (switch de sol). No abusar. |
| `--wa`           | `#25D366` | Verde WhatsApp. **Solo** para botones de WhatsApp.      |

Todos los textos pasan contraste WCAG AA.

## Tipografía

**Archivo** (variable, pesos 400–800), una sola familia para todo. Se instala con npm (`@fontsource-variable/archivo`) y se sirve desde el mismo sitio: no depende de Google Fonts.

## Fotos

| Lugar      | Proporción | Tamaño       | Carpeta                    |
| ---------- | ---------- | ------------ | -------------------------- |
| Portada    | 4:3 (se recorta a 16:10 en celular y 21:8 en compu) | 1280 × 963 | `src/assets/img/perfil/portada.jpg` |
| Foto de perfil | 1:1 (se muestra en círculo) | 336 × 336 mínimo | `src/assets/img/perfil/foto-perfil.jpg` |
| Servicios  | 4:3        | 960 × 720    | `src/assets/img/servicios/`|
| Galería    | 4:5        | 720 × 900    | `src/assets/img/trabajos/` |
| Compartir  | 1.91:1     | 1200 × 630   | `public/og-image.jpg`      |

- JPG calidad ~78, máximo ~200 KB cada una.
- Las fotos originales (WhatsApp, 6 nov 2026) no van en el proyecto; se recortaron y comprimieron desde ahí.
- Al agregar una foto a la galería: copia un `<figure class="gallery__item">` en `index.html`, cambia `src`, `alt` y el pie.

## Reglas para que no se vea "hecho con IA"

Se quitaron a propósito; no regresarlas:

- Etiquetas pequeñas con puntito y letras espaciadas antes de cada título.
- Tarjetas con doble borde, todo en forma de píldora, sombras de colores.
- Letra tipo código (monoespaciada) en etiquetas.
- Botones con el ícono metido en un círculo a la derecha.
- Ilustraciones genéricas en lugar de fotos reales.
- Listas de palomitas genéricas ("Casas, oficinas y negocios") en el inicio: el cliente no las quiere.
- Secciones de "Paso 1, 2, 3" sin contenido real.

## Accesibilidad

- Botones y links de al menos 44 × 44 px.
- Fallas (`aria-pressed`) y switch de sol (`role="switch"` + `aria-checked`) anuncian su estado.
- Se respeta "reducir movimiento" del sistema (el video no se reproduce solo).
- Foco visible con teclado y link "Saltar al contenido".
