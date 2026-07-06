# Phase 5 — Automations-Blueprint

_Erstellt: 24.06.2026 · Prinzip: Automatisiere alles wirtschaftlich Sinnvolle; Mensch entscheidet, Maschine arbeitet._

Legende: **Trigger → Schritte → Output** · Tool · Aufwand (S/M/L) · Hebel (★1–5)

---

## 1. Marktbeobachtung & Trends ★4 · M
Trigger: wöchentlich (Make/n8n-Scheduler) → Perplexity/Claude recherchiert „Modest Fashion Trends, Materialien, Wettbewerber-Launches" → Zusammenfassung nach Notion + E-Mail-Digest. Output: wöchentlicher Trend-Report.

## 2. Wettbewerbsüberwachung ★4 · M
Trigger: wöchentlich → Scrape/Check definierter Wettbewerber (Preise, Neuheiten, Kampagnen via Sichtprüfung/Alerts) → Airtable-Tabelle „Competitor Watch". Output: Veränderungs-Log + Alerts bei Preis-/Sortimentsänderung.

## 3. SEO-Monitoring ★3 · S
Trigger: wöchentlich → GSC-Daten (Rankings, Klicks, neue Queries) + Mangools → Notion-Dashboard. Output: Keyword-Bewegungen, Content-Lücken-Liste.

## 4. Content-Planung & -Produktion ★5 · M
Trigger: wöchentlich → Claude erzeugt Redaktionsplan (Themen, Captions DE) aus Content-Säulen → Entwürfe in Notion → Mensch finalisiert → optional Auto-Post via Buffer/Make. Output: 7–14 Tage Content vorgeplant.

## 5. Influencer-Recherche & Outreach ★4 · M
Trigger: monatlich → Identifikation DACH-Hijabi-Micro-Influencerinnen (Kriterien: 10–80k, Engagement >3 %, Werte-Fit) → Airtable-CRM → personalisierte Seeding-Mails (Vorlage) halbautomatisch. Output: gepflegte Influencer-Pipeline.

## 6. Kundenservice ★4 · M
Trigger: eingehende Anfrage (Mail/IG/WhatsApp) → KI-Vorentwurf (FAQ-gestützt) → Mensch gibt frei → Auto-Tagging in Helpdesk. Output: schnelle, markenkonforme Antworten; FAQ wächst automatisch.

## 7. E-Mail-Marketing (Klaviyo) ★5 · S — höchster ROI
Immer-an-Flows: Welcome, Browse-Abandon, Cart/Checkout-Abandon, Post-Purchase, Win-Back, VIP. Plus Kampagnen-Kalender (2–4/Monat). Output: 24/7 Umsatz ohne Mehraufwand.

## 8. Reporting ★4 · S
Trigger: täglich/wöchentlich → Make zieht Shopify+GA4+Klaviyo-KPIs → Notion-Dashboard + Tagesbericht-Markdown. Output: tägliche/wöchentliche Fortschrittsberichte (siehe reports/).

## 9. Produktentwicklung (Support) ★3 · M
Trigger: ad hoc → Claude erstellt Tech-Pack-Entwurf, Material-Recherche, Trend-Abgleich. Output: schnellere Produktdefinition.

## 10. Lieferantenkommunikation ★3 · S
Trigger: Bestellzyklus → Vorlagen für Anfragen/POs/QA-Rückmeldungen, Tracking in Airtable. Output: dokumentierte, wiederholbare Lieferantenprozesse.

## 11. Bestandsmanagement ★4 · M
Trigger: Shopify-Inventar-Schwelle → Alert + Nachbestell-Vorschlag (Lead-Time-basiert) → Airtable/Notion. Output: keine Out-of-Stocks bei Hero-SKU, kein Überbestand.

---

## Umsetzungsreihenfolge (nach Hebel/Aufwand)
1. **Klaviyo-Flows** (★5/S) — sofort
2. **Reporting/Tagesbericht** (★4/S) — sofort
3. **Content-Planung** (★5/M) — Woche 2
4. **Influencer-CRM** (★4/M) — Woche 3
5. **Service-KI** (★4/M) — Woche 4
6. **Markt-/Wettbewerb-/SEO-Monitoring** (★3–4) — Monat 2
7. **Inventar-Alerts** (★4/M) — Monat 2

## Hinweis
Automationen, die Kundendaten verarbeiten, DSGVO-konform aufsetzen (Auftragsverarbeitung, Datensparsamkeit). Mensch behält Freigabe bei allem, was extern kommuniziert wird (Marke schützen).
