*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --black: #0a0a0a;
  --dark: #111111;
  --card: #161616;
  --border: rgba(255,255,255,0.07);
  --muted: rgba(255,255,255,0.35);
  --white: #f5f3ef;
  --gold: #c9a96e;
  --gold-light: #e2c99a;
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Archivo', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  background: var(--black);
  color: var(--white);
  font-family: var(--font-body);
  font-weight: 300;
  letter-spacing: 0.01em;
  overflow-x: hidden;
  cursor: none;
}

/* ─── CURSOR ─── */
#cursor {
  position: fixed;
  width: 10px; height: 10px;
  background: var(--gold);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s, height 0.3s, background 0.3s, opacity 0.3s;
  mix-blend-mode: difference;
}
#cursor.expand {
  width: 44px; height: 44px;
  background: rgba(201,169,110,0.15);
  border: 1px solid var(--gold);
}
#cursor.play-cursor::after {
  content: '▶';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  color: var(--gold);
  mix-blend-mode: normal;
}

/* ─── NOISE ─── */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9000;
  opacity: 0.4;
}

/* ─── NAV ─── */
nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 28px 48px;
  display: flex; align-items: center; justify-content: space-between;
  background: linear-gradient(to bottom, rgba(10,10,10,0.95), transparent);
  transition: backdrop-filter 0.4s, background 0.4s;
}
nav.scrolled {
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}
.nav-logo {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--white);
  text-decoration: none;
}
.nav-logo span { color: var(--gold); }
.nav-links { display: flex; gap: 40px; list-style: none; }
.nav-links a {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.3s;
}
.nav-links a:hover { color: var(--white); }
.nav-cta {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid rgba(201,169,110,0.4);
  padding: 10px 22px;
  text-decoration: none;
  transition: all 0.3s;
}
.nav-cta:hover { background: var(--gold); color: var(--black); }
.hamburger {
  display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px;
}
.hamburger span { display: block; width: 24px; height: 1px; background: var(--white); transition: all 0.3s; }

/* ─── MOBILE MENU ─── */
.mobile-menu {
  display: none;
  position: fixed; inset: 0;
  background: rgba(10,10,10,0.97);
  backdrop-filter: blur(20px);
  z-index: 900;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--white);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.3s;
}
.mobile-menu a:hover { color: var(--gold); }
.mobile-close {
  position: absolute; top: 28px; right: 48px;
  font-size: 1.5rem; color: var(--muted);
  cursor: pointer; background: none; border: none;
  font-family: var(--font-body);
}

/* ─── HERO ─── */
#hero {
  min-height: 100vh;
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 0 48px 80px;
  position: relative; overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,169,110,0.06) 0%, transparent 60%),
    radial-gradient(ellipse 50% 80% at 20% 80%, rgba(201,169,110,0.04) 0%, transparent 50%),
    var(--black);
}
.hero-line {
  position: absolute; top: 0; left: 48px;
  width: 1px; height: 100%;
  background: linear-gradient(to bottom, transparent, rgba(201,169,110,0.2), transparent);
  opacity: 0.5;
}
.hero-eyebrow {
  font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 24px;
  opacity: 0; animation: fadeUp 1s 0.3s forwards;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 9vw, 9rem);
  font-weight: 300; line-height: 0.92;
  letter-spacing: -0.02em;
  margin-bottom: 40px; max-width: 900px;
  opacity: 0; animation: fadeUp 1s 0.5s forwards;
}
.hero-title em { font-style: italic; color: var(--gold); }
.hero-bottom {
  display: flex; align-items: flex-end;
  justify-content: space-between; gap: 40px;
  opacity: 0; animation: fadeUp 1s 0.7s forwards;
}
.hero-desc { max-width: 380px; font-size: 0.88rem; line-height: 1.8; color: rgba(255,255,255,0.55); }
.hero-stat { text-align: right; }
.hero-stat-number {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 300; color: var(--gold); line-height: 1;
}
.hero-stat-label {
  font-size: 0.68rem; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--muted); margin-top: 6px;
}
.scroll-indicator {
  position: absolute; bottom: 40px; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  opacity: 0; animation: fadeIn 1s 1.5s forwards;
}
.scroll-indicator span { font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--muted); }
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollPulse 2s infinite;
}

