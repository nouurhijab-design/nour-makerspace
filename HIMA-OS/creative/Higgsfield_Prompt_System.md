# HIMA × Higgsfield — Prompt-System & Guardrails

**Zweck:** Jede KI-Bild-/Videogenerierung für HIMA soll ohne Nacharbeit on-brand sein.
**Verbindung:** Higgsfield-MCP (bereits authentifiziert). Kosten-Preflight immer mit `get_cost:true`.
**Stand:** 2026-07-06 · verifizierte Kosten: `marketing_studio_image` = **2 Credits / Bild @ 1k, 4:5**.

---

## 1. Nicht verhandelbare Marken-Guardrails (in JEDEN Prompt)

**Immer:**
- Palette: Warmes Ivory `#F4EFE6`, Espresso `#2C1A10`, Sand `#DCCCB6`, Taupe `#A58F7A`, Gold `#B8965A` (nur Vollton, nie Verlauf).
- Register: „quiet luxury" — The Row, Aesop, Loewe, Celine. Ruhig, zeitlos, feminin, editorial.
- Licht: weiches Nordfensterlicht / gerichtetes Softbox-Licht. Natürliche Haut, natürlicher Stofffall.
- Stoff realistisch: matte Textur mit dezentem Schimmer (Jersey, Bambus, Chiffon, Seide).

**Niemals (harte Verbote — Marke „kein religiöses Merchandise"):**
- Keine religiösen Symbole: Halbmond, Stern, Moschee, Kuppel, arabische Ornament-Bordüren.
- Kein Gold-Verlauf, kein Roségold, kein Blush-Pink-Kitsch, keine Script-/Kalligrafie-Fonts als Deko.
- Kein „fließender-Schal"-Swoosh, keine gesichtslose Verschleierten-Silhouette.
- Kein künstlicher AI-Look, keine Über-Retusche, keine Plastikhaut, keine Logos/Wortmarken im Bild (die setzen wir per HTML/Design, nicht eingebrannt).

**Negativ-Zusatz (ans Prompt-Ende):**
`no logos, no text, no crescent, no religious symbols, no gold gradient, no plastic skin, no oversharpening, natural fabric, natural skin`

---

## 2. Modell-Wahl (Higgsfield)

| Ziel | Modell | Hinweis |
|------|--------|---------|
| Produkt / Kampagne / Ads / Still-Life | `marketing_studio_image` | Standard für HIMA-Assets. 2 Cr/Bild. |
| Portrait / Fashion / Editorial / UGC | `soul_2` | Für Trägerinnen-Shots. |
| Wiederverwendbares Gesicht (Model-Konsistenz) | `soul_2` + trainierte „Soul" | 5–20 Fotos, ~10 Min Training. Für konsistente Kampagnengesichter. |
| 4K / Bild-mit-Text / Diagramm | `nano_banana_pro` | Wenn Text im Bild nötig. |
| Bild → Video (Motion) | `presets_show` → `generate_video` / `motion_control` | Für Reels/Hero-Loops. |

Vor jeder neuen Nutzung: `models_explore action=recommend query="..."` für aktuelle Aspect-Ratios & Parameter.

---

## 3. Prompt-Bausteine (modular, wiederverwendbar)

```
[Bildtyp] of [Motiv] in [HIMA-Farbe],
[Stoff & Fall], [Licht], [Hintergrund = warm ivory seamless],
quiet-luxury fashion [still life / editorial] in the register of The Row and Aesop,
natural matte fabric texture, [Objektiv], [Tiefenschärfe], calm and timeless, muted warm palette,
no logos, no text, no crescent, no religious symbols, no gold gradient, natural skin, natural fabric
```

**Objektiv-Cheatsheet:** Makro-Detail → 85–100mm macro · Produkt → 50–85mm · Editorial-Portrait → 85mm f/1.8 · Gruppe/Kampagne → 35–50mm.

---

## 4. Ready-to-run Prompts (getestet-kompatibel, 4:5)

**A · Stoffmakro (Produktdetail, je Farbe wiederholen)**
> Editorial macro photograph of premium jersey hijab fabric in soft sage green (Salbei), fine draped folds catching soft directional north-window light, warm ivory (#F4EFE6) seamless background, quiet-luxury fashion still life in the register of The Row and Aesop, natural matte fabric texture with subtle sheen, shallow depth of field, 85mm macro, calm and timeless, muted warm palette, no logos, no text, no crescent, no gold gradient, natural fabric

**B · Flatlay (gefaltete Stoffe, PDP/Kategorie)**
> Overhead flatlay of three neatly folded premium hijabs in taupe, cream and espresso, arranged with generous negative space on a warm ivory linen surface, soft even daylight, minimalist quiet-luxury still life, natural fabric texture, subtle shadows, 50mm, no logos, no text, no religious symbols, natural fabric

**C · Editorial-Portrait (Trägerin — Modell `soul_2`)**
> Editorial fashion portrait of a woman wearing a softly draped jersey hijab in mauve, serene expression, natural skin with minimal makeup, warm ivory studio backdrop, soft directional light, quiet-luxury register of Celine and The Row, 85mm f/1.8, shallow depth of field, timeless and calm, no logos, no text, no crescent, natural skin

**D · Verpackung / Unboxing (Brand-Story)**
> Product photograph of a minimalist espresso-brown gift box with a fine matte-gold hairline detail, wrapped in ivory tissue, on a warm ivory surface, soft daylight, luxury unboxing still life, quiet and refined, 50mm, shallow depth of field, no logos, no text, no gold gradient

**E · Hero / Kampagne (Weite, Motion-fähig)**
> Cinematic wide campaign still of draped hijab fabrics in salbei, taupe and mauve flowing in gentle air, warm ivory environment, soft volumetric light, quiet-luxury fashion film aesthetic, natural fabric motion, 35mm, muted warm palette, no logos, no text, no religious symbols

---

## 5. Workflow (immer gleich)

1. Prompt aus Baustein (§3) + Guardrails (§1) bauen.
2. `generate_image` mit `get_cost:true` → Credits prüfen.
3. Generieren (`count` 1–4). Ergebnis mit `show_generations` / `job_display` sichten.
4. On-brand? → `media_import_url`/Download → in `website/assets/img/` bzw. `HIMA-OS/assets/kuratiert/` ablegen, sprechend benennen (`HIMA_<Typ>_<Farbe>_NN.jpg`).
5. Für Video: bestes Standbild → `presets_show` → `generate_video`.
6. Entscheidung in `website/CHANGELOG.md` bzw. `HIMA-OS/decision_log.md` notieren.

**Credits:** Free-Plan hat wenig Guthaben (Stand 6). Für echte Kampagnen `show_plans_and_credits` (Top-up/Plan) — erst bei Bedarf, nie automatisch kaufen.
