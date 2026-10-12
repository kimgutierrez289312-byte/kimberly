/* Shared Meta action tracking. No form values, query strings or personal data. */
(() => {
  'use strict';
  if (window.kaPixelStatus) return;
  const status = window.kaPixelStatus = {
    pixelId: '2156349778651668', version: '20261012', eventCounts: {}, videoPlayersReady: 0
  };
  const pagePath = location.pathname;
  const once = new Set();
  const send = (name, data = {}, standard = false, key) => {
    if (typeof window.fbq !== 'function' || (key && once.has(key))) return;
    if (key) once.add(key);
    try {
      window.fbq(standard ? 'track' : 'trackCustom', name, { page_path: pagePath, ...data });
      status.eventCounts[name] = (status.eventCounts[name] || 0) + 1;
    } catch (_) { /* Analytics must never interrupt an action. */ }
  };
  const placement = el => el.closest('.ka-site-nav') ? 'header'
    : el.closest('.ka-site-footer') ? 'footer'
    : el.closest('.hero,.home-hero') ? 'hero'
    : el.closest('.home-offer,.offer-section,.pricing-section') ? 'offer' : 'content';
  const ctaSelector = '.button,.primary-button,.btn-primary,.btn-gold,.hero-action,.nav-cta,.ka-order-button,.ka-editorial-cta a,.sb-btn';

  // Delegation also covers links inserted by the shared navigation/footer.
  document.addEventListener('click', event => {
    const control = event.target.closest?.('a,button');
    if (!control || control.disabled) return;
    if (control.closest('.slide-controls')) {
      send('PresentationNavigate', {
        direction: control.id === 'prev' ? 'previous' : 'next',
        from_slide_number: [...document.querySelectorAll('.slide')].findIndex(s => s.classList.contains('active')) + 1
      });
      return;
    }
    const href = control.getAttribute('href');
    if (!href) {
      if (control.matches(ctaSelector)) send('CTAClick', { placement: placement(control) });
      return;
    }
    let url;
    try { url = new URL(href, location.href); } catch (_) { return; }
    if (!/^https?:$/.test(url.protocol)) return;
    const data = { placement: placement(control), destination_path: url.pathname };
    if (url.hostname === 'pay.hotmart.com') {
      const productId = url.pathname.split('/').filter(Boolean)[0];
      send('CheckoutClick', { ...data, product_id: productId });
      const product = { content_ids: [productId], content_type: 'product', num_items: 1 };
      if (productId === 'N105653151G') Object.assign(product, { value: 7, currency: 'USD' });
      send('InitiateCheckout', product, true);
    } else if (/^(www\.)?(instagram\.com|tiktok\.com|youtube\.com)$/.test(url.hostname) || url.hostname === 'youtu.be') {
      send('SocialClick', { placement: data.placement, network: url.hostname.replace(/^www\./, '').split('.')[0] });
    } else if (url.origin === location.origin) {
      if (/\/blog\/slideshows\/(index\.html)?$/.test(url.pathname)) send('LibraryOpen', data);
      else if (/\/blog\/slideshows\/.+\.html$/.test(url.pathname)) send('PresentationOpen', data);
      else if (control.matches(ctaSelector)) send('CTAClick', data);
      else if (control.closest('.ka-site-nav,.ka-footer-links')) send('NavigationClick', data);
    }
  }, true);

  document.addEventListener('toggle', event => {
    if (event.target.matches?.('details') && event.target.open) {
      send('FAQOpen', { question_number: [...document.querySelectorAll('details')].indexOf(event.target) + 1 });
    }
  }, true);

  const scrollMilestones = [25, 50, 75, 90];
  let scrollPending = false;
  window.addEventListener('scroll', () => {
    if (scrollPending) return;
    scrollPending = true;
    requestAnimationFrame(() => {
      scrollPending = false;
      // Don't record completion while Flujo's timed content is still hidden.
      if (document.documentElement.classList.contains('flujo-waiting')) return;
      const length = document.documentElement.scrollHeight - innerHeight;
      if (length <= 0) return;
      const percent = scrollY / length * 100;
      scrollMilestones.forEach(mark => {
        if (percent >= mark) send('ScrollDepth', { percent: mark }, false, `scroll-${mark}`);
      });
    });
  }, { passive: true });

  const videoTracker = videoId => {
    let started = false;
    const progress = (current, duration) => {
      if (!started || !duration || duration <= 0) return;
      [25, 50, 75, 95].forEach(percent => {
        if (current / duration * 100 >= percent) {
          send('VideoProgress', { video_id: videoId, percent }, false, `${videoId}-${percent}`);
        }
      });
    };
    return {
      play() {
        const resumed = started;
        started = true;
        send(resumed ? 'VideoResume' : 'VideoPlay', { video_id: videoId });
      },
      pause() { if (started) send('VideoPause', { video_id: videoId }); },
      complete() { if (started) send('VideoComplete', { video_id: videoId }, false, `${videoId}-complete`); },
      progress
    };
  };

  const ready = () => {
    if (document.body.matches('.ka-flujo,.ka-abundance,.ka-codigo')) {
      const product = document.body.matches('.ka-flujo') ? 'flujo-de-dinero'
        : document.body.matches('.ka-abundance') ? 'abundancia-consciente' : 'codigo';
      send('ViewContent', { content_ids: [product], content_type: 'product' }, true, 'view-content');
    }
    document.querySelectorAll('video').forEach((video, index) => {
      const tracker = videoTracker(`native-${index + 1}`);
      video.addEventListener('play', () => tracker.play());
      video.addEventListener('pause', () => { if (!video.ended) tracker.pause(); });
      video.addEventListener('timeupdate', () => tracker.progress(video.currentTime, video.duration));
      video.addEventListener('ended', () => tracker.complete());
    });
    const frames = [...document.querySelectorAll('iframe[src]')].filter(frame => {
      try {
        const url = new URL(frame.src);
        return /^(www\.)?youtube(-nocookie)?\.com$/.test(url.hostname) && url.pathname.startsWith('/embed/');
      } catch (_) { return false; }
    });
    if (!frames.length) return;
    const attach = () => frames.forEach(frame => {
      if (frame.dataset.kaVideoTracked) return;
      frame.dataset.kaVideoTracked = 'true';
      const src = new URL(frame.src);
      src.searchParams.set('enablejsapi', '1');
      src.searchParams.set('origin', location.origin);
      if (frame.src !== src.href) frame.src = src.href;
      const tracker = videoTracker(src.pathname.split('/').pop());
      let timer;
      const stop = () => { clearInterval(timer); timer = undefined; };
      new window.YT.Player(frame, {
        events: {
          onReady() { status.videoPlayersReady++; },
          onStateChange(event) {
            stop();
            if (event.data === 1) {
              tracker.play();
              timer = setInterval(() => tracker.progress(event.target.getCurrentTime(), event.target.getDuration()), 2000);
            } else if (event.data === 2) tracker.pause();
            else if (event.data === 0) tracker.complete();
          }
        }
      });
      window.addEventListener('pagehide', stop, { once: true });
    });
    if (window.YT?.Player) attach();
    else {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try { previousReady?.(); } finally { attach(); }
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.head.append(script);
      }
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
  else ready();
})();
