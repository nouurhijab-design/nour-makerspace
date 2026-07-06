# HIMA — Design- & Änderungsprotokoll

Geführt vom Creative-/Dev-Team (Claude). Neueste Einträge oben.

## 2026-07-06

### Fotografisches Grading (mehr Realismus, ohne Identitätsverlust)
- **Entscheidung:** Statt einer KI-img2img-„Realismus"-Überarbeitung (die die Gesichter neu zeichnen und die Identifikation zerstören würde) wurde ein rein fotografisches Grading in Pillow angewandt: dezente Tonwertkurve (Kontrast +7 %), leicht entsättigte Editorial-Palette (−4 %), Unsharp-Mask für Stoff-/Hauttextur und 4,5 % feines Filmkorn. Das bricht den digitalen „AI-Glanz" und lässt das Bild wie eine echte Studio-Aufnahme wirken — die Personen bleiben unverändert. Hero und alle vier Gesichts-Crops neu aus der gegradeten Fassung geschnitten (einheitlicher Look). Kosten: 0 Credits.
- **Optional:** KI-Upscale auf 4K via Higgsfield kostet flat 2 Credits (für Print/große Displays; fürs Web ist 1818px ausreichend).

### Echte Gesichter für Identifikation (strategisch)
- **Entscheidung:** Kundinnen müssen sich wiedererkennen. Aus der sauberen (textfreien) Version des Gruppenbilds wurden vier Gesichts-Porträts freigestellt (`face-mauve/espresso/taupe/salbei.jpg`, Python/Pillow) und als neue Sektion „Vier Frauen · Vier Töne — Welche HIMA sind Sie?" auf der Startseite eingebaut (vor Farbwelten). Jedes Porträt verlinkt in die passende Farbwelt.
- **Warum:** Echte, diverse Gesichter auf warmer Haut schaffen Identifikation und Vertrauen — der stärkste Conversion-Hebel für eine Fashion-Maison (Register Skims/COS). Jede Frau steht für einen Farbcharakter.
- **Hero-Upgrade:** Die eingebrannte Wortmarke ist in der sauberen Bildversion weg. Damit konnte die frühere Notlösung (visually-hidden H1) rückgängig gemacht werden: Hero trägt jetzt wieder echte, responsive HTML-Typografie (Overline, H1, Shelter Line, Sub, CTAs) über dem Gruppenbild — barrierefrei und lokalisierbar.
- **SEO/Social:** `<head>` um Open Graph, Twitter Card, Canonical und `theme-color` ergänzt.

### Kampagnen-Hero (hero-gruppe.jpg)
- **Entscheidung:** Startseiten-Hero von einem einzelnen Salbei-Drapé (`drape-salbei-02.jpg`) auf das Vier-Modelle-Gruppenbild (`hero-gruppe.jpg`) umgestellt.
- **Warum:** Das Gruppenbild zeigt vier Farbwelten (Mauve, Braun, Taupe, Salbei) an echten Trägerinnen und kommuniziert Vielfalt + Produkt + Stimmung in einem Bild — Register von Jacquemus/Loewe. Stärkerer erster Eindruck, höhere emotionale Bindung.
- **Umsetzung:** Wortmarke, arabische Schrift und Tagline sind bereits mittig ins Bild eingebrannt. Um Dopplung zu vermeiden, wurde die sichtbare `<h1>` durch eine `visually-hidden` H1 ersetzt (SEO/A11y bleiben erhalten) und nur die beiden CTAs mittig unten platziert. Weicherer Scrim (`hero-scrim--soft`), damit das Bild spricht.
- **Offene Optimierung:** Idealerweise eine textfreie Version des Gruppenbilds beschaffen, damit die Typografie responsiv/lokalisierbar per HTML statt eingebrannt gesetzt werden kann. Zusätzlich `srcset` (WebP/AVIF, mobile Crops) für Core Web Vitals.
