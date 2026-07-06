# HIMA — KI-Kreativ-Prompt-System (Claude Design × Higgsfield)

_Erstellt: 28.06.2026 vom HIMA-Content-Team (hima-content · hima-bild-einsatz · hima-recolor). Für Website, Instagram, TikTok, Facebook._

> Ziel: bestehende Bilder überarbeiten/verbessern **und** neues, markensicheres Material erzeugen — konsistent, premium, ohne Klischees.

---

## 0. MASTER-BRAND-PROMPT (Fundament — in JEDE Bild-Generierung einfügen)

**Positiv:**
```
Editorial luxury fashion photography for HIMA, a premium modest-fashion house.
Quiet-luxury aesthetic like The Row, Loro Piana, Toteme. Warm neutral palette:
warm ivory (#F4EFE6), deep espresso brown (#2C1A10), sand, taupe, soft matte gold accents.
Soft natural window light, gentle shadows, calm and refined mood, generous negative space,
matte finish. An elegant adult woman wearing a beautifully draped HIMA hijab, [MATERIAL],
serene expression, dignified posture. Neutral plaster or linen background.
Timeless, feminine, understated. Medium-format look, 50mm, shallow depth of field,
true-to-life skin, natural colour.
```
**Negativ (immer):**
```
glossy, HDR, oversaturated, neon, garish colours, gold gradient, shiny,
cluttered background, plastic mannequin, visible brand labels, watermark, text, logo,
crescent moon, star, mosque, dome, arabic ornament pattern, busy print,
deformed hands, extra fingers, cartoon, 3d render, lowres, cheap.
```
**[MATERIAL] je Produkt** (korrekt — NIE „silk/Seide"): `soft bamboo-viscose jersey` · `premium modal` · `flowing chiffon` · `matte satin (polyester)` · `fine jersey`.

---

## 1. CLAUDE DESIGN — Prompt (Layout & Grafik)
Claude Design (claude.ai/design) für Kompositionen: Banner, Slides, Ad-Layouts, Text-auf-Bild.
```
Gestalte im HIMA-Markenstil: Palette warm Ivory #F4EFE6, Espresso #2C1A10, Sand #DCCCB6,
Taupe #A58F7A, mattes Gold #B8965A. Typo: hohe, weiche Serife (Didone/Cormorant-Klasse) für
Headlines, feine Sans (Jost) für Details. Ruhig, viel Weißraum, editorial. Wortbild „HIMA" mit
feinem Goldunterstrich, darunter arabisch „حِمَى". Deutsch. Kein Hype, keine lauten Rabatte,
keine religiösen Symbole. Erzeuge: {{Format & Zweck, z. B. „Website-Hero 16:7 mit Foto-Platz +
Headline ‚Die Kunst der leisen Eleganz' + Button ‚Kollektion entdecken'"}}.
```
Nutzung: Claude Design komponiert Layout + Textrahmen → Foto/Video aus Higgsfield einsetzen.

---

## 2. HIGGSFIELD — Setup: Soul ID (konsistentes Model)
Damit neues Material dieselbe Frau/denselben Look zeigt wie deine echten Fotos:
1. In Higgsfield **Soul ID** anlegen → Gesicht **deines echten Editorial-Models hochladen** (nur mit dessen Einverständnis/Model-Release).
2. Soul-ID benennen „HIMA Model 01" → in allen Szenen wiederverwenden.
> Vorteil: eine wiedererkennbare Markenfrau über Website + alle Kampagnen, ohne jedes Mal neu zu shooten.

---

## 3. HIGGSFIELD — BILD-PROMPTS

**A) Bestehende Website-Fotos verbessern (Enhance/Rework)** — Image-to-Image, niedrige Stärke (0.2–0.35), damit das echte Produkt erhalten bleibt:
```
[MASTER-BRAND-PROMPT] · Enhance this photo: clean, even soft light, refine skin naturally,
warm-neutral colour grade toward ivory/taupe, remove distractions, keep the hijab drape and
fabric exactly as is. Subtle, realistic, premium. Upscale to high resolution.
```

