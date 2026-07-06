/* ============================================================
   HIMA — Maison de Modestie · Shared JS v2.0
   Produktdaten (Preisliste bindend, Stand 07/2026 · Abschnitt 4.3
   des Manifests). Tasche & Merkliste via localStorage.
   Kein Checkout: Anfrage per E-Mail, bis die Rechts-Gates
   (LUCID, Rechtstexte, Freigaben) erfüllt sind.
   ============================================================ */

const HIMA = (() => {

  const KONTAKT_MAIL = 'nouurhijab@gmail.com';

  /* — Produktkatalog — Preise: einzige gültige Referenz ist die
       Preisliste von Nour (Juli 2026). Keine Abweichung. — */
  const PRODUKTE = [
    { id: 'liquid-jersey', name: 'Liquid Jersey', kat: 'Jersey', preis: 14.00,
      img: 'assets/img/editorial-schwarz-01.jpg',
      imgs: ['assets/img/editorial-schwarz-01.jpg','assets/img/editorial-marine-01.jpg','assets/img/editorial-braun-01.jpg'],
      kurz: 'Fließender Fall, weicher Griff. Der Jersey für Tage, die in Bewegung sind.', tag: 'Signature' },
    { id: 'premium-jersey', name: 'Premium Jersey', kat: 'Jersey', preis: 13.00,
      img: 'assets/img/editorial-grau-01.jpg',
      imgs: ['assets/img/editorial-grau-01.jpg','assets/img/editorial-blaugrau-01.jpg','assets/img/drape-nude-01.jpg'],
      kurz: 'Der Klassiker der Maison. Dicht, matt, blickdicht — unkompliziert elegant.' },
    { id: 'premium-jersey-satin', name: 'Premium Jersey Satin', kat: 'Jersey', preis: 15.00,
      img: 'assets/img/editorial-mauve-02.jpg',
      imgs: ['assets/img/editorial-mauve-02.jpg','assets/img/editorial-creme-01.jpg','assets/img/editorial-mauve-03.jpg'],
      kurz: 'Die festliche Seite des Jerseys. Ein leiser, matter Schimmer.' },
    { id: 'premium-jersey-wellen', name: 'Premium Jersey mit Wellen', kat: 'Jersey', preis: 13.50,
      img: 'assets/img/editorial-marine-02.jpg',
      imgs: ['assets/img/editorial-marine-02.jpg','assets/img/editorial-grau-02.jpg'],
      kurz: 'Feine Wellenstruktur, die das Licht bricht. Textur, die man spürt.' },
    { id: 'bamboo', name: 'Bamboo', kat: 'Bamboo', preis: 12.00,
      img: 'assets/img/editorial-salbei-02.jpg',
      imgs: ['assets/img/editorial-salbei-02.jpg','assets/img/editorial-olive-01.jpg','assets/img/drape-salbei-01.jpg'],
      kurz: 'Bambusviskose: leicht, atmungsaktiv, angenehm auf der Haut.' },
    { id: 'premium-bamboo', name: 'Premium Bamboo', kat: 'Bamboo', preis: 14.00,
      img: 'assets/img/editorial-taupe-01.jpg',
      imgs: ['assets/img/editorial-taupe-01.jpg','assets/img/drape-taupe-01.jpg','assets/img/editorial-salbei-01.jpg'],
      kurz: 'Unsere leichteste Qualität in dichter Ausführung. Sanft zum Haaransatz.', tag: 'Beliebt' },
    { id: 'medina-seide', name: 'Medina Seide', kat: 'Feine Stoffe', preis: 10.00,
      img: 'assets/img/editorial-taupe-02.jpg',
      imgs: ['assets/img/editorial-taupe-02.jpg','assets/img/editorial-taupe-03.jpg'],
      kurz: 'Seidig-matter Griff, feine Crêpe-Struktur. Hält die Drapierung ohne Nadel.' },
    { id: 'chiffon', name: 'Chiffon', kat: 'Feine Stoffe', preis: 8.00,
      img: 'assets/img/editorial-creme-02.jpg',
      imgs: ['assets/img/editorial-creme-02.jpg','assets/img/drape-salbei-02.jpg'],
      kurz: 'Transparente Leichtigkeit für gelegte Lagen und besondere Stunden.' },
    { id: 'bonnet', name: 'Bonnet', kat: 'Accessoires', preis: 4.50,
      img: 'assets/img/flatlay-01.jpg',
      imgs: ['assets/img/flatlay-01.jpg'],
      kurz: 'Die Basis unter jedem Tuch. Hält sicher — reibungsarm und atmungsaktiv.' },
    { id: 'nadeln', name: 'Nadeln', kat: 'Accessoires', preis: 1.50,
      img: 'assets/img/flatlay-01.jpg',
      imgs: ['assets/img/flatlay-01.jpg'],
      kurz: 'Feine Nadeln mit sicherem Halt. Das stille Werkzeug jeder Drapierung.' }
  ];

  const byId = id => PRODUKTE.find(p => p.id === id);
  const fmt = n => n.toFixed(2).replace('.', ',') + ' €';

  /* — Storage — */
  const load = k => { try { return JSON.parse(localStorage.getItem(k)) || []; } catch { return []; } };
  const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  let bag  = load('hima_bag');    // [{id, qty}]
  let wish = load('hima_wish');   // [id]

  /* — Toast — */
  let toastTimer;
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* — Zähler in der Navigation — */
  function counts() {
    const bc = document.querySelectorAll('[data-count="bag"]');
    const wc = document.querySelectorAll('[data-count="wish"]');
    const bn = bag.reduce((s, i) => s + i.qty, 0);
    bc.forEach(el => el.textContent = bn > 0 ? bn : '');
    wc.forEach(el => el.textContent = wish.length > 0 ? wish.length : '');
  }

  /* — Tasche — */
  function addToBag(id, qty = 1) {
    const row = bag.find(i => i.id === id);
    if (row) row.qty += qty; else bag.push({ id, qty });
    save('hima_bag', bag); counts(); renderBag();
    toast('In die Tasche gelegt');
    openDrawer('bag');
  }
  function setQty(id, qty) {
    bag = qty <= 0 ? bag.filter(i => i.id !== id)
                   : bag.map(i => i.id === id ? { ...i, qty } : i);
    save('hima_bag', bag); counts(); renderBag();
  }
  function bagTotal() { return bag.reduce((s, i) => s + (byId(i.id)?.preis || 0) * i.qty, 0); }

  function renderBag() {
    const body = document.getElementById('bag-body');
    const foot = document.getElementById('bag-foot');
    if (!body) return;
    if (bag.length === 0) {
      body.innerHTML = '<p class="d-empty">Ihre Tasche ist noch leer.</p>';
      if (foot) foot.style.display = 'none';
      return;
    }
    if (foot) foot.style.display = '';
    body.innerHTML = bag.map(i => {
      const p = byId(i.id); if (!p) return '';
      return `<div class="d-item">
        <img src="${p.img}" alt="">
        <div>
          <p class="di-name"><a href="produkt-${p.id}.html">${p.name}</a></p>
          <p class="di-price">${fmt(p.preis)}</p>
          <div class="di-qty">
            <button type="button" aria-label="Menge verringern" data-qty="${p.id}|${i.qty - 1}">−</button>
            <span aria-live="polite">${i.qty}</span>
            <button type="button" aria-label="Menge erhöhen" data-qty="${p.id}|${i.qty + 1}">+</button>
          </div>
        </div>
        <button type="button" class="di-remove" data-qty="${p.id}|0">Entfernen</button>
      </div>`;
    }).join('');
    const total = document.getElementById('bag-total');
    if (total) total.textContent = fmt(bagTotal());
  }

  function sendInquiry() {
    if (bag.length === 0) return;
    const lines = bag.map(i => { const p = byId(i.id); return `${i.qty} × ${p.name} (${fmt(p.preis)})`; });
    const body = `Guten Tag,%0D%0A%0D%0Aich möchte gern folgende Artikel anfragen:%0D%0A%0D%0A${encodeURIComponent(lines.join('\n'))}%0D%0A%0D%0AZwischensumme: ${encodeURIComponent(fmt(bagTotal()))}%0D%0A%0D%0AMeine Wunschfarben / Fragen:%0D%0A%0D%0AMit freundlichen Grüßen`;
    window.location.href = `mailto:${KONTAKT_MAIL}?subject=${encodeURIComponent('Anfrage über hima.de')}&body=${body}`;
  }

  /* — Merkliste — */
  function toggleWish(id) {
    if (wish.includes(id)) { wish = wish.filter(w => w !== id); toast('Von der Merkliste entfernt'); }
    else { wish.push(id); toast('Zur Merkliste hinzugefügt'); }
    save('hima_wish', wish); counts(); renderWish(); syncWishButtons();
  }
  function renderWish() {
    const body = document.getElementById('wish-body');
    if (!body) return;
    if (wish.length === 0) { body.innerHTML = '<p class="d-empty">Ihre Merkliste ist noch leer.</p>'; return; }
    body.innerHTML = wish.map(id => {
      const p = byId(id); if (!p) return '';
      return `<div class="d-item">
        <img src="${p.img}" alt="">
        <div>
          <p class="di-name"><a href="produkt-${p.id}.html">${p.name}</a></p>
          <p class="di-price">${fmt(p.preis)}</p>
        </div>
        <button type="button" class="di-remove" data-wish-remove="${p.id}">Entfernen</button>
      </div>`;
    }).join('');
  }
  function syncWishButtons() {
    document.querySelectorAll('[data-wish]').forEach(btn => {
      const active = wish.includes(btn.dataset.wish);
      btn.setAttribute('aria-pressed', String(active));
      const label = btn.querySelector('span');
      if (label) label.textContent = active ? 'Gemerkt ✓' : 'Merken';
    });
  }

  /* — Drawer — */
  function openDrawer(which) {
    document.getElementById('drawer-backdrop')?.classList.add('open');
    document.getElementById('drawer-bag')?.classList.toggle('open', which === 'bag');
    document.getElementById('drawer-wish')?.classList.toggle('open', which === 'wish');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawers() {
    document.getElementById('drawer-backdrop')?.classList.remove('open');
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
    document.body.style.overflow = '';
  }

  /* — Produktkarte (für Grids) — */
  function cardHTML(p) {
    return `<a class="card reveal" href="produkt-${p.id}.html">
      <div class="card-media">
        ${p.tag ? `<span class="card-tag">${p.tag}</span>` : ''}
        <img src="${p.img}" alt="${p.name} — ${p.kat}" loading="lazy">
      </div>
      <div class="card-body">
        <p class="card-cat">${p.kat}</p>
        <p class="card-name">${p.name}</p>
        <p class="card-price">${fmt(p.preis)}</p>
      </div>
    </a>`;
  }

  function renderGrid(el, list) {
    el.innerHTML = list.map(cardHTML).join('');
    observeReveals(el);
  }

  /* — Reveal-Animation — */
  let io;
  function observeReveals(root = document) {
    if (!('IntersectionObserver' in window)) {
      root.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
      return;
    }
    io = io || new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    root.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el));
  }

  /* — Init — */
  function init() {
    // Nav-Scroll
    const nav = document.getElementById('nav');
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    // Burger
    const burger = document.querySelector('.nav-burger');
    const mm = document.getElementById('mobile-menu');
    burger?.addEventListener('click', () => {
      const open = mm.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mm?.querySelector('.mm-close')?.addEventListener('click', () => {
      mm.classList.remove('open'); burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });

    // Drawer-Trigger
    document.querySelectorAll('[data-open-bag]').forEach(b => b.addEventListener('click', () => { renderBag(); openDrawer('bag'); }));
    document.querySelectorAll('[data-open-wish]').forEach(b => b.addEventListener('click', () => { renderWish(); openDrawer('wish'); }));
    document.getElementById('drawer-backdrop')?.addEventListener('click', closeDrawers);
    document.querySelectorAll('.d-close').forEach(b => b.addEventListener('click', closeDrawers));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeDrawers(); mm?.classList.remove('open'); document.body.style.overflow = ''; } });

    // Delegierte Klicks (Mengen, Merkliste, Anfrage)
    document.addEventListener('click', e => {
      const q = e.target.closest('[data-qty]');
      if (q) { const [id, qty] = q.dataset.qty.split('|'); setQty(id, parseInt(qty, 10)); return; }
      const wr = e.target.closest('[data-wish-remove]');
      if (wr) { toggleWish(wr.dataset.wishRemove); return; }
      const w = e.target.closest('[data-wish]');
      if (w) { toggleWish(w.dataset.wish); return; }
      const add = e.target.closest('[data-add]');
      if (add) { addToBag(add.dataset.add); return; }
      if (e.target.closest('[data-inquiry]')) { sendInquiry(); return; }
    });

    counts(); renderBag(); renderWish(); syncWishButtons();
    observeReveals();

    // Jahr im Footer
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', init);

  return { PRODUKTE, byId, fmt, renderGrid, cardHTML, addToBag, toggleWish, observeReveals, toast };
})();
