/**
 * HTML-Template für die Bestätigungs-E-Mail an den Absender.
 * @param {Object} data - Formulardaten
 */
export function buildConfirmationEmail(data) {
  const firstName = data.name.split(' ')[0]

  return `<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F5F0E8;font-family:'DM Sans',system-ui,sans-serif">
  <div style="max-width:600px;margin:32px auto;background:#FFFAF3;border-radius:16px;overflow:hidden;border:1px solid #E8D8C0">

    <div style="background:#E8401C;padding:32px">
      <p style="margin:0 0 8px;color:rgba(255,255,255,0.8);font-size:13px">Mr. Plopp — Kassensystem für Vereinsfeste</p>
      <h1 style="margin:0;color:#fff;font-size:26px;font-weight:700;line-height:1.2">Vielen Dank, ${firstName}!</h1>
    </div>

    <div style="padding:32px">
      <p style="margin:0 0 16px;color:#2C1A0E;font-size:15px;line-height:1.6">
        Wir haben Ihre Anfrage erhalten und melden uns innert <strong>24 Stunden</strong> mit einer persönlichen Offerte bei Ihnen.
      </p>

      <div style="background:#FDF6EC;border-left:4px solid #E8401C;border-radius:0 10px 10px 0;padding:16px 20px;margin:24px 0">
        <p style="margin:0 0 4px;color:#7A5C44;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Ihre Anfrage</p>
        <p style="margin:0;color:#2C1A0E;font-size:14px"><strong>${data.organization}</strong>${data.date ? ` · Fest am ${data.date}` : ''}</p>
      </div>

      <p style="margin:0 0 16px;color:#2C1A0E;font-size:15px;line-height:1.6">
        Haben Sie zwischenzeitlich Fragen? Schreiben Sie uns jederzeit:
      </p>

      <p style="margin:0">
        <a href="mailto:hallo@mrplopp.ch"
           style="display:inline-block;background:#E8401C;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 28px;border-radius:10px">
          hallo@mrplopp.ch
        </a>
      </p>

      <hr style="margin:32px 0;border:none;border-top:1px solid #F0E8DA">

      <div style="display:flex;gap:24px">
        <div style="flex:1">
          <p style="margin:0 0 4px;color:#7A5C44;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Offline-First</p>
          <p style="margin:0;color:#2C1A0E;font-size:13px">Läuft ohne Internet — 100% ausfallsicher</p>
        </div>
        <div style="flex:1">
          <p style="margin:0 0 4px;color:#7A5C44;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em">Schweizer MWST</p>
          <p style="margin:0;color:#2C1A0E;font-size:13px">8.1% / 2.6% automatisch, 5-Rappen-Rundung</p>
        </div>
      </div>
    </div>

    <div style="padding:16px 32px;background:#FDF6EC;border-top:1px solid #F0E8DA;text-align:center">
      <p style="margin:0;color:#7A5C44;font-size:12px">
        Mr. Plopp · Das Kassensystem für Ihr Vereinsfest ·
        <a href="https://mrplopp.ch" style="color:#E8401C;text-decoration:none">mrplopp.ch</a>
      </p>
    </div>

  </div>
</body>
</html>`
}