**B) Neue Szene mit demselben Model (Soul ID):**
```
[MASTER-BRAND-PROMPT] · [Soul ID: HIMA Model 01]. Full-length, seated on a linen sofa by a
large window, warm morning light, wearing a [MATERIAL] hijab in [FARBE: sage/taupe/mauve/…].
Calm, elegant, looking away. 4:5.
```

**C) Produkt-in-Kontext / Stillleben (ohne Gesicht):**
```
[MASTER-BRAND-PROMPT] · Still life: a folded [MATERIAL] hijab in [FARBE] on warm linen,
soft daylight, sculptural drape, matte gold pin beside it, generous negative space. 1:1.
```

**D) Hintergründe/B-Roll:** `warm plaster wall, soft light and shadow play, ivory and taupe, minimal, no people` — für Text-Overlays & Übergänge.

---

## 4. HIGGSFIELD — VIDEO (Image-to-Video, für TikTok/Reels/FB)
Aus einem Standbild ein premium, ruhiges Video. **Nur dezente Kamerafahrten** (kein Crash-Zoom/kein Action-Genre):
```
Animate this image. Camera: slow dolly-in (or gentle pan / subtle push).
The hijab fabric moves softly as in a light breeze. Unhurried, cinematic, calm, premium.
Genre: none/elegant. Duration 5–8s. No fast cuts, no shake, no crash zoom.
```
Empfohlene Bewegungen: **slow dolly-in, gentle pan, subtle crane up, 360 slow orbit** (max. 1–2 gestapelt). Modelle: Higgsfield Soul (Bild), Kling/Veo (Video) für ruhige Realistik.

---

## 5. PLATTFORM-SETS

| Plattform | Format | Länge | Higgsfield-Fokus | Text/Overlay (Content-Agent) |
|---|---|---|---|---|
| **Website** | 16:7 Hero, 3:2, 1:1 PDP | Bild | Enhance echte Fotos + neue Szenen/Hintergründe | via Claude Design (Headline/CTA) |
| **Instagram** | 4:5 Feed, 9:16 Story/Reel | 5–10 s | Image-to-Video (Stoff in Bewegung), Soul-ID-Szenen | Caption DE, dezent |
| **TikTok** | 9:16 | 7–15 s | Kurzclips, weicher Zoom, „so fällt HIMA"-Momente | Hook in Sek. 1, deutsch, ruhig |
| **Facebook** | 4:5 / 1:1 Feed, 9:16 Story | Bild + 6–10 s Video | dieselben Assets, ruhige Video-Ads | Ad-Text aus hima-ads |

---

## 6. WORKFLOW (so verbinden sich die Tools + das Team)
1. **hima-bild-einsatz** wählt Basisbild/Ziel (Website/IG/TikTok/FB) aus `assets/kuratiert/`.
2. **Higgsfield**: Enhance (A) oder neue Szene (B/C) mit Soul ID → hochauflösendes Bild.
3. **Higgsfield**: Image-to-Video (Abschnitt 4) für Reels/TikTok/FB.
4. **Claude Design**: Layout/Headline/CTA + Wortbild darüber (Abschnitt 1).
5. **hima-content**: deutsche Caption/Hook; **hima-ads**: Ad-Text für FB/IG-Ads.
6. Ablage: `assets/final/` + Einsatzplan (`assets/Bild_Kuration_und_Einsatz.md`).

## 7. Marken- & Rechtsregeln (verbindlich)
- **Echtes Produkt korrekt lassen** — Enhance nur dezent; kein KI-Fake-Produkt, das die Ware falsch darstellt. **Material nie „Seide"**.
- **Soul ID nur vom eigenen Model mit Model-Release** — keine fremden/prominenten Gesichter, keine erfundenen „Kundinnen".
- **Kennzeichnung:** KI-generierte/veränderte Werbeinhalte ggf. transparent kennzeichnen (Plattform-Regeln beachten).
- **Stil:** ruhig, premium, warm-neutral. Keine lauten Effekte, keine religiösen Klischees, kein glänzendes Gold.
```
