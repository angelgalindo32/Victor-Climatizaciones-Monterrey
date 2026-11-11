/**
 * Punto de entrada. Vite empaqueta desde aquí la fuente, los estilos y los scripts.
 */
import '@fontsource-variable/archivo';
import './styles/main.css';

import { initWhatsAppLinks } from './scripts/whatsapp.js';
import { initTracking } from './scripts/tracking.js';
import { initFallas } from './scripts/fallas.js';
import { initCopiarTelefono } from './scripts/copiar-telefono.js';
import { initGaleria } from './scripts/galeria.js';

initWhatsAppLinks();
initTracking();
initFallas();
initCopiarTelefono();
initGaleria();
