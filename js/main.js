// ─── CURSOR ───────────────────────────────────────────────
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});
document.querySelectorAll('a, button, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});
document.querySelectorAll('.reel-card').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('expand'); cursor.classList.add('play-cursor'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('expand'); cursor.classList.remove('play-cursor'); });
});

// ─── NAV SCROLL ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ─── MOBILE MENU ─────────────────────────────────────────
function openMobileMenu() {
  document.getElementById('mobileMenu').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── FADE IN ON SCROLL ───────────────────────────────────
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ─── REEL AUTOPLAY ENGINE ────────────────────────────────
let currentlyPlaying = null;
const isMobile = () => window.matchMedia('(pointer: coarse)').matches;

function playReel(card) {
  const video = card.querySelector('.reel-video');
  if (!video) return;

  // pause whatever is playing
  if (currentlyPlaying && currentlyPlaying !== card) {
    pauseReel(currentlyPlaying);
  }

  video.muted = true; // autoplay requires muted
  video.play().then(() => {
    card.classList.add('playing');
    currentlyPlaying = card;
  }).catch(() => {});
}

function pauseReel(card) {
  const video = card.querySelector('.reel-video');
  if (!video) return;
  video.pause();
  video.currentTime = 0;
  card.classList.remove('playing');
  if (currentlyPlaying === card) currentlyPlaying = null;
}

// ── Desktop: hover ────────────────────────────────────────
document.querySelectorAll('.reel-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (!isMobile()) playReel(card);
  });
  card.addEventListener('mouseleave', () => {
    if (!isMobile()) pauseReel(card);
  });

  // click to toggle play/pause (both mobile and desktop)
  card.addEventListener('click', (e) => {
    if (e.target.closest('.reel-sound')) return; // handled separately
    if (card.classList.contains('playing')) {
      pauseReel(card);
    } else {
      playReel(card);
    }
  });

  // sound toggle button
  const soundBtn = card.querySelector('.reel-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const video = card.querySelector('.reel-video');
      if (!video) return;
      video.muted = !video.muted;
      soundBtn.innerHTML = video.muted ? iconMuted() : iconSound();
    });
  }
});

// ── Mobile: IntersectionObserver autoplay on scroll ───────
if (isMobile()) {
  const reelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const card = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        playReel(card);
      } else {
        pauseReel(card);
      }
    });
  }, { threshold: [0, 0.6] });

  document.querySelectorAll('.reel-card').forEach(card => {
    reelObserver.observe(card);
  });
}

// ─── SOUND ICONS ─────────────────────────────────────────
function iconMuted() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
  </svg>`;
}
function iconSound() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>`;
}

// ─── FORM SUBMIT ─────────────────────────────────────────
function submitForm() {
  const fname    = document.getElementById('fname').value.trim();
  const fphone   = document.getElementById('fphone').value.trim();
  const ftype    = document.getElementById('ftype').value;
  const fcompany = document.getElementById('fcompany').value.trim();
  const fmessage = document.getElementById('fmessage').value.trim();

  if (!fname || !fphone || !ftype) {
    alert('Por favor, preencha os campos obrigatórios: Nome, WhatsApp e Tipo de projeto.');
    return;
  }

  const msg = encodeURIComponent(
    `Olá Vinícius! Vim pelo site da Demétrio Films.\n\n` +
    `Nome: ${fname}\n` +
    `Telefone: ${fphone}\n` +
    `Projeto: ${ftype}\n` +
    (fcompany ? `Empresa: ${fcompany}\n` : '') +
    (fmessage ? `\nMensagem: ${fmessage}` : '')
  );

  window.open(`https://wa.me/5547996101762?text=${msg}`, '_blank');
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').classList.add('show');
}
