import { Hono } from 'hono'
import { Resend } from 'resend'
import { buildAdminEmail } from '../emails/admin.js'
import { buildConfirmationEmail } from '../emails/confirmation.js'

export const contactRoute = new Hono()

const resend = new Resend(process.env.RESEND_API_KEY)

const REQUIRED_FIELDS = ['name', 'organization', 'email', 'subject']

const SUBJECT_LABELS = {
  demo: 'Demo anfragen',
  offerte: 'Offerte anfragen',
  verfuegbarkeit: 'Verfügbarkeit prüfen',
  frage: 'Allgemeine Frage',
}

contactRoute.post('/', async (c) => {
  let body
  try {
    body = await c.req.json()
  } catch {
    return c.json({ error: 'Ungültige Anfrage' }, 400)
  }

  // Validierung
  for (const field of REQUIRED_FIELDS) {
    if (!body[field]?.trim()) {
      return c.json({ error: `Feld '${field}' fehlt` }, 400)
    }
  }

  // Einfache E-Mail-Validierung
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return c.json({ error: 'Ungültige E-Mail-Adresse' }, 400)
  }

  const subjectLabel = SUBJECT_LABELS[body.subject] || body.subject

  try {
    // Admin-Benachrichtigung
    await resend.emails.send({
      from: 'Mr. Plopp Website <noreply@mrplopp.ch>',
      to: ['hallo@mrplopp.ch'],
      replyTo: body.email,
      subject: `[${subjectLabel}] ${body.organization} — ${body.name}`,
      html: buildAdminEmail(body),
    })

    // Bestätigung an Absender
    await resend.emails.send({
      from: 'Mr. Plopp <noreply@mrplopp.ch>',
      to: [body.email],
      subject: 'Ihre Anfrage bei Mr. Plopp — wir melden uns!',
      html: buildConfirmationEmail(body),
    })

    return c.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    return c.json({ error: 'E-Mail konnte nicht gesendet werden' }, 500)
  }
})
