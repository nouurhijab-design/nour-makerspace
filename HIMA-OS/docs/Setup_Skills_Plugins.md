# HIMA — Skills, Plugins & Connectors (Empfehlung)

_Erstellt: 28.06.2026 · Aktivierung in der App: Einstellungen › Capabilities. Der Onboarding-Agent pflegt diese Liste._

## Bereits aktiv / verfügbar
- ✅ **Shopify-Connector** — Store „Mein Shop", Produkte/Kollektionen (genutzt).
- ✅ **Canva-Connector** — Design-Generierung (Kontingent aktuell erschöpft — regeneriert sich).
- ✅ **Dokument-Skills** — docx, pptx, xlsx, pdf (für Berichte, Rechner, Angebote).
- ✅ **Scheduler** — geplante Aufgaben (Tagesbericht aktiv).

## Empfohlen zu aktivieren (nach Bedarf)
| Bedarf | Skill/Plugin/Connector | Priorität |
|---|---|---|
| E-Mail-Automation (Flows) | **Klaviyo** | P1 (nach Shopify-Launch) |
| Social/Ads-Steuerung | **Meta Business / Instagram** | P1 |
| Wissens-/Ops-Hub | **Notion** oder **Airtable** | P2 |
| Analytics | **Google Analytics / Search Console** | P2 |
| KI-Bildbearbeitung (Recolor/Retusche pixelgenau) | Bild-/Imagegen-Skill oder Canva „Magic" | P1 (für Produktbilder) |
| No-Code-Automation (Connector-Verkettung) | **Make** / **n8n** / **Zapier** | P2 |

## Agenten-System (Ersatz/Ergänzung, bis Skills aktiv)
- Kern-Agenten: `agents/` (CEO, Content, Performance …).
- Asset-Kette: `agents/asset-system/` (Orchestrator + Kuration, Retusche, PDP, Social, Website, Wissens-Index, **Onboarding/Setup**).
- Jeder Agent = einsatzbereiter System-Prompt (in Claude/GPT kopieren).

## Hinweis (ehrlich)
Skills/Plugins **installiert die App**, nicht der Agent. Bis ein Skill aktiv ist, übernimmt der passende Agenten-Workflow die Aufgabe (z. B. Bild-Recolor per Skript statt KI-Skill). Der Onboarding-Agent empfiehlt, dokumentiert und schaltet den Workflow um, sobald ein Skill verfügbar ist.
