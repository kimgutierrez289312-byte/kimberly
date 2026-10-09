(() => {
  if (document.querySelector('.ka-site-footer')) return;
  const root = new URL('../', document.currentScript.src);
  const local = (path) => new URL(path, root).href;
  const links = [['Inicio', 'index.html'], ['Flujo', 'flujo.html'], ['Sabiduría', 'blog/slideshows/index.html']];
  const icons = {
    Instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18" cy="6" r="1"/>',
    TikTok: '<path d="M14 2h3c.4 2.5 1.8 4 4 4.3v3a8.1 8.1 0 0 1-4-1.2v8.4a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z"/>',
    YouTube: '<rect x="2" y="4" width="20" height="16" rx="5"/><path d="m10 8 6 4-6 4z" fill="#21120b"/>'
  };
  const social = [
    ['Instagram', 'https://www.instagram.com/kimberlyali/'],
    ['TikTok', 'https://www.tiktok.com/@kimberlyali'],
    ['YouTube', 'https://www.youtube.com/watch?v=-lOrt4ffTnk']
  ];
  const navigation = () => links.map(([label,path]) => `<a href="${local(path)}">${label}</a>`).join('');
  const checkout = 'https://pay.hotmart.com/N105653151G?checkoutMode=10';
  const orderStyles = document.createElement('style');
  orderStyles.textContent = '.ka-order-block{text-align:center;padding:32px 20px;margin:0 auto;max-width:900px}.ka-order-button{display:inline-flex;align-items:center;justify-content:center;gap:12px;min-height:64px;padding:20px 34px;border-radius:999px;background:linear-gradient(100deg,#ae8c35,#dfcb7e);color:#211a16!important;font:900 clamp(19px,2vw,25px)/1.2 "DM Sans",sans-serif;text-decoration:none;box-shadow:0 8px 24px #ae8c3526}.ka-order-button:hover{filter:brightness(1.08)}.ka-order-button:focus-visible{outline:3px solid #ae8c35;outline-offset:5px}.ka-order-block p{font:500 14px/1.5 "DM Sans",sans-serif;margin:12px 0 0;color:inherit}@media(max-width:600px){.ka-order-button{width:100%;box-sizing:border-box;padding:20px}.ka-order-block{padding:26px 20px}}';
  document.head.append(orderStyles);
  const ctaStyles = document.createElement('style');
  const ctaSelector = '.button,.primary-button,.btn-primary,.btn-gold,.hero-action,.nav-cta,.btn,.ka-order-button,.ka-editorial-cta a';
  const effectsSelector = `${ctaSelector},.ka-site-nav a:nth-child(3)`;
  const states = (selector, suffix) => selector.split(',').map(s => s + suffix).join(',');
  ctaStyles.textContent = `
    ${effectsSelector}{position:relative;isolation:isolate;overflow:hidden;background:linear-gradient(110deg,#e95108,#ff8518)!important;color:#fff!important;font-weight:900!important;text-transform:uppercase;letter-spacing:.025em;border-color:#ef6b10!important;animation:ka-cta-glow 2.8s ease-in-out infinite!important}
    ${states(effectsSelector,'::before')}{content:'';position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(110deg,transparent 30%,#ffffff66 48%,transparent 65%),radial-gradient(circle at 15% 25%,#fff 0 1px,transparent 3px),radial-gradient(circle at 67% 70%,#fff 0 1px,transparent 3px),radial-gradient(circle at 85% 20%,#fff 0 1px,transparent 3px);background-size:200% 100%,100% 100%,100% 100%,100% 100%;animation:ka-cta-glitter 3.6s ease-in-out infinite!important}
    ${states(ctaSelector,' span')}{color:#fff!important}
    ${states(effectsSelector,':focus-visible')}{outline:3px solid #a84308!important;outline-offset:5px}
    @keyframes ka-cta-glow{0%,100%{box-shadow:0 8px 24px #ef6b1038,0 0 0 0 #ff9c3840}50%{box-shadow:0 12px 32px #ef6b1060,0 0 0 7px #ff9c3800}}
    @keyframes ka-cta-glitter{0%,15%{background-position:180% 0,0 0,0 0,0 0;opacity:.3}55%{opacity:.8}85%,100%{background-position:-80% 0,0 0,0 0,0 0;opacity:.3}}
    @media(prefers-reduced-motion:reduce){${effectsSelector},${states(effectsSelector,'::before')}{animation:none!important} ${states(effectsSelector,'::before')}{content:none} ${effectsSelector}{box-shadow:0 8px 24px #ef6b1038!important}}
  `;
  document.head.append(ctaStyles);
  const navStyles = document.createElement('style');
  navStyles.textContent = '.ka-site-nav{background:#fff!important;border-color:#e8ddbd!important}.ka-site-nav .ka-brand{color:#b69a4c!important}.ka-site-nav a{font-weight:900!important}.ka-site-nav a:last-child{background:transparent!important;color:#211a16!important;box-shadow:none!important}.ka-site-nav a:nth-child(3){padding:13px 26px;border-radius:999px;color:#fff!important}.ka-site-nav a:focus-visible{outline:2px solid #b69a4c;outline-offset:4px}';
  document.head.append(navStyles);
  const flareStyles = document.createElement('style');
  flareStyles.textContent = 'body.ka-page{--ka-cream:#fff8ee;--ka-line:#eed4b4;--ka-gradient:linear-gradient(110deg,#d94b08,#d96b0b);background:#fff8ee!important}.ka-page main>section:not(.hero):not(.final-cta){background:linear-gradient(135deg,#fffaf3,#ffecd5)!important;color:#2b1c12}.ka-page .band,.ka-page .science-section,.ka-page .transform-section,.ka-page .steps-section{background:linear-gradient(135deg,#fffaf3,#ffecd5)!important}.ka-flujo .hero,.ka-flujo .final-cta{background:radial-gradient(ellipse at top,#793707,#2b180e 75%)!important}.ka-flujo .product-showcase{background:radial-gradient(ellipse at 50% 40%,#a97523,#35200f 70%)!important;border-color:#c38339!important}.ka-flujo .offer-meta-row{background:#48260f!important}.ka-page .eyebrow{color:#a34c0c}.ka-flujo .value-box{background:#fff1d9!important;border-color:#c47713!important;color:#713b0b!important}';
  document.head.append(flareStyles);
  const orderBlock = () => {
    const block = document.createElement('section');
    block.className = 'ka-order-block';
    block.setAttribute('aria-label', 'Comprar Flujo de Dinero');
    block.innerHTML = `<a class="ka-order-button" href="${checkout}">¡Ordena Ahora! <span aria-hidden="true">»</span></a><p>Flujo de Dinero · Todo el paquete por US$7</p>`;
    return block;
  };
  // Flujo already contains repeated checkout buttons and a timed reveal.
  // Preserve presentation controls by placing their purchase CTA after the content.
  if (!document.body.matches('.ka-flujo')) {
    const hero = document.querySelector('main .hero, main .home-hero, .hero');
    if (hero && !document.body.matches('.ka-presentation') && !document.querySelector('.home-offer')) hero.after(orderBlock());
    if (!document.body.matches('.ka-index')) document.body.append(orderBlock());
  }
  if (!document.body.hasAttribute('data-no-nav') && !document.querySelector('.ka-site-nav')) {
    const nav = document.createElement('nav');
    nav.className = 'ka-site-nav';
    nav.setAttribute('aria-label','Navegación principal');
    nav.innerHTML = `<a class="ka-brand" href="${local('index.html')}">Kimberly Ali</a>${navigation()}`;
    document.body.prepend(nav);
  }
  document.querySelectorAll('body > footer, .footer-note').forEach(node => node.remove());
  if (document.body.matches('.ka-library,.ka-presentation')) {
    const aside = document.createElement('aside');
    aside.className = 'ka-editorial-cta';
    aside.innerHTML = `<p>¿Lista para transformar tu relación con el dinero?</p><a href="${local('flujo.html')}">Explorar Flujo de dinero →</a>`;
    document.body.append(aside);
  }
  const footer = document.createElement('footer');
  footer.className = 'ka-site-footer';
  footer.innerHTML = `<strong>Kimberly Ali</strong><p>Herramientas para transformar tu relación con el dinero y sostener tu expansión.</p><nav class="ka-footer-links" aria-label="Navegación del footer">${navigation()}</nav><div class="ka-footer-social">${social.map(([name,url]) => `<a href="${url}"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>${name}</a>`).join('')}</div><p class="ka-copyright">© ${new Date().getFullYear()} Kimberly Ali. Todos los derechos reservados.</p>`;
  // Flujo already ends with its purchase CTA; don't repeat a self-link promo.
  if (document.body.matches('.ka-flujo') && document.querySelector('.final-cta')) {
    footer.querySelector('p:not(.ka-copyright)')?.remove();
  }
  document.body.append(footer);
})();
