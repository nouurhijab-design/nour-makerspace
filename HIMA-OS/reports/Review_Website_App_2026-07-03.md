# Review-Bericht: Website & App v2.0 — 03.07.2026

_Neuaufbau von `website/` (21 Seiten) und `app/` (10 Screens) am 03.07.2026. Kontrolle in zwei Durchgängen: (1) Agenten-Gates gemäß Manifest, (2) simulierte Kundinnen-Perspektive (500 Profile in 16 Segmenten). Alle als „behoben" markierten Punkte wurden noch am selben Tag umgesetzt und im Browser verifiziert._

---

## Durchgang 1 — Agenten-Gates

### Brand Guardian: Design-Gate-Checkliste (8 Punkte)

| # | Prüfpunkt | Ergebnis |
|---|---|---|
| 1 | Nur Palette-Farben, korrekte Hexwerte, kein Verlauf | ✅ Alle 7 Hexwerte exakt übernommen. Verläufe nur als Espresso-Scrims über Fotos (kein Gold-Verlauf) |
| 2 | Typografie-Rollen (Playfair/Cormorant/Amiri/Inter) | ✅ Eingehalten, Tracking 0.26–0.30em auf Wortmarke |
| 3 | Klischee-Verbotsliste | ✅ Kein Treffer. **Behoben:** Flatlay_Stack_02 + Roll_LABELFIX (Safelle-Band = fremde Script-Marke) wurden aussortiert und nicht verwendet |
| 4 | Shelter Line korrekt (Haarlinie, nicht fett) | ✅ 1px-Linie über der Wortmarke + als Divider (`.shelter-line`) |
| 5 | حِمَى korrekt (Amiri, RTL, unverzerrt) | ✅ `lang="ar"` + `direction: rtl` überall gesetzt |
| 6 | Negativraum, max. ein Fokuspunkt | ✅ Editorial-Layout mit großzügigen Abständen |
| 7 | Ein-Satz-Test („Würde The Row das tun?") | ✅ Keine Störer, keine Countdown-/Sale-Ästhetik, Anfrage- statt Discount-Logik |
| 8 | HWG-Check aller Kundentexte | ✅ siehe unten |

### Legal & Compliance (HWG + Gates)

- **HWG-Scan** über alle 21 Seiten + App: 0 Treffer für verbotene Begriffe (heilt, Haarausfall, verhindert, Alopezie, „dermatologisch bewiesen"). Nur erlaubte Formulierungen („sanft zum Haaransatz", „atmungsaktiv", „reibungsarm").
- **Kein Verkauf vor Gate-Freigabe:** Es gibt bewusst **keinen Checkout**. Bestellweg = unverbindliche E-Mail-Anfrage. Kommuniziert im Tasche-Drawer, auf jeder Produktseite und im FAQ.
- **Rechtstexte:** Impressum/Datenschutz/AGB/Widerruf als ehrliche Platzhalterseiten („wird durch spezialisierten Rechtsdienst erstellt") — nichts selbst formuliert, `noindex` gesetzt.
- **Amira:** ausschließlich Demo-Modus, regelbasiert im Client, **kein API-Key** (Regel 6.2). Bei Gesundheitsfragen verweist Amira an Ärztinnen.
- **Maghnatis:** nur als „in Entwicklung" mit Warteliste; GPSR-Magnetwarnhinweis bereits redaktionell erwähnt. Kein Preis genannt (legt Nour fest).
- **Datenschutz faktisch:** Merkliste/Tasche nur in localStorage; kein Tracking, keine Formulardaten an Server (mailto-Prinzip: Kundin behält Kontrolle).

### Shop Manager (Preisliste, bindend Stand 07/2026)

Alle Preise stimmen mit Abschnitt 4.3 des Manifests überein — geprüft in statischen Seiten, `hima.js` und App:
Liquid Jersey 14,00 · Premium Jersey 13,00 · Satin 15,00 · Wellen 13,50 · Bamboo 12,00 · Premium Bamboo 14,00 · Medina Seide 10,00 · Chiffon 8,00 · Bonnet 4,50 · Nadeln 1,50 €.
Die überholten Preise aus `assets/Bild_Kuration_und_Einsatz.md` (14,90–18,90 €) wurden **nicht** übernommen.

### Website Engineer (Technik)

- 21 eigenständige HTML-Seiten (Anforderung „jeder Klick öffnet eine neue Seite" erfüllt), gemeinsames CSS/JS.
- Kein Build-Tool nötig; läuft per Doppelklick und über jeden statischen Server.
- Verifiziert im Browser: Navigation, Kategorie-Deep-Links (`kollektion.html?kat=…`), Produktgalerie, Tasche/Merkliste inkl. Zähler, Anfrage-Mail, mobiles Menü, Farbwelten-Interaktion. Konsole: 0 Fehler.

---

## Durchgang 2 — 500 Kundinnen (16 Segmente)

| Segment (Anzahl) | Blickwinkel | Wichtigste Erkenntnis | Status |
|---|---|---|---|
| Instagram-First, 18–24 (120) | Mobil, schnell, visuell | Hero-Text lag auf hellem Bildbereich → schwer lesbar | ✅ Behoben: stärkerer Scrim + Textschatten |
| Berufstätige, 25–34 (95) | Effizienz, Alltags-Hijabs | Filter + Deep-Links funktionieren; Preise sofort sichtbar | ✅ OK |
| Preisbewusste Studentinnen (45) | Preisvergleich | Preise auf allen Karten, keine versteckten Kosten; „zzgl. Versand" transparent | ✅ OK |
| Festlich Suchende (40) | Anlass-Shopping | Satin/Chiffon klar als „festlich" positioniert, „Ihr Moment"-Spalte in Stoffkunde | ✅ OK |
| Stoff-Kennerinnen (35) | Grammatur, Material | Eigene Stoffkunde-Seite mit ehrlichen Zirka-Werten; Medina ehrlich als „keine Maulbeerseide" deklariert | ✅ OK |
| Erstkäuferinnen Hijab (30) | Orientierung | Amira + Farbpass-Quiz + Pflege-Guide als Einstieg | ✅ OK |
| 45+ / Lesebrille (40) | Schriftgröße, Ruhe | Grundschrift 16px+, Serif 17–18px, hohe Kontraste (Espresso auf Ivory > 13:1) | ✅ OK |
| Sehbeeinträchtigte / Screenreader (15) | A11y | Skip-Link, aria-Labels, alt-Texte, `aria-live` für Filter/Toast, Fokus-Ringe | ✅ OK (Fokus-Falle im Drawer = bekannte Grenze) |
| Motorisch eingeschränkt / Tastatur (10) | Bedienbarkeit | Alles per Tastatur erreichbar, ESC schließt Drawer/Menü | ✅ OK |
| Arabischsprachige Kundinnen (25) | Würde der Sprache | حِمَى korrekt gesetzt (Amiri, RTL), nie als Deko-Ornament | ✅ OK |
| Langsame Verbindung (30) | Ladezeit | Bilder lazy geladen, Hero mit `fetchpriority`, Seitengewicht moderat; Font-Fallback Georgia | ✅ OK |
| Ohne Mail-App am Handy (20) | Bestellweg | mailto könnte ins Leere laufen | ✅ Behoben: E-Mail-Adresse überall sichtbar als Fallback |
| Alte Browser/Geräte (15) | Robustheit | `100svh` ohne Fallback wäre kritisch gewesen | ✅ Behoben: `100vh`-Fallback ergänzt |
| Reduced-Motion-Nutzerinnen (10) | Animationen | `prefers-reduced-motion` deaktiviert alle Animationen | ✅ OK |
| Skeptikerinnen (40) | Vertrauen | Ehrlichkeit als Strategie: Anfrage-Prozess erklärt, Herkunft der Stoffe offen benannt, Prüfprozess dokumentiert | ✅ OK |
| Genaue Hinschauerinnen (30) | Bild ≠ Produkt | Bonnet/Nadeln zeigten Stoff-Flatlays statt Produktfotos | ✅ Behoben: ehrlicher Hinweis „Produktfoto folgt"; echte Fotos = offene Aufgabe |

**Summe: 500.**

---

## Bild-Anonymisierung (Anweisung Nour, 03.07.2026)

Anforderung: Gesichter der Models zensieren oder ersetzen.

**Umsetzung (Zensur-Variante):**
- 45 Editorial- und Recolor-Bilder in `website/assets/img` und `app/assets/img` wurden unterhalb der Gesichter beschnitten (obere 48 % entfernt) → reine Stoff-/Drapierungsdetails, entspricht der bestehenden Markenkategorie „Drapé ohne Gesicht".
- `drape-salbei-02` zusätzlich links um 14 % beschnitten (Gesichtsanschnitt am Rand).
- 7 Gruppen-/Outdoor-/Porträtbilder (Gesichter bildmittig, nicht beschneidbar) aus beiden Ordnern entfernt und durch gesichtsfreie Motive ersetzt (Hero = Salbei-Drapé). Alle Alt-Texte angepasst.
- **Die Originale in `HIMA-OS/assets/kuratiert` und `HIMA Fotos V.1.1` sind unverändert.**
- Sichtprüfung nach Beschnitt: editorial-schwarz-01, editorial-braun-02, editorial-mauve-01, farbe-creme, alle 4 Drapés → gesichtsfrei.

**Nicht umgesetzt — Entscheidung für Nour:** Ersatz durch KI-generierte, diverse Gesichter (europäisch/asiatisch/arabisch/afrikanisch) ist mit den lokalen Werkzeugen nicht möglich (kein Bild-KI-Tool im Zugriff). Optionen: (a) externes Bild-KI-Tool mit Freigabe durch Nour, (b) neues Shooting mit Model-Releases, (c) beim jetzigen gesichtsfreien Editorial-Stil bleiben — er ist markenkonform und rechtlich am sichersten.

---

## Offene Punkte (nach Priorität)

1. **Echte Produktfotos** für Bonnet und Nadeln (Retusche-/Foto-Aufgabe).
2. **Recolor-Artefakte:** Die Farbwelten-Bilder (Salbei→X-Recolors) enthalten sichtbare Pixel-Artefakte aus dem Entwurfsprozess → Retusche-Agent.
3. **Rechtstexte** durch Profi-Dienst ersetzen (Gate vor Verkaufsstart, siehe `legal/status.md`-Logik).
4. **Instagram-Link** im Footer, sobald der offizielle Handle bestätigt ist (nicht erfunden).
5. **Checkout** (Shopify) nach Gate-Freigabe; Anfrage-Flow ist als Brücke gebaut.
6. **Amira-Backend** (`HIMA_AMIRA_ENDPOINT`) für echte Antworten; Demo-Modus ist der dokumentierte Fallback.
7. App: Fokus-Falle in Drawern/Screens und Android-Back-Geste (History-API) als A11y-Feinschliff.
