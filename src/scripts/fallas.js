import { WHATSAPP } from '../config.js';
import { waLink } from './whatsapp.js';

/** ["no enfría", "gotea", "hace ruido"] → "no enfría, gotea y hace ruido" */
function joinEs(items) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`;
}

/** Selector "¿Qué le pasa a tu clima?": arma el mensaje con las fallas elegidas. */
export function initFallas() {
  const chips = [...document.querySelectorAll('[data-falla]')];
  const message = document.getElementById('fallas-message');
  const cta = document.getElementById('fallas-cta');
  const status = document.getElementById('fallas-status');
  if (!chips.length || !message || !cta) return;

  const update = () => {
    const selected = chips
      .filter((chip) => chip.getAttribute('aria-pressed') === 'true')
      .map((chip) => chip.dataset.falla);

    const text = selected.length
      ? WHATSAPP.templates.fallas(joinEs(selected))
      : WHATSAPP.messages.falla;

    message.textContent = text;
    cta.href = waLink(text);

    if (status) {
      status.textContent =
        selected.length === 0
          ? 'Puedes elegir varias.'
          : `${selected.length} ${selected.length === 1 ? 'falla seleccionada' : 'fallas seleccionadas'}.`;
    }
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      const pressed = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', String(!pressed));
      update();
    });
  });

  update();
}
