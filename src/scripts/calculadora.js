import { CALCULADORA, WHATSAPP } from '../config.js';
import { waLink } from './whatsapp.js';

const formatNumber = (n) => n.toLocaleString('es-MX');

/** Calculadora "¿De cuántas toneladas necesitas tu minisplit?" */
export function initCalculadora() {
  const area = document.getElementById('calc-area');
  const areaValue = document.getElementById('calc-area-value');
  const sun = document.getElementById('calc-sun');
  const tons = document.getElementById('calc-tons');
  const btu = document.getElementById('calc-btu');
  const note = document.getElementById('calc-note');
  const cta = document.getElementById('calc-cta');
  const ctaText = document.getElementById('calc-cta-text');
  const scale = [...document.querySelectorAll('[data-ton]')];
  if (!area || !sun || !tons || !cta) return;

  const defaultNote = note ? note.textContent : '';

  const update = () => {
    const m2 = Number(area.value);
    const withSun = sun.getAttribute('aria-checked') === 'true';
    const effectiveArea = m2 * (withSun ? CALCULADORA.factorSol : 1);
    const pick = CALCULADORA.tabla.find((row) => effectiveArea <= row.max);

    // Barra del slider
    const fill = ((m2 - area.min) / (area.max - area.min)) * 100;
    area.style.setProperty('--fill', `${fill}%`);
    area.setAttribute('aria-valuetext', `${m2} metros cuadrados`);
    if (areaValue) areaValue.textContent = `${m2} m²`;

    const espacio = `un cuarto de ${m2} m²${withSun ? ' al que le pega el sol de la tarde' : ''}`;
    let message;

    if (pick) {
      tons.innerHTML = `${pick.toneladas}<small>ton</small>`;
      btu.textContent = `${formatNumber(pick.toneladas * CALCULADORA.btuPorTonelada)} BTU`;
      if (note) note.textContent = defaultNote;
      ctaText.textContent = `Cotizar minisplit de ${pick.toneladas} ton`;
      message = WHATSAPP.templates.minisplit(pick.toneladas, espacio);
    } else {
      const maxTons = CALCULADORA.tabla[CALCULADORA.tabla.length - 1].toneladas;
      tons.innerHTML = `${maxTons}+<small>ton</small>`;
      btu.textContent = `más de ${formatNumber(maxTons * CALCULADORA.btuPorTonelada)} BTU`;
      if (note) {
        note.textContent =
          'Para un espacio así conviene revisar en sitio: puede necesitar más de un equipo. Victor te dice qué conviene.';
      }
      ctaText.textContent = 'Pedir revisión del espacio';
      message = WHATSAPP.templates.espacioGrande(espacio);
    }

    scale.forEach((item) => {
      const value = item.dataset.ton;
      item.classList.toggle('is-active', pick ? value === String(pick.toneladas) : value === 'mas');
    });

    cta.href = waLink(message);
  };

  area.addEventListener('input', update);
  sun.addEventListener('click', () => {
    const checked = sun.getAttribute('aria-checked') === 'true';
    sun.setAttribute('aria-checked', String(!checked));
    update();
  });

  update();
}
