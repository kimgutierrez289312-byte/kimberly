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
  footer.innerHTML = `<strong>Kimberly Ali</strong><p>Herramientas para transformar tu relación con el dinero y sostener tu expansión.</p><a class="ka-footer-cta" href="${local('flujo.html')}">Activar mi flujo de dinero <span aria-hidden="true">→</span></a><nav class="ka-footer-links" aria-label="Navegación del footer">${navigation()}</nav><div class="ka-footer-social">${social.map(([name,url]) => `<a href="${url}"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>${name}</a>`).join('')}</div><p class="ka-copyright">© ${new Date().getFullYear()} Kimberly Ali. Todos los derechos reservados.</p>`;
  document.body.append(footer);
})();
