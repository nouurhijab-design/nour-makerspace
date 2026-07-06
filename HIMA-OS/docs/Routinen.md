# HIMA — Tägliche Aufgaben & Routinen

_Erstellt: 28.06.2026 · Automatisiert über geplante Aufgaben (Scheduler). Verantwortlich: Onboarding-Agent + jeweiliger Fach-Agent._

## Tägliche Routinen
| Zeit | Routine | Agent | Output |
|---|---|---|---|
| 08:05 | **Tagesbericht** (Stand, 3 Hebel, Eskalationen) | CEO | `reports/Tagesbericht_JJJJ-MM-TT.md` |
| 08:15 | **Content-Vorschlag des Tages** (1 Post + Caption aus Content-Bank) | Content | `content/Taeglich/JJJJ-MM-TT.md` |
| 18:00 | **Tages-Check Shopify** (neue Bestellungen? Bestand niedrig? Fehler?) | Shopify | Notiz in Tagesbericht / Alert |

## Wöchentliche Routinen
| Tag | Routine | Agent |
|---|---|---|
| Mo 08:30 | **Wochenplanung** + 3 Hebel der Woche | CEO |
| Mo 09:00 | **Instagram-Wochenpaket** (7 Posts + Captions) | Content |
| Mi 09:00 | **Wettbewerbs-/Markt-Check** (Preise, Launches DACH) | Wettbewerb/Trend |
| Fr 16:00 | **KPI- & Finanz-Review** (Umsatz, DB, Bestand, Cash) + Wochen-Review-Vorlage | CFO |

## Monatliche Routinen
| Termin | Routine | Agent |
|---|---|---|
| 1. des Monats | **Strategie-Update** (Roadmap vs. Ist, Entscheidungen) | CEO |
| 1. des Monats | **Lieferanten- & Bestands-Review** | Operations |

## Ereignisbasiert
- Bestand < Schwelle → Nachbestell-Alert (Operations).
- Neue Bestellung → Post-Purchase-Flow (Klaviyo, automatisch).
- Presse/Rechtsanfrage → Eskalation an Nour.

## Deine tägliche 15-Minuten-Routine (Nour)
1. Tagesbericht in `reports/` lesen → die 3 Hebel.
2. Command-Center-Dashboard öffnen → Ampeln prüfen.
3. 1 Content-Freigabe + Eskalationen entscheiden.

## Status der Automationen
- ✅ **Tagesbericht** (08:05) — aktiv.
- ☐ Weitere Routinen: als geplante Aufgaben einrichten (siehe Onboarding-Agent). Freigabe/Trigger durch Nour, da einige Connector-Zugriffe (Shopify/IG) nutzen.
