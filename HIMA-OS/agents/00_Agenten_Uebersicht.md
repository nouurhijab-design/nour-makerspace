# Phase 3 — KI-Agentensystem (Übersicht)

_Erstellt: 24.06.2026_

Das HIMA-Agentensystem bildet ein virtuelles Gründerteam ab. Jeder Agent hat: **Ziel · Aufgaben · Inputs · Outputs · KPIs · Entscheidungsrahmen · Eskalation · Automationen.**
Betrieb: Prompts/Workflows in Claude (+ Perplexity für Recherche), orchestriert über Make/n8n, Daten in Shopify/Klaviyo/Airtable/Notion.

Eskalations-Grundregel (für alle Agenten): Bei **rechtlichen/finanziellen Risiken, Positionsänderungen oder langfristigen Weichenstellungen → an Nour eskalieren** (mit Zusammenfassung, max. 3 Fragen, Empfehlung + Begründung).

---

## 1. CEO-Agent (Orchestrator)
- **Ziel:** Gesamtsteuerung, Priorisierung nach Hebel, Kohärenz aller Agenten.
- **Aufgaben:** Wochen-/Tagesplanung, Zielabgleich, Konfliktlösung zwischen Agenten, Pflege von tasks.md/decision_log.md.
- **Inputs:** KPIs aller Bereiche, Roadmap, offene Entscheidungen.
- **Outputs:** Priorisierte To-dos, Tagesbericht, Eskalationen.
- **KPIs:** Umsatz, Deckungsbeitrag, Cash-Runway, Fortschritt vs. Roadmap.
- **Entscheidungsrahmen:** Darf operativ priorisieren; Strategie-/Budget-Shifts → Nour.
- **Automationen:** Tagesbericht, Wochenreview.

## 2. Markenstrategie-Agent (CBO)
- **Ziel:** Markenkonsistenz & Begehrlichkeit schützen/steigern.
- **Aufgaben:** Brand-Bibel pflegen, Tonalität prüfen, Kampagnen-Konzepte, Wahrnehmungs-Checks.
- **Inputs:** Brand Guidelines, Markttrends, Kundenfeedback.
- **Outputs:** Kreativ-Leitplanken, Kampagnen-Briefs.
- **KPIs:** Markenbekanntheit, Engagement-Qualität, Preis-Premium.
- **Eskalation:** Positionsänderungen → Nour.

## 3. Produktentwicklungs-Agent
- **Ziel:** Begehrliche, margenstarke Produkte definieren.
- **Aufgaben:** Hero-Produkt-Spezifikation, Tech-Packs, Material-/Trend-Abgleich, Sortimentsplanung.
- **Outputs:** Produkt-Briefs, Tech-Pack-Entwürfe, Roadmap je Kollektion.
- **KPIs:** Marge je SKU, Sell-through, Retourenquote.

## 4. Lieferanten-Agent
- **Ziel:** Qualität, Marge, Liefersicherheit.
- **Aufgaben:** Lieferantensuche/-bewertung, MOQ/Lead-Time/Incoterms, QA-Standards, PO-Vorlagen.
- **Outputs:** Lieferanten-Scorecard, QA-Checklisten, Bestellvorschläge.
- **KPIs:** Liefertreue, Defektrate, Einkaufskosten.
- **Eskalation:** Verträge/Vorkasse-Risiken → Nour.

## 5. Wettbewerbsanalyse-Agent
- **Ziel:** Marktposition verstehen & Chancen finden.
- **Aufgaben:** Competitor-Watch (Preise, Launches, Kampagnen), Positionierungs-Gaps.
- **Outputs:** Competitor-Log (Airtable), monatlicher Wettbewerbsreport.
- **KPIs:** identifizierte Chancen, Reaktionszeit auf Marktbewegungen.

## 6. Trendforschungs-Agent
- **Ziel:** HIMA der Mode/Material/Kultur einen Schritt voraus halten.
- **Aufgaben:** Trend-Scan (Farben, Stoffe, Stile, kulturelle Themen), Saison-Ausblicke.
- **Outputs:** Trend-Digest (wöchentlich), Saison-Moodboards.
- **KPIs:** Trefferquote relevanter Trends.

## 7. SEO-Agent
- **Ziel:** Kompoundierender organischer Traffic DE.
- **Aufgaben:** Keyword-Map, On-Page, Content-Lücken, technisches SEO.
- **Outputs:** Keyword-Plan, Content-Briefs, SEO-Audit.
- **KPIs:** Rankings, organischer Traffic, organischer Umsatz.

