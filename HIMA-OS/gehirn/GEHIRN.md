---
tags:
  - gehirn
  - hima
---

# 🧠 HIMA-Gehirn

> [!info] Zweck
> HIMA lernt aus jedem Tag. Dieses Dokument beschreibt den Kreislauf, der Wahrnehmung, Gedächtnis, Entscheidung und Lernen verbindet — damit das System jede Woche besser wird, nicht nur größer.

_Aufgebaut: 12.07.2026 · Verantwortlich: alle Agenten · Eigentümerin: Nour_

---

## Der Kreislauf

```
WAHRNEHMEN          →  ERINNERN            →  ENTSCHEIDEN        →  HANDELN           →  LERNEN
Markt-Radar            Vault (quellen/,       tasks.md (3 Hebel)    Sessions,            Lern-Log
Shopify-Zustand        docs/, SOPs)           decision_log          Routinen,            → Regeln
KPI-Cockpit            Projektgedächtnis                            Agenten              → SOPs/Skills
```

Jede Runde durch diesen Kreis macht das System klüger. Der Unterschied zu einem Archiv: **Learnings werden zu Regeln, Regeln werden zu Skills/SOPs** — dann gelten sie automatisch, ohne dass jemand daran denken muss.

## Die vier Organe

| Organ | Datei | Was es tut |
|---|---|---|
| 👁️ Wahrnehmung | [[Markt-Radar]] | Wettbewerber, Trends, Marktzahlen — wöchentlich frisch |
| 📊 Vitalwerte | [[KPI-Cockpit]] | Der ehrliche Zustand: Bestellungen, Store, Bestand |
| 📓 Erfahrung | [[Lern-Log]] | Append-only: was wir gelernt haben, mit Konsequenz |
| ⚖️ Urteil | [[decision_log]] · [[tasks]] | Entscheidungen und die 3 Hebel des Tages |

## Routinen, die das Gehirn füttern

| Wann | Routine | Schreibt nach |
|---|---|---|
| Täglich 08:05 | Tagesbericht (Stand, Δ seit gestern, 3 Hebel, Eskalationen) | `reports/` + ggf. 1 Learning |
| Mi 09:00 | Markt-Radar-Scan (Wettbewerber, Trends DACH/EU) | [[Markt-Radar]] |
| Fr 16:00 | KPI-Snapshot + Wochen-Review + Lern-Konsolidierung | [[KPI-Cockpit]] + `reports/Wochenreview_…` |

> [!warning] Routinen laufen nur, wenn die Claude-App geöffnet ist.
> War die App zu, wird die Aufgabe beim nächsten Start nachgeholt.

## Regeln (gelten immer)

1. **Nichts löschen** — Veraltetes wandert nach `_archiv/` oder wird als überholt markiert.
2. **Jede inhaltliche Session endet mit maximal 1 Lern-Log-Eintrag** — nur echte Erkenntnisse, kein Pflichtprotokoll.
3. **Ein Learning, das sich 2× bewährt hat, wird zur Regel** → Eintrag unten bei Regel-Kandidaten → bei Bestätigung in SOP oder Skill überführen. Das ist die Selbstverbesserung.
4. **Externe Aktionen nie ohne Freigabe von Nour** — nichts posten, senden, kaufen, veröffentlichen, deployen.
5. **Fortschritt wird am kritischen Pfad gemessen** (Store live, erste Bestellung), nicht an erzeugten Dateien.
6. **Eine Quelle der Wahrheit pro Thema** — Preise: `launch/08_Stoffe_und_Preise.md` · Aufgaben: `tasks.md` · Entscheidungen: `decision_log.md`.

## Regel-Kandidaten (aus Learnings, warten auf 2. Bestätigung)

- _(noch leer — wird vom Freitags-Review gefüllt)_

## Anbindungen

- **Shopify** — verbunden (Store-Zustand, Katalog, Bestellungen lesbar; Änderungen nur nach Freigabe)
- **Skills** — hima-* (Content, Ads, Produkttexte, Tagesbericht, Bilder), frontend-design, hima-brand-guidelines, web-design-guidelines, webapp-testing
- **Vercel** — vorbereitet, wartet auf Account/Login von Nour (Website-Deploy = Veröffentlichung, nur nach Freigabe)
- **Apify** — geplant für systematische Wettbewerber-Beobachtung, wartet auf Account + Token von Nour
