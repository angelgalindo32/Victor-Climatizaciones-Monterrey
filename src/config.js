/**
 * CONFIGURACIÓN DEL SITIO
 * Es el archivo que normalmente hay que tocar: número, mensajes de WhatsApp,
 * IDs de Google/Meta y la tabla de la calculadora.
 */

export const WHATSAPP = {
  // Número con lada de país (52), sin espacios ni signos.
  number: '528119186070',

  // Cómo se muestra el número en la página.
  display: '81 1918 6070',

  // Mensaje que se escribe solo según el botón.
  // En el HTML cada botón dice cuál usa con data-wa="general", data-wa="mantenimiento", etc.
  messages: {
    general: 'Hola Victor, vi su página y quiero cotizar un servicio para mi clima.',
    mantenimiento: 'Hola Victor, quiero agendar un mantenimiento para mi clima.',
    reparacion: 'Hola Victor, mi clima tiene una falla y necesito que lo revisen.',
    instalacion: 'Hola Victor, quiero cotizar la venta e instalación de un minisplit.',
    falla: 'Hola Victor, mi clima está fallando. ¿Me pueden ayudar?',
  },

  // Mensajes que se arman con lo que elige el cliente (fallas y calculadora).
  templates: {
    fallas: (lista) => `Hola Victor, mi clima ${lista}. ¿Me pueden ayudar a revisarlo?`,
    minisplit: (toneladas, espacio) =>
      `Hola Victor, quiero cotizar un minisplit de ${toneladas} ${toneladas === 1 ? 'tonelada' : 'toneladas'} para ${espacio}.`,
    espacioGrande: (espacio) =>
      `Hola Victor, necesito aire acondicionado para ${espacio}. ¿Me ayudan a ver qué equipo conviene?`,
  },
};

/**
 * MEDICIÓN (Google Analytics 4, Google Ads, Pixel de Meta)
 * Déjalos vacíos hasta tenerlos. Con solo pegar el ID aquí se carga el código
 * y cada clic a WhatsApp se registra como lead. Guía completa: docs/MEDICION.md
 */
export const TRACKING = {
  ga4Id: '', //               ej. 'G-XXXXXXXXXX'
  googleAdsId: '', //         ej. 'AW-123456789'
  googleAdsConversion: '', // ej. 'AW-123456789/AbCdEfGhIjKlMn' (send_to de la conversión "Clic a WhatsApp")
  metaPixelId: '', //         ej. '1234567890123456'
};

/**
 * CALCULADORA DE TONELADAS
 * Referencia para clima muy caluroso (Nuevo León). Victor puede ajustarla.
 * "max" = metros cuadrados máximos para esa capacidad.
 */
export const CALCULADORA = {
  tabla: [
    { max: 12, toneladas: 1 },
    { max: 21, toneladas: 1.5 },
    { max: 26, toneladas: 2 },
    { max: 38, toneladas: 3 },
  ],
  // Con sol de la tarde se calcula como si el cuarto fuera 15% más grande.
  factorSol: 1.15,
  btuPorTonelada: 12000,
};
