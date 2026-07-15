/* ============================================================
   HIMA — Amira-Widget (Website)
   Schwebender Chat auf jeder Seite. Nutzt das Offline-Gehirn
   aus amira-brain.js — keine Datenübertragung, kein API-Key.
   Einbindung:  <script src="assets/js/amira-brain.js"></script>
                <script src="assets/js/amira-widget.js"></script>
   ============================================================ */
(() => {
  'use strict';
  if (!window.HIMA_BRAIN) return;
  const B = window.HIMA_BRAIN;

  /* ── Styles (selbsttragend — keine CSS-Datei nötig) ── */
  const css = `
  #amira-fab { position: fixed; right: 22px; bottom: 22px; z-index: 940;
    width: 60px; height: 60px; border-radius: 50%; cursor: pointer;
    background: #2C1A10; color: #C7A977; border: 1px solid #B8965A;
    font-family: 'Playfair Display', Georgia, serif; font-size: 24px;
    box-shadow: 0 8px 28px rgba(44,26,16,.35);
    display: flex; align-items: center; justify-content: center;
    transition: transform .3s cubic-bezier(.22,.61,.36,1), background .3s; }
  #amira-fab:hover, #amira-fab:focus-visible { transform: translateY(-3px); background: #B8965A; color: #2C1A10; }
  #amira-fab .af-dot { position: absolute; top: 4px; right: 4px; width: 11px; height: 11px;
    border-radius: 50%; background: #B8965A; border: 2px solid #F4EFE6; }
  #amira-fab[data-open="true"] .af-dot { display: none; }
  #amira-fab-label { position: fixed; right: 92px; bottom: 38px; z-index: 940;
    background: #F4EFE6; color: #2C1A10; border: 1px solid #DCCCB6;
    font-family: 'Inter', system-ui, sans-serif; font-size: 11px; letter-spacing: .14em;
    text-transform: uppercase; padding: 8px 14px; pointer-events: none;
    opacity: 0; transform: translateX(8px); transition: all .4s cubic-bezier(.22,.61,.36,1); }
  #amira-fab-label.show { opacity: 1; transform: none; }
  #amira-panel { position: fixed; right: 22px; bottom: 96px; z-index: 950;
    width: min(392px, calc(100vw - 32px)); height: min(600px, calc(100vh - 130px));
    background: #F4EFE6; border: 1px solid #DCCCB6; box-shadow: 0 24px 70px rgba(44,26,16,.35);
    display: none; flex-direction: column; overflow: hidden; }
  #amira-panel.open { display: flex; animation: amiraUp .35s cubic-bezier(.22,.61,.36,1); }
  @keyframes amiraUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) { #amira-panel.open { animation: none; } #amira-fab { transition: none; } }
  @media (max-width: 480px) { #amira-panel { right: 16px; left: 16px; width: auto; bottom: 90px; } }
  #amira-head { flex-shrink: 0; background: #2C1A10; color: #F4EFE6; padding: 15px 18px;
    display: flex; align-items: center; gap: 12px; }
  #amira-head .ah-seal { width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
    background: #B8965A; color: #2C1A10; display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', Georgia, serif; font-size: 17px; }
  #amira-head .ah-name { font-family: 'Playfair Display', Georgia, serif; font-size: 17px; letter-spacing: .06em; }
  #amira-head .ah-sub { font-family: 'Inter', system-ui, sans-serif; font-size: 9.5px; letter-spacing: .18em;
    text-transform: uppercase; color: #C7A977; margin-top: 2px; }
  #amira-close { margin-left: auto; background: none; border: 0; color: #F4EFE6; cursor: pointer;
    font-size: 22px; line-height: 1; padding: 4px 6px; }
  #amira-msgs { flex: 1; overflow-y: auto; padding: 16px 14px; scroll-behavior: smooth; }
  .am-msg { max-width: 86%; margin-bottom: 11px; padding: 12px 15px;
    font-family: 'Inter', system-ui, sans-serif; font-weight: 300; font-size: 13.5px; line-height: 1.62; color: #232323; }
  .am-msg.amira { background: #EDE6D8; border-left: 2px solid #B8965A; }
  .am-msg.user { background: #2C1A10; color: #F4EFE6; margin-left: auto; }
  .am-msg a { color: inherit; }
  .am-typing { display: inline-flex; gap: 5px; padding: 14px 16px; background: #EDE6D8; border-left: 2px solid #B8965A; }
  .am-typing i { width: 6px; height: 6px; border-radius: 50%; background: #A58F7A; animation: amDot 1.2s infinite; }
  .am-typing i:nth-child(2) { animation-delay: .18s; } .am-typing i:nth-child(3) { animation-delay: .36s; }
  @keyframes amDot { 0%, 60%, 100% { opacity: .35; transform: none; } 30% { opacity: 1; transform: translateY(-3px); } }
  .am-products { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; margin: 2px 0 12px; max-width: 86%; }
  .am-card { display: block; text-decoration: none; background: #fff; border: 1px solid #DCCCB6; }
  .am-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
  .am-card .amc-body { padding: 8px 10px 10px; }
  .am-card .amc-name { font-family: 'Playfair Display', Georgia, serif; font-size: 13px; color: #2C1A10; line-height: 1.3; }
  .am-card .amc-price { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 13px; color: #7A654F; margin-top: 2px; }
  #amira-chips { flex-shrink: 0; display: flex; gap: 7px; overflow-x: auto; padding: 4px 14px 10px; scrollbar-width: none; }
  #amira-chips::-webkit-scrollbar { display: none; }
  .am-chip { flex-shrink: 0; cursor: pointer; background: none; border: 1px solid #DCCCB6;
    color: #2C1A10; padding: 8px 13px; font-family: 'Inter', system-ui, sans-serif;
    font-size: 11px; letter-spacing: .04em; transition: all .25s; }
  .am-chip:hover, .am-chip:focus-visible { border-color: #2C1A10; background: #EDE6D8; }
  #amira-inrow { flex-shrink: 0; display: flex; gap: 9px; padding: 10px 14px 14px; border-top: 1px solid #DCCCB6; background: #F4EFE6; }
  #amira-in { flex: 1; min-width: 0; border: 1px solid #DCCCB6; background: #fff; border-radius: 0;
    padding: 11px 13px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 15.5px; color: #232323; }
  #amira-in:focus { outline: none; border-color: #B8965A; }
  #amira-go { background: #2C1A10; color: #F4EFE6; border: 0; cursor: pointer; padding: 0 17px;
    font-family: 'Inter', system-ui, sans-serif; font-size: 10.5px; letter-spacing: .16em; text-transform: uppercase; }
  #amira-go:hover { background: #B8965A; color: #2C1A10; }
  #amira-note { flex-shrink: 0; text-align: center; font-family: 'Inter', system-ui, sans-serif;
    font-size: 9px; letter-spacing: .08em; color: #A58F7A; padding: 0 14px 9px; background: #F4EFE6; }`;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ── Markup ── */
  const root = document.createElement('div');
  root.innerHTML = `
    <button type="button" id="amira-fab" data-open="false" aria-label="Amira — Ihre Beraterin öffnen" aria-expanded="false" aria-controls="amira-panel">
      A<span class="af-dot" aria-hidden="true"></span>
    </button>
    <span id="amira-fab-label" aria-hidden="true">Fragen Sie Amira</span>
    <section id="amira-panel" role="dialog" aria-label="Amira — Ihre Beraterin">
      <header id="amira-head">
        <span class="ah-seal" aria-hidden="true">A</span>
        <div><div class="ah-name">Amira</div><div class="ah-sub">Beraterin der Maison · offline&nbsp;bereit</div></div>
        <button type="button" id="amira-close" aria-label="Chat schließen">×</button>
      </header>
      <div id="amira-msgs" role="log" aria-live="polite"></div>
      <div id="amira-chips"></div>
      <form id="amira-inrow">
        <label for="amira-in" style="position:absolute;left:-9999px;">Ihre Nachricht an Amira</label>
        <input type="text" id="amira-in" placeholder="Stoff, Farbe, Stil — oder einfach plaudern …" autocomplete="off">
        <button type="submit" id="amira-go">Senden</button>
      </form>
      <p id="amira-note">Läuft komplett auf Ihrem Gerät — keine Datenübertragung.</p>
    </section>`;
  document.body.appendChild(root);

  const $ = id => document.getElementById(id);
  const panel = $('amira-panel'), fab = $('amira-fab'), msgs = $('amira-msgs'), chipsEl = $('amira-chips');

  /* ── Verlauf (Session) ── */
  let history = [];
  try { history = JSON.parse(sessionStorage.getItem('hima_amira_log')) || []; } catch {}
  const persist = () => { try { sessionStorage.setItem('hima_amira_log', JSON.stringify(history.slice(-40))); } catch {} };

  const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function bubble(text, who) {
    const d = document.createElement('div');
    d.className = 'am-msg ' + who;
    d.innerHTML = esc(text).replace(new RegExp(B.MAIL.replace('.', '\\.'), 'g'),
      `<a href="mailto:${B.MAIL}">${B.MAIL}</a>`);
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function productCards(ids) {
    if (!ids || !ids.length) return;
    const wrap = document.createElement('div');
    wrap.className = 'am-products';
    wrap.innerHTML = ids.map(id => {
      const p = B.byId(id); if (!p) return '';
      return `<a class="am-card" href="produkt-${p.id}.html">
        <img src="assets/img/${p.imgs[0]}" alt="${esc(p.name)}" loading="lazy">
        <span class="amc-body"><span class="amc-name">${esc(p.name)}</span><br><span class="amc-price">${B.fmt(p.preis)}</span></span></a>`;
    }).join('');
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function chips(list) {
    chipsEl.innerHTML = (list || []).map(c => `<button type="button" class="am-chip">${esc(c)}</button>`).join('');
  }
  function actionButton(action) {
    if (action === 'farbpass') {
      const a = document.createElement('a');
      a.className = 'am-chip'; a.style.display = 'inline-block'; a.style.textDecoration = 'none';
      a.style.background = '#2C1A10'; a.style.color = '#F4EFE6'; a.style.margin = '0 0 12px';
      a.href = 'farbpass.html'; a.textContent = 'Zum Farbpass →';
      msgs.appendChild(a); msgs.scrollTop = msgs.scrollHeight;
    }
    if (action === 'warteliste' || action === 'kontakt') {
      const a = document.createElement('a');
      a.className = 'am-chip'; a.style.display = 'inline-block'; a.style.textDecoration = 'none'; a.style.margin = '0 0 12px';
      a.href = 'mailto:' + B.MAIL + (action === 'warteliste' ? '?subject=' + encodeURIComponent('Maghnatis — Warteliste') : '');
      a.textContent = action === 'warteliste' ? 'Auf die Warteliste →' : 'E-Mail ans Atelier →';
      msgs.appendChild(a); msgs.scrollTop = msgs.scrollHeight;
    }
  }

  function reply(r) {
    const t = document.createElement('div');
    t.className = 'am-typing'; t.innerHTML = '<i></i><i></i><i></i>';
    msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
    const delay = Math.min(420 + r.text.length * 3, 1400);
    setTimeout(() => {
      t.remove();
      bubble(r.text, 'amira');
      productCards(r.products);
      actionButton(r.action);
      chips(r.chips);
      history.push({ who: 'amira', text: r.text, products: r.products || null, action: r.action || null, chips: r.chips || null });
      persist();
    }, delay);
  }

  function ask(q) {
    bubble(q, 'user');
    history.push({ who: 'user', text: q }); persist();
    chips([]);
    reply(B.AMIRA.antworten(q));
  }

  /* ── Öffnen / Schließen ── */
  let opened = false;
  function open(prefill) {
    panel.classList.add('open');
    fab.dataset.open = 'true'; fab.setAttribute('aria-expanded', 'true');
    $('amira-fab-label').classList.remove('show');
    if (!opened) {
      opened = true;
      if (history.length) {
        history.forEach(h => { bubble(h.text, h.who); if (h.products) productCards(h.products); if (h.action) actionButton(h.action); });
        const last = [...history].reverse().find(h => h.chips);
        chips(last ? last.chips : ['Empfiehl mir etwas', 'Welche Farbe steht mir?']);
      } else {
        reply(B.AMIRA.begruessung());
      }
    }
    if (prefill) setTimeout(() => ask(prefill), history.length ? 300 : 1600);
    setTimeout(() => $('amira-in').focus(), 200);
  }
  function close() {
    panel.classList.remove('open');
    fab.dataset.open = 'false'; fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  }

  fab.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
  $('amira-close').addEventListener('click', close);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });
  $('amira-inrow').addEventListener('submit', e => {
    e.preventDefault();
    const v = $('amira-in').value.trim();
    if (!v) return;
    $('amira-in').value = '';
    ask(v);
  });
  chipsEl.addEventListener('click', e => {
    const c = e.target.closest('.am-chip');
    if (c) ask(c.textContent);
  });

  /* Dezente Einladung nach 6 s (einmal pro Session) */
  try {
    if (!sessionStorage.getItem('hima_amira_hint')) {
      setTimeout(() => {
        if (!panel.classList.contains('open')) {
          $('amira-fab-label').classList.add('show');
          setTimeout(() => $('amira-fab-label').classList.remove('show'), 5200);
        }
        sessionStorage.setItem('hima_amira_hint', '1');
      }, 6000);
    }
  } catch {}

  /* Öffentliche API — z. B. für „Mit Amira besprechen"-Buttons */
  window.AmiraWidget = { open, ask: q => { open(); setTimeout(() => ask(q), 400); } };
  document.querySelectorAll('[data-amira]').forEach(el =>
    el.addEventListener('click', e => { e.preventDefault(); open(el.dataset.amira || undefined); }));
})();
