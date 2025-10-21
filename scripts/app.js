(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Year in footer
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal on scroll
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    $$('[data-reveal]').forEach(el => io.observe(el));
  } else {
    $$('[data-reveal]').forEach(el => el.classList.add('is-visible'));
  }

  // Mobile menu toggle
  const toggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      mobileNav.hidden = open;
    });
  }

  // Search dialog (Cmd/Ctrl + K)
  const searchTrigger = $('#searchTrigger');
  const searchDialog = $('#searchDialog');
  if (searchDialog) {
    const openSearch = () => { try { searchDialog.showModal(); } catch { searchDialog.show(); } $('input[type="search"]', searchDialog)?.focus(); };
    const closeSearch = () => { if (searchDialog.open) searchDialog.close(); };

    searchTrigger?.addEventListener('click', openSearch);

    window.addEventListener('keydown', (e) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
      const metaKey = isMac ? e.metaKey : e.ctrlKey;
      if (metaKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') closeSearch();
    });
  }

  // Tilt effect for cards
  const tiltCards = $$('.tilt');
  if (tiltCards.length && !prefersReducedMotion) {
    const damp = 12;
    tiltCards.forEach(card => {
      let raf = 0;
      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width/2;
        const cy = rect.top + rect.height/2;
        const dx = (e.clientX - cx) / rect.width;
        const dy = (e.clientY - cy) / rect.height;
        const rx = (+dy * damp).toFixed(2);
        const ry = (-dx * damp).toFixed(2);
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
        });
      };
      const reset = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', reset);
    });
  }

  // Magnetic buttons
  const magnets = $$('.magnetic');
  if (magnets.length && !prefersReducedMotion) {
    const strength = 18;
    magnets.forEach(btn => {
      let raf = 0;
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const relX = e.clientX - (r.left + r.width/2);
        const relY = e.clientY - (r.top + r.height/2);
        const tx = (relX / (r.width/2)) * strength;
        const ty = (relY / (r.height/2)) * strength;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          btn.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px)`;
        });
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  // Header shadow on scroll
  const header = $('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.style.boxShadow = '0 10px 30px rgba(0,0,0,.25)';
    else header.style.boxShadow = '';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Smooth scroll for same-page anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const target = $(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  });
})();
