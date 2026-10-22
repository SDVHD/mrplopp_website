# Mr. Plopp — Preisliste

## Pakete

| Paket | Laufzeit | Preis | Tablets | Bondrucker | Küchen-Monitor |
|---|---|---|---|---|---|
| Tagesevent | 1 Tag | CHF 400 | 2 | 1 | 1 |
| Wochenende ★ | 2 Tage | CHF 750 | 4 | 2 | 1 |
| Grossanlass | 3 Tage | CHF 900 | 6 | 3 | 1 |

> Grossanlass = Wochenende-Basis (CHF 750) + 1 Zusatztag (CHF 150) = CHF 900

---

## Zuschläge (Konfigurator)

| Position | Preis |
|---|---|
| Zusatztag (ab Tag 3) | + CHF 150 / Tag |
| Zusätzliche Bondrucker | + CHF 10 / Stk. |
| Zusätzliche Küchen-Monitore | + CHF 35 / Stk. |
| Tablet-Paket (je 5 Stk.) | + CHF 125 / Paket |
| Gäste-WLAN (bis 200 Besucher, 1 Tag) | CHF 250 |
| Gäste-WLAN (bis 200 Besucher, 2+ Tage) | CHF 250 × 1.5 = CHF 375 |
| Gäste-WLAN (je weitere 200 Besucher) | + CHF 250 / Block (× Tages-Faktor) |

---

## Immer inklusive (alle Pakete)

- Hub + Backup
- Eigenes WLAN + Internet
- Live-Dashboard
- CSV / Excel-Export
- MWST-Abrechnung (8.1% / 2.6%)
- Einschulung vor Ort
- Lieferung & Rücknahme

---

## Preislogik (Konfigurator)

```
Basispreis:
  1 Tag  → CHF 400
  2 Tage → CHF 750
  3+ T.  → CHF 750 + (Tage - 2) × 150

Tablet-Zuschlag:
  floor(Anzahl / 5) × CHF 125
  (d.h. ab 5. Tablet, ab 10. Tablet, usw.)

Drucker-Zuschlag:
  max(0, Anzahl - 1) × CHF 10

Monitor-Zuschlag:
  max(0, Anzahl - 1) × CHF 35

Gäste-WLAN:
  Tages-Faktor: 1 Tag → 1.0 / 2+ Tage → 1.5
  WLAN-Blöcke: ceil(max(0, Besucher - 200) / 200)
  Zuschlag: round((250 + Blöcke × 250) × Tages-Faktor)
  Bis 200 Gäste: CHF 250 (1 Tag) / CHF 375 (2+ Tage)
```

---

*Alle Preise in CHF, exkl. MWST — unverbindlicher Richtpreis, finale Offerte innert 24h.*
*Stand: Juli 2026*