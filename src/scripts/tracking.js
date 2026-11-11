import { TRACKING } from '../config.js';

function loadScript(src) {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

/** Google Analytics 4 y Google Ads comparten la misma etiqueta (gtag.js). */
function loadGoogleTag(ids) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments); // gtag necesita el objeto arguments tal cual
  };
  window.gtag('js', new Date());
  ids.forEach((id) => window.gtag('config', id));
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${ids[0]}`);
}

/** Código base oficial del Pixel de Meta, en versión legible. */
function loadMetaPixel(pixelId) {
  if (window.fbq) return;
  const fbq = function () {
    fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = fbq;
  loadScript('https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', pixelId);
  fbq('track', 'PageView');
}

/**
 * Cada clic a WhatsApp cuenta como lead.
 * GA4: evento "generate_lead" con lead_source = data-track del botón (hero, fallas, calculadora...).
 * Google Ads: conversión si hay googleAdsConversion. Meta: evento "Contact".
 */
function trackLead(source) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { method: 'whatsapp', lead_source: source });
    if (TRACKING.googleAdsConversion) {
      window.gtag('event', 'conversion', { send_to: TRACKING.googleAdsConversion });
    }
  }
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: source });
  }
}

export function initTracking() {
  const googleIds = [TRACKING.ga4Id, TRACKING.googleAdsId].filter(Boolean);
  if (googleIds.length) loadGoogleTag(googleIds);
  if (TRACKING.metaPixelId) loadMetaPixel(TRACKING.metaPixelId);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="wa.me"]');
    if (link) trackLead(link.dataset.track || 'otro');
  });
}
