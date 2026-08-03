(() => {
  const links = [
    ['Inicio', 'https://kimberlyali.es/'],
    ['Flujo', 'https://kimberlyali.es/flujo.html'],
    ['Abundancia consciente', 'https://kimberlyali.es/codigo'],
    ['Sabiduría dorada', 'https://kimberlyali.es/blog/slideshows/']
  ];
  const social = [
    ['Instagram', 'https://www.instagram.com/kimberlyali/'],
    ['TikTok', 'https://www.tiktok.com/@kimberlyali'],
    ['YouTube', 'https://www.youtube.com/watch?v=-lOrt4ffTnk']
  ];
  const render = (items) => items.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
  const socialIcons = {
    Instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.4" cy="6.7" r="1"></circle></svg>',
    TikTok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4v10.1a4.1 4.1 0 1 1-3.2-4V7.3A7.1 7.1 0 1 0 17 14.1V9.4c1 .8 2.2 1.3 3.6 1.3V7.6C17.3 7.6 14.8 5.5 14 4Z"></path></svg>',
    YouTube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5V8.5l6 3.5-6 3.5Z"></path></svg>'
  };
  const renderSocial = () => social.map(([label, href]) => `<a class="ka-social-link" href="${href}" aria-label="Kimberly Ali en ${label}">${socialIcons[label]}<span>${label}</span></a>`).join('');
  const style = document.createElement('style');
  style.textContent = `
    .ka-site-nav{position:fixed;z-index:9999;display:flex;align-items:center;gap:8px;max-width:calc(100vw - 24px);padding:9px 14px;color:#fff;background:rgba(22,78,62,.96);border:1px solid rgba(200,169,107,.72);border-radius:999px;box-shadow:0 15px 38px rgba(38,31,29,.22),inset 0 1px rgba(255,255,255,.12);backdrop-filter:blur(14px);font:700 12px/1.1 Montserrat,system-ui,sans-serif;overflow-x:auto;white-space:nowrap;top:12px;left:50%;transform:translateX(-50%)}.ka-site-nav b{color:#e8c98e;margin:0 4px;font-family:"Cormorant Garamond",Georgia,serif;font-size:18px;letter-spacing:.04em}.ka-site-nav a{color:inherit;text-decoration:none;padding:7px 8px;border-radius:999px}.ka-site-nav a:hover,.ka-site-nav a:focus-visible{color:#fff;background:#a8263d;outline:none}.ka-site-footer{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-items:center;gap:32px;max-width:1120px;margin:132px auto 0;padding:48px clamp(24px,5vw,64px) 68px;color:#fff;text-align:center;background:linear-gradient(135deg,#164e3e,#10382d 55%,#261f1d);border:1px solid rgba(200,169,107,.56);border-radius:28px 28px 0 0;box-shadow:0 -10px 40px rgba(38,31,29,.22);font:500 14px/1.5 Montserrat,system-ui,sans-serif}.ka-site-footer::after{position:absolute;bottom:22px;left:50%;content:'© 2026 Kimberly Ali. Todos los derechos reservados.';color:rgba(255,255,255,.62);font-size:12px;transform:translateX(-50%);white-space:nowrap}.ka-footer-brand strong{display:block;margin-bottom:8px;color:#e8c98e;font-family:"Cormorant Garamond",Georgia,serif;font-size:28px;letter-spacing:.04em}.ka-footer-brand p{max-width:280px;margin:0;color:rgba(255,255,255,.76)}.ka-footer-column{display:grid;justify-items:center;align-content:start;gap:7px}.ka-footer-column b{margin-bottom:5px;color:#e8c98e;font-size:11px;letter-spacing:.12em;text-transform:uppercase}.ka-site-footer a{width:max-content;max-width:100%;color:#fff;text-decoration:none;transition:color .18s ease,transform .18s ease}.ka-site-footer a:hover,.ka-site-footer a:focus-visible{color:#e8c98e;transform:translateY(-2px);outline:none}.ka-social-link{display:inline-flex;align-items:center;gap:8px}.ka-social-link svg{width:17px;height:17px;fill:currentColor;stroke:currentColor;stroke-width:1.8}.ka-social-link svg rect,.ka-social-link svg circle{fill:none}.ka-social-link svg path{stroke:none}@media(max-width:640px){.ka-site-nav{left:12px;right:12px;transform:none}.ka-site-nav b{display:none}.ka-site-footer{grid-template-columns:1fr;gap:24px;margin:88px 12px 0;padding:34px 28px 58px;border-radius:22px 22px 0 0}.ka-site-footer::after{left:50%;right:auto;font-size:11px;white-space:normal;width:calc(100% - 32px)}}
  `;
  document.head.append(style);
  const header = document.createElement('nav');
  header.className = 'ka-site-nav';
  header.setAttribute('aria-label', 'Navegación principal');
  header.innerHTML = `<b>Kimberly Ali</b>${render(links)}`;
  document.querySelectorAll('footer').forEach((existingFooter) => {
    if (!existingFooter.querySelector('button') && existingFooter.querySelector('a')) existingFooter.remove();
  });
  const footer = document.createElement('footer');
  footer.className = 'ka-site-footer';
  footer.innerHTML = `<div class="ka-footer-brand"><strong>Kimberly Ali</strong><p>Herramientas para transformar tu relación con el dinero y sostener tu expansión.</p></div><div class="ka-footer-column"><b>Explora</b>${render(links)}</div><div class="ka-footer-column"><b>Sígueme</b>${renderSocial()}</div>`;
  document.body.prepend(header);
  document.body.append(footer);
})();
