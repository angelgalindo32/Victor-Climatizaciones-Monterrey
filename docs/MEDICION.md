# Medición: Google Analytics 4, Google Ads y Pixel de Meta

No hay que pegar scripts en el HTML. Todo se activa en `src/config.js`:

```js
export const TRACKING = {
  ga4Id: 'G-XXXXXXXXXX',
  googleAdsId: 'AW-123456789',
  googleAdsConversion: 'AW-123456789/AbCdEfGhIjKlMn',
  metaPixelId: '1234567890123456',
};
```

Cualquiera que esté vacío simplemente no se carga. Después de cambiarlos: `npm run build` y volver a subir `dist/`.

## Qué se mide

Cada clic en **cualquier** botón o link de WhatsApp cuenta como lead:

| Plataforma       | Evento           | Detalle                                                   |
| ---------------- | ---------------- | --------------------------------------------------------- |
| Google Analytics | `generate_lead`  | parámetros `method: whatsapp` y `lead_source` (abajo)     |
| Google Ads       | `conversion`     | solo si `googleAdsConversion` tiene valor                 |
| Meta             | `Contact`        | `content_name` = `lead_source`                            |

Valores de `lead_source` (atributo `data-track` de cada botón en `index.html`):

| Valor                    | Botón                                   |
| ------------------------ | --------------------------------------- |
| `header`                 | Botón verde del encabezado              |
| `hero`                   | "Cotizar por WhatsApp" del inicio       |
| `servicio_mantenimiento` | Tarjeta Mantenimiento                   |
| `servicio_reparacion`    | Tarjeta Reparación                      |
| `servicio_instalacion`   | Tarjeta Instalación y venta             |
| `fallas`                 | "Abrir en WhatsApp" del selector de fallas |
| `calculadora`            | Botón de la calculadora de toneladas    |
| `cta_final`              | Banda azul del final                    |
| `footer`                 | Link del pie de página                  |
| `boton_flotante`         | Burbuja verde fija                      |

Con esto se puede ver en Analytics qué parte de la página trae más clientes.

## Paso a paso

### Google Analytics 4

1. analytics.google.com → Administrar → Crear propiedad → Flujo de datos **Web** con la URL del sitio.
2. Copia el **ID de medición** (`G-…`) a `ga4Id`.
3. En Administrar → Eventos, marca `generate_lead` como **evento clave**.

### Google Ads

1. ads.google.com → Objetivos → Conversiones → Nueva acción de conversión → **Sitio web**.
2. Elige configurar manualmente con código, categoría **Contacto** o **Cliente potencial**, nombre "Clic a WhatsApp".
3. Google muestra un fragmento con `send_to: 'AW-123456789/AbCdEf…'`:
   - La parte `AW-123456789` va en `googleAdsId`.
   - El texto completo `AW-123456789/AbCdEf…` va en `googleAdsConversion`.

*(Alternativa: importar a Google Ads el evento clave `generate_lead` desde GA4. Usa una sola de las dos opciones para no contar doble.)*

### Pixel de Meta (si se anuncian en Facebook/Instagram)

1. Administrador de eventos → Conectar orígenes de datos → Web → Pixel.
2. Copia el ID numérico a `metaPixelId`.

## Cómo verificar

- **GA4:** Informes → Tiempo real. Abre la página, toca un botón de WhatsApp y debe aparecer `generate_lead`.
- **Google Ads:** extensión Google Tag Assistant, o esperar unas horas a que la conversión aparezca como "Registrando conversiones".
- **Meta:** extensión Meta Pixel Helper.
