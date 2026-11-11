# Pendientes

## Confirmar con Victor

- [ ] **Municipios** donde da servicio. Ahora dice: Monterrey, Guadalupe, San Nicolás, Apodaca, San Pedro, Santa Catarina, Escobedo y Juárez. → `index.html`, sección Zona.
- [ ] **Qué incluye cada servicio** (mantenimiento, reparación, instalación). Ahora tiene lo estándar del oficio. → `index.html`, sección Servicios.
- [ ] **Foto de perfil en buena resolución:** la actual se recortó de una captura de su Facebook (se ve bien, pero la original sería mejor). Que la mande por WhatsApp **como documento**. Reemplazar `src/assets/img/perfil/foto-perfil.jpg` (cuadrada, mínimo 336 × 336).
- [ ] **Mantenimiento eléctrico:** en sus redes lo anuncia. ¿Se agrega como servicio?
- [ ] **Fotos de antes y después:** hay dos fotos del mismo equipo marcando 22.5° y 10.1°. Si son el antes y el después de un servicio, se puede armar una comparación.
- [ ] **Tabla de toneladas:** que Victor revise si coincide con lo que él recomienda. → `src/config.js`, `CALCULADORA`.
- [ ] **Reseñas, años de experiencia, garantía:** no hay datos todavía, por eso la página no los menciona. Si los da, se agregan.

## Logo

- [ ] Logo nuevo (sello con su foto + Cerro de la Silla + aire). Cuando esté:
  - Guardar en `src/assets/img/brand/` (SVG si es posible, si no PNG).
  - Cambiar `.brand__mark` por `<img class="brand__logo">` en header y footer de `index.html` (ver `src/styles/components/brand.css`).
  - Decidir si el sello reemplaza la foto de perfil del inicio (`profile__avatar` en `index.html`).
  - Cambiar `public/favicon.svg` por la versión ícono.
  - Actualizar `public/og-image.jpg` (1200 × 630).

## Dominio (cuando ya esté publicado)

- [ ] Descomentar `<link rel="canonical">` en `index.html` con la URL real.
- [ ] Descomentar `<meta property="og:image">` con la URL real de `og-image.jpg`.
- [ ] Agregar `public/sitemap.xml` y descomentar la línea `Sitemap:` en `public/robots.txt`.
- [ ] Dar de alta el sitio en Google Search Console.
- [ ] Poner el link de la página en su perfil de Google Maps (Google Business Profile), Facebook e Instagram.

## Medición

- [ ] IDs de Google Analytics 4, Google Ads y Pixel de Meta en `src/config.js`. Ver `docs/MEDICION.md`.
