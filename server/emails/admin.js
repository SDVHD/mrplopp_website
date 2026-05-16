/**
 * HTML-Template für die Admin-Benachrichtigung bei neuer Kontaktanfrage.
 * @param {Object} data - Formulardaten
 */
export function buildAdminEmail(data) {
  const subjectLabels = {
    demo: 'Demo anfragen',
    offerte: 'Offerte anfragen',
    verfuegbarkeit: 'Verfügbarkeit prüfen',
    frage: 'Allgemeine Frage',
  }

  const rows = [
    ['Name', data.name],
    ['Verein / Organisation', data.organization],
    ['E-Mail', `<a href="mailto:${data.email}" style="color:#E8401C">${data.email}</a>`],
    ['Telefon', data.phone || '—'],
    ['Datum des Festes', data.date || '—'],
    ['Erwartete Gäste', data.guests || '—'],
    ['Anliegen', subjectLabels[data.subject] || data.subject],
  ]

  const tableRows = rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px 12px;background:#FDF6EC;color:#7A5C44;font-size:13px;width:180px;font-weight:600;border-bottom:1px solid #F0E8DA">${label}</td>
      <td style="padding:8px 12px;background:#FFFAF3;color:#2C1A0E;font-size:14px;border-bottom:1px solid #F0E8DA">${value}</td>
    </tr>`).join('')

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F0E8;font-family:'DM Sans',system-ui,sans-serif">
  <div style="max-width:600px;margin:32px auto;background:#FFFAF3;border-radius:16px;overflow:hidden;border:1px solid #E8D8C0">

    <div style="background:#E8401C;padding:24px 32px">
      <p style="margin:0;color:rgba(255,255,255,0.8);font-size:12px;letter-spacing:0.1em;text-transform:uppercase">Mr. Plopp — Neue Anfrage</p>
      <h1 style="margin:4px 0 0;color:#fff;font-size:22px;font-weight:700">${subjectLabels[data.subject] || data.subject}</h1>
    </div>

    <div style="padding:24px 32px">
      <table style="width:100%;border-collapse:collapse;border-radius:10px;overflow:hidden;border:1px solid #F0E8DA">
        ${tableRows}
      </table>

      ${data.message ? `
      <div style="margin-top:20px">
        <p style="margin:0 0 8px;color:#7A5C44;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em">Nachricht</p>
        <div style="background:#FDF6EC;border:1px solid #F0E8DA;border-radius:10px;padding:16px;color:#2C1A0E;font-size:14px;line-height:1.6;white-space:pre-wrap">${data.message}</div>
      </div>` : ''}

      <div style="margin-top:24px;text-align:center">
        <a href="mailto:${data.email}?subject=Re: Ihre Anfrage bei Mr. Plopp"
           style="display:inline-block;background:#E8401C;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px">
          Direkt antworten
        </a>
      </div>
    </div>

    <div style="padding:16px 32px;border-top:1px solid #F0E8DA;text-align:center">
      <p style="margin:0;color:#7A5C44;font-size:12px">Mr. Plopp · hallo@mrplopp.ch · mrplopp.ch</p>
    </div>

  </div>
</body>
</html>`
}
