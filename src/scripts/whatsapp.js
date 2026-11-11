import { WHATSAPP } from '../config.js';

/** Arma el link de WhatsApp con el mensaje ya escrito. */
export function waLink(message = '') {
  const base = `https://wa.me/${WHATSAPP.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * - Los links con data-wa="clave" reciben el mensaje de WHATSAPP.messages[clave].
 * - Los elementos con data-phone muestran el número de WHATSAPP.display.
 * El HTML trae un link de respaldo por si el JavaScript no carga.
 */
export function initWhatsAppLinks() {
  document.querySelectorAll('[data-wa]').forEach((link) => {
    const message = WHATSAPP.messages[link.dataset.wa];
    if (message) link.href = waLink(message);
  });

  document.querySelectorAll('[data-phone]').forEach((el) => {
    el.textContent = WHATSAPP.display;
  });
}
