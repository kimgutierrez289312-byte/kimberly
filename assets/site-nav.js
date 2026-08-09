(() => {
  const path = window.location.pathname;
  const isFlow = /\/flujo(?:\.html)?\/?$/.test(path);
  const isLibrary = path.includes('/blog/slideshows');
  const links = [
    ['Inicio', '/'],
    ['Flujo', '/flujo.html'],
    ['Abundancia', '/codigo.html'],
    ['Sabiduría', '/blog/slideshows/']
  ];
  const social = [
    ['Instagram', 'https://www.instagram.com/kimberlyali/', '◎'],
    ['TikTok', 'https://www.tiktok.com/@kimberlyali', '♪'],
    ['YouTube', 'https://www.youtube.com/watch?v=-lOrt4ffTnk', '▶']
  ];
  const render = (items, className = '') => items.map(([label, href, icon]) => `<a class="${className}" href="${href}">${icon ? `<span aria-hidden="true">${icon}</span>` : ''}${label}</a>`).join('');
  const style = document.createElement('style');
  style.textContent = `
    :root{--ka-ink:#160b06;--ka-espresso:#2a1209;--ka-tangerine:#ff6a27;--ka-peach:#ffb06e;--ka-cream:#fff8f2;--ka-line:rgba(255,106,39,.27)}
    .ka-site-nav{position:fixed;z-index:9999;top:14px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:5px;max-width:calc(100vw - 28px);padding:8px 12px;background:rgba(22,11,6,.94);border:1px solid var(--ka-line);border-radius:999px;box-shadow:0 14px 38px rgba(35,12,2,.25);backdrop-filter:blur(14px);font:700 12px/1 Inter,system-ui,sans-serif;white-space:nowrap}.ka-site-nav b{padding:0 7px;color:var(--ka-peach);letter-spacing:-.02em}.ka-site-nav a{padding:9px 9px;color:#fff7f1;text-decoration:none;border-radius:999px}.ka-site-nav a:hover,.ka-site-nav a:focus-visible{color:#fff;background:var(--ka-tangerine);outline:none}
    .ka-site-footer{position:relative;z-index:5;display:grid;grid-template-columns:1.2fr .9fr .9fr;gap:36px;align-items:start;max-width:1120px;margin:112px auto 0;padding:50px clamp(24px,5vw,66px) 64px;color:#fff7f1;background:linear-gradient(130deg,#160b06,#37170b 58%,#7e310d);border:1px solid var(--ka-line);border-radius:30px 30px 0 0;box-shadow:0 -14px 45px rgba(31,11,2,.2);font:500 14px/1.55 Inter,system-ui,sans-serif;text-align:left}.ka-site-footer::after{position:absolute;right:clamp(24px,5vw,66px);bottom:24px;content:'© 2026 Kimberly Ali. Todos los derechos reservados.';color:rgba(255,247,241,.58);font-size:11px}.ka-footer-brand strong{display:block;margin-bottom:8px;color:var(--ka-peach);font-size:25px;letter-spacing:-.05em}.ka-footer-brand p{max-width:310px;margin:0;color:rgba(255,247,241,.75)}.ka-footer-cta{display:inline-flex!important;align-items:center;gap:9px;margin-top:19px!important;padding:13px 16px!important;color:#fff!important;background:linear-gradient(135deg,#ff4d20,#ff8c32)!important;border-radius:10px;font-weight:800!important;box-shadow:0 12px 25px rgba(0,0,0,.18)}.ka-footer-column{display:grid;gap:9px}.ka-footer-column b{margin-bottom:3px;color:var(--ka-peach);font-size:11px;letter-spacing:.13em;text-transform:uppercase}.ka-site-footer a{width:max-content;max-width:100%;color:#fff7f1;text-decoration:none}.ka-site-footer a:hover,.ka-site-footer a:focus-visible{color:var(--ka-peach);outline:none}.ka-social-link{display:inline-flex;align-items:center;gap:8px}.ka-social-link span{display:inline-grid;place-items:center;width:18px;height:18px;color:var(--ka-peach);font-size:17px;font-weight:800}.ka-editorial-cta,.ka-purchase-steps{max-width:760px;margin:70px auto 0;padding:26px 30px;color:var(--ka-ink);text-align:center;background:linear-gradient(135deg,#fff5eb,#ffe0c5);border:1px solid var(--ka-line);border-radius:18px;font:600 16px/1.5 Inter,system-ui,sans-serif}.ka-editorial-cta p{margin:0 0 14px}.ka-editorial-cta a{display:inline-flex;padding:12px 17px;color:#fff;text-decoration:none;background:linear-gradient(135deg,#ff5422,#ff882f);border-radius:9px;font-weight:800}.ka-purchase-steps h2{margin:0 0 18px;font-size:clamp(24px,4vw,34px)}.ka-purchase-steps ol{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:0;margin:0;list-style:none}.ka-purchase-steps li{padding:14px;border-radius:11px;background:rgba(255,255,255,.54)}.ka-purchase-steps b{display:block;margin-bottom:4px;color:#b84212}@media(max-width:640px){.ka-site-nav{display:none}.ka-site-footer{grid-template-columns:1fr;gap:26px;margin:72px 12px 0;padding:38px 28px 67px;border-radius:23px 23px 0 0;text-align:center}.ka-footer-brand p{margin:auto}.ka-footer-column{justify-items:center}.ka-site-footer::after{right:20px;left:20px;bottom:24px;text-align:center}.ka-editorial-cta,.ka-purchase-steps{margin:48px 16px 0;padding:24px 20px}.ka-purchase-steps ol{grid-template-columns:1fr}}
    @media(prefers-reduced-motion:reduce){.ka-site-nav *, .ka-site-footer *, .ka-editorial-cta *{transition:none!important;animation:none!important}}
  `;
  document.head.append(style);
  if (isFlow || /\/(abundance|codigo)(?:\.html)?\/?$/.test(path)) {
    document.body.classList.add('ka-mindvalley-offer');
    const offerStyle = document.createElement('style');
    offerStyle.textContent = `
      body.ka-mindvalley-offer{background:#fff9f3!important;color:#22130b!important;font-family:Inter,system-ui,sans-serif!important}body.ka-mindvalley-offer .bg-canvas,body.ka-mindvalley-offer .orb,body.ka-mindvalley-offer .stars{display:none!important}body.ka-mindvalley-offer .page{width:min(1120px,calc(100% - 36px))!important;margin:auto!important;padding:110px 0 0!important;background:transparent!important}body.ka-mindvalley-offer .page :is(p,h1,h2,h3,h4,h5,h6,span,small,strong,li,.faq-question,.faq-answer,.real-sub,.instant-access-headline,.total-label,.total-amount,.today-price-small,.price-note,.badge-item){color:#28170f!important;text-shadow:none!important}body.ka-mindvalley-offer .sales-hero{display:block!important;margin:0 auto 88px!important;text-align:center!important}body.ka-mindvalley-offer .offer-header{max-width:850px!important;margin:0 auto 46px!important;text-align:center!important}body.ka-mindvalley-offer .offer-eyebrow,body.ka-mindvalley-offer .story-badge{display:inline-block!important;padding:8px 12px!important;color:#a94418!important;background:#ffe4cf!important;border-radius:999px!important;font-size:12px!important;font-weight:800!important;letter-spacing:.08em!important;text-transform:uppercase!important}body.ka-mindvalley-offer .main-title{margin:20px 0 12px!important;color:#21120b!important;font-family:Georgia,serif!important;font-size:clamp(54px,9vw,108px)!important;line-height:.9!important}body.ka-mindvalley-offer .sub-headline{color:#5e514a!important;font-size:clamp(21px,3vw,31px)!important;line-height:1.35!important}body.ka-mindvalley-offer .story-icons{display:grid!important;grid-template-columns:repeat(2,1fr)!important;gap:12px!important;margin-top:38px!important;text-align:left!important}body.ka-mindvalley-offer .story-item,body.ka-mindvalley-offer .benefit-item,body.ka-mindvalley-offer .review-card,body.ka-mindvalley-offer .ba-before,body.ka-mindvalley-offer .ba-after{background:#fff!important;border:1px solid #eaded3!important;box-shadow:none!important}body.ka-mindvalley-offer .cta-card{max-width:760px!important;margin:0 auto!important;padding:34px!important;color:#21120b!important;background:#fff!important;border:1px solid #eaded3!important;border-radius:18px!important;box-shadow:0 22px 48px rgba(76,38,16,.1)!important}body.ka-mindvalley-offer .benefits-grid,body.ka-mindvalley-offer .reviews-grid{gap:15px!important}body.ka-mindvalley-offer .reviews-section,body.ka-mindvalley-offer .real-world-section,body.ka-mindvalley-offer .about-kimberly,body.ka-mindvalley-offer .testimonial-video,body.ka-mindvalley-offer .faq-section{padding:76px 0!important;background:transparent!important}body.ka-mindvalley-offer .reviews-title,body.ka-mindvalley-offer .real-title,body.ka-mindvalley-offer .faq-title{color:#21120b!important;font-family:Georgia,serif!important;font-size:clamp(34px,5vw,62px)!important;line-height:1.04!important}body.ka-mindvalley-offer .about-inner{background:#21120b!important;border-radius:20px!important;padding:clamp(26px,5vw,60px)!important}body.ka-mindvalley-offer .about-inner :is(p,h2,h3,span,strong){color:#fff7ef!important}.ka-mindvalley-offer .about-inner .story-badge{color:#a94418!important}body.ka-mindvalley-offer .btn-primary{background:linear-gradient(135deg,#ff4f20,#ff913a)!important;border-radius:10px!important;box-shadow:0 16px 28px rgba(255,100,40,.22)!important}body.ka-mindvalley-offer .btn-primary :is(span,strong){color:#fff!important}@media(max-width:700px){body.ka-mindvalley-offer .story-icons{grid-template-columns:1fr!important}body.ka-mindvalley-offer .page{width:min(100% - 24px,1120px)!important;padding-top:58px!important}}
    `;
    offerStyle.textContent += `body.ka-mindvalley-offer .page *{color:#28170f!important;text-shadow:none!important}body.ka-mindvalley-offer .about-inner{background:#fff!important;border:1px solid #eaded3!important;box-shadow:0 22px 48px rgba(76,38,16,.1)!important}body.ka-mindvalley-offer .about-inner :is(p,h2,h3,span,strong){color:#28170f!important}.ka-mindvalley-offer .about-inner .story-badge{color:#a94418!important}body.ka-mindvalley-offer .btn-primary,body.ka-mindvalley-offer .btn-primary *{color:#fff!important}`;
    document.head.append(offerStyle);
  }
  if (!isFlow && !document.querySelector('.ka-site-nav')) {
    const header = document.createElement('nav');
    header.className = 'ka-site-nav';
    header.setAttribute('aria-label', 'Navegación principal');
    header.innerHTML = `<b>Kimberly Ali</b>${render(links)}`;
    document.body.prepend(header);
  }
  [...document.body.children].filter((node) => node.matches('footer:not(.ka-site-footer), .footer-note')).forEach((node) => node.remove());
  if (!document.querySelector('.ka-site-footer')) {
    const footer = document.createElement('footer');
    footer.className = 'ka-site-footer';
    footer.innerHTML = `<div class="ka-footer-brand"><strong>Kimberly Ali</strong><p>Herramientas para transformar tu relación con el dinero y sostener tu expansión.</p><a class="ka-footer-cta" href="/flujo.html">Activar mi flujo de dinero <span aria-hidden="true">→</span></a></div><div class="ka-footer-column"><b>Explora</b>${render(links)}</div><div class="ka-footer-column"><b>Conecta</b>${render(social, 'ka-social-link')}</div>`;
    document.body.append(footer);
  }
  if (isLibrary && !document.querySelector('.ka-editorial-cta')) {
    const cta = document.createElement('aside');
    cta.className = 'ka-editorial-cta';
    cta.setAttribute('aria-label', 'Explora Flujo de dinero');
    cta.innerHTML = `<p>¿Lista para transformar tu relación con el dinero?</p><a href="/flujo.html">Explorar Flujo de dinero →</a>`;
    document.querySelector('main, .wrap, .container, body > div:last-of-type')?.after(cta);
  }
})();
