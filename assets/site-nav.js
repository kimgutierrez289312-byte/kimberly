(() => {
  const links = [
    ['Inicio', 'https://kimberlyali.es/'],
    ['Flujo de dinero', 'https://kimberlyali.es/flujo.html'],
    ['Abundancia', 'https://kimberlyali.es/abundance.html'],
    ['Código interior', 'https://kimberlyali.es/codigo.html'],
    ['Presentaciones', 'https://kimberlyali.es/blog/slideshows/']
  ];
  const social = [
    ['Instagram', 'https://www.instagram.com/kimberlyali/'],
    ['TikTok', 'https://www.tiktok.com/@kimberlyali'],
    ['YouTube', 'https://www.youtube.com/watch?v=-lOrt4ffTnk']
  ];
  const render = (items) => items.map(([label, href]) => `<a href="${href}">${label}</a>`).join('');
  const style = document.createElement('style');
  style.textContent = `
    .ka-site-nav,.ka-site-footer{position:fixed;z-index:9999;display:flex;align-items:center;gap:8px;max-width:calc(100vw - 24px);padding:8px 12px;color:#fff;background:rgba(18,12,25,.86);border:1px solid rgba(255,255,255,.19);border-radius:999px;box-shadow:0 12px 34px rgba(0,0,0,.22);backdrop-filter:blur(14px);font:700 12px/1.1 Inter,system-ui,sans-serif;overflow-x:auto;white-space:nowrap}.ka-site-nav{top:12px;left:50%;transform:translateX(-50%)}.ka-site-footer{right:12px;bottom:12px}.ka-site-nav b{color:#f2c97d;margin:0 4px}.ka-site-nav a,.ka-site-footer a{color:inherit;text-decoration:none;padding:6px 7px;border-radius:999px}.ka-site-nav a:hover,.ka-site-nav a:focus-visible,.ka-site-footer a:hover,.ka-site-footer a:focus-visible{color:#1c1020;background:#f2c97d;outline:none}@media(max-width:640px){.ka-site-nav{left:12px;right:12px;transform:none}.ka-site-nav b{display:none}.ka-site-footer{left:12px;right:12px;justify-content:center}}
  `;
  document.head.append(style);
  const header = document.createElement('nav');
  header.className = 'ka-site-nav';
  header.setAttribute('aria-label', 'Navegación principal');
  header.innerHTML = `<b>Kimberly Ali</b>${render(links)}`;
  const footer = document.createElement('nav');
  footer.className = 'ka-site-footer';
  footer.setAttribute('aria-label', 'Redes sociales');
  footer.innerHTML = render(social);
  document.body.prepend(header);
  document.body.append(footer);
})();
