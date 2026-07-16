/* ============================================================
   HIMA — Amira-Gehirn v1.0 (Juli 2026)
   Ein Offline-Gehirn für Website UND App: Katalog (einzige
   Quelle), Farbwissen, Farbpass-Engine und Amira — die digitale
   Beraterin der Maison. Kein API-Key, keine Datenübertragung:
   alles läuft auf dem Gerät der Kundin.
   Persona: Spezialistin für Islam, Hijab & Modest Fashion.
   Feminin, selbstbewusst, einfühlsam — und immer im Dienst
   der Maison: beraten, unterstützen, empfehlen.
   ============================================================ */
window.HIMA_BRAIN = (() => {
  'use strict';

  const MAIL = 'nouurhijab@gmail.com';

  /* ────────────────────────────────────────────────
     1 · KATALOG — einzige Produktquelle für Chat,
         Quiz, App und Empfehlungen.
         (Preisliste: Kanal Website/App, Juli 2026.
          Bei Preis-Update: NUR hier ändern.)
     ──────────────────────────────────────────────── */
  const KATALOG = [
    { id: 'liquid-jersey', name: 'Liquid Jersey', kat: 'Jersey', preis: 14.00,
      imgs: ['editorial-schwarz-01.jpg'],
      kurz: 'Fließender Fall, weicher Griff — der Jersey für Tage in Bewegung.',
      desc: 'Ein Jersey mit fließendem Fall — er liegt weich auf, folgt jeder Bewegung und behält den Tag über seine Form. Blickdicht, reibungsarm und unkompliziert im Alltag.',
      masse: 'ca. 185 × 70 cm · ca. 220–280 g/m²', pflege: '30 °C Schonwäsche · kein Trockner · liegend trocknen',
      tags: ['alltag', 'buero', 'uni', 'bewegung', 'reise'], saison: 'ganzjahr', festlich: false, halt: 5, leicht: 3 },
    { id: 'premium-jersey', name: 'Premium Jersey', kat: 'Jersey', preis: 13.00,
      imgs: ['editorial-grau-01.jpg'],
      kurz: 'Der Klassiker der Maison: dicht, matt, blickdicht.',
      desc: 'Der Klassiker der Maison: dicht gearbeiteter Jersey mit mattem Finish. Formstabil, blickdicht und angenehm unkompliziert — das Tuch für jeden Tag.',
      masse: 'ca. 185 × 70 cm · ca. 220–280 g/m²', pflege: '30 °C Schonwäsche · kein Trockner · liegend trocknen',
      tags: ['alltag', 'buero', 'uni', 'einstieg'], saison: 'ganzjahr', festlich: false, halt: 5, leicht: 2 },
    { id: 'premium-jersey-satin', name: 'Premium Jersey Satin', kat: 'Jersey', preis: 15.00,
      imgs: ['editorial-mauve-02.jpg', 'editorial-creme-01.jpg'],
      kurz: 'Die festliche Seite des Jerseys — ein leiser, matter Schimmer.',
      desc: 'Die festliche Seite des Jerseys: ein leiser, matter Schimmer über weichem Griff. Für Abende, Feste und Momente, die in Erinnerung bleiben.',
      masse: 'ca. 185 × 70 cm · ca. 220–280 g/m²', pflege: '30 °C Schonwäsche · auf links bügeln',
      tags: ['fest', 'abend', 'eid', 'hochzeit'], saison: 'ganzjahr', festlich: true, halt: 4, leicht: 2 },
    { id: 'premium-jersey-wellen', name: 'Premium Jersey mit Wellen', kat: 'Jersey', preis: 13.50,
      imgs: ['editorial-marine-02.jpg'],
      kurz: 'Feine Wellenstruktur, die das Licht bricht.',
      desc: 'Eine feine Wellenstruktur, die das Licht bricht — Textur, die man sieht und spürt. Für alle, die Understatement mit Charakter tragen.',
      masse: 'ca. 185 × 70 cm · ca. 220–280 g/m²', pflege: '30 °C Schonwäsche · kein Trockner · liegend trocknen',
      tags: ['alltag', 'buero', 'textur'], saison: 'ganzjahr', festlich: false, halt: 5, leicht: 2 },
    { id: 'bamboo', name: 'Bamboo', kat: 'Bamboo', preis: 12.00,
      imgs: ['editorial-salbei-02.jpg', 'drape-salbei-01.jpg'],
      kurz: 'Bambusviskose: leicht, atmungsaktiv, angenehm auf der Haut.',
      desc: 'Bambusviskose in ihrer leichtesten Form: atmungsaktiv, angenehm temperierend und weich auf der Haut. Für lange Tage und warme Monate.',
      masse: 'ca. 185 × 70 cm · ca. 160–190 g/m²', pflege: 'Handwäsche · nicht wringen · liegend trocknen',
      tags: ['sommer', 'alltag', 'sensibel', 'reise'], saison: 'sommer', festlich: false, halt: 3, leicht: 5 },
    { id: 'premium-bamboo', name: 'Premium Bamboo', kat: 'Bamboo', preis: 14.00,
      imgs: ['editorial-taupe-01.jpg', 'drape-taupe-01.jpg'],
      kurz: 'Die leichteste Qualität in dichter Ausführung — sanft zum Haaransatz.',
      desc: 'Unsere leichteste Qualität in dichterer Ausführung: der elegante Fall von Bambusviskose mit mehr Substanz. Sanft zum Haaransatz, atmungsaktiv, ruhig im Ausdruck.',
      masse: 'ca. 185 × 70 cm · ca. 160–190 g/m²', pflege: 'Handwäsche · nicht wringen · liegend trocknen',
      tags: ['sommer', 'alltag', 'buero', 'sensibel', 'hero'], saison: 'ganzjahr', festlich: false, halt: 4, leicht: 4 },
    { id: 'medina-seide', name: 'Medina Seide', kat: 'Feine Stoffe', preis: 10.00,
      imgs: ['editorial-taupe-02.jpg'],
      kurz: 'Seidig-matter Griff, feine Crêpe-Struktur — hält ohne Nadel.',
      desc: 'Seidig-matter Griff auf feiner Crêpe-Struktur: Medina hält die Drapierung auch ohne Nadel und bewahrt den ganzen Tag ihre Form. (Keine Maulbeerseide.)',
      masse: 'ca. 185 × 70 cm · leichte Qualität', pflege: 'Kalte Handwäsche · Dampf statt Druck',
      tags: ['alltag', 'buero', 'fest', 'ohne-nadel'], saison: 'ganzjahr', festlich: true, halt: 5, leicht: 4 },
    { id: 'chiffon', name: 'Chiffon', kat: 'Feine Stoffe', preis: 8.00,
      imgs: ['editorial-creme-02.jpg'],
      kurz: 'Transparente Leichtigkeit für besondere Stunden.',
      desc: 'Transparente Leichtigkeit für gelegte Lagen: Chiffon bringt Tiefe in jede Drapierung und bleibt dabei federleicht. Für besondere Stunden.',
      masse: 'ca. 185 × 70 cm · ca. 40–60 g/m²', pflege: 'Kalte Handwäsche · hängend trocknen · Dampf',
      tags: ['fest', 'abend', 'hochzeit', 'eid', 'lagen'], saison: 'ganzjahr', festlich: true, halt: 2, leicht: 5 },
    { id: 'bonnet', name: 'Bonnet', kat: 'Accessoires', preis: 4.50,
      imgs: ['flatlay-01.jpg'],
      kurz: 'Die Basis unter jedem Tuch — sicher, reibungsarm, atmungsaktiv.',
      desc: 'Die Basis unter jedem Tuch: unser Bonnet hält sicher, ohne zu ziehen — reibungsarm, atmungsaktiv und unsichtbar unter jeder Drapierung.',
      masse: 'Einheitsgröße mit sanftem Stretch', pflege: '30 °C im Wäschenetz · kein Trockner',
      tags: ['basis', 'einstieg', 'halt'], saison: 'ganzjahr', festlich: false, halt: 5, leicht: 4 },
    { id: 'nadeln', name: 'Nadeln', kat: 'Accessoires', preis: 1.50,
      imgs: ['flatlay-01.jpg'],
      kurz: 'Feine Nadeln mit sicherem Halt.',
      desc: 'Feine Nadeln mit sicherem Halt — das stille Werkzeug jeder Drapierung. Glatt poliert, damit sie feine Stoffe nicht zeichnen.',
      masse: 'Set mit mehreren Nadeln', pflege: 'Trocken aufbewahren · von Kindern fernhalten',
      tags: ['basis', 'halt'], saison: 'ganzjahr', festlich: false, halt: 5, leicht: 5 }
  ];
  const byId = id => KATALOG.find(p => p.id === id);
  const fmt = n => n.toFixed(2).replace('.', ',') + ' €';
  const CROSS = { chiffon: ['bonnet', 'nadeln'], 'medina-seide': ['nadeln'], 'premium-jersey-satin': ['nadeln'], bamboo: ['bonnet'], 'premium-bamboo': ['bonnet'] };

  /* ────────────────────────────────────────────────
     2 · FARBEN — die neun Töne der Maison
     ──────────────────────────────────────────────── */
  const FARBEN = {
    salbei:  { name: 'Salbei',  hex: '#A9B49A', temp: 'neutral', tiefe: 'hell',
      steht: 'Salbei ist der große Vermittler: Das graugrüne Understatement schmeichelt fast jedem Teint — besonders schön zu warmen und neutralen Untertönen.',
      kombi: 'Creme, Taupe und Espresso-Braun; im Sommer zu Leinenweiß.' },
    creme:   { name: 'Creme',   hex: '#E8DCCB', temp: 'warm', tiefe: 'hell',
      steht: 'Creme macht warme Hauttöne lebendig und wirkt weicher als hartes Weiß — ideal, wenn reines Weiß Sie blass wirken lässt.',
      kombi: 'Taupe, Olive, Gold-Akzente; sehr edel zu Marine als Kontrast.' },
    grau:    { name: 'Grau',    hex: '#A8A29B', temp: 'kuehl', tiefe: 'hell',
      steht: 'Ein stiller, kühler Ton, der klare, kühle Untertöne rahmt, ohne zu dominieren. Zu warmem Teint besser als Begleiter denn als Hauptton.',
      kombi: 'Mauve, Marine, Schwarz — Ton-in-Ton mit Silber-Schmuck.' },
    marine:  { name: 'Marine',  hex: '#2E3A4E', temp: 'kuehl', tiefe: 'tief',
      steht: 'Die elegante Alternative zu Schwarz: Marine gibt kühlen und tiefen Farbtypen Klarheit und wirkt im Büro souveräner als jedes Schwarz.',
      kombi: 'Creme (Kontrast), Grau, Mauve; Gold-Schmuck macht Marine wärmer.' },
    mauve:   { name: 'Mauve',   hex: '#B08E9A', temp: 'kuehl', tiefe: 'hell',
      steht: 'Ein staubiges Rosa mit kühler Seele — es bringt frische in kühle Teints und ist der romantischste Ton der Maison.',
      kombi: 'Grau, Marine, Creme; wunderbar zu silbernem Schmuck.' },
    olive:   { name: 'Olive',   hex: '#77775C', temp: 'warm', tiefe: 'tief',
      steht: 'Erdig und selbstbewusst: Olive lässt warme, goldene Untertöne leuchten und steht tiefen, warmen Farbtypen außergewöhnlich gut.',
      kombi: 'Creme, Taupe, Camel; Gold-Akzente sind hier zu Hause.' },
    rose:    { name: 'Rosé',    hex: '#C99B94', temp: 'warm', tiefe: 'hell',
      steht: 'Ein warmes, pudriges Rosé — es schenkt hellen, warmen Teints einen sanften Glow und wirkt nie süßlich.',
      kombi: 'Creme, Taupe, Salbei — der perfekte Frühlingsakkord.' },
    taupe:   { name: 'Taupe',   hex: '#8C7767', temp: 'warm', tiefe: 'tief',
      steht: 'Der Signature-Ton der Maison: warm, tief, unaufgeregt. Taupe adelt warme Untertöne und ist die verlässlichste Basis einer Capsule-Garderobe.',
      kombi: 'Creme, Olive, Espresso; heller Denim macht Taupe lässig.' },
    schwarz: { name: 'Schwarz', hex: '#1E1A17', temp: 'neutral', tiefe: 'tief',
      steht: 'Zeitlos und klar — Schwarz braucht Kontrast: Es steht tiefen, kontrastreichen Typen am besten. Weiche, helle Typen greifen lieber zu Marine oder Taupe.',
      kombi: 'Alles — am schönsten mit Creme, Gold und Textur (Wellen, Satin).' }
  };

  /* ────────────────────────────────────────────────
     3 · FARBPASS — die Analyse (8 Fragen, 6 Welten)
     ──────────────────────────────────────────────── */
  const FP_FRAGEN = [
    { q: 'Schauen Sie auf die Innenseite Ihres Handgelenks — wie wirken Ihre Adern?',
      hint: 'Am besten bei Tageslicht.',
      a: [ { t: 'Eher grünlich', w: 2, d: 0, k: 0 },
           { t: 'Eher bläulich bis violett', w: -2, d: 0, k: 0 },
           { t: 'Beides — schwer zu sagen', w: 0, d: 0, k: 0 } ] },
    { q: 'Welcher Schmuck lässt Ihre Haut frischer wirken?',
      hint: 'Denken Sie an Fotos, auf denen Sie sich gefallen.',
      a: [ { t: 'Gold', w: 2, d: 0, k: 0 },
           { t: 'Silber', w: -2, d: 0, k: 0 },
           { t: 'Mir steht beides gleich', w: 0, d: 0, k: 0 } ] },
    { q: 'Wie reagiert Ihre Haut auf Sonne?',
      a: [ { t: 'Sie wird schnell goldbraun', w: 1, d: 1, k: 0 },
           { t: 'Sie rötet sich zuerst', w: -1, d: 0, k: 0 },
           { t: 'Erst leicht rot, dann braun', w: 0, d: 0, k: 0 } ] },
    { q: 'Ihre natürliche Haarfarbe (ohne Färbung)?',
      a: [ { t: 'Goldbraun bis warmes Dunkelbraun', w: 1, d: 0, k: 0 },
           { t: 'Tiefes Schwarz', w: -1, d: 2, k: 1 },
           { t: 'Aschbraun, kühles Braun', w: -1, d: 0, k: 0 },
           { t: 'Hellbraun mit goldenen Reflexen', w: 1, d: -1, k: -1 } ] },
    { q: 'Und Ihre Augenfarbe?',
      a: [ { t: 'Honig-, Bernstein- oder warmes Braun', w: 1, d: 0, k: 0 },
           { t: 'Sehr dunkles Braun, fast schwarz', w: 0, d: 2, k: 1 },
           { t: 'Grau, Blau oder kühles Grün', w: -1, d: -1, k: 0 },
           { t: 'Dunkel mit warmem Kern', w: 1, d: 1, k: 0 } ] },
    { q: 'Halten Sie ein reines Weiß und ein Cremeweiß neben Ihr Gesicht — was passiert?',
      hint: 'Ein weißes Blatt und ein beiger Umschlag genügen.',
      a: [ { t: 'Reines Weiß wirkt frischer', w: -2, d: 0, k: 1 },
           { t: 'Creme wirkt weicher, gesünder', w: 2, d: 0, k: -1 },
           { t: 'Ehrlich: kein Unterschied', w: 0, d: 0, k: 0 } ] },
    { q: 'Wie stark ist der Kontrast zwischen Ihrer Haut und Ihrem Haar?',
      a: [ { t: 'Stark — dunkles Haar, helle Haut', w: 0, d: 1, k: 2 },
           { t: 'Mittel', w: 0, d: 0, k: 0 },
           { t: 'Weich — alles liegt nah beieinander', w: 0, d: -1, k: -2 } ] },
    { q: 'Und zum Schluss: Wie möchten Sie wirken?',
      hint: 'Es gibt kein falsch — das fließt in Ihre Empfehlung ein.',
      a: [ { t: 'Strahlend und klar', w: 0, d: 0, k: 1, stil: 'klar' },
           { t: 'Sanft und harmonisch', w: 0, d: -1, k: -1, stil: 'sanft' },
           { t: 'Tief und geheimnisvoll elegant', w: 0, d: 1, k: 0, stil: 'tief' } ] }
  ];

  const FP_WELTEN = {
    warm_hell: { name: 'Goldenes Licht', sub: 'Warm & hell',
      text: 'Ihr Teint trägt Gold in sich — helle, warme Töne lassen Sie von innen leuchten. Harte, kalte Farben nehmen Ihnen dieses Licht; weiche, cremige Nuancen schenken es Ihnen zurück.',
      haupt: ['creme', 'rose', 'salbei', 'taupe'], neben: ['olive'],
      meiden: [['schwarz', 'wirkt schnell hart neben Ihrem weichen Teint — wenn Schwarz, dann mit Creme am Gesicht'], ['grau', 'kann Sie müde wirken lassen']],
      finish: 'Matte und leicht schimmernde Oberflächen — Satin in Creme ist Ihr Festtags-Trumpf.',
      produkte: ['premium-bamboo', 'premium-jersey-satin'], stil: 'Ton-in-Ton in Creme und Rosé, dazu Gold-Schmuck.' },
    warm_tief: { name: 'Goldene Erde', sub: 'Warm & tief',
      text: 'Erdig, satt, golden: Ihr Farbtyp verträgt Tiefe und dankt sie Ihnen mit Präsenz. Olive und Taupe sind nicht nur Farben für Sie — sie sind Ihre Verbündeten.',
      haupt: ['olive', 'taupe', 'creme', 'schwarz'], neben: ['salbei'],
      meiden: [['grau', 'lässt goldene Untertöne fahl wirken'], ['mauve', 'kühlt Ihren Teint aus']],
      finish: 'Matte Tiefe steht Ihnen am besten; Struktur (Wellen) unterstreicht die Erdigkeit.',
      produkte: ['premium-bamboo', 'premium-jersey-wellen'], stil: 'Olive oder Taupe als Basis, Creme als Lichtpunkt am Gesicht.' },
    kuehl_hell: { name: 'Klarer Morgen', sub: 'Kühl & hell',
      text: 'Ihr Teint liebt Frische: kühle, helle Töne mit klarem Charakter. Gelbstichige Farben dämpfen Sie — rosige und graublaue Nuancen bringen Ihre Klarheit zum Vorschein.',
      haupt: ['mauve', 'grau', 'salbei', 'marine'], neben: ['schwarz'],
      meiden: [['creme', 'kann gelblich wirken — greifen Sie eher zu kühlem Hellgrau'], ['olive', 'schluckt Ihre Frische']],
      finish: 'Klare, glatte Oberflächen; leiser Schimmer in Mauve für den Abend.',
      produkte: ['premium-jersey', 'premium-jersey-satin'], stil: 'Mauve am Gesicht, Marine als Rahmen, Silber-Schmuck.' },
    kuehl_tief: { name: 'Stille Tiefe', sub: 'Kühl & tief',
      text: 'Tiefe, kühle Eleganz: Marine, Schwarz und Grau rahmen Ihr Gesicht wie ein Passepartout. Sie können Kontraste tragen, die andere erdrücken würden — nutzen Sie das.',
      haupt: ['marine', 'schwarz', 'mauve', 'grau'], neben: ['salbei'],
      meiden: [['creme', 'zu warm — helles Grau ist Ihr „Weiß“'], ['rose', 'zu pudrig für Ihre Klarheit']],
      finish: 'Tiefe matte Töne oder deutlicher Kontrast; Wellenstruktur in Marine ist wie für Sie gemacht.',
      produkte: ['premium-jersey-wellen', 'liquid-jersey'], stil: 'Marine oder Schwarz, dazu ein kühler heller Akzent — fertig.' },
    neutral_hell: { name: 'Sanfte Mitte', sub: 'Neutral & hell',
      text: 'Sie gehören zu den Glücklichen der Mitte: Weder Wärme noch Kühle dominiert Ihren Teint. Gedämpfte, helle Töne sind Ihre Heimat — laute Farben braucht Ihr Gesicht nicht.',
      haupt: ['salbei', 'creme', 'grau', 'rose'], neben: ['taupe', 'mauve'],
      meiden: [['schwarz', 'darf, aber mit weichem Stoff — sonst zu streng']],
      finish: 'Weiche, matte Oberflächen; Bamboo-Qualitäten unterstreichen Ihre Natürlichkeit.',
      produkte: ['bamboo', 'premium-bamboo'], stil: 'Salbei, Creme, Rosé — mischen Sie frei, es wird immer harmonisch.' },
    neutral_tief: { name: 'Samtene Tiefe', sub: 'Neutral & tief',
      text: 'Ausgewogen im Unterton, stark in der Tiefe: Sie tragen die satten Töne der Maison mit Selbstverständlichkeit — von Taupe über Marine bis Olive steht Ihnen die ganze dunkle Palette.',
      haupt: ['taupe', 'marine', 'olive', 'schwarz'], neben: ['salbei', 'grau'],
      meiden: [['rose', 'zu zart — Sie können mehr Tiefe tragen']],
      finish: 'Satte, matte Töne; Satin in Taupe oder Marine für große Abende.',
      produkte: ['premium-bamboo', 'premium-jersey-satin'], stil: 'Taupe als Signatur, Marine fürs Büro, Olive fürs Wochenende.' }
  };

  function fpAuswerten(antworten) {
    // antworten: Array der gewählten Options-Objekte
    let w = 0, d = 0, k = 0, stil = null;
    antworten.forEach(a => { w += a.w; d += a.d; k += a.k; if (a.stil) stil = a.stil; });
    const temp = w >= 2 ? 'warm' : w <= -2 ? 'kuehl' : 'neutral';
    const tiefe = d >= 2 ? 'tief' : 'hell';
    const kontrast = k >= 2 ? 'hoch' : k <= -2 ? 'weich' : 'mittel';
    const id = temp + '_' + tiefe;
    return { id, temp, tiefe, kontrast, stil, w, d, k, welt: FP_WELTEN[id], datum: new Date().toISOString().slice(0, 10) };
  }

  function fpSpeichern(result) {
    try { localStorage.setItem('hima_farbpass', JSON.stringify({
      id: result.id, kontrast: result.kontrast, stil: result.stil, datum: result.datum
    })); } catch {}
  }
  function fpLaden() {
    try { const r = JSON.parse(localStorage.getItem('hima_farbpass'));
      if (r && FP_WELTEN[r.id]) return { ...r, welt: FP_WELTEN[r.id] }; } catch {}
    return null;
  }

  const KONTRAST_NOTE = {
    hoch: 'Ihr Kontrast ist hoch — Sie dürfen Ihr Gesicht klar rahmen: dunkler Ton außen, heller Ton am Gesicht wirkt bei Ihnen großartig.',
    weich: 'Ihr Kontrast ist weich — Ton-in-Ton-Drapierungen ohne harte Kanten schmeicheln Ihnen am meisten.',
    mittel: 'Ihr Kontrast ist ausgewogen — Sie können sowohl Ton-in-Ton als auch sanfte Kontraste tragen.'
  };

  /* Farbpass als PNG (Canvas 1080×1350, Instagram-tauglich) */
  function fpToPNG(result, done) {
    const c = document.createElement('canvas');
    c.width = 1080; c.height = 1350;
    const x = c.getContext('2d');
    const welt = result.welt;
    x.fillStyle = '#F4EFE6'; x.fillRect(0, 0, 1080, 1350);
    x.fillStyle = '#2C1A10'; x.fillRect(0, 0, 1080, 14);
    x.textAlign = 'center';
    x.fillStyle = '#B8965A'; x.font = '28px Inter, sans-serif';
    x.fillText('D E R   F A R B P A S S', 540, 130);
    x.fillStyle = '#2C1A10'; x.font = '500 96px "Playfair Display", Georgia, serif';
    x.fillText(welt.name, 540, 250);
    x.fillStyle = '#7A654F'; x.font = '34px "Cormorant Garamond", Georgia, serif';
    x.fillText(welt.sub + '  ·  Kontrast: ' + result.kontrast, 540, 310);
    // Goldlinie
    x.strokeStyle = '#B8965A'; x.lineWidth = 2;
    x.beginPath(); x.moveTo(460, 350); x.lineTo(620, 350); x.stroke();
    // Haupttöne
    const farben = welt.haupt.map(f => FARBEN[f]);
    const r = 92, gap = 230, x0 = 540 - gap * (farben.length - 1) / 2;
    farben.forEach((f, i) => {
      x.beginPath(); x.arc(x0 + i * gap, 560, r, 0, Math.PI * 2);
      x.fillStyle = f.hex; x.fill();
      x.strokeStyle = 'rgba(44,26,16,.15)'; x.lineWidth = 2; x.stroke();
      x.fillStyle = '#2C1A10'; x.font = '30px "Cormorant Garamond", Georgia, serif';
      x.fillText(f.name, x0 + i * gap, 560 + r + 52);
    });
    // Nebentöne
    x.fillStyle = '#7A654F'; x.font = '26px Inter, sans-serif';
    x.fillText('BEGLEITER', 540, 800);
    const neben = welt.neben.map(f => FARBEN[f]);
    const nx0 = 540 - 120 * (neben.length - 1) / 2;
    neben.forEach((f, i) => {
      x.beginPath(); x.arc(nx0 + i * 120, 880, 44, 0, Math.PI * 2);
      x.fillStyle = f.hex; x.fill();
      x.strokeStyle = 'rgba(44,26,16,.15)'; x.stroke();
    });
    // Beschreibung (umbrochen)
    x.fillStyle = '#232323'; x.font = '36px "Cormorant Garamond", Georgia, serif';
    const words = welt.text.split(' '); let line = '', y = 1010; const lines = [];
    words.forEach(wd => {
      if (x.measureText(line + wd).width > 820) { lines.push(line); line = wd + ' '; }
      else line += wd + ' ';
    });
    lines.push(line);
    lines.slice(0, 5).forEach(l => { x.fillText(l.trim(), 540, y); y += 50; });
    // Fußzeile
    x.fillStyle = '#2C1A10'; x.font = '500 44px "Playfair Display", Georgia, serif';
    x.fillText('H I M A', 540, 1270);
    x.fillStyle = '#B8965A'; x.font = '24px Inter, sans-serif';
    x.fillText('Maison de Modestie · ' + result.datum, 540, 1310);
    done(c.toDataURL('image/png'));
  }

  /* ────────────────────────────────────────────────
     4 · AMIRA — Persona, Kontext & Gespräch
     ──────────────────────────────────────────────── */
  let ctx = { name: null, turns: 0, lastTopic: null, slot: null, anlass: null, begruesst: false };
  try { ctx = { ...ctx, ...(JSON.parse(localStorage.getItem('hima_amira')) || {}) }; } catch {}
  const remember = () => { try { localStorage.setItem('hima_amira', JSON.stringify({ name: ctx.name, anlass: ctx.anlass })); } catch {} };

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const anrede = () => ctx.name ? ', ' + ctx.name : '';

  /* Empfehlung nach Anlass/Saison + Farbwelt */
  function empfehlen(anlass) {
    const pass = fpLaden();
    let prods = KATALOG.filter(p => p.kat !== 'Accessoires');
    if (anlass) prods = prods.filter(p => p.tags.includes(anlass) || (anlass === 'fest' && p.festlich));
    if (!prods.length) prods = KATALOG.filter(p => p.tags.includes('alltag'));
    prods = prods.slice(0, 2);
    const cross = CROSS[prods[0]?.id];
    let farbsatz = '';
    if (pass) {
      const f = pass.welt.haupt.slice(0, 2).map(k => FARBEN[k].name).join(' oder ');
      farbsatz = ` Nach Ihrem Farbpass („${pass.welt.name}") würde ich zu ${f} greifen.`;
    } else {
      farbsatz = ' Wenn Sie mögen, finden wir mit dem Farbpass in zwei Minuten auch noch Ihren Ton.';
    }
    return { prods: prods.map(p => p.id), cross, farbsatz };
  }

  /* Umgangssprache verstehen: Slang wird vor dem Matching normalisiert */
  const SLANG = [
    [/\bhaste\b/gi, 'hast du'], [/\bgibts\b/gi, 'gibt es'], [/\bwillste\b/gi, 'willst du'],
    [/\bkannste\b/gi, 'kannst du'], [/\bbiste\b/gi, 'bist du'], [/\bmachste\b/gi, 'machst du'],
    [/\bwas'?n\b/gi, 'was denn'], [/\b(vllt|vlt)\b/gi, 'vielleicht'], [/\biwas\b/gi, 'irgendetwas'],
    [/\biwie\b/gi, 'irgendwie'], [/\bnix\b/gi, 'nichts'], [/\bwat\b/gi, 'was'],
    [/\bma\b/gi, 'mal'], [/\bnen\b/gi, 'einen'], [/\bjezz?t?\b/gi, 'jetzt'],
    [/\b(hidschab|hidjab|hijaab|hedschab)\b/gi, 'hijab'], [/\bkopftuch\b/gi, 'hijab'],
    [/\bwie läufts\b/gi, 'wie geht es dir'], [/\balles fit\b/gi, 'wie geht es dir'],
    [/\bwas geht\b/gi, 'hallo wie geht es dir'], [/\bzeig her\b/gi, 'zeig mir etwas']
  ];
  const normalisieren = s => { let t = s; SLANG.forEach(([rx, ers]) => t = t.replace(rx, ers)); return t; };

  /* Kontext-Angebot: Wenn Amira etwas anbietet, versteht sie danach „ja/ne/ok" */
  function resolveOffer() {
    const o = ctx.offer; ctx.offer = null;
    if (o === 'farbpass') return { text: 'Wunderbar — der Farbpass wartet auf ' + (ctx.name ? ctx.name : 'Sie') + '. Acht Fragen, zwei Minuten, und ich kenne Ihre Töne für immer.', action: 'farbpass', chips: ['Und danach?', 'Doch lieber Beratung'] };
    if (o === 'starter') return { text: 'Sehr gern! Hier ist das Starter-Duo: Premium Jersey (' + fmt(13) + ') als verlässliche Basis und das Bonnet (' + fmt(4.5) + ') für sicheren Halt. Damit gelingt jeder Morgen — versprochen.', products: ['premium-jersey', 'bonnet'], chips: ['In die Tasche legen', 'Welche Farbe für den Anfang?'] };
    if (o && o.indexOf('zeigen:') === 0) return { text: 'Gern — das hier passt zu unserem Gespräch:', products: o.slice(7).split(','), chips: ['Und die Preise?', 'Etwas anderes zeigen'] };
    ctx.slot = 'anlass';
    return { text: 'Schön! Dann verraten Sie mir kurz: Wofür soll es sein — Alltag, Büro, ein Fest oder die warmen Tage?', chips: ['Für den Alltag', 'Fürs Büro', 'Für ein Fest', 'Für den Sommer'] };
  }

  /* Die Intents: [id, regex, handler] — Reihenfolge = Priorität innerhalb gleicher Trefferzahl */
  const INTENTS = [

    /* — Kurzantworten & Umgangston (Konversationsfähigkeit) — */
    ['ja', /^\s*(ja+|jo+|jop|jup|jaja|gern(e)?|ok(ay)? gern|klar|na klar|sicher|mach( mal)?|los|passt|auf jeden( fall)?|unbedingt|ja bitte|warum nicht|why not)\s*[!.…]*\s*$/i, () => resolveOffer()],
    ['nein', /^\s*(nein+|ne+|nö+|nee+|lieber nicht|kein interesse|nicht jetzt|später( vielleicht)?|erstmal nicht|lass mal)\s*[!.…]*\s*$/i, () => {
      ctx.offer = null; ctx.slot = null;
      return { text: pick(['Völlig in Ordnung — Sie bestimmen das Tempo. Ich bin hier, wenn Sie mich brauchen. Mögen Sie stattdessen einfach ein bisschen stöbern oder plaudern?', 'Kein Problem. Dann anders gefragt: Gibt es etwas, das Sie schon immer über Stoffe oder Farben wissen wollten?']), chips: ['Einfach plaudern', 'Zeig mir den Bestseller', 'Welche Farbe steht mir?'] };
    }],
    ['okay', /^\s*(ok(ay)?|alles klar|aha|ach ?so|verstanden|mhm+|hm+|gut|schon gut)\s*[!.…]*\s*$/i, () => ({
      text: pick(['Gut! Und was darf der nächste Schritt sein — etwas ansehen, etwas fragen, oder finden wir Ihren Farbton?', 'Fein. Womit mache ich Ihnen jetzt eine Freude?']),
      chips: ['Zeig mir etwas Schönes', 'Farbpass starten', 'Erzähl mir etwas'] })],
    ['lachen', /^\s*(ha(ha)+|lo+l|hihi+|xd|😂+|🤣+)\s*[!.…]*\s*$/i, () => ({
      text: pick(['Ihr Lachen ist das schönste Accessoire — das steht übrigens zu jedem unserer Töne. Weiter im Programm?', 'Sehen Sie, so macht Beratung Freude. Was darf ich als Nächstes zeigen?']),
      chips: ['Zeig mir etwas Schönes', 'Erzähl noch etwas'] })],
    ['zustimmung_kurz', /^\s*(cool|nice|krass|geil|wow|toll|super|schön|sehr schön|mega|stark|hübsch|love it)\s*[!.…]*\s*$/i, () => ({
      text: pick(['Nicht wahr? Genau dieses Gefühl wollen wir. Soll ich es Ihnen zur Seite legen — oder zeige ich noch eine Alternative?', 'Das freut mich! Und ehrlich: In echt wirkt es noch schöner als im Bild. Darf ich noch etwas Passendes dazu zeigen?']),
      chips: ['In die Tasche legen', 'Zeig mir mehr', 'Was passt dazu?'] })],
    ['unklar', /\b(hä+|versteh (ich )?nich?t|was meinst du|wie jetzt|check ich nicht|nochmal bitte|zu kompliziert)\b/i, () => ({
      text: 'Entschuldigen Sie — das war zu verschachtelt von mir. Ich versuche es einfacher: Sagen Sie mir in einem Wort, worum es geht — ein Stoff, eine Farbe, die Pflege oder eine Empfehlung — und ich antworte kurz und klar.',
      chips: ['Empfehlung', 'Farbe', 'Pflege', 'Preise'] })],
    ['beleidigung', /\b(dumm|blöd|doof|nutzlos|schei+ße|kacke|schrott|kannst (ja )?nichts|bringst nichts)\b/i, () => ({
      text: 'Das nehme ich mir zu Herzen — ehrlich. Ich bin nicht perfekt, aber ich lerne mit jedem Gespräch. Geben Sie mir noch eine Chance mit einer konkreten Frage? Und wenn Sie lieber mit einem Menschen sprechen: ' + MAIL + ' antwortet innerhalb von 24 Stunden, persönlich.',
      chips: ['Noch eine Chance: Beratung', 'E-Mail ans Atelier'] })],
    ['ueber_dich', /\b(erzähl (mal )?(was )?von dir|wie alt bist du|bist du verheiratet|hast du (kinder|familie|hobbys)|wo (wohnst|lebst) du|was machst du so)\b/i, () => ({
      text: 'Wie charmant, dass Sie fragen! Also: Ich wohne in der Maison — zwischen Stoffballen und Farbkarten, der schönste Ort, den ich kenne. Alter sage ich nicht (eine Dame schweigt), verheiratet bin ich mit meinem Beruf, und mein Hobby ist es, den einen Ton zu finden, der ein Gesicht zum Leuchten bringt. Genug von mir — erzählen Sie: Was führt Sie her?',
      chips: ['Ich suche etwas', 'Einfach neugierig', 'Welche Farbe steht mir?'] })],

    /* — Begrüßung & Smalltalk — */
    ['gruss', /\b(hallo|hi|hey|salam|assalam|selam|guten (tag|morgen|abend)|servus|moin)\b/i, () => {
      const pass = fpLaden();
      if (ctx.turns > 2) return { text: pick(['Wir kennen uns ja schon — womit darf ich weitermachen' + anrede() + '?', 'Schön, dass Sie noch da sind. Was schauen wir uns als Nächstes an?']), chips: ['Empfiehl mir etwas', 'Welche Farbe steht mir?', 'Erzähl mir von HIMA'] };
      const base = pick([
        'Wa alaikum as-salam wa rahmatullah — herzlich willkommen in der Maison. Ich bin Amira, Ihre Beraterin für Stoffe, Farben und alles rund um den Hijab.',
        'Herzlich willkommen, schön dass Sie da sind. Ich bin Amira — ich kenne jede Qualität der Maison und plaudere auch gern einfach mit Ihnen.'
      ]);
      const zusatz = pass ? ` Ich sehe, Ihr Farbpass sagt „${pass.welt.name}" — das behalte ich für meine Empfehlungen im Kopf.` : '';
      return { text: base + zusatz, offer: 'beratung', chips: ['Empfiehl mir etwas', 'Welche Farbe steht mir?', 'Ich trage neu Hijab', 'Einfach plaudern'] };
    }],
    ['wiegehts', /\b(wie geht('|)s|wie geht es (dir|ihnen)|alles gut( bei dir)?)\b/i, () => ({
      text: pick([
        'Alhamdulillah — mir geht es gut. Ich habe heute schon über Farben philosophiert und Stoffe sortiert, mein liebster Zeitvertreib. Und Ihnen? Suchen Sie etwas Bestimmtes oder schauen wir gemeinsam?',
        'Danke der Nachfrage — bestens! Zwischen Taupe und Salbei kann ein Tag ja nur gut sein. Wie geht es Ihnen? Darf ich Ihnen etwas Schönes zeigen?'
      ]), offer: 'beratung', chips: ['Zeig mir etwas Schönes', 'Was ist neu?', 'Welcher Stoff passt zu mir?'] })],
    ['werbistdu', /\b(wer bist du|bist du (echt|ein mensch|eine ki|ein bot|künstlich)|was bist du|was kannst du)\b/i, () => ({
      text: 'Ganz ehrlich: Ich bin die digitale Beraterin der Maison — kein Mensch, aber mit Herz programmiert. Ich kenne unsere Stoffe bis zur Grammatur, unsere Farben bis zum Unterton, und über Hijab, Stil und den Glauben spreche ich gern und mit Respekt. Alles bleibt dabei auf Ihrem Gerät — ich funktioniere sogar offline. Was ich nicht weiß, sage ich ehrlich — und verbinde Sie mit einem Menschen: ' + MAIL,
      chips: ['Was kannst du alles?', 'Empfiehl mir etwas', 'Wie funktioniert der Farbpass?'] })],
    ['faehigkeiten', /\b(was kannst du( alles| so)?|hilf mir|mir helfen|womit kannst du|was weißt du)\b/i, () => ({
      text: 'Ich bin für drei Dinge da: Erstens Beratung — welcher Stoff, welche Farbe, welcher Stil zu Ihnen passt. Zweitens Wissen — Pflege, Drapierung, Materialkunde, und Fragen rund um Hijab und Glauben beantworte ich einfühlsam und ehrlich. Drittens Gesellschaft — Sie dürfen auch einfach mit mir plaudern. Womit fangen wir an?',
      chips: ['Beratung starten', 'Wie pflege ich meinen Hijab?', 'Warum tragen Frauen Hijab?'] })],
    ['name', /(?:\b[Ii]ch heiße|\b[Mm]ein [Nn]ame ist)\s+([a-zA-ZÄÖÜäöüß][a-zäöüß-]{2,})|\b[Ii]ch bin\s+([A-ZÄÖÜ][a-zäöüß-]{2,})\b(?!\s)/, (m) => {
      const roh = m[1] || m[2];
      ctx.name = roh.charAt(0).toUpperCase() + roh.slice(1); remember();
      return { text: `Wie schön, ${ctx.name} — ein Name, den ich mir gern merke. Sagen Sie: Suchen Sie heute etwas Bestimmtes, oder darf ich Sie ein wenig inspirieren?`, chips: ['Inspirier mich', 'Ich suche etwas Bestimmtes', 'Welche Farbe steht mir?'] };
    }],
    ['danke', /\b(danke|schukran|shukran|dankeschön|vielen dank|jazak)\b/i, () => ({
      text: pick([
        'Von Herzen gern' + anrede() + '. Dafür bin ich da — und die Maison freut sich auf Sie.',
        'Sehr gern! Wenn Sie mögen, hinterlege ich Ihnen noch Ihren Farbton im Farbpass — dann werden meine Empfehlungen beim nächsten Mal noch persönlicher.'
      ]), chips: ['Farbpass starten', 'Noch eine Frage', 'Zur Kollektion'] })],
    ['bye', /\b(tschüss|ciao|bis bald|auf wiedersehen|ma('| )a?ssalama|gute nacht)\b/i, () => ({
      text: pick([
        'Ma’a as-salama' + anrede() + ' — gehen Sie behütet. Die Maison ist da, wann immer Sie wiederkommen.',
        'Bis bald — und denken Sie daran: Eleganz ist leise. Sie tragen sie schon in sich.'
      ]) })],
    ['kompliment', /\b(du bist (toll|super|lieb|nett|die beste)|ich mag dich|süß von dir)\b/i, () => ({
      text: 'Sie bringen mich zum Strahlen — danke! Aber warten Sie erst, bis Sie unser Premium Bamboo in der Hand hatten. Dann reden wir noch einmal über „toll“.',
      products: ['premium-bamboo'], chips: ['Erzähl mir mehr davon', 'Was kostet er?'] })],
    ['plaudern', /\b(plaudern|langweilig|erzähl\w*|unterhalte mich|witz|geschichte)\b/i, () => ({
      text: pick([
        'Gern! Wussten Sie, dass Bambus zu den am schnellsten wachsenden Pflanzen der Welt gehört — bis zu einem Meter am Tag? Deshalb gilt Bambusviskose als besonders ressourcenschonend. Und auf der Haut fühlt sie sich an wie ein kühler Morgen. Soll ich Ihnen unsere Bamboo-Familie zeigen?',
        'Eine kleine Geschichte: „HIMA“ — arabisch حِمَى — bezeichnete schon vor Jahrhunderten ein geschütztes Stück Land, das eine Gemeinschaft bewahrt. Genau das wollen wir für Ihren Stil sein: ein geschützter Ort. Schön, oder?',
        'Kleines Geheimnis aus dem Atelier: Die meisten Frauen tragen ihren Hijab einen Hauch zu fest. Ein Fingerbreit Luft am Ansatz — und plötzlich fällt alles weicher. Kostenlose Beratung, von Herzen.'
      ]), chips: ['Zeig mir Bamboo', 'Erzähl noch etwas', 'Was bedeutet HIMA?'] })],

    /* — Beratung & Anlässe — */
    ['beratung', /\b(empfiehl|empfehlung|empfehlen|berate|beraten|beratung|passende stücke|welcher stoff|signature|was (soll|würdest|passt zu mir)|inspirier|zeig mir (was|etwas)( schönes)?|ich suche)\b/i, () => {
      ctx.slot = 'anlass';
      return { text: 'Sehr gern — dafür bin ich da. Verraten Sie mir: Wofür soll das Tuch sein? Für den Alltag, fürs Büro oder die Uni, für einen festlichen Anlass — oder für die warmen Tage?', chips: ['Für den Alltag', 'Fürs Büro', 'Für ein Fest', 'Für den Sommer'] };
    }],
    ['alltag', /\b(alltag|jeden tag|täglich|normal|klassisch|basics?)\b/i, () => antwortAnlass('alltag',
      'Für den Alltag empfehle ich Ihnen unsere Jersey-Familie — dicht, matt und formstabil, da sitzt alles vom Morgen bis zum Abend.')],
    ['buero', /\b(büro|arbeit|job|uni|studium|vorlesung|business|beruf|meeting)\b/i, () => antwortAnlass('buero',
      'Fürs Büro und die Uni brauchen Sie ein Tuch, das den ganzen Tag ohne Nachfassen sitzt und dabei souverän aussieht.')],
    ['fest', /\b(fest|festlich\w*|hochzeit|abend|feier|anlass|verlobung|henna|gala|besonder)\b/i, () => antwortAnlass('fest',
      'Für besondere Stunden darf es Glanz sein — leise, versteht sich.')],
    ['sommer', /\b(sommer|heiß|hitze|warm(e|es|en)? (tag|monat|wetter)|schwitz|urlaub|atmungsaktiv)\b/i, () => antwortAnlass('sommer',
      'Für warme Tage sind unsere Bamboo-Qualitäten gemacht: leicht, atmungsaktiv, temperierend.')],
    ['winter', /\b(winter|kalt|kälte|herbst)\b/i, () => ({
      text: 'Für die kalte Jahreszeit greifen Sie zu unseren dichteren Jerseys — sie wärmen sanft, ohne aufzutragen, und die matte Oberfläche passt wunderbar zu Mänteln und Wolle. Der Premium Jersey mit Wellen bringt zusätzlich Textur in dunkle Wintertage.',
      products: ['premium-jersey', 'premium-jersey-wellen'], chips: ['Und für festliche Winterabende?', 'Welche Farbe im Winter?'] })],
    ['sport', /\b(sport|joggen|fitness|yoga|training|wandern)\b/i, () => ({
      text: 'Beim Sport zählen Halt und Atmungsaktivität: Der Liquid Jersey folgt jeder Bewegung, und darunter sorgt das Bonnet dafür, dass nichts verrutscht. Binden Sie das Tuch kompakt, die Enden nach hinten — so bleibt der Kopf frei.',
      products: ['liquid-jersey', 'bonnet'], chips: ['Wie binde ich sportlich?', 'Was kostet das zusammen?'] })],
    ['geschenk', /\b(geschenk\w*|schenk\w*|für meine (mutter|schwester|freundin|tochter)|mitbringsel)\b/i, () => ({
      text: 'Wie schön — ein Hijab ist ein Geschenk mit Bedeutung. Mein Rat: Wählen Sie eine Qualität, die jeder steht (Premium Bamboo), in einem Ton der Mitte wie Salbei oder Taupe — die schmeicheln fast jedem Teint. Dazu vielleicht unsere Nadeln als kleine Aufmerksamkeit. Soll es eher klassisch oder festlich sein?',
      products: ['premium-bamboo', 'nadeln'], chips: ['Eher festlich', 'Eher klassisch', 'Was kostet das?'] })],

    /* — Stoffe — */
    ['bamboo', /\b(bamboo|bambus)\b/i, () => ({
      text: 'Unsere Bamboo-Familie ist die Seele der Maison: Bambusviskose, atmungsaktiv und sanft zum Haaransatz. Bamboo (' + fmt(12) + ') ist federleicht — perfekt für Sommer und sensible Haut. Premium Bamboo (' + fmt(14) + ') hat mehr Substanz und diesen eleganten, ruhigen Fall — er ist nicht umsonst unser Liebling. Übrigens: Bambus wächst bis zu einem Meter am Tag — gutes Gewissen inklusive.',
      products: ['bamboo', 'premium-bamboo'], chips: ['Wie pflege ich Bamboo?', 'Welche Farben gibt es?', 'In die Tasche legen'] })],
    ['jersey', /\bjersey\b/i, () => ({
      text: 'Jersey ist unser Alltagsheld — in vier Charakteren: Premium Jersey (' + fmt(13) + ') als matter Klassiker, Liquid Jersey (' + fmt(14) + ') mit fließendem Fall für Tage in Bewegung, Premium Jersey Satin (' + fmt(15) + ') mit leisem Schimmer für Feste, und Premium Jersey mit Wellen (' + fmt(13.5) + ') für spürbare Textur. Alle blickdicht, alle formstabil. Welcher Charakter sind Sie?',
      products: ['premium-jersey', 'liquid-jersey'], chips: ['Für den Alltag', 'Für ein Fest', 'Was kostet Jersey?'] })],
    ['chiffon', /\bchiffon\b/i, () => ({
      text: 'Chiffon (' + fmt(8) + ') ist Poesie in Stoffform: halbtransparent, federleicht, mit wunderbarer Tiefe in gelegten Lagen. Ehrlich gesagt braucht er etwas Übung — und ein gutes Fundament: Bonnet darunter, feine Nadeln dazu, dann sitzt er wie gemalt. Für Hochzeiten, Eid und große Abende meine erste Wahl.',
      products: ['chiffon', 'bonnet'], chips: ['Wie style ich Chiffon?', 'Pflege von Chiffon', 'Für welchen Anlass?'] })],
    ['medina', /\b(medina|seide|ohne nadel)\b/i, () => ({
      text: 'Medina Seide (' + fmt(10) + ') hat einen seidig-matten Griff und eine feine Crêpe-Struktur — das Besondere: Sie hält die Drapierung auch ohne Nadel. Ein ehrliches Wort gehört dazu: Es ist keine Maulbeerseide — der Name beschreibt die Qualitätsklasse. Diese Ehrlichkeit ist uns wichtiger als ein schönes Etikett.',
      products: ['medina-seide'], chips: ['Hält wirklich ohne Nadel?', 'Pflege von Medina', 'Was passt dazu?'] })],
    ['satin', /\bsatin\b/i, () => ({
      text: 'Premium Jersey Satin (' + fmt(15) + ') ist unser Festtagskind: der vertraute Halt von Jersey, veredelt mit einem leisen, matten Schimmer. Kein Glitzern, kein Lärm — nur dieses Licht, das sich bewegt, wenn Sie sich bewegen. In Creme oder Mauve ein Traum für Hochzeiten und Eid.',
      products: ['premium-jersey-satin'], chips: ['Welche Farbe für ein Fest?', 'In die Tasche legen'] })],
    ['wellen', /\bwellen\b/i, () => ({
      text: 'Der Premium Jersey mit Wellen (' + fmt(13.5) + ') trägt seine Struktur mit Stolz: eine feine Wellenprägung, die das Licht bricht — Textur zum Anfassen. Für alle, die Understatement mit Charakter tragen. Besonders schön in Marine und dunklen Tönen, wo das Licht arbeiten kann.',
      products: ['premium-jersey-wellen'], chips: ['Welche Farben gibt es?', 'Was kostet er?'] })],
    ['bonnet', /\b(bonnet|untertuch|unterziehen|basis)\b/i, () => ({
      text: 'Das Bonnet (' + fmt(4.5) + ') ist das bestgehütete Geheimnis eines perfekten Sitzes: Es hält das Tuch sicher, ohne zu ziehen, schützt den Haaransatz und ist unsichtbar unter jeder Drapierung. Unter Chiffon und Medina fast unverzichtbar — und ehrlich: auch unter Jersey ein Komfort-Upgrade.',
      products: ['bonnet'], chips: ['Rutscht mein Hijab damit nicht mehr?', 'In die Tasche legen'] })],
    ['nadeln', /\b(nadel\w*|pin|stecknadel\w*)\b/i, () => ({
      text: 'Unsere Nadeln (' + fmt(1.5) + ') sind das stille Werkzeug jeder Drapierung: glatt poliert, damit sie auch feinste Stoffe nicht zeichnen, mit sicherem Halt. Ein kleines Set gehört in jede Tasche — und in jedes Geschenk. (Bitte von Kinderhänden fernhalten.)',
      products: ['nadeln'], chips: ['Geht es auch ohne Nadeln?', 'Was ist der Maghnatis?'] })],
    ['maghnatis', /\b(maghnatis|magnet|verschluss|warteliste)\b/i, () => ({
      text: 'Der Maghnatis ist unser Signature-Projekt: ein Magnetverschluss, der die Drapierung hält, ohne den Stoff zu durchstechen — entwickelt und gefertigt in kleinen Serien im MakerSpace Mönchengladbach. Er ist noch in Entwicklung; über die Warteliste erfahren Sie als Erste vom Start. Wichtig: Magnetprodukte gehören nicht in Kinderhände.',
      chips: ['Auf die Warteliste', 'Was gibt es sonst für Halt?'], action: 'warteliste' })],

    /* — Farben — */
    ['farbe_beratung', /\b(welche farbe|farbe steht|hautton|teint|unterton|farbtyp|farbberatung|steht mir)\b/i, () => {
      const pass = fpLaden();
      if (pass) {
        const f = pass.welt.haupt.map(k => FARBEN[k].name).join(', ');
        return { text: `Da habe ich gute Nachrichten: Ihr Farbpass liegt vor — Sie sind „${pass.welt.name}" (${pass.welt.sub}). Ihre Töne: ${f}. ${KONTRAST_NOTE[pass.kontrast]} Soll ich Ihnen passende Stücke zeigen?`,
          products: pass.welt.produkte, chips: ['Ja, zeig mir passende Stücke', 'Farbpass neu machen', 'Was sollte ich meiden?'] };
      }
      return { text: 'Farbe ist die halbe Eleganz — und sehr persönlich. Die Kurzfassung: Warme Untertöne (goldene Adern, Gold-Schmuck steht Ihnen) leuchten in Creme, Taupe und Olive. Kühle Untertöne (bläuliche Adern, Silber schmeichelt) tragen Grau, Marine und Mauve. Am genauesten wird es mit unserem Farbpass: acht Fragen, zwei Minuten — und ich merke mir Ihr Ergebnis für jede weitere Beratung.',
        action: 'farbpass', offer: 'farbpass', chips: ['Farbpass starten', 'Steht mir Salbei?', 'Zeig mir die Farbwelten'] };
    }],
    ['farbe_meiden', /\b(meiden|steht mir nicht|vermeiden|welche farbe nicht)\b/i, () => {
      const pass = fpLaden();
      if (!pass) return { text: 'Ohne Ihren Farbpass mag ich nicht raten — „Meiden“ ist eine sehr persönliche Angelegenheit. Zwei Minuten, acht Fragen, und ich sage es Ihnen präzise. Einverstanden?', action: 'farbpass', offer: 'farbpass', chips: ['Farbpass starten'] };
      const m = pass.welt.meiden.map(([f, why]) => `${FARBEN[f].name} — ${why}`).join('. ');
      return { text: `Ehrliche Antwort für „${pass.welt.name}": ${m}. Aber merken Sie sich: Das sind Empfehlungen, keine Verbote — mit dem richtigen Ton am Gesicht ist fast alles tragbar.`, chips: ['Was steht mir stattdessen?', 'Zeig mir passende Stücke'] };
    }],
    ...Object.keys(FARBEN).map(key => [
      'farbe_' + key,
      new RegExp('\\b' + (key === 'rose' ? 'ros(e|é)' : key) + '\\b', 'i'),
      () => {
        const f = FARBEN[key];
        return { text: `${f.name}: ${f.steht} Kombinieren Sie ${f.name} mit ${f.kombi}`, chips: ['Welcher Stoff in dieser Farbe?', 'Steht mir das?', 'Andere Farben zeigen'] };
      }
    ]),
    ['kombi_dunkel', /\b(etwas dunkles|dunkle garderobe|viel schwarz|dunkles kleid)\b/i, () => ({
      text: 'Zu dunkler Garderobe ist Ihr Gesicht die Bühne: Ein heller Ton am Gesicht — Creme, Rosé oder Salbei — wirkt wie ein Lichtschalter und nimmt dunklen Looks jede Schwere. Für den Abend darf es der Satin in Creme sein, im Alltag Premium Bamboo in Salbei.',
      products: ['premium-jersey-satin', 'premium-bamboo'], chips: ['Und die Preise?', 'Steht mir Creme?'] })],
    ['kombi_hell', /\b(etwas helles|helle garderobe|viel weiß|helles kleid)\b/i, () => ({
      text: 'Zu heller Garderobe geben tiefe Töne den Rahmen: Taupe und Marine machen helle Looks erwachsen, Olive gibt ihnen Erdung. Ton-in-Ton in Creme geht auch — dann aber mit Textur (Wellen, Satin), damit der Look nicht verschwimmt.',
      products: ['premium-jersey-wellen', 'premium-bamboo'], chips: ['Steht mir Marine?', 'Zeig mir Taupe'] })],
    ['kombi_muster', /\b(gemustert|muster|print|bunt)\b/i, () => ({
      text: 'Bei gemusterter Kleidung gilt die eiserne Regel der Maison: Das Tuch schweigt. Ein ruhiger Uni-Ton, der eine Farbe aus dem Muster aufnimmt — dann wirkt der ganze Look kuratiert statt zufällig. Unsere matten Jerseys sind dafür gemacht.',
      products: ['premium-jersey', 'liquid-jersey'], chips: ['Welcher Ton aus meinem Muster?', 'Und die Preise?'] })],
    ['kombination', /\b(kombinier\w*|passt zu (meinem|einer|einem)|passt dazu|outfit|anziehen zu|dazu tragen|schwarzes kleid|abaya\w*)\b/i, () => ({
      text: 'Die goldene Regel der Maison: Das Tuch darf sprechen ODER das Outfit — nie beide gleichzeitig. Zu einem schwarzen Kleid oder einer dunklen Abaya wirken Creme, Rosé oder Taupe am Gesicht wie ein Lichtschalter. Zu gemusterter Kleidung immer ein ruhiger Uni-Ton. Und Ton-in-Ton (z. B. Taupe zu Beige) ist die eleganteste Abkürzung, die ich kenne. Was hängt denn im Schrank bereit?',
      chips: ['Etwas Dunkles', 'Etwas Helles', 'Bunt gemustert'] })],

    /* — Styling & Praxis — */
    ['binden', /\b(bind\w*|wickeln|drapier\w*|styl\w*|tutorial|anleitung|stile?|wrap|falte)\b/i, () => ({
      text: 'Gern — drei Signature-Drapierungen der Maison: 1) Der klassische Wrap: mittig auflegen, eine Seite länger, die lange Seite einmal locker um Kinn und Schulter — sitzt in 30 Sekunden, ideal mit Jersey. 2) Die gelegte Falte: für Chiffon und Medina — seitlich raffen, mit einer Nadel an der Schläfe fixieren, die Lagen fallen lassen. 3) Der Turban-inspirierte Look: Enden nach hinten, zweimal kreuzen, vorn einschlagen — modern und praktisch. Wichtiger als jede Technik: ein Fingerbreit Luft am Ansatz. Welche Variante darf ich genauer erklären?',
      chips: ['Der klassische Wrap', 'Die gelegte Falte', 'Mein Hijab rutscht immer'] })],
    ['rutscht', /\b(rutscht|hält nicht|verrutscht|sitzt nicht|immer neu richten)\b/i, () => ({
      text: 'Das kenne ich — und es ist fast immer eines von drei Dingen: 1) Die Unterlage fehlt: Ein Bonnet gibt dem Stoff Reibung zum Halten. 2) Der Stoff ist zu glatt für Ihren Alltag: Jersey hält von Natur aus besser als Chiffon. 3) Zu straff gebunden: Klingt paradox, aber zu viel Spannung lässt Stoff wandern. Mein Rezept für „einmal binden, nie mehr denken": Bonnet + Premium Jersey.',
      products: ['bonnet', 'premium-jersey'], chips: ['Danke, probiere ich!', 'Welcher Stoff hält am besten?'] })],
    ['volumen', /\b(volumen|voluminös|flach|mehr fülle)\b/i, () => ({
      text: 'Für mehr Volumen: ein Scrunchie oder Volumen-Bonnet über dem Dutt, das Tuch locker darüber legen — nicht ziehen. Für weniger: Liquid Jersey oder Medina flach am Kopf führen, Enden weit fallen lassen. Die Silhouette folgt immer dem Fundament, nicht dem Stoff allein.',
      products: ['liquid-jersey'], chips: ['Was ist ein gutes Fundament?', 'Zeig mir Medina'] })],
    ['gesichtsform', /\b(gesichtsform|rundes gesicht|ovales gesicht|längliches gesicht|herzförmig|steht mir der stil)\b/i, () => ({
      text: 'Ein schönes Thema! Rundes Gesicht: Höhe aufbauen — etwas Volumen oben, die Seiten eng führen, V-Ausschnitt der Drapierung. Längliches Gesicht: Breite an den Schläfen lassen, Stirn leicht bedecken. Herzförmig: weiche Rundungen ums Kinn. Ovales Gesicht: Ihnen steht ehrlich gesagt alles. Aber das Wichtigste: Diese „Regeln" sind Werkzeuge, keine Gesetze — tragen Sie, worin Sie sich schön fühlen.',
      chips: ['Und welcher Stoff dazu?', 'Wie style ich mit Brille?'] })],
    ['brille', /\b(brille|sonnenbrille)\b/i, () => ({
      text: 'Mit Brille gilt: Die Drapierung gehört hinter die Bügel, nicht darüber — sonst drückt es nach einer Stunde. Reibungsarme Stoffe wie Medina oder Bamboo verrutschen beim Auf- und Absetzen weniger. Und ein Tipp aus dem Atelier: Erst Tuch, dann Brille — nie umgekehrt.',
      products: ['medina-seide', 'premium-bamboo'], chips: ['Danke!', 'Welche Farbe zu meiner Brille?'] })],

    /* — Pflege — */
    ['pflege', /\b(pfleg\w*|wasch\w*|wäsche|bügeln|trocknen|knitter\w*|aufbewahr\w*|lagern)\b/i, (m) => {
      const q = (m.input || '').toLowerCase();
      if (/jersey|satin|wellen/.test(q)) return { text: 'Jersey-Pflege, kurz und liebevoll: 30 °C Schonwäsche, gern im Wäschenetz, mildes Waschmittel. Kein Trockner — er raubt dem Stoff die Form. Liegend trocknen, und den Satin bügeln Sie auf links bei niedriger Temperatur, damit der Schimmer bleibt. So begleitet Sie ein Jersey jahrelang.', products: ['premium-jersey'], chips: ['Wie pflege ich Bamboo?', 'Flecken — Hilfe!'] };
      if (/bamboo|bambus/.test(q)) return { text: 'Bamboo dankt Ihnen Sanftheit: Handwäsche oder ein sehr sanfter Schonwaschgang, kaltes bis lauwarmes Wasser, nicht wringen — nur drücken. Liegend trocknen, direkte Sonne meiden. Bambusviskose ist eine Naturfaser mit Seele; behandeln Sie sie wie Ihre Lieblingsbluse.', products: ['premium-bamboo'], chips: ['Wie pflege ich Jersey?', 'Aufbewahrung'] };
      if (/chiffon|medina|seide/.test(q)) return { text: 'Die Feinen unter sich: Chiffon und Medina bitte kalt von Hand waschen, keinesfalls wringen. Chiffon trocknet hängend, Medina liegend. Statt Bügeleisen lieber Dampf — der Trick der Maison: aufhängen, heiß duschen, warten. Die Falten fallen von selbst.', products: ['medina-seide', 'chiffon'], chips: ['Flecken — Hilfe!', 'Aufbewahrung'] };
      return { text: 'Die Kurzfassung aus unserem Pflege-Guide: Jersey & Bamboo mögen 30 °C Schonwäsche (gern im Netz) und trocknen liegend — nie in den Trockner. Medina & Chiffon bitte kalt von Hand, nicht wringen, lieber dämpfen als bügeln. Der Trick der Maison: aufhängen, heiß duschen, warten — der Dampf macht die Arbeit. Aufbewahrung: gerollt statt gefaltet, dunkel und trocken. Zu welchem Stoff darf ich ins Detail gehen?', chips: ['Wie pflege ich Jersey?', 'Wie pflege ich Chiffon?', 'Flecken — Hilfe!'] };
    }],
    ['flecken', /\b(fleck\w*|make-?up|foundation|lippenstift)\b/i, () => ({
      text: 'Ruhe bewahren — das rettet den Stoff: Make-up-Flecken nie reiben, sondern tupfen. Etwas mildes Spülmittel auf kaltes Wasser, von außen nach innen arbeiten, dann normal waschen. Bei Lippenstift hilft ein Tropfen Mizellenwasser vor der Wäsche. Und für die Zukunft: Das Tuch erst nach dem Schminken anlegen — oder mit einem Tuch über dem Gesicht überziehen.',
      chips: ['Danke, gerettet!', 'Allgemeine Pflegetipps'] })],
    ['haare', /\b(haar\w*|kopfhaut|jucken|schuppen)\b/i, () => ({
      text: 'Ihr Haar dankt Ihnen dreierlei: reibungsarme Stoffe (Bamboo, Medina), ein sauberes Bonnet als Puffer, und abends das Haar lösen und durchatmen lassen. Naturfasern lassen die Kopfhaut besser atmen als billige Synthetik. Wichtig aber: Bei anhaltendem Haarausfall oder Juckreiz gehört die Frage in ärztliche Hände — das kann und darf ich nicht beurteilen. Für den Stoff-Teil bin ich da.',
      products: ['premium-bamboo', 'bonnet'], chips: ['Welcher Stoff ist am sanftesten?', 'Danke!'] })],

    /* — Islam & Hijab (mit Respekt und ohne Urteil) — */
    ['islam_bedeutung', /\b(warum (tragen|trägt)|bedeutung (des|vom) hijab|was bedeutet (der )?hijab|sinn des hijab|khimar)\b/i, () => ({
      text: 'Eine Frage, die Bände füllt — ich versuche es in Kürze und mit Respekt: Der Hijab ist im Islam Ausdruck von Hingabe an Allah und gelebter Bescheidenheit (haya) — im Qur\'an wird er u. a. in Sure an-Nur (24:31) und al-Ahzab (33:59) angesprochen. Für viele Frauen ist er zugleich Identität, Würde und eine sehr persönliche Entscheidung, die jeden Tag neu mit Leben gefüllt wird. Und weil jede Geschichte anders ist: Verbindliche religiöse Fragen gehören zu Gelehrten oder Ihrer Moschee — ich bin für den Teil da, in dem sich Glaube und Stoff berühren.',
      chips: ['Was ist haya?', 'Ich möchte anfangen, Hijab zu tragen', 'Welcher Stoff fürs Gebet?'] })],
    ['islam_haya', /\b(haya|bescheidenheit|modesty|sittsamkeit)\b/i, () => ({
      text: 'Haya — oft mit „Bescheidenheit" oder „Schamgefühl" übersetzt — ist im Islam eine innere Haltung: Würde, Zurückhaltung und Achtsamkeit, im Verhalten wie im Auftreten. Der Prophet ﷺ sagte sinngemäß, dass haya nur Gutes bringt. Mode kann diese Haltung nicht ersetzen, aber sie kann sie widerspiegeln — genau dafür steht unsere Maison: Eleganz, die nicht laut sein muss.',
      chips: ['Warum tragen Frauen Hijab?', 'Zeig mir eure ruhigsten Töne'] })],
    ['islam_anfang', /\b(anfangen|beginnen|neu (dabei|hijabi)|neu hijab|hijab neu|trage neu|zum ersten mal|erste[nr]? hijab|hijab tragen möchte|überlege.{0,20}hijab)\b/i, () => ({
      text: 'Wie schön, dass Sie diesen Schritt gehen — masha\'Allah. Erlauben Sie mir drei ehrliche Ratschläge zum Anfang: 1) Machen Sie es sich leicht: Ein formstabiler Jersey verzeiht alles und hält ohne Kampf — perfekt für die ersten Wochen. 2) Ein Bonnet darunter nimmt die Sorge vor dem Verrutschen. 3) Seien Sie sanft mit sich: Es ist eine Reise, kein Wettbewerb — und niemand bindet am ersten Tag perfekt. Ihre Fragen dürfen Sie mir alle stellen, es gibt keine dummen. Soll ich Ihnen ein Starter-Duo zusammenstellen?',
      products: ['premium-jersey', 'bonnet'], offer: 'starter', chips: ['Ja, gern das Starter-Duo', 'Wie binde ich am einfachsten?', 'Welche Farbe für den Anfang?'] })],
    ['islam_schwierig', /\b(schwer|schwierig|zweifel|angst|traue mich nicht|blicke|kommentare|diskriminier|gemobbt|abnehmen|ablegen)\b/i, () => ({
      text: 'Danke, dass Sie das mit mir teilen — das ist nicht selbstverständlich. Was Sie fühlen, kennen viele Frauen, und es macht Sie weder schwächer noch weniger gläubig. Erlauben Sie mir zwei Gedanken: Ihr Weg gehört Ihnen — er wird nicht an einem einzelnen Tag gemessen. Und: Umgeben Sie sich mit Menschen, die Sie tragen — eine Gemeinschaft, eine Freundin, Ihre Moschee. Für die schweren Fragen sind Seelsorge und Gelehrte die richtigen Begleiter; ich bin nur eine Stimme für den Alltag. Aber eines darf ich sagen: Sie sind mutig. Und Sie sind nicht allein.',
      chips: ['Danke, Amira', 'Etwas Leichtes: berate mich', 'Was stärkt das Selbstbewusstsein?'] })],
    ['islam_selbstbewusst', /\b(selbstbewusst\w*|stolz|stärk\w*|empower\w*|kraft)\b/i, () => ({
      text: 'Selbstbewusstsein trägt sich am schönsten so: Kennen Sie Ihre Farben (der Farbpass hilft), finden Sie IHRE Signature-Drapierung und bleiben Sie dabei — Wiedererkennbarkeit ist Eleganz. Und innerlich? Erinnern Sie sich, warum Sie tragen, was Sie tragen. Eine Frau, die ihre Entscheidung kennt, betritt jeden Raum aufrecht. Die Maison kleidet das nur ein.',
      chips: ['Farbpass starten', 'Meine Signature finden'] })],
    ['islam_gebet', /\b(gebet|beten|salah|namaz|wudu|moschee)\b/i, () => ({
      text: 'Fürs Gebet bewährt sich ein Tuch, das schnell und zuverlässig sitzt und den Hals vollständig rahmt: Unser Premium Jersey oder Medina (hält ohne Nadel — praktisch bei Wudu, wenn es schnell gehen muss) sind dafür ideal. Viele Frauen haben ein eigenes „Gebets-Tuch" in einem ruhigen Ton griffbereit — eine schöne Gewohnheit, finde ich.',
      products: ['premium-jersey', 'medina-seide'], chips: ['Welche ruhigen Töne habt ihr?', 'Danke!'] })],
    ['ramadan_eid', /\b(ramadan|eid|bayram|iftar|fastenzeit|zuckerfest)\b/i, () => ({
      text: 'Für Ramadan-Abende und Eid darf die Garderobe mitfeiern: tagsüber leichte, atmungsaktive Qualitäten (Bamboo), für Iftar-Einladungen und die Eid-Morgen dann unser Satin oder Chiffon in festlichen, warmen Tönen. Mein Eid-Klassiker: Premium Jersey Satin in Creme mit Gold-Schmuck — festlich, ohne laut zu werden. Eid mubarak im Voraus!',
      products: ['premium-jersey-satin', 'chiffon'], chips: ['Zeig mir Satin', 'Welche Farbe zu Eid?'] })],
    ['nicht_muslimin', /\b(nicht muslim|keine muslim|als christin|darf ich (das |ein )?(kopftuch|hijab|tuch) tragen|kulturelle aneignung)\b/i, () => ({
      text: 'Danke für die respektvolle Frage. Kopfbedeckungen haben in vielen Kulturen und Religionen Tradition — von der Mantilla bis zum Tichel. Ein Tuch respektvoll zu tragen, etwa bei einem Moschee-Besuch, einer Hochzeit oder aus Stilgründen, ist willkommen; entscheidend ist die Haltung, nicht die Herkunft. Wenn Sie für einen Anlass etwas suchen, berate ich Sie genau wie jede andere Kundin — von Herzen gern.',
      chips: ['Für einen Moscheebesuch', 'Für einen Anlass', 'Berate mich einfach'] })],
    ['islam_regeln', /\b(haram|halal|erlaubt|verboten|pflicht|sünde|fatwa|muss ich)\b/i, () => ({
      text: 'Das ist eine Frage, die ich mit Respekt weiterreichen möchte: Verbindliche religiöse Urteile stehen mir nicht zu — dafür gibt es Gelehrte, Ihre Moschee oder seriöse Fatwa-Stellen, die Ihre Situation wirklich kennen. Was ich Ihnen geben kann: das allgemeine Wissen, das Handwerk und jede praktische Hilfe rund um Stoff, Farbe und Stil. Fragen Sie mich alles in diesem Rahmen — und für den Rest wünsche ich Ihnen gute, weise Begleiter.',
      chips: ['Verstanden — praktische Frage', 'Bedeutung des Hijab', 'Beratung starten'] })],

    /* — Marke & Bestellung — */
    ['marke', /\b(hima|maison|marke|über euch|wer seid ihr|was bedeutet)\b/i, () => ({
      text: 'HIMA — arabisch حِمَى — bezeichnet einen Ort, den eine Gemeinschaft unter ihren Schutz stellt. Genau das möchten wir sein: eine Maison de Modestie, ein geschützter Ort für leise Eleganz. Wir kuratieren wenige, ehrliche Qualitäten statt endloser Regale, beschreiben Stoffe, wie sie sind, und prüfen jede Charge selbst: Waschtest, Knittertest, Lichtechtheit, Maßkontrolle. Entworfen mit Ruhe, gefertigt mit Sorgfalt.',
      chips: ['Zeig mir die Kollektion', 'Wie prüft ihr Qualität?', 'Woher kommen die Stoffe?'] })],
    ['qualitaet', /\b(qualität|prüfung|test|grammatur|g\/m|blickdicht|dichtest\w*|maße|größe)\b/i, () => ({
      text: 'Unsere Eingangsprüfung ist nicht verhandelbar — jede Charge durchläuft vier Tests: Waschtest (Form und Farbe nach der Wäsche), Knittertest (ein Tuch muss den Tag bestehen), Lichtechtheit (Farben, die bleiben) und Maßkontrolle (mindestens 185 × 70 cm). Jersey liegt bei 220–280 g/m², Bamboo bei 160–190, Chiffon bei federleichten 40–60. Blickdicht sind alle Jerseys und der Premium Bamboo.',
      chips: ['Was heißt g/m² für mich?', 'Zeig mir den dichtesten Stoff'] })],
    ['preis', /\b(preis\w*|kost\w*|teuer|günstig\w*|budget|angebot\w*|rabatt\w*)\b/i, () => ({
      text: 'Gern, die ehrliche Übersicht: Chiffon ' + fmt(8) + ' · Medina Seide ' + fmt(10) + ' · Bamboo ' + fmt(12) + ' · Premium Jersey ' + fmt(13) + ' · Jersey mit Wellen ' + fmt(13.5) + ' · Liquid Jersey & Premium Bamboo je ' + fmt(14) + ' · Premium Jersey Satin ' + fmt(15) + ' — dazu Bonnet ' + fmt(4.5) + ' und Nadeln ' + fmt(1.5) + '. Faire Preise für geprüfte Qualität — Rabattschlachten überlassen wir anderen. Darf ich Ihnen zu Ihrem Budget das Beste zusammenstellen?',
      chips: ['Bestes unter 15 €', 'Starter-Set zusammenstellen', 'Was ist euer Bestseller?'] })],
    ['bestseller', /\b(bestseller|beliebtest|liebling|favorit|am meisten|bestes)\b/i, () => ({
      text: 'Der Liebling der Maison — und ehrlich auch meiner: Premium Bamboo (' + fmt(14) + '). Dieser ruhige Fall, die Sanftheit zum Haaransatz, die Atmungsaktivität — er ist das Tuch, das ich jeder empfehle, die „eines für alles" sucht. Dicht gefolgt vom Premium Jersey als Alltagsklassiker.',
      products: ['premium-bamboo', 'premium-jersey'], chips: ['In die Tasche legen', 'Welche Farbe im Bamboo?'] })],
    ['bestellen', /\b(bestell\w*|kauf\w*|checkout|zahl\w*|liefer\w*|versand|dauert|retoure\w*|zurückschicken|umtausch\w*)\b/i, () => ({
      text: 'Aktuell läuft jede Bestellung als persönliche Anfrage: Sie legen Ihre Auswahl in die Tasche und senden sie ab — Ihr E-Mail-Fenster öffnet sich mit der fertigen Liste, und wir antworten innerhalb von 24 Stunden persönlich mit Verfügbarkeit und Farbkarte. Der Online-Checkout mit Versand nach DACH öffnet in Kürze. Fragen zu Versand, Umtausch oder Ihrer Anfrage beantwortet Ihnen das Atelier direkt: ' + MAIL,
      chips: ['Zur Kollektion', 'Was kommt in den Checkout?', 'Kontakt aufnehmen'] })],
    ['kontakt_mensch', /\b(mensch\w*|e-?mail|mitarbeiter\w*|jemand echt|persönlich sprechen|kontakt\w*|beschwerde\w*|problem mit)\b/i, () => ({
      text: 'Natürlich — manchmal braucht es einen Menschen, und das respektiere ich sofort: Sie erreichen das Atelier unter ' + MAIL + '. Wir antworten in der Regel innerhalb von 24 Stunden, persönlich und ohne Textbausteine. Wenn ich bis dahin etwas vorbereiten kann, sagen Sie es mir gern.',
      chips: ['E-Mail schreiben', 'Doch noch eine Frage an dich'], action: 'kontakt' })],
    ['instagram', /\b(instagram|insta|social|tiktok|folgen|launch|neuigkeiten|was ist neu)\b/i, () => ({
      text: 'Unsere stille Ecke des Internets entsteht gerade — der Instagram-Auftritt der Maison ist in Vorbereitung. Bis dahin sind Website und App unser Zuhause, und Neuigkeiten erfahren Sie zuerst über die Warteliste. Es lohnt sich: Der Launch wird schön.',
      chips: ['Auf die Warteliste', 'Was kommt im Launch?'] })],

    ['starter', /\b(starter|erstausstattung|grundausstattung|womit fange ich an)\b/i, () => ({
      text: 'Mein Starter-Duo für einen gelassenen Anfang: der Premium Jersey (' + fmt(13) + ') — formstabil, blickdicht, verzeiht jede Eile — und das Bonnet (' + fmt(4.5) + ') darunter, damit nichts verrutscht. Zusammen ' + fmt(17.5) + ', und Sie sind für jeden Tag gerüstet. Später kommen Farben und feinere Stoffe von ganz allein.',
      products: ['premium-jersey', 'bonnet'], chips: ['In die Tasche legen', 'Welche Farbe für den Anfang?', 'Wie binde ich am einfachsten?'] })],
    ['tasche', /\b(in die tasche|tasche legen|warenkorb|wie lege ich)\b/i, () => ({
      text: 'Ganz einfach: Tippen Sie auf eine Produktkarte — auf der Produktseite wählen Sie „In die Tasche". Ihre Auswahl senden Sie dann mit einem Klick als unverbindliche Anfrage ab; wir antworten innerhalb von 24 Stunden persönlich mit Verfügbarkeit und Farbkarte. Ihre Tasche bleibt dabei auf Ihrem Gerät gespeichert.',
      chips: ['Wie bestelle ich genau?', 'Zeig mir den Bestseller'] })],
    ['kollektion', /\b(kollektion|sortiment|alle (produkte|stoffe|tücher)|übersicht|zeig mir alles)\b/i, () => ({
      text: 'Unsere Kollektion ist bewusst kuratiert — vier Welten statt endloser Regale: die Jersey-Familie für den Alltag (4 Charaktere), die Bamboo-Linie für Leichtigkeit, die feinen Stoffe Medina und Chiffon für besondere Momente, und die Basis-Accessoires Bonnet und Nadeln. Neun Töne, jede Qualität von Hand geprüft. Womit darf ich beginnen?',
      products: ['premium-bamboo', 'premium-jersey'], offer: 'beratung', chips: ['Die Jersey-Familie', 'Die Bamboo-Linie', 'Chiffon & Medina'] })],
    ['herkunft', /\b(woher|herkunft|produziert|hergestellt|fabrik|lieferant|made in)\b/i, () => ({
      text: 'Eine faire Frage, die eine ehrliche Antwort verdient: HIMA entwirft und kuratiert im Rheinland; gefertigt wird bei ausgewählten Partnerbetrieben, deren Qualitäten wir Charge für Charge selbst prüfen — Waschtest, Knittertest, Lichtechtheit, Maßkontrolle. Wir nennen Stoffe beim ehrlichen Namen (unsere „Medina Seide" ist z. B. keine Maulbeerseide) und beantworten Detailfragen zur Lieferkette persönlich: ' + MAIL,
      chips: ['Wie prüft ihr Qualität?', 'Erzähl mir von HIMA'] })],
    ['farbpalette', /\b(andere farben|alle farben|welche farben gibt|farbpalette|neun töne|farbwelten)\b/i, () => ({
      text: 'Unsere Palette — neun Töne, bewusst ruhig: Salbei, Creme, Grau, Marine, Mauve, Olive, Rosé, Taupe und Schwarz. Jeder hat seinen Charakter — fragen Sie mich zu jedem einzelnen („Steht mir Salbei?"), oder wir finden mit dem Farbpass systematisch heraus, welche Ihre sind.',
      action: 'farbpass', offer: 'farbpass', chips: ['Steht mir Salbei?', 'Steht mir Marine?', 'Farbpass starten'] })],

    /* — Farbpass-Bezug — */
    ['farbpass_info', /\b(farbpass|farbquiz|dein ton|farbanalyse|farbwelt)\b/i, () => {
      const pass = fpLaden();
      if (pass) return { text: `Ihr Farbpass liegt vor: „${pass.welt.name}" (${pass.welt.sub}), Kontrast ${pass.kontrast}, erstellt am ${pass.datum}. ${pass.welt.stil} Möchten Sie ihn neu machen oder passende Stücke sehen?`,
        products: pass.welt.produkte, chips: ['Passende Stücke zeigen', 'Farbpass neu machen', 'Was sollte ich meiden?'] };
      return { text: 'Der Farbpass ist unsere Farbanalyse: acht Fragen zu Unterton, Tiefe und Kontrast — daraus bestimme ich Ihre Farbwelt mit Haupttönen, Begleitern und ehrlichen „Lieber-nicht"-Hinweisen. Ihr Ergebnis bleibt auf Ihrem Gerät, und ich beziehe es in jede Beratung ein. Zwei Minuten, die Ihre Garderobe verändern.',
        action: 'farbpass', offer: 'farbpass', chips: ['Farbpass starten', 'Welche Farbwelten gibt es?'] };
    }],

    /* — Sicherheit / Grenzen — */
    ['medizin', /\b(krank|schmerz|medizin|diagnose|therapie|depress)\b/i, () => ({
      text: 'Das klingt nach etwas, das mehr verdient als eine Chat-Antwort: Bitte wenden Sie sich an Ihre Ärztin oder eine Beratungsstelle — bei seelischen Anliegen hilft in Deutschland z. B. die Telefonseelsorge (0800 111 0 111, rund um die Uhr, kostenlos). Ich bin nur für Stoffe und Stil die Richtige — aber ich wünsche Ihnen von Herzen alles Gute. Und wenn Sie mögen, bin ich danach wieder für die leichten Themen da.',
      chips: ['Danke', 'Beratung starten'] })]
  ];

  function antwortAnlass(anlass, intro) {
    ctx.anlass = anlass; ctx.slot = null; remember();
    const e = empfehlen(anlass);
    const crossText = e.cross ? ` Dazu passt ${e.cross.map(c => byId(c).name).join(' und ')}.` : '';
    return { text: intro + e.farbsatz + crossText, products: e.prods, chips: ['Und die Preise?', 'Welche Farbe dazu?', 'In die Tasche legen'] };
  }

  /* Slot-Auflösung: Wenn Amira gerade nach dem Anlass gefragt hat */
  const SLOT_ANLASS = [
    [/\b(alltag|jeden tag|normal)\b/i, 'alltag'], [/\b(büro|arbeit|uni|job)\b/i, 'buero'],
    [/\b(fest|hochzeit|abend|feier|eid)\b/i, 'fest'], [/\b(sommer|warm|heiß)\b/i, 'sommer']
  ];

  function antworten(frage) {
    ctx.turns++;
    const f = normalisieren((frage || '').trim());
    if (!f) return { text: 'Ich höre zu — fragen Sie mich einfach.', chips: ['Beratung starten', 'Farbpass starten'] };

    // 1) Offener Slot (Anlass-Nachfrage)?
    if (ctx.slot === 'anlass') {
      for (const [rx, anlass] of SLOT_ANLASS) {
        if (rx.test(f)) {
          const intro = { alltag: 'Wunderbar — für den Alltag habe ich genau das Richtige.',
            buero: 'Fürs Büro und die Uni: souverän und pflegeleicht.',
            fest: 'Ein Fest! Dann darf es leise glänzen.',
            sommer: 'Für warme Tage — leicht und atmungsaktiv.' }[anlass];
          return antwortAnlass(anlass, intro);
        }
      }
      ctx.slot = null; // Kein Anlass erkannt → normal weiter
    }

    // 2) Intent mit den meisten Treffern gewinnt
    let best = null, bestScore = 0;
    for (const [id, rx, handler] of INTENTS) {
      const m = f.match(rx);
      if (m) {
        const score = m[0].length + (id.startsWith('islam') ? 2 : 0) + (id === 'pflege' ? 4 : 0);
        if (score > bestScore) { best = { id, m, handler }; bestScore = score; }
      }
    }
    if (best) {
      ctx.lastTopic = best.id;
      const reply = best.handler(best.m) || {};
      if (!['ja', 'nein', 'okay', 'lachen', 'zustimmung_kurz'].includes(best.id)) ctx.offer = reply.offer || null;
      if (reply.products) ctx.lastProducts = reply.products;
      ctx.fallbacks = 0;
      remember();
      return reply;
    }

    // 3) Fallback — gesprächig statt abweisend: kurz ehrlich sein, Kontext nutzen, Frage zurückgeben
    ctx.fallbacks = (ctx.fallbacks || 0) + 1;
    if (ctx.fallbacks >= 3) {
      ctx.fallbacks = 0;
      return { text: 'Ich merke, ich verstehe Sie gerade nicht so, wie Sie es verdienen — das ärgert mich selbst. Zwei Wege: Formulieren Sie es mit einem Stichwort wie „Empfehlung", „Farbe" oder „Pflege" — oder schreiben Sie dem Atelier direkt: ' + MAIL + '. Dort antwortet ein Mensch, persönlich und innerhalb von 24 Stunden.', action: 'kontakt', chips: ['Empfehlung', 'Farbe', 'Pflege'] };
    }
    const TOPIC_NAME = { bamboo: 'Bamboo', jersey: 'unsere Jerseys', chiffon: 'Chiffon', medina: 'Medina', farbe_beratung: 'Ihre Farben', pflege: 'die Pflege', binden: 'das Binden', preis: 'die Preise', marke: 'die Maison' };
    const anknuepfung = ctx.lastTopic && TOPIC_NAME[ctx.lastTopic] ? ' Eben sprachen wir über ' + TOPIC_NAME[ctx.lastTopic] + ' — soll ich da weitermachen?' : '';
    ctx.offer = 'beratung';
    return {
      text: pick([
        'Da muss ich passen — so gut kenne ich mich nur mit Stoffen, Farben, Stil und allem rund um den Hijab aus.' + anknuepfung + ' Oder erzählen Sie mir einfach, wonach Ihnen heute ist — ich finde bestimmt etwas.',
        'Hm, da bin ich ehrlich: Das liegt außerhalb meines Ateliers.' + anknuepfung + ' Aber sagen Sie mir, was Sie gerade beschäftigt — Alltag, ein Anlass, eine Farbe? — und ich bin ganz in meinem Element.',
        'Das kann ich nicht seriös beantworten — und raten wäre respektlos.' + anknuepfung + ' Womit darf ich Ihnen stattdessen eine Freude machen?'
      ]),
      chips: ['Empfiehl mir etwas', 'Welche Farbe steht mir?', 'Einfach plaudern', 'Erzähl mir von HIMA']
    };
  }

  const START_CHIPS = ['Empfiehl mir etwas', 'Welche Farbe steht mir?', 'Ich trage neu Hijab', 'Wie pflege ich meinen Hijab?'];
  function begruessung() {
    const pass = fpLaden();
    if (pass) return { text: `As-salamu alaykum, willkommen zurück! Ihr Farbpass („${pass.welt.name}") liegt griffbereit — soll ich Ihnen etwas Passendes zeigen, oder haben Sie eine Frage?`, offer: 'zeigen:' + pass.welt.produkte.join(','), chips: ['Passendes zeigen', 'Neue Frage', 'Farbpass ansehen'] };
    return { text: 'As-salamu alaykum — ich bin Amira, die Beraterin der Maison. Ich kenne jeden Stoff, jede Farbe und begleite Sie gern: bei der Auswahl, bei der Pflege, bei den ersten Schritten mit Hijab — oder einfach zum Plaudern. Was führt Sie heute her?', offer: 'beratung', chips: START_CHIPS };
  }

  return { KATALOG, byId, fmt, FARBEN, MAIL,
    FARBPASS: { fragen: FP_FRAGEN, welten: FP_WELTEN, auswerten: fpAuswerten, speichern: fpSpeichern, laden: fpLaden, toPNG: fpToPNG, kontrastNote: KONTRAST_NOTE },
    AMIRA: { antworten, begruessung, kontext: () => ctx } };
})();
