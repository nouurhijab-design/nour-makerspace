# HIMA Website v2.0 (03.07.2026)

Statische Mehrseiten-Website für hima.de — kein Build-Tool nötig. Öffnen per Doppelklick auf `index.html` oder über einen beliebigen statischen Server.

## Seitenstruktur (21 Seiten)

| Seite | Zweck |
|---|---|
| `index.html` | Start: Hero, Kategorien, kuratierte Auswahl, interaktive Farbwelten, Teaser |
| `kollektion.html` | Alle 10 Produkte mit Kategorie-Filter; Deep-Link: `?kat=Jersey` etc. |
| `produkt-*.html` (10×) | Eigenständige Produktseiten (Galerie, bindende Preise, Maße, Pflege, Anfrage) |
| `stoffe.html` | Stoffkunde: Vergleichstabelle, Eingangsprüfung, Pflege |
| `maison.html` | Markengeschichte, Shelter Line, Grundsätze |
| `atelier.html` | MakerSpace: Maghnatis (Warteliste), Hangtag/Dust Bag, Ausblick |
| `journal.html` | 3 Editorial-Artikel |
| `kontakt.html` | Kontaktformular (mailto), FAQ |
| `impressum/datenschutz/agb/widerruf.html` | Platzhalter — Texte kommen vom Rechtsdienst, nie selbst formulieren |

## Technik

- `assets/css/hima.css` — Design-System (Palette/Typo bindend gemäß hima-brand Skill)
- `assets/js/hima.js` — Produktdaten (**einzige Preisquelle im Web**), Tasche/Merkliste (localStorage), Drawer, Anfrage-Mail
- `assets/js/pdp.js` — Produktdetail-Renderer + Detailtexte (HWG-konform halten!)
- `_template-produkt.html` / `_template-recht.html` — Vorlagen; Änderungen an Header/Footer hier nachziehen und Seiten neu generieren

## Regeln für Änderungen

1. **Preise** nur durch Nour — Liste in `hima.js` und den statischen Produktseiten synchron halten.
2. **Kundentexte** vor Veröffentlichung durch `hwg-compliance-check` (keine Heil-/Gesundheitsversprechen).
3. **Bilder:** Alle Bilder in `assets/img` sind anonymisiert (gesichtsfrei beschnitten). Keine Bilder mit erkennbaren Gesichtern oder Safelle-Branding einsetzen. Originale liegen in `HIMA-OS/assets/kuratiert`.
4. **Kein Checkout** aktivieren, bevor die Rechts-Gates (LUCID, Rechtstexte, Freigaben) erfüllt sind.

Review-Bericht: `../HIMA-OS/reports/Review_Website_App_2026-07-03.md`
