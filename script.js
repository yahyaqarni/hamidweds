'use strict';

// The invitation and all essential links work without JavaScript.
(() => {
  const start = new Date('2026-11-09T19:00:00+05:00').getTime();
  const end = new Date('2026-11-09T22:00:00+05:00').getTime();
  const countdown = document.querySelector('[data-countdown]');
  const label = document.querySelector('[data-countdown-label]');
  const values = document.querySelector('.countdown-values');
  let timer;

  function updateCountdown() {
    const now = Date.now();
    countdown.hidden = false;
    if (now >= start) {
      values.hidden = true;
      label.textContent = now < end ? 'The celebration is here. We look forward to seeing you!' : 'Forever grateful for your love, presence, and duas.';
      if (now >= end && timer) window.clearInterval(timer);
      return;
    }
    const seconds = Math.floor((start - now) / 1000);
    const remaining = {
      days: Math.floor(seconds / 86400),
      hours: Math.floor(seconds % 86400 / 3600),
      minutes: Math.floor(seconds % 3600 / 60),
      seconds: seconds % 60
    };
    for (const [unit, value] of Object.entries(remaining)) {
      document.querySelector(`[data-${unit}]`).textContent = String(value).padStart(2, '0');
    }
  }
  updateCountdown();
  if (Date.now() < end) timer = window.setInterval(updateCountdown, 1000);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) window.clearInterval(timer);
    else {
      updateCountdown();
      if (Date.now() < end) timer = window.setInterval(updateCountdown, 1000);
    }
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('ready');
      observer.observe(element);
    });
  }

  // A brief petal flourish celebrates entering the invitation. No perpetual loop.
  const celebrate = document.querySelector('[data-celebrate]');
  const petalLayer = document.querySelector('[data-petals]');
  let celebrating = false;
  celebrate.addEventListener('click', () => {
    if (reducedMotion.matches || celebrating || !Element.prototype.animate) return;
    celebrating = true;
    const palette = ['#91b9ef', '#dba8bf', '#c3d9fa', '#e3c58f'];
    const animations = [];
    for (let index = 0; index < 24; index++) {
      const petal = document.createElement('i');
      petal.style.left = `${(index * 37 + 11) % 100}%`;
      petal.style.backgroundColor = palette[index % palette.length];
      petalLayer.appendChild(petal);
      const drift = (index % 2 ? 1 : -1) * (35 + index * 3);
      const animation = petal.animate([
        { transform: `translate3d(0, -30px, 0) rotate(${index * 17}deg)`, opacity: 0 },
        { opacity: 0.85, offset: 0.12 },
        { transform: `translate3d(${drift}px, ${window.innerHeight + 30}px, 0) rotate(${index * 17 + 240}deg)`, opacity: 0 }
      ], { duration: 2600 + index % 5 * 180, delay: index * 32, easing: 'cubic-bezier(.25,.4,.7,1)', fill: 'both' });
      animations.push(animation);
      animation.finished.then(() => petal.remove()).catch(() => petal.remove());
    }
    Promise.allSettled(animations.map(animation => animation.finished)).then(() => { celebrating = false; });
    const stopForMotionPreference = () => {
      if (reducedMotion.matches) animations.forEach(animation => animation.cancel());
    };
    reducedMotion.addEventListener('change', stopForMotionPreference);
    Promise.allSettled(animations.map(animation => animation.finished)).then(() => {
      reducedMotion.removeEventListener('change', stopForMotionPreference);
    });
  });
})();