/* ─── ABOUT ─── */
#about {
  padding: 140px 48px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
  border-top: 1px solid var(--border);
}
.about-label { font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; }
.about-title { font-family: var(--font-display); font-size: clamp(2.2rem, 4vw, 3.8rem); font-weight: 300; line-height: 1.1; margin-bottom: 32px; }
.about-title em { font-style: italic; color: var(--gold); }
.about-text { font-size: 0.9rem; line-height: 1.9; color: rgba(255,255,255,0.55); margin-bottom: 20px; }
.about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); border: 1px solid var(--border); margin-top: 48px; }
.about-stat { background: var(--card); padding: 32px 28px; }
.about-stat-num { font-family: var(--font-display); font-size: 2.6rem; font-weight: 300; color: var(--gold); line-height: 1; margin-bottom: 8px; }
.about-stat-desc { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); line-height: 1.5; }
.about-visual { position: relative; }
.about-visual-box {
  width: 100%; aspect-ratio: 3/4;
  background: var(--card); border: 1px solid var(--border);
  position: relative; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.about-visual-box::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 30%, rgba(201,169,110,0.12), transparent 60%);
}
.about-logo-display {
  font-family: var(--font-display); font-size: 2.4rem;
  font-weight: 300; letter-spacing: 0.1em;
  text-align: center; position: relative; z-index: 1;
}
.about-logo-display span { color: var(--gold); }
.about-visual-tag {
  position: absolute; bottom: -1px; right: -1px;
  background: var(--gold); color: var(--black);
  font-size: 0.65rem; letter-spacing: 0.2em;
  text-transform: uppercase; padding: 10px 18px; font-weight: 500;
}

/* ─── SERVICES ─── */
#services { padding: 120px 48px; border-top: 1px solid var(--border); }
.section-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 72px; gap: 40px; }
.section-label { font-size: 0.68rem; letter-spacing: 0.25em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
.section-title { font-family: var(--font-display); font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 300; line-height: 1.1; }
.section-title em { font-style: italic; color: var(--gold); }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); }
.service-card {
  background: var(--card); padding: 48px 36px;
  transition: background 0.4s; position: relative; overflow: hidden;
}
.service-card::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0;
  height: 1px; background: linear-gradient(to right, transparent, var(--gold), transparent);
  transform: scaleX(0); transition: transform 0.4s;
}
.service-card:hover { background: #1a1a1a; }
.service-card:hover::before { transform: scaleX(1); }
.service-num { font-family: var(--font-display); font-size: 3.5rem; font-weight: 300; color: rgba(201,169,110,0.15); line-height: 1; margin-bottom: 24px; transition: color 0.4s; }
.service-card:hover .service-num { color: rgba(201,169,110,0.3); }
.service-title { font-family: var(--font-display); font-size: 1.5rem; font-weight: 400; margin-bottom: 16px; line-height: 1.2; }
.service-desc { font-size: 0.83rem; line-height: 1.8; color: var(--muted); }

/* ─── PORTFOLIO ─── */
#portfolio { padding: 120px 48px; border-top: 1px solid var(--border); }

.portfolio-category-label {
  display: flex; align-items: center; gap: 20px; margin-bottom: 32px;
}
.cat-line { flex: 1; height: 1px; background: var(--border); }
.cat-text { font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); white-space: nowrap; }

/* Reel Grid */
.reels-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.reels-grid.three-col { grid-template-columns: repeat(3, 1fr); }

/* Reel Card */
.reel-card {
  position: relative;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s;
  aspect-ratio: 9/16;
}
.reel-card:hover {
  border-color: rgba(201,169,110,0.35);
  transform: translateY(-3px);
}

/* Thumbnail */
.reel-thumb {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: opacity 0.4s;
  z-index: 1;
}

/* Video */
.reel-video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  z-index: 2;
  transition: opacity 0.4s;
}
.reel-card.playing .reel-video { opacity: 1; }
.reel-card.playing .reel-thumb { opacity: 0; }

