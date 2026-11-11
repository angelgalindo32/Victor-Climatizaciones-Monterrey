import { WHATSAPP } from '../config.js';

/** Botón "Copiar" junto al número. Si el navegador no deja copiar, selecciona el número. */
export function initCopiarTelefono() {
  const button = document.getElementById('copy-phone');
  const label = document.getElementById('copy-phone-label');
  const number = document.getElementById('phone-number');
  if (!button || !label || !number) return;

  const selectNumber = () => {
    const range = document.createRange();
    range.selectNodeContents(number);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const feedback = (text) => {
    label.textContent = text;
    setTimeout(() => {
      label.textContent = 'Copiar';
    }, 2200);
  };

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP.display.replace(/\s/g, ''));
      feedback('Copiado');
    } catch {
      selectNumber();
      feedback('Selecciónalo y copia');
    }
  });
}
