/* ============================================================
   HIMA — Produktdetailseite (PDP)
   Rendert Galerie, Details & verwandte Produkte aus HIMA.PRODUKTE
   plus den Detailtexten unten. Sprachregeln: HWG-konform —
   keine Heil-/Gesundheitsversprechen, nur Materialeigenschaften.
   ============================================================ */

const HIMA_DETAILS = {
  'liquid-jersey': {
    desc: 'Ein Jersey mit fließendem Fall — er liegt weich auf, folgt jeder Bewegung und behält den Tag über seine Form. Blickdicht, reibungsarm und unkompliziert im Alltag.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 220–280 g/m²', 'Kanten sauber verarbeitet'],
    material: ['Weicher Stretch-Jersey mit hohem Fließanteil', 'Blickdicht bei hellen und dunklen Tönen', 'Reibungsarme Oberfläche — sanft zum Haaransatz'],
    pflege: ['Handwäsche oder Schonwaschgang bei 30 °C', 'Nicht für den Trockner geeignet', 'Liegend trocknen, bei niedriger Temperatur bügeln']
  },
  'premium-jersey': {
    desc: 'Der Klassiker der Maison: dicht gearbeiteter Jersey mit mattem Finish. Formstabil, blickdicht und angenehm unkompliziert — das Tuch für jeden Tag.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 220–280 g/m²', 'Kanten sauber verarbeitet'],
    material: ['Dichter Premium-Jersey, matte Oberfläche', 'Formstabil — sitzt ohne ständiges Nachfassen', 'Atmungsaktiv und weich im Griff'],
    pflege: ['Handwäsche oder Schonwaschgang bei 30 °C', 'Nicht für den Trockner geeignet', 'Liegend trocknen, bei niedriger Temperatur bügeln']
  },
  'premium-jersey-satin': {
    desc: 'Die festliche Seite des Jerseys: ein leiser, matter Schimmer über weichem Griff. Für Abende, Feste und Momente, die in Erinnerung bleiben.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 220–280 g/m²', 'Kanten sauber verarbeitet'],
    material: ['Jersey mit satiniertem Finish — Schimmer ohne Glanz-Effekt', 'Weicher Fall, angenehm auf der Haut', 'Blickdicht'],
    pflege: ['Handwäsche oder Schonwaschgang bei 30 °C', 'Nicht für den Trockner geeignet', 'Auf links bügeln, niedrige Temperatur']
  },
  'premium-jersey-wellen': {
    desc: 'Eine feine Wellenstruktur, die das Licht bricht — Textur, die man sieht und spürt. Der Jersey für alle, die Understatement mit Charakter tragen.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 220–280 g/m²', 'Kanten sauber verarbeitet'],
    material: ['Premium-Jersey mit strukturierter Wellenprägung', 'Formstabil und blickdicht', 'Griffige Oberfläche — hält die Drapierung zuverlässig'],
    pflege: ['Handwäsche oder Schonwaschgang bei 30 °C', 'Nicht für den Trockner geeignet', 'Liegend trocknen']
  },
  'bamboo': {
    desc: 'Bambusviskose in ihrer leichtesten Form: atmungsaktiv, angenehm temperierend und weich auf der Haut. Für lange Tage und warme Monate.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 160–190 g/m²', 'Kanten sauber verarbeitet'],
    material: ['Viskose aus Bambus — leicht und atmungsaktiv', 'Angenehm kühler Griff', 'Natürlich matter Look'],
    pflege: ['Handwäsche empfohlen', 'Nicht wringen, liegend trocknen', 'Bei niedriger Temperatur bügeln']
  },
  'premium-bamboo': {
    desc: 'Unsere leichteste Qualität in dichterer Ausführung: der elegante Fall von Bambusviskose mit mehr Substanz. Sanft zum Haaransatz, atmungsaktiv, ruhig im Ausdruck.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 160–190 g/m² (dichte Ausführung)', 'Kanten sauber verarbeitet'],
    material: ['Premium-Bambusviskose, dicht gearbeitet', 'Sanft zum Haaransatz — weniger Zug, weniger Reibung', 'Atmungsaktiv, angenehm temperierend'],
    pflege: ['Handwäsche empfohlen', 'Nicht wringen, liegend trocknen', 'Bei niedriger Temperatur bügeln']
  },
  'medina-seide': {
    desc: 'Seidig-matter Griff auf feiner Crêpe-Struktur: Medina hält die Drapierung auch ohne Nadel und bewahrt den ganzen Tag ihre Form.',
    masse: ['Maße: ca. 185 × 70 cm', 'Leichte, strukturierte Qualität', 'Kanten sauber verarbeitet'],
    material: ['Medina-Qualität mit feiner Crêpe-Struktur', 'Griffige Oberfläche — rutscht nicht, braucht kaum Nadeln', 'Seidig-matter Ausdruck (keine Maulbeerseide)'],
    pflege: ['Handwäsche in kaltem Wasser', 'Nicht wringen, liegend trocknen', 'Mit Dampf glätten oder sehr niedrig bügeln']
  },
  'chiffon': {
    desc: 'Transparente Leichtigkeit für gelegte Lagen: Chiffon bringt Tiefe in jede Drapierung und bleibt dabei federleicht. Für besondere Stunden.',
    masse: ['Maße: ca. 185 × 70 cm', 'Grammatur: ca. 40–60 g/m²', 'Rollierte Kanten'],
    material: ['Feiner Chiffon, halbtransparent', 'Federleicht, mit elegantem Fall', 'Wird meist in Lagen oder über einem Bonnet getragen'],
    pflege: ['Handwäsche in kaltem Wasser', 'Nicht wringen, hängend trocknen', 'Mit Dampf glätten']
  },
  'bonnet': {
    bildhinweis: true,
    desc: 'Die Basis unter jedem Tuch: unser Bonnet hält sicher, ohne zu ziehen — reibungsarm, atmungsaktiv und unsichtbar unter jeder Drapierung.',
    masse: ['Einheitsgröße mit sanftem Stretch', 'Flache, weiche Nähte'],
    material: ['Weicher, dehnbarer Jersey', 'Reibungsarme Innenseite — sanft zum Haaransatz', 'Atmungsaktiv'],
    pflege: ['Maschinenwäsche 30 °C im Wäschenetz', 'Nicht für den Trockner geeignet']
  },
  'nadeln': {
    bildhinweis: true,
    desc: 'Feine Nadeln mit sicherem Halt — das stille Werkzeug jeder Drapierung. Glatt poliert, damit sie feine Stoffe nicht zeichnen.',
    masse: ['Set mit mehreren Nadeln', 'Glatt polierte Spitzen'],
    material: ['Korrosionsbeständiges Metall', 'Für feine und dichte Stoffe geeignet'],
    pflege: ['Trocken aufbewahren', 'Von Kindern fernhalten — feine Spitzen']
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const host = document.querySelector('[data-produkt]');
  if (!host) return;
  const p = HIMA.byId(host.dataset.produkt);
  const d = HIMA_DETAILS[host.dataset.produkt];
  if (!p || !d) return;

  const gallery = p.imgs.map((src, i) =>
    `<button type="button" data-thumb="${i}" aria-pressed="${i === 0 ? 'true' : 'false'}" aria-label="Bild ${i + 1} anzeigen"><img src="${src}" alt="" loading="lazy"></button>`
  ).join('');

  host.innerHTML = `
    <div class="pdp-gallery">
      <img class="g-main" id="g-main" src="${p.imgs[0]}" alt="${p.name} — ${p.kat}, Editorial-Aufnahme">
      ${p.imgs.length > 1 ? `<div class="pdp-thumbs">${gallery}</div>` : ''}
    </div>
    <div class="pdp-info">
      <p class="p-cat">${p.kat}</p>
      <h1>${p.name}</h1>
      <hr class="shelter-line" aria-hidden="true" style="margin: 18px 0;">
      <p class="p-price">${HIMA.fmt(p.preis)} <small>zzgl. Versand</small></p>
      <p class="p-desc">${d.desc}</p>
      <div class="pdp-actions">
        <button type="button" class="btn solid" data-add="${p.id}">In die Tasche</button>
        <button type="button" class="btn" data-wish="${p.id}" aria-pressed="false"><span>Merken</span></button>
      </div>
      <p class="p-note">Bestellung derzeit als persönliche Anfrage — unser Online-Checkout öffnet in Kürze. Farbwünsche nennen Sie einfach in Ihrer Nachricht; die aktuelle Farbkarte senden wir Ihnen gern.${d.bildhinweis ? ' Die Abbildung zeigt die Stoffwelt der Maison — das eigene Produktfoto folgt.' : ''}</p>
      <div class="acc">
        <details open>
          <summary>Maße &amp; Passform</summary>
          <div class="acc-body"><ul>${d.masse.map(x => `<li>${x}</li>`).join('')}</ul></div>
        </details>
        <details>
          <summary>Material</summary>
          <div class="acc-body"><ul>${d.material.map(x => `<li>${x}</li>`).join('')}</ul></div>
        </details>
        <details>
          <summary>Pflege</summary>
          <div class="acc-body"><ul>${d.pflege.map(x => `<li>${x}</li>`).join('')}</ul></div>
        </details>
        <details>
          <summary>Qualität &amp; Prüfung</summary>
          <div class="acc-body"><ul>
            <li>Jede Charge durchläuft unsere Eingangsprüfung: Waschtest, Knittertest, Lichtechtheit, Maßkontrolle.</li>
            <li>Hautfreundliche Materialauswahl steht bei uns an erster Stelle.</li>
          </ul></div>
        </details>
      </div>
    </div>`;

  // Galerie-Interaktion
  const main = document.getElementById('g-main');
  host.querySelectorAll('[data-thumb]').forEach(btn => {
    btn.addEventListener('click', () => {
      host.querySelectorAll('[data-thumb]').forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
      main.src = p.imgs[parseInt(btn.dataset.thumb, 10)];
    });
  });

  // Merken-Status synchronisieren
  if (typeof HIMA.observeReveals === 'function') HIMA.observeReveals(host);
  document.dispatchEvent(new Event('hima:pdp-ready'));

  // Verwandte Produkte: gleiche Kategorie zuerst, dann Rest
  const relHost = document.getElementById('related-grid');
  if (relHost) {
    const rel = HIMA.PRODUKTE
      .filter(x => x.id !== p.id)
      .sort((a, b) => (b.kat === p.kat) - (a.kat === p.kat))
      .slice(0, 4);
    HIMA.renderGrid(relHost, rel);
  }

  // Wish-Button-Status nach dem Rendern aktualisieren
  try {
    const wish = JSON.parse(localStorage.getItem('hima_wish')) || [];
    const wbtn = host.querySelector('[data-wish]');
    if (wbtn && wish.includes(p.id)) {
      wbtn.setAttribute('aria-pressed', 'true');
      wbtn.querySelector('span').textContent = 'Gemerkt ✓';
    }
  } catch {}
});
