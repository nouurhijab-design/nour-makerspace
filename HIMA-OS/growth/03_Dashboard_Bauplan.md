# KPI-Dashboard — Bauplan (Notion oder Airtable)

_Erstellt: 24.06.2026 · Ziel: eine einzige Wahrheitsquelle für Zahlen, wöchentlich gepflegt._

## 1. Empfehlung
- **Notion** für Übersicht/Reports/SOPs (schön, einfach).
- **Airtable** für strukturierte Daten (Influencer, Lieferanten, Inventar) mit Filter/Automationen.
- Start mit Notion-Dashboard + 1 wöchentlicher KPI-Tabelle; Airtable ergänzen, wenn Datenmengen wachsen.

## 2. Notion-Aufbau (Seitenstruktur)
```
HIMA Dashboard (Startseite)
├── 🎯 Wochen-KPIs (Tabelle, 1 Zeile/Woche)
├── 💶 Unit Economics (Verknüpfung zur Excel / Kernwerte)
├── 📋 Aufgaben (Spiegel von tasks.md, Board-Ansicht)
├── 🤝 Influencer-CRM (Airtable-Embed)
├── 📦 Inventar & Lieferanten (Airtable-Embed)
├── 📅 Content-Kalender
└── 📈 Monats-Review
```

## 3. Wochen-KPI-Tabelle (Felder)
| Feld | Quelle |
|---|---|
| Woche (Datum) | manuell |
| Umsatz (€) | Shopify |
| Bestellungen | Shopify |
| AOV (€) | =Umsatz/Bestellungen |
| Conversion-Rate (%) | Shopify/GA4 |
| Sessions / Traffic | GA4 |
| Werbeausgaben (€) | Meta/Google |
| ROAS | =Umsatz aus Ads/Ausgaben |
| CAC (€) | =Ausgaben/Neukunden |
| E-Mail-Umsatz (€) & Anteil % | Klaviyo |
| Neue E-Mail-Abonnenten | Klaviyo |
| IG-Follower / Wachstum | IG |
| Retourenquote (%) | Shopify |
| Deckungsbeitrag (€) | aus Unit-Economics |
| Cash-Stand (€) | manuell |
| Notiz / 3 Hebel der Woche | manuell |

## 4. Airtable-Bases (Tabellen & Felder)

**Base „Influencer-CRM"** — Felder: Name, IG-Handle, Follower, Engagement-Rate, Werte-Fit (1–5), Status (Single-Select), Lieblingsfarbe, Adresse, Versanddatum, Post-Link, Reichweite, Umsatz/Code, Beziehung. Ansichten: Pipeline (nach Status), „Zu kontaktieren", „Aktiv".

**Base „Inventar & Lieferanten"** — Tabelle Produkte (SKU, Farbe, Bestand, Nachbestell-Schwelle, Lead-Time, COGS) + Tabelle Lieferanten (Name, Scorecard 1–5, MOQ, Lead-Time, Defektrate, Kontakt). Automation: Bestand < Schwelle → Alert.

**Base „Content-Kalender"** — Datum, Plattform, Format, Säule, Status (Idee/Entwurf/geplant/live), Caption, Asset-Link, Performance.

## 5. Automatisierung (Make/n8n)
- Täglich/wöchentlich: Shopify + GA4 + Klaviyo + Meta → KPI-Tabelle (oder halbautomatisch füllen).
- Inventar-Schwelle → Slack/E-Mail-Alert.
- Tagesbericht-Skill (bereits aktiv) liest tasks.md/Reports und schreibt reports/.

## 6. Routine
- **Täglich (5 Min):** Umsatz/Bestellungen/Ausgaben kurz prüfen.
- **Wöchentlich (30 Min):** KPI-Zeile füllen, 3 Hebel definieren.
- **Monatlich (60 Min):** Review vs. Roadmap, decision_log.md aktualisieren.

## 7. Nordstern-Kennzahlen (immer im Blick)
1. **Deckungsbeitrag** (Profitabilität)
2. **LTV/CAC** (Wachstumsgesundheit, Ziel ≥ 3)
3. **E-Mail-Umsatzanteil** (Plattform-Unabhängigkeit, Ziel ≥ 25 %)
4. **Wiederkaufrate** (Markenbindung)
