import { Hono } from 'hono'
import { Resend } from 'resend'
import { buildAdminEmail } from '../emails/admin.js'
import { buildConfirmationEmail } from '../emails/confirmation.js'

export const contactRoute = new Hono()

const REQUIRED_FIELDS = ['name', 'organization', 'email', 'subject']

const SUBJECT_LABELS = {
  demo: 'Demo anfragen',
  offerte: 'Offerte anfragen',
  verfuegbarkeit: 'Verfügbarkeit prüfen',
  frage: 'Allgemeine Frage',
}

contactRoute.post('/', async (c) => {
  const apiKey = process.env.RESEND_API_KEY
  const FROM_DOMAIN = process.env.RESEND_FROM_DOMAIN
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return c.json({ error: 'Serverkonfiguration fehlerhaft' }, 500)
  }

  const resend = new Resend(apiKey)

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
      from: `Mr. Plopp Website <noreply@${FROM_DOMAIN}>`,
      to: [ADMIN_EMAIL],
      replyTo: body.email,
      subject: `[${subjectLabel}] ${body.organization} — ${body.name}`,
      html: buildAdminEmail(body),
    })

    // Bestätigung an Absender
    await resend.emails.send({
      from: `Mr. Plopp <noreply@${FROM_DOMAIN}>`,
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
