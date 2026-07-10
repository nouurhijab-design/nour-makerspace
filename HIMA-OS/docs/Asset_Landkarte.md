# 🗺️ Asset-Landkarte — Wo liegt was?

_Stand: 10.07.2026 · Vollständige Karte aller HIMA-/NOUR-/Safelle-Bestände nach der Neuordnung. Pflege: [[06_Wissens_Index_Agent|Wissens-/Index-Agent]]._

> [!info] Eine Wahrheit pro Thema
> Diese Seite ist die **einzige** Übersicht über physische Dateibestände.
> Bild-Bewertungen im Detail: [[Bild_Inventar]] · [[Bildanalyse_Bestand]] · [[Bildanalyse_HIMA_Foto]]

## ✅ Aktive Bestände (in Benutzung)

| Ort | Inhalt | Umfang | Status |
|---|---|---|---|
| `HIMA-OS/` | Wissensbasis = **dieser Obsidian-Vault** | ~75 Notizen | ✅ aktiv |
| `HIMA-OS/quellen/` | Quell-Dokumente: Brand Strategy, 3 NOUR-PDFs, Stoffkartei | 5 Dateien | ✅ Referenz |
| `HIMA-OS/assets/kuratiert/` | Kuratierte Premium-Fotos (aus HIMA Foto.zip) | 50 JPG | ✅ Hauptquelle |
| `website/` | Produktions-Website (22 HTML-Seiten + CSS/JS/Bilder) | ~74 Dateien | ✅ live-fähig |
| `app/` | App-Prototyp | 16 Dateien | ✅ Prototyp |
| `HIMA_Design/` | Designsystem: Logos, IG, TikTok/FB, Visitenkarte, Prompts | 68 Dateien | ✅ Referenz |
| `HIMA Fotos V.1.1/` | Kuratierte Fotos Version 1.1 + Recolor | 20 Dateien | ✅ Referenz |

## ⚠️ Altbestände (nicht verwenden, nur Referenz)

| Ort | Inhalt | Umfang | Verdikt |
|---|---|---|---|
| `Safelle Bilder/` | Mannequin-Studiofotos, **Fremdmarke LOVELYA sichtbar** | 530 JPG | ❌ nicht verwenden ([[Bildanalyse_Bestand]]) |
| `Safelle fotos/` | Mix: Mannequin, Outdoor, Schnappschüsse | 71 Dateien | ❌ überwiegend nicht; Outdoor nur Stil-Referenz |

## 🗄️ Archiv (`_archiv/`, aus Git ausgeschlossen)

| Ort | Inhalt | Warum archiviert |
|---|---|---|
| `_archiv/HIMA Foto.zip` | Original-Zip der Premium-Fotos (153 MB, 252 Bilder) | Entpackt & kuratiert in `assets/kuratiert` |
| `_archiv/HIMA_GPT_Bilder/` (+ .zip) | 42 GPT-generierte Bilder | Duplikate — finale Versionen in `website/assets/img` |
| `_archiv/hima_starterkit/` | Alte Starterkits, Zips, hero.jpg, CLAUDE.md (vorher `Desktop/hima`) | Von Starterkit ins echte System überführt |
| `_archiv/prototypen/` | 3 alte HTML-Prototypen (One-Pager, Logo, IG-Slides) | Ersetzt durch `website/` + `HIMA_Design/` |
| `_archiv/files.zip` | Altes Datei-Bündel | Inhalt längst integriert |

## 📐 Regeln

1. **Neue Fotos** → erst Kuration ([[01_Bild_Kurations_Agent]]), dann `assets/kuratiert/`, dann Einsatz laut [[Bild_Kuration_und_Einsatz]].
2. **Neue Dokumente/PDFs** → `quellen/` (wenn Quelle) oder passender Themenordner (wenn Arbeitsdokument).
3. **Nichts löschen** — Veraltetes wandert nach `_archiv/` und wird hier eingetragen.
4. **Safelle-Material** bleibt gesperrt für Marketing (Fremdmarke im Bild).
