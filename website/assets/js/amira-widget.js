/* ============================================================
   HIMA — Amira-Widget v2 (Website)
   Schwebender Berater-Chat auf jeder Seite. Nutzt das Offline-
   Gehirn aus amira-brain.js — keine Datenübertragung.
   v2: breiteres Panel, Vollbild-Modus, Mobile-Bottom-Sheet,
   box-sizing-Fixes, Verlauf zurücksetzbar.
   ============================================================ */
(() => {
  'use strict';
  if (!window.HIMA_BRAIN || window.AmiraWidget) return;
  const B = window.HIMA_BRAIN;

  /* ── Styles (selbsttragend) ── */
  const css = `
  #amira-fab, #amira-panel, #amira-panel * { box-sizing: border-box; }
  #amira-fab { position: fixed; right: 22px; bottom: 22px; z-index: 940;
    width: 62px; height: 62px; border-radius: 50%; cursor: pointer;
    background: #2C1A10; color: #C7A977; border: 1px solid #B8965A;
    font-family: 'Playfair Display', Georgia, serif; font-size: 25px; line-height: 1;
    box-shadow: 0 8px 28px rgba(44,26,16,.35);
    display: flex; align-items: center; justify-content: center;
    transition: transform .3s cubic-bezier(.22,.61,.36,1), background .3s, color .3s; }
  #amira-fab:hover, #amira-fab:focus-visible { transform: translateY(-3px); background: #B8965A; color: #2C1A10; }
  #amira-fab .af-dot { position: absolute; top: 4px; right: 4px; width: 11px; height: 11px;
    border-radius: 50%; background: #B8965A; border: 2px solid #F4EFE6; }
  #amira-fab[data-open="true"] .af-dot { display: none; }
  #amira-fab-label { position: fixed; right: 96px; bottom: 40px; z-index: 940;
    background: #F4EFE6; color: #2C1A10; border: 1px solid #DCCCB6;
    font-family: 'Inter', system-ui, sans-serif; font-size: 11px; letter-spacing: .14em;
    text-transform: uppercase; padding: 9px 15px; pointer-events: none; white-space: nowrap;
    opacity: 0; transform: translateX(8px); transition: all .4s cubic-bezier(.22,.61,.36,1); }
  #amira-fab-label.show { opacity: 1; transform: none; }

  #amira-panel { position: fixed; right: 22px; bottom: 96px; z-index: 950;
    width: min(460px, calc(100vw - 32px));
    height: min(680px, calc(100vh - 128px));
    height: min(680px, calc(100dvh - 128px));
    background: #F4EFE6; border: 1px solid #DCCCB6; box-shadow: 0 24px 70px rgba(44,26,16,.35);
    display: none; flex-direction: column; overflow: hidden; }
  #amira-panel.open { display: flex; animation: amiraUp .35s cubic-bezier(.22,.61,.36,1); }
  #amira-panel.max { width: min(760px, calc(100vw - 32px)); height: calc(100vh - 118px); height: calc(100dvh - 118px); }
  @keyframes amiraUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
  @media (prefers-reduced-motion: reduce) { #amira-panel.open { animation: none; } #amira-fab { transition: none; } }
  @media (max-width: 640px) {
    #amira-panel, #amira-panel.max { right: 0; left: 0; bottom: 0; width: 100%;
      height: 88vh; height: 88dvh; border: 0; border-top: 2px solid #B8965A; }
    #amira-fab { right: 16px; bottom: 16px; }
    #amira-fab-label { right: 90px; bottom: 34px; }
  }

  #amira-head { flex-shrink: 0; background: #2C1A10; color: #F4EFE6; padding: 14px 16px;
    display: flex; align-items: center; gap: 12px; }
  #amira-head .ah-seal { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
    background: #B8965A; color: #2C1A10; display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', Georgia, serif; font-size: 18px; }
  #amira-head .ah-name { font-family: 'Playfair Display', Georgia, serif; font-size: 18px; letter-spacing: .06em; }
  #amira-head .ah-sub { font-family: 'Inter', system-ui, sans-serif; font-size: 9.5px; letter-spacing: .18em;
    text-transform: uppercase; color: #C7A977; margin-top: 2px; }
  #amira-head .ah-btns { margin-left: auto; display: flex; gap: 2px; }
  #amira-head .ah-btns button { background: none; border: 0; color: #F4EFE6; cursor: pointer;
    width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
    font-size: 16px; line-height: 1; opacity: .85; }
  #amira-head .ah-btns button:hover, #amira-head .ah-btns button:focus-visible { opacity: 1; color: #C7A977; }
  #amira-head #amira-close { font-size: 24px; }
  #amira-max { display: block; }
  @media (max-width: 640px) { #amira-max { display: none; } }

  #amira-msgs { flex: 1; overflow-y: auto; padding: 18px 16px; scroll-behavior: smooth; overscroll-behavior: contain; }
  .am-msg { max-width: 88%; margin-bottom: 12px; padding: 13px 16px;
    font-family: 'Inter', system-ui, sans-serif; font-weight: 300; font-size: 14.5px;
    line-height: 1.65; color: #232323; overflow-wrap: break-word; }
  .am-msg.amira { background: #EDE6D8; border-left: 2px solid #B8965A; }
  .am-msg.user { background: #2C1A10; color: #F4EFE6; margin-left: auto; }
  .am-msg a { color: inherit; }
  .am-typing { display: inline-flex; gap: 5px; padding: 15px 17px; margin-bottom: 12px;
    background: #EDE6D8; border-left: 2px solid #B8965A; }
  .am-typing i { width: 6px; height: 6px; border-radius: 50%; background: #A58F7A; animation: amDot 1.2s infinite; }
  .am-typing i:nth-child(2) { animation-delay: .18s; } .am-typing i:nth-child(3) { animation-delay: .36s; }
  @keyframes amDot { 0%, 60%, 100% { opacity: .35; transform: none; } 30% { opacity: 1; transform: translateY(-3px); } }

  .am-products { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 2px 0 14px; max-width: 92%; }
  .am-card { display: block; text-decoration: none; background: #fff; border: 1px solid #DCCCB6; transition: border-color .25s; }
  .am-card:hover, .am-card:focus-visible { border-color: #B8965A; }
  .am-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
  .am-card .amc-body { padding: 9px 11px 11px; display: block; }
  .am-card .amc-name { font-family: 'Playfair Display', Georgia, serif; font-size: 13.5px; color: #2C1A10; line-height: 1.3; display: block; }
  .am-card .amc-price { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 13.5px; color: #7A654F; margin-top: 2px; display: block; }

  .am-action { display: inline-block; text-decoration: none; cursor: pointer; margin: 0 0 14px;
    background: #2C1A10; color: #F4EFE6 !important; border: 1px solid #2C1A10;
    padding: 11px 18px; font-family: 'Inter', system-ui, sans-serif; font-size: 11.5px;
    letter-spacing: .1em; text-transform: uppercase; }
  .am-action:hover, .am-action:focus-visible { background: #B8965A; border-color: #B8965A; color: #2C1A10 !important; }

  #amira-chips { flex-shrink: 0; display: flex; flex-wrap: wrap; gap: 8px; padding: 6px 14px 10px;
    max-height: 92px; overflow-y: auto; }
  .am-chip { cursor: pointer; background: #F4EFE6; border: 1px solid #DCCCB6;
    color: #2C1A10; padding: 9px 14px; font-family: 'Inter', system-ui, sans-serif;
    font-size: 12px; letter-spacing: .03em; line-height: 1.2; transition: all .25s; }
  .am-chip:hover, .am-chip:focus-visible { border-color: #2C1A10; background: #EDE6D8; }

  #amira-inrow { flex-shrink: 0; display: flex; gap: 9px; padding: 10px 14px 12px;
    border-top: 1px solid #DCCCB6; background: #F4EFE6; }
  #amira-in { flex: 1; min-width: 0; border: 1px solid #DCCCB6; background: #fff; border-radius: 0;
    padding: 12px 14px; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; color: #232323;
    -webkit-appearance: none; appearance: none; }
  #amira-in:focus { outline: none; border-color: #B8965A; }
  #amira-go { flex-shrink: 0; background: #2C1A10; color: #F4EFE6; border: 0; cursor: pointer; padding: 0 18px;
    font-family: 'Inter', system-ui, sans-serif; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; }
  #amira-go:hover, #amira-go:focus-visible { background: #B8965A; color: #2C1A10; }
  #amira-note { flex-shrink: 0; text-align: center; font-family: 'Inter', system-ui, sans-serif;
    font-size: 9px; letter-spacing: .08em; color: #A58F7A; padding: 0 14px 10px; background: #F4EFE6; }`;

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
        <div class="ah-btns">
          <button type="button" id="amira-reset" aria-label="Gespräch neu beginnen" title="Neu beginnen">↺</button>
          <button type="button" id="amira-max" aria-label="Chat vergrößern" title="Vergrößern">⤢</button>
          <button type="button" id="amira-close" aria-label="Chat schließen">×</button>
        </div>
      </header>
      <div id="amira-msgs" role="log" aria-live="polite"></div>
      <div id="amira-chips"></div>
      <form id="amira-inrow">
        <label for="amira-in" style="position:absolute;left:-9999px;">Ihre Nachricht an Amira</label>
        <input type="text" id="amira-in" placeholder="Schreiben Sie einfach los …" autocomplete="off" enterkeyhint="send">
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

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

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
        <span class="amc-body"><span class="amc-name">${esc(p.name)}</span><span class="amc-price">${B.fmt(p.preis)}</span></span></a>`;
    }).join('');
    msgs.appendChild(wrap);
    msgs.scrollTop = msgs.scrollHeight;
  }
  function chips(list) {
    chipsEl.innerHTML = (list || []).map(c => `<button type="button" class="am-chip">${esc(c)}</button>`).join('');
  }
  function actionButton(action) {
    if (!action) return;
    const a = document.createElement('a');
    a.className = 'am-action';
    if (action === 'farbpass') { a.href = 'farbpass.html'; a.textContent = 'Zum Farbpass →'; }
    else if (action === 'warteliste') { a.href = 'mailto:' + B.MAIL + '?subject=' + encodeURIComponent('Maghnatis — Warteliste'); a.textContent = 'Auf die Warteliste →'; }
    else if (action === 'kontakt') { a.href = 'mailto:' + B.MAIL; a.textContent = 'E-Mail ans Atelier →'; }
    else return;
    msgs.appendChild(a);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function reply(r) {
    const t = document.createElement('div');
    t.className = 'am-typing'; t.innerHTML = '<i></i><i></i><i></i>';
    msgs.appendChild(t); msgs.scrollTop = msgs.scrollHeight;
    const delay = Math.min(400 + r.text.length * 2.6, 1300);
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

  /* ── Öffnen / Schließen / Größe / Reset ── */
  let rendered = false;
  function renderHistory() {
    msgs.innerHTML = '';
    history.forEach(h => { bubble(h.text, h.who); if (h.products) productCards(h.products); if (h.action) actionButton(h.action); });
    const last = [...history].reverse().find(h => h.chips);
    chips(last ? last.chips : ['Empfiehl mir etwas', 'Welche Farbe steht mir?']);
  }
  function open(prefill) {
    panel.classList.add('open');
    fab.dataset.open = 'true'; fab.setAttribute('aria-expanded', 'true');
    $('amira-fab-label').classList.remove('show');
    if (!rendered) {
      rendered = true;
      if (history.length) renderHistory();
      else reply(B.AMIRA.begruessung());
    }
    if (prefill) setTimeout(() => ask(prefill), history.length ? 300 : 1500);
    if (window.matchMedia('(min-width: 641px)').matches) setTimeout(() => $('amira-in').focus(), 250);
  }
  function close() {
    panel.classList.remove('open');
    fab.dataset.open = 'false'; fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  }

  fab.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
  $('amira-close').addEventListener('click', close);
  $('amira-max').addEventListener('click', () => {
    const max = panel.classList.toggle('max');
    $('amira-max').setAttribute('aria-label', max ? 'Chat verkleinern' : 'Chat vergrößern');
    msgs.scrollTop = msgs.scrollHeight;
  });
  $('amira-reset').addEventListener('click', () => {
    history = []; persist();
    msgs.innerHTML = ''; chips([]);
    reply(B.AMIRA.begruessung());
  });
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
  window.AmiraWidget = { open, close, ask: q => { open(); setTimeout(() => ask(q), 400); } };
  document.querySelectorAll('[data-amira]').forEach(el =>
    el.addEventListener('click', e => { e.preventDefault(); open(el.dataset.amira || undefined); }));
})();
