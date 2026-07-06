# HIMA — Design- & Änderungsprotokoll

Geführt vom Creative-/Dev-Team (Claude). Neueste Einträge oben.

## 2026-07-06

### Kampagnen-Hero (hero-gruppe.jpg)
- **Entscheidung:** Startseiten-Hero von einem einzelnen Salbei-Drapé (`drape-salbei-02.jpg`) auf das Vier-Modelle-Gruppenbild (`hero-gruppe.jpg`) umgestellt.
- **Warum:** Das Gruppenbild zeigt vier Farbwelten (Mauve, Braun, Taupe, Salbei) an echten Trägerinnen und kommuniziert Vielfalt + Produkt + Stimmung in einem Bild — Register von Jacquemus/Loewe. Stärkerer erster Eindruck, höhere emotionale Bindung.
- **Umsetzung:** Wortmarke, arabische Schrift und Tagline sind bereits mittig ins Bild eingebrannt. Um Dopplung zu vermeiden, wurde die sichtbare `<h1>` durch eine `visually-hidden` H1 ersetzt (SEO/A11y bleiben erhalten) und nur die beiden CTAs mittig unten platziert. Weicherer Scrim (`hero-scrim--soft`), damit das Bild spricht.
- **Offene Optimierung:** Idealerweise eine textfreie Version des Gruppenbilds beschaffen, damit die Typografie responsiv/lokalisierbar per HTML statt eingebrannt gesetzt werden kann. Zusätzlich `srcset` (WebP/AVIF, mobile Crops) für Core Web Vitals.
