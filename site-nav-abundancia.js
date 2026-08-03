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
  const style = document.createElement('style');
  style.textContent = `
    .ka-site-nav{position:fixed;z-index:9999;display:flex;align-items:center;gap:8px;max-width:calc(100vw - 24px);padding:9px 14px;color:#fff;background:rgba(22,78,62,.96);border:1px solid rgba(200,169,107,.72);border-radius:999px;box-shadow:0 15px 38px rgba(38,31,29,.22),inset 0 1px rgba(255,255,255,.12);backdrop-filter:blur(14px);font:700 12px/1.1 Montserrat,system-ui,sans-serif;overflow-x:auto;white-space:nowrap;top:12px;left:50%;transform:translateX(-50%)}.ka-site-nav b{color:#e8c98e;margin:0 4px;font-family:"Cormorant Garamond",Georgia,serif;font-size:18px;letter-spacing:.04em}.ka-site-nav a{color:inherit;text-decoration:none;padding:7px 8px;border-radius:999px}.ka-site-nav a:hover,.ka-site-nav a:focus-visible{color:#fff;background:#a8263d;outline:none}.ka-site-footer{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-items:center;gap:32px;max-width:1120px;margin:72px auto 0;padding:44px clamp(24px,5vw,64px) 58px;color:#fff;text-align:center;background:linear-gradient(135deg,#164e3e,#10382d 55%,#261f1d);border:1px solid rgba(200,169,107,.56);border-radius:28px 28px 0 0;box-shadow:0 -10px 40px rgba(38,31,29,.22);font:500 14px/1.5 Montserrat,system-ui,sans-serif}.ka-site-footer::after{position:absolute;bottom:20px;left:50%;content:'© Kimberly Ali';color:rgba(255,255,255,.6);font-size:12px;transform:translateX(-50%)}.ka-footer-brand strong{display:block;margin-bottom:8px;color:#e8c98e;font-family:"Cormorant Garamond",Georgia,serif;font-size:28px;letter-spacing:.04em}.ka-footer-brand p{max-width:280px;margin:0;color:rgba(255,255,255,.76)}.ka-footer-column{display:grid;justify-items:center;align-content:start;gap:7px}.ka-footer-column b{margin-bottom:5px;color:#e8c98e;font-size:11px;letter-spacing:.12em;text-transform:uppercase}.ka-site-footer a{width:max-content;max-width:100%;color:#fff;text-decoration:none;transition:color .18s ease,transform .18s ease}.ka-site-footer a:hover,.ka-site-footer a:focus-visible{color:#e8c98e;transform:translateY(-2px);outline:none}@media(max-width:640px){.ka-site-nav{left:12px;right:12px;transform:none}.ka-site-nav b{display:none}.ka-site-footer{grid-template-columns:1fr;gap:24px;margin:52px 12px 0;padding:34px 28px 52px;border-radius:22px 22px 0 0}.ka-site-footer::after{left:50%;right:auto}}
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
  footer.innerHTML = `<div class="ka-footer-brand"><strong>Kimberly Ali</strong><p>Herramientas para transformar tu relación con el dinero y sostener tu expansión.</p></div><div class="ka-footer-column"><b>Explora</b>${render(links)}</div><div class="ka-footer-column"><b>Sígueme</b>${render(social)}</div>`;
  document.body.prepend(header);
  document.body.append(footer);
})();
