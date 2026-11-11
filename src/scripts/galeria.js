/**
 * Video de la galería de trabajos:
 * - Solo se reproduce cuando está en pantalla (ahorra batería y datos).
 * - Si el usuario pidió reducir movimiento, no se reproduce solo y muestra controles.
 */
export function initGaleria() {
  const videos = document.querySelectorAll('[data-autoplay-visible]');
  if (!videos.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    videos.forEach((video) => {
      video.pause();
      video.controls = true;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) target.play().catch(() => {});
        else target.pause();
      });
    },
    { threshold: 0.25 },
  );

  videos.forEach((video) => observer.observe(video));
}
