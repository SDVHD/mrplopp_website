import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { readFileSync } from 'fs'
import { contactRoute } from './routes/contact.js'

const app = new Hono()

// Health check — Railway braucht das für den Deployment-Check
app.get('/api/health', (c) => c.json({ status: 'ok' }))

// API routes — vor static, damit /api/* nicht als Datei gesucht wird
app.route('/api/contact', contactRoute)

// Statische Dateien aus Vite-Build
app.use('/*', serveStatic({ root: './dist' }))

// SPA-Fallback — alle nicht gefundenen Routen → index.html
app.get('/*', (c) => {
  const html = readFileSync('./dist/index.html', 'utf-8')
  return c.html(html)
})

const port = Number(process.env.PORT) || 3000

serve({ fetch: app.fetch, port }, () => {
  console.log(`Mr. Plopp läuft auf Port ${port}`)
})