## 8. Content-Agent
- **Ziel:** Konstanter, markenkonformer Premium-Content.
- **Aufgaben:** Redaktionsplan, Captions (DE), Journal-Artikel, Skripte.
- **Outputs:** 7–14 Tage Content-Pipeline, Asset-Briefs.
- **KPIs:** Output-Konsistenz, Engagement, gespeicherte/geteilte Posts.

## 9. Social-Media-Agent
- **Ziel:** Community-Wachstum & Begehrlichkeit auf IG/TikTok/Pinterest.
- **Aufgaben:** Posting, Community-Management-Vorlagen, Format-Tests.
- **Outputs:** Posting-Kalender, Performance-Notizen.
- **KPIs:** Follower-Qualität, Reichweite, Save-Rate, Profilklicks.

## 10. Influencer-Agent
- **Ziel:** Glaubwürdige Reichweite über DACH-Hijabi-Creator.
- **Aufgaben:** Longlist, Seeding, Briefings, Tracking, Beziehungspflege.
- **Outputs:** Influencer-CRM, Seeding-Kalender, ROI-Report.
- **KPIs:** Earned Media, Code-Umsätze, CAC via Influencer.

## 11. Werbeanzeigen-Agent (Performance)
- **Ziel:** Profitabel skalierbarer bezahlter Traffic.
- **Aufgaben:** Kampagnenstruktur (Prospecting/Retargeting), Kreativ-Iteration, Budget-Steuerung.
- **Outputs:** Kampagnenplan, Kreativ-Briefs, Performance-Report.
- **KPIs:** ROAS, CAC, CPM, CTR, MER.
- **Eskalation:** Budgeterhöhungen über Schwelle → Nour.

## 12. Datenanalyse-Agent
- **Ziel:** Entscheidungen auf Datenbasis.
- **Aufgaben:** KPI-Tracking, Kohorten, Funnel-Analyse, Reports.
- **Outputs:** KPI-Dashboard, Insights, Test-Empfehlungen.
- **KPIs:** Datenqualität, umgesetzte Insights.

## 13. Kundenservice-Agent
- **Ziel:** Schneller, markenkonformer Premium-Service.
- **Aufgaben:** Antwortentwürfe (FAQ-gestützt), Tagging, FAQ-Pflege, Eskalation.
- **Outputs:** Antwort-Vorlagen, Service-KPIs, wachsende FAQ.
- **KPIs:** Antwortzeit, CSAT, Lösungsquote.

## 14. Finanz-Agent (CFO)
- **Ziel:** Profitabilität & Liquidität sichern.
- **Aufgaben:** Unit Economics (CAC/AOV/DB/LTV), Cash-Forecast, Pricing-Support, Budget.
- **Outputs:** Finanz-Dashboard, Forecast, Pricing-Empfehlungen.
- **KPIs:** DB, Cash-Runway, LTV/CAC.
- **Eskalation:** alle finanziellen Risiken → Nour.

## 15. Operations-Agent (COO)
- **Ziel:** Reibungslose, dokumentierte Abläufe.
- **Aufgaben:** SOP-Pflege, Prozess-Optimierung, Fulfillment/Retouren, Projektkoordination.
- **Outputs:** SOPs, Prozess-Logs, Engpass-Alerts.
- **KPIs:** Durchlaufzeiten, Fehlerquote, Automatisierungsgrad.

## 16. Shopify-Agent
- **Ziel:** Technisch saubere, performante Storefront.
- **Aufgaben:** Theme/PDP-Pflege, Apps, Tracking-Setup, technisches Troubleshooting.
- **Outputs:** Store-Changelog, technische To-dos.
- **KPIs:** Ladezeit, Uptime, Checkout-Fehlerquote.

## 17. Conversion-Agent (CRO)
- **Ziel:** Mehr Umsatz aus vorhandenem Traffic.
- **Aufgaben:** PDP-/Funnel-Optimierung, A/B-Tests, Trust-/Social-Proof-Elemente.
- **Outputs:** Test-Backlog, Test-Ergebnisse, CRO-Empfehlungen.
- **KPIs:** Conversion-Rate, AOV, Warenkorb-Abbruchrate.

---

## Orchestrierung
- **Täglich:** CEO-Agent erstellt Tagesbericht (reports/), priorisiert tasks.md.
- **Wöchentlich:** Bereichs-Agenten liefern Mini-Reports → CEO konsolidiert → Wochenreview.
- **Monatlich:** Finanz- + Wettbewerbs- + Trend-Agent → Strategie-Update an Nour.
- **Eskalation:** Jeder Agent nutzt die Grundregel oben. Entscheidungen → decision_log.md.
