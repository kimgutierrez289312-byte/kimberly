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
  ctaStyles.textContent = `${ctaSelector}{background:linear-gradient(110deg,#c51629,#a90920)!important;color:#fff!important;font-weight:900!important;border-color:#b81025!important;box-shadow:0 10px 26px #bd102b35!important}${ctaSelector.split(',').map(s=>s+' span').join(',')}{color:#fff!important}${ctaSelector.split(',').map(s=>s+':focus-visible').join(',')}{outline:3px solid #c51629!important;outline-offset:5px}`;
  document.head.append(ctaStyles);
  const navStyles = document.createElement('style');
  navStyles.textContent = '.ka-site-nav{background:#fff!important;border-color:#e8ddbd!important}.ka-site-nav .ka-brand{color:#b69a4c!important}.ka-site-nav a{font-weight:900!important}.ka-site-nav a:last-child{background:transparent!important;color:#211a16!important;box-shadow:none!important}.ka-site-nav a:nth-child(3){padding:13px 26px;border-radius:999px;background:linear-gradient(110deg,#c51629,#a90920)!important;color:#fff!important}.ka-site-nav a:focus-visible{outline:2px solid #b69a4c;outline-offset:4px}';
  document.head.append(navStyles);
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
    if (hero && !document.body.matches('.ka-presentation')) hero.after(orderBlock());
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