/* Play button */
.reel-play-btn {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 52px; height: 52px;
  background: rgba(201,169,110,0.15);
  border: 1px solid rgba(201,169,110,0.5);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  z-index: 3;
  transition: opacity 0.3s, background 0.3s;
  pointer-events: none;
}
.reel-play-btn svg { margin-left: 4px; }
.reel-card.playing .reel-play-btn { opacity: 0; }

/* Gradient overlay */
.reel-gradient {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 55%;
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%);
  z-index: 4;
  pointer-events: none;
}

/* Meta */
.reel-meta {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 16px;
  z-index: 5;
  pointer-events: none;
}
.reel-tag {
  font-size: 0.58rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--gold);
  margin-bottom: 4px; display: block;
}
.reel-title {
  font-family: var(--font-display);
  font-size: 1rem; font-weight: 400;
  color: var(--white); line-height: 1.2;
}

/* Sound toggle */
.reel-sound {
  position: absolute; top: 12px; right: 12px;
  z-index: 6;
  width: 32px; height: 32px;
  background: rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  backdrop-filter: blur(4px);
}
.reel-card.playing .reel-sound { opacity: 1; }

/* Instagram fallback */
.reel-ig-fallback {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 16px; z-index: 3;
  background: var(--card);
  text-align: center; padding: 20px;
}
.reel-ig-fallback .ig-icon { opacity: 0.4; }
.reel-ig-fallback p { font-size: 0.72rem; color: var(--muted); line-height: 1.6; letter-spacing: 0.05em; }
.reel-ig-fallback a {
  font-size: 0.65rem; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--gold);
  text-decoration: none; border: 1px solid rgba(201,169,110,0.3);
  padding: 8px 16px; transition: all 0.3s;
}
.reel-ig-fallback a:hover { background: var(--gold); color: var(--black); }

/* Placeholder (para videos ainda não adicionados) */
.reel-placeholder {
  position: absolute; inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 12px;
  background: repeating-linear-gradient(
    45deg, var(--card), var(--card) 10px,
    rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px
  );
}
.reel-placeholder span { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.2); }

/* ─── PROCESS ─── */
#process { padding: 120px 48px; border-top: 1px solid var(--border); }
.process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; margin-top: 72px; border: 1px solid var(--border); }
.process-step { padding: 48px 32px; border-right: 1px solid var(--border); position: relative; }
.process-step:last-child { border-right: none; }
.process-step-num { font-family: var(--font-display); font-size: 4rem; font-weight: 300; color: rgba(201,169,110,0.1); line-height: 1; margin-bottom: 20px; }
.process-step-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 400; margin-bottom: 14px; }
.process-step-desc { font-size: 0.8rem; line-height: 1.8; color: var(--muted); }
.process-step-line { position: absolute; top: 48px; right: -1px; width: 1px; height: 40px; background: var(--gold); opacity: 0.3; }

/* ─── CONTACT ─── */
#contact {
  padding: 120px 48px;
  border-top: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: start;
}
.contact-title { font-family: var(--font-display); font-size: clamp(2.4rem, 5vw, 4.5rem); font-weight: 300; line-height: 1.05; margin-bottom: 28px; }
.contact-title em { font-style: italic; color: var(--gold); }
.contact-desc { font-size: 0.88rem; line-height: 1.9; color: var(--muted); margin-bottom: 40px; max-width: 420px; }
.contact-actions { display: flex; flex-direction: column; gap: 16px; }
.btn-primary {
  display: inline-flex; align-items: center; gap: 14px;
  background: var(--gold); color: var(--black);
  font-size: 0.72rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none; padding: 18px 36px; transition: all 0.3s; align-self: flex-start;
}
.btn-primary:hover { background: var(--gold-light); gap: 20px; }
.btn-secondary {
  display: inline-flex; align-items: center; gap: 14px;
  background: transparent; color: var(--white);
  font-size: 0.72rem; font-weight: 400; letter-spacing: 0.2em; text-transform: uppercase;
  text-decoration: none; padding: 18px 36px; border: 1px solid rgba(255,255,255,0.15);
  transition: all 0.3s; align-self: flex-start;
}
.btn-secondary:hover { border-color: var(--gold); color: var(--gold); gap: 20px; }

