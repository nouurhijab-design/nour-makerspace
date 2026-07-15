# HIMA — tasks.md

> Zentrale Aufgabenverwaltung. Single Source of Truth. Status: ☐ offen · ◐ in Arbeit · ✅ erledigt · ⏸ blockiert.
> Priorität: P0 (kritisch/sofort) · P1 (hoch) · P2 (mittel) · P3 (später).

_Letzte Aktualisierung: 15.07.2026 (Mi) — **Stillstand bestätigt (verifiziert live).** Shopify-Zustand **identisch zu 02.–12.07.** (10. identische Live-Abfrage): 9 Produkte, updatedAt aller 9 weiterhin 28.06. — **alle 9 DRAFT, 0 Bestand, ohne Bilder** (`featuredMedia: null`), Store „Mein Shop", **Trial-Plan**, **0 Bestellungen**. Seit 28.06. (**17 Kalendertage**) am kritischen Pfad **nichts bewegt**. ⚠️ **NEU & KRITISCH: Der in den letzten 3 Berichten fixierte „Montag-früh"-Trigger (Lieferanten-Muster) ist verstrichen — Mo 13., Di 14. und Mi 15.07. ohne Ausführung.** Die Werktags-These („am Wochenende ruht der kritische Pfad zwangsläufig") ist damit widerlegt: Auch die volle Werktags-Fähigkeit wird nicht genutzt. Der Engpass ist endgültig **reine Priorisierung von Nour** — kein Kalender-, Daten- oder Vorarbeitsproblem. Muster-Anfrage bleibt der teuerste verlorene Tag (längste Lead-Time, blockiert COGS + Erstbestellung + Bestand)._

---

## P0 — Fundament (Woche 1–4)

- ◐ Markenidentität finalisieren: Wortbild (✅ Entwurf steht), Logo als Vektor/PNG/SVG exportieren (offen: Canva-Kontingent)
- ✅ Markenrechtsprüfung „HIMA" Klasse 25 — **positiv** (25.06.). Gate offen, Invest in Domain/Print/Shopify freigegeben.
- ☐ **[NÄCHSTE AKTION]** Eigene Marke „HIMA" anmelden (EUIPO/DPMA Klasse 25) zur Sicherung
- ✅ **Domains gesichert: hima.de + byhima.com** (15.07., von Nour gekauft; per DNS-Abfrage verifiziert — beide registriert und aufgelöst). Offen als Folgeschritte: (a) Domains auf Website/Shop zeigen lassen (Vercel bzw. Shopify verbinden), (b) Canonical-/OG-URLs im Website-Code von `hima-maison.com` auf die echte Domain umstellen, (c) E-Mail-Adresse auf eigener Domain einrichten.
- ℹ️ Rahmenentscheidungen: Budget 6 M = moderat (2.000–8.000 €) · Außenkommunikation = primär Deutsch (HIMA + Arabisch als Markenelemente).
- ◐ Shopify-Store aufsetzen: **Trial-Konto existiert** (Store „Mein Shop", `r68uqw-px.myshopify.com`, EUR/DE). Offen: Store auf „HIMA" umbenennen, Theme im HIMA-Look, Impressum/DSGVO/Widerruf, **Plan-Upgrade vor Verkaufsstart (Eskalation: Geld)**.
- ✅ **Katalog vollständig angelegt** (verifiziert 02.07.): **9 Produkte** — 7 Hijab-Linien (Signature Bambus, Premium Jersey, Liquid Jersey, Bamboo Jersey, Premium Jersey Satin, Chiffon, Medina) + 2 Accessoires (Bonnet, Nadeln-3er), je mit Farb-Varianten/Texten/SKUs. „3-fehlende-SKUs" damit erledigt.
- ◐ **Store verkaufsfertig — letzte Meile.** ⚠️ **Seit 28.06. unverändert (verifiziert 02.–09.07. + 10.07., 7 Live-Abfragen) — 12 Kalendertage Stillstand ohne Freigabe; die gesamte Arbeitswoche (Mo–Fr) ungenutzt, damit reine Prioritätsentscheidung.** Katalog steht, aber alle 9 Produkte **DRAFT, 0 Bestand, ohne Bilder**. **Offen (kritischer Pfad):** (1) **Bilder einsetzen** (`assets/kuratiert/` → die 9 PDPs, `featuredMedia` überall leer — jetzt der größte Einzel-Gap), (2) **Bestand setzen** (setzt Lieferanten-Muster/Erstbestellung voraus), (3) **Status DRAFT → AKTIV** veröffentlichen, (4) Store „HIMA" umbenennen + Theme, (5) **Plan-Upgrade** (Trial verkauft nicht). Via Shopify-Anbindung ausführbar — **wartet ausschließlich auf Freigabe Nour**, nicht auf weitere Vorarbeit.
- ⚠️ **[NEU 04.07.] Preis-Widerspruch zwischen Kanälen entdeckt:** Shopify-Katalog führt Preise 12,90–18,90 € (Entscheidung 25.06.), aber `website/` + `app/` (neu gebaut 03.07.) nutzen eine **andere, niedrigere Preisliste** (z.B. Chiffon 8,00 € statt 12,90 €, Signature/Premium Bambus 14,00 € statt 18,90 €, Medina 10,00 € statt 16,90 €, Bonnet 4,50 € statt 7,90 €). Zwei „bindende" Preislisten existieren parallel — vor Live-Schaltung eines der beiden Kanäle **muss** dies aufgelöst werden, sonst Vertrauens-/Rechtsrisiko (unterschiedliche Preise für dieselbe Kundin).
- ☐ Zahlungsanbieter aktivieren (Shopify Payments + PayPal + Klarna für DACH)
- ✅ Hero-Produkt + Preisniveau final (25.06.): **sanfter Einstieg 14–19 €**. Hero = **Premium Bambus 18,90 €**; Chiffon 12,90 €, Jersey 14,90 €, Bambus 16,90 €, Satin 18,90 €. DB ~50–58 % (ohne Versand), EK 3,20–4,80 €. → `launch/08_Stoffe_und_Preise.md` + decision_log 25.06. Offen: fehlende EK/VK-Werte ergänzen, COGS via Muster validieren.
- ✅ Produktfotografie-Konzept/Briefing erstellt → `launch/07_Foto_Shooting_Briefing.md`. Offen: Shooting terminieren.
- ✅ **Foto-Engpass GELÖST (27.06.):** „HIMA Foto"-Set (~252 Bilder) ist professionelle Editorial-Fotografie im Markenlook (erwachsene Modelle, Jersey-Hijabs in HIMA-Palette, Flatlays) → `docs/Bildanalyse_HIMA_Foto.md`. Premium-Hero-Material vorhanden. Offen: (1) beste je Farbe kuratieren + einheitlicher Crop, (2) **Flatlays zeigen altes Label „Safelle"** → neu banderolieren/retuschieren vor Nutzung, (3) in PDP/`visuals/` einsetzen. (Alte Safelle-Studiofotos bleiben unbrauchbar, `docs/Bildanalyse_Bestand.md`.)
- ☐ **[NÄCHSTE AKTION — 3 Werktage überfällig]** Lieferanten-Muster anfragen (Vorlagen liegen bereit, `docs/Recht_und_Lieferanten.md`) — längste Lead-Time, blockiert COGS & Erstbestellung. **Der „Montag-früh"-Termin (13.07.) wurde nicht ausgelöst; Di/Mi ebenfalls nicht. Keine Weiterverschiebung mehr — heute anfragen.**

## P1 — Go-to-Market (Woche 3–10)

- ◐ Klaviyo einrichten: Flow-Texte/Konzept fertig (`launch/03_` + `launch/05_`). Offen: Konto anlegen, Flows technisch live schalten (nach Shopify).
- ◐ Instagram-Profil + 30-Tage-Plan: Konzept fertig (`launch/04_IG_Launch_Plan_30Tage.md`). Offen: Profil final einrichten, Content produzieren.
- ☐ Content-Bank: 30 Tage Content vorproduzieren (Slides aus HIMA Asset-Kit)
- ◐ Influencer-Seeding: Konzept/Plan fertig (`launch/06_`). Offen: 20er-Longlist DACH recherchieren, Outreach.
- ◐ Meta-Ads: Startpaket/Struktur fertig (`growth/02_`). Offen: Konto + Pixel/CAPI, erst nach validierter Storefront/Flows.
- ☐ Verpackung produzieren — **schlankes Modell** (~0,50–0,80 €/Stück): Hang-Tag + Seidenpapier + Dankeskarte; Dust-Bag NUR Hero/Upsell, nicht Standard (Margenschutz bei 14–19 €).

## P2 — Skalierung (Monat 3–9)

- ◐ SEO-Fundament: Keyword-Map DE fertig (`growth/01_`). Offen: Kategorie-/Produkttexte, Journal starten.
- ☐ Sortiment erweitern (Farben, Underscarf, Magnet-Brosche aus Makerspace-Linie)
- ☐ Lieferanten diversifizieren (2. Quelle, MOQ & Lead-Times dokumentieren)
- ☐ Retouren-/Service-SOP live, Helpdesk-Tool wählen
- ◐ KPI-Dashboard: Bauplan fertig (`growth/03_`). Offen: Tool wählen & aufsetzen.

## P3 — Ausbau (Monat 9–24)

- ☐ Kategorie-Erweiterung: Abayas / Ready-to-wear / Accessoires
- ☐ HIMA-App (Flutter) mit Backend-Proxy & echtem NFC
- ☐ Internationalisierung: EN/FR-Storefront, byhima.com global
- ☐ Loyalty-/Membership-Programm, VIP-Kreis

---

## Backlog / Ideen
- Color-Passport-System, Grip-Underscarf (2. Produktwelle)
- Pop-up / Concept-Store DACH
- PR: Modest-Fashion-Press & DACH-Lifestyle-Medien

## Erledigt (Archiv)
- ✅ Vollständiger Katalog als Draft angelegt (28.06., verifiziert 02.07.) — 9 Produkte (7 Hijab-Linien + Bonnet + Nadeln), je mit Farb-Varianten/Texten/SKUs. Offen: Bilder, Bestand, Veröffentlichung, Plan-Upgrade.
- ✅ Shopify-Trial