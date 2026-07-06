# Phase 4 — Technische Infrastruktur & Kosten-Nutzen-Analyse

_Erstellt: 24.06.2026 · Preise ca., monatlich, Stand 2026 — vor Abschluss verifizieren._

## 1. Empfohlener Stack (Lean-Start, DACH)

| Funktion | Empfehlung | Alternative | Kosten ca. | Begründung |
|---|---|---|---|---|
| Shop / Checkout | **Shopify Basic** | WooCommerce | ~33–39 €/M | Schnell, sicher, DACH-Payments, App-Ökosystem |
| Zahlungen | **Shopify Payments + PayPal + Klarna** | Mollie/Stripe | % je Tx | Klarna/PayPal sind in DACH conversion-kritisch |
| E-Mail/SMS | **Klaviyo** (Free → Email-Plan) | Omnisend (günstiger) | 0 → ~20 €+ | Beste Flows/Segmentierung; Free bis 250 Profile |
| Analytics | **GA4 + Shopify Analytics** | Plausible | 0 | Pflicht-Datengrundlage |
| Search Console | **Google Search Console** | Bing WMT | 0 | SEO-Monitoring |
| SEO-Tool | **Mangools** (Einstieg) | Ahrefs/Semrush | ~30–50 € / 100 €+ | Ahrefs/Semrush erst bei Content-Skalierung |
| Wissens-/Projekt-Hub | **Notion** | Airtable | 0 → ~10 € | OS-Dashboards, SOPs, CRM |
| Datenbank/Ops | **Airtable** | Google Sheets | 0 → ~20 € | Lieferanten, Influencer, Inventar-Tracking |
| Automatisierung | **Make** (oder n8n self-host) | Zapier | ~9–16 € / 0 € | Make = bestes Preis/Leistung; n8n = volle Kontrolle |
| KI-Kern | **Claude** (+ ChatGPT, Perplexity) | Gemini | ~20 €+ je | Claude für Strategie/Text, Perplexity für Recherche |
| Heatmaps/CRO | **Hotjar** (Free) | Microsoft Clarity (0) | 0 | Clarity gratis als Start |
| Reviews/UGC | **Loox / Judge.me** | — | ~10–30 € | Social Proof, conversion-relevant |
| Design | **Canva Pro + Figma** | — | ~12 € / 0 € | Asset-Produktion |

**Start-Budget (Tools) realistisch:** ~120–200 €/Monat bei Lean-Start; skaliert mit Umsatz (v.a. Klaviyo nach Listengröße, SEO-Tool, Ads-Budget separat).

## 2. Architektur (Datenfluss)

```
Traffic (SEO/Ads/Social/Influencer)
        │
        ▼
   Shopify (Store, Checkout, Kundendaten)
   │        │            │
   ▼        ▼            ▼
 Klaviyo   GA4/GSC      Airtable (Ops/Inventar/CRM)
 (E-Mail)  (Analytics)        │
   │            │             ▼
   └──── Make/n8n (Automationsschicht) ────┐
                │                          │
                ▼                          ▼
         Notion (OS-Hub/Reports)     Claude/Perplexity (Agenten)
```

## 3. KI-Tool-Rollen
- **Claude:** Strategie, Langtexte, Markenstimme, Code/Agenten, Berichte.
- **Perplexity:** Markt-/Wettbewerbs-/Trend-Recherche mit Quellen.
- **ChatGPT/Gemini:** Zusatz für Bild-/Multimodal-Aufgaben, Varianten.
- **Make/n8n:** verbindet Shopify ↔ Klaviyo ↔ Airtable ↔ Notion ↔ KI.

## 4. Kosten-Nutzen-Logik (Priorisierung der Ausgaben)
1. **Shopify + Klaviyo** zuerst — direkter Umsatzhebel.
2. **Make/n8n + Notion/Airtable** — Effizienz/Skalierung, niedrige Kosten.
3. **SEO-Tool** erst wenn Content systematisch läuft.
4. **Ads-Budget** separat, erst nach validierter Storefront & Flows (sonst verbrennt Geld).
5. **Ahrefs/Semrush** erst bei ernsthafter Content-/SEO-Skalierung (>50 €/M rechtfertigt sich später).

## 5. Sicherheits-/Compliance-Hinweise (DACH)
- DSGVO: Cookie-Consent (z.B. Consentmanager), Double-Opt-in in Klaviyo, AVV mit Dienstleistern.
- Rechtstexte: Impressum, Datenschutz, Widerruf, AGB (anwaltlich/IT-Recht-Generator).
- API-Keys nie clientseitig (gilt auch für HIMA-App → Backend-Proxy, siehe CTO-Agent).