.contact-info-block { margin-top: 48px; padding-top: 48px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 28px; }
.contact-info-item {}
.contact-info-label { font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
.contact-info-name { font-family: var(--font-display); font-size: 1.15rem; color: var(--white); margin-bottom: 4px; }
.contact-info-sub { font-size: 0.8rem; color: var(--muted); }
.contact-info-link { font-size: 0.95rem; color: var(--white); text-decoration: none; transition: color 0.3s; display: block; }
.contact-info-link:hover { color: var(--gold); }
.contact-info-link.small { font-size: 0.85rem; }

/* Form */
.contact-form { background: var(--card); border: 1px solid var(--border); padding: 48px; }
.form-title { font-family: var(--font-display); font-size: 1.6rem; font-weight: 400; margin-bottom: 8px; }
.form-subtitle { font-size: 0.78rem; color: var(--muted); letter-spacing: 0.05em; margin-bottom: 36px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); margin-bottom: 8px; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%; background: rgba(255,255,255,0.04);
  border: 1px solid var(--border); color: var(--white);
  font-family: var(--font-body); font-size: 0.88rem;
  padding: 14px 16px; outline: none;
  transition: border-color 0.3s, background 0.3s;
  appearance: none;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--gold); background: rgba(201,169,110,0.04);
}
.form-group select option { background: var(--dark); }
.form-group textarea { min-height: 110px; resize: vertical; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.btn-submit {
  width: 100%; background: var(--gold); color: var(--black);
  font-family: var(--font-body); font-size: 0.72rem; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  padding: 18px; border: none; cursor: pointer;
  transition: background 0.3s, transform 0.2s; margin-top: 8px;
}
.btn-submit:hover { background: var(--gold-light); }
.btn-submit:active { transform: scale(0.99); }
.form-success { display: none; text-align: center; padding: 40px 20px; }
.form-success.show { display: block; }
.form-success-icon { font-size: 2rem; margin-bottom: 16px; }
.form-success h3 { font-family: var(--font-display); font-size: 1.8rem; font-weight: 300; margin-bottom: 10px; color: var(--gold); }
.form-success p { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }

/* ─── FOOTER ─── */
footer {
  padding: 60px 48px 40px;
  border-top: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; gap: 40px;
}
.footer-logo { font-family: var(--font-display); font-size: 1.3rem; font-weight: 300; letter-spacing: 0.05em; }
.footer-logo span { color: var(--gold); }
.footer-copy { font-size: 0.68rem; letter-spacing: 0.1em; color: var(--muted); text-align: center; text-transform: uppercase; }
.footer-social { display: flex; gap: 24px; justify-content: flex-end; }
.footer-social a { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.3s; }
.footer-social a:hover { color: var(--gold); }

/* ─── FADE IN ─── */
.fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* ─── KEYFRAMES ─── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 0.6; }
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; } 50% { opacity: 1; }
}

/* ─── RESPONSIVE ─── */
@media (max-width: 1200px) {
  .reels-grid { grid-template-columns: repeat(3, 1fr); }
  .reels-grid.three-col { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 1024px) {
  #about { grid-template-columns: 1fr; gap: 60px; }
  .about-visual { max-width: 400px; }
  .services-grid { grid-template-columns: 1fr 1fr; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .process-step { border-bottom: 1px solid var(--border); }
  .process-step:nth-child(2n) { border-right: none; }
  #contact { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  nav { padding: 22px 24px; }
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  #hero { padding: 0 24px 80px; }
  .hero-bottom { flex-direction: column; align-items: flex-start; gap: 24px; }
  .hero-stat { text-align: left; }
  #about, #services, #portfolio, #process, #contact { padding: 80px 24px; }
  .section-header { flex-direction: column; align-items: flex-start; }
  .services-grid { grid-template-columns: 1fr; }
  .reels-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
  .reels-grid.three-col { grid-template-columns: repeat(2, 1fr); }
  .process-steps { grid-template-columns: 1fr; }
  .process-step { border-right: none; }
  footer { grid-template-columns: 1fr; text-align: center; gap: 20px; }
  .footer-social { justify-content: center; }
  .contact-form { padding: 32px 24px; }
  .form-row { grid-template-columns: 1fr; }
  .mobile-close { right: 24px; }
}
@media (max-width: 480px) {
  .reels-grid { grid-template-columns: 1fr 1fr; gap: 6px; }
}
