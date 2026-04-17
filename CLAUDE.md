# CLAUDE.md — Mr. Plopp Landing Page (`mrplopp.ch`)

## Projekt-Übersicht

Marketing-Website für **Mr. Plopp**, ein lokales Kassensystem für Schweizer Vereinsfeste.
Gebaut als **Vue 3 + Vite + Tailwind CSS** Single-Page-Application mit **Fullpage-Scroll**.
Hosting auf **Railway** — ein einziger Service (Node.js), der den Vite-Build statisch served
und gleichzeitig den `/api/contact` Endpoint für Resend bereitstellt. Kein Serverless,
kein Cold Start, kein zweites Deployment.

---

## Tech Stack

| Tool | Version | Zweck |
|---|---|---|
| Vue 3 | `^3.4` | Composition API, `<script setup>` |
| Vite | `^5` | Build-Tool, HMR |
| Tailwind CSS | `^3.4` | Utility-first Styling |
| Vue Router | `^4` | History-Mode Router |
| fullpage.js | `^4` | Fullscreen-Scroll (Section-by-Section) |
| @fullpage/vue-fullpage.js | `^0.2` | Vue-Wrapper für fullpage.js |
| Hono | `^4` | Leichtgewichtiger Node.js-Server (serve static + API) |
| Resend | `^3` | E-Mail-Versand (Admin-Benachrichtigung + Bestätigung) |
| VueUse | `^10` | Composables (useIntersectionObserver etc.) |
| @heroicons/vue | `^2` | Icons |

> **Warum Hono statt Express?** Hono ist minimal, TypeScript-first, extrem schnell und hat
> hervorragenden Static-File-Support. Kein Overhead für eine Marketing-Seite.

---

## Projektstruktur

```
mrplopp-web/
├── CLAUDE.md
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── tsconfig.server.json        ← separates tsconfig für server/
├── index.html
├── railway.toml                ← Railway Deployment-Konfiguration
├── .env.example
│
├── server/
│   ├── index.ts                ← Hono-App: static serve + /api/contact
│   ├── routes/
│   │   └── contact.ts          ← POST /api/contact → Resend
│   └── emails/
│       ├── admin.ts            ← HTML-Template Admin-Benachrichtigung
│       └── confirmation.ts     ← HTML-Template Bestätigung an Absender
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── og-image.jpg            ← 1200×630px
│
└── src/
    ├── main.ts
    ├── App.vue                  ← Root, fullpage.js Setup
    │
    ├── assets/
    │   └── main.css             ← Tailwind directives + CSS Custom Properties
    │
    ├── config/
    │   └── pricing.ts           ← Preisdaten (nie hardcoded in Templates)
    │
    ├── composables/
    │   └── useContactForm.ts    ← Formular-State + fetch('/api/contact')
    │
    ├── components/
    │   ├── NavBar.vue
    │   ├── sections/
    │   │   ├── HeroSection.vue
    │   │   ├── FeaturesSection.vue
    │   │   ├── HowItWorksSection.vue
    │   │   ├── PricingSection.vue
    │   │   ├── FaqSection.vue
    │   │   └── ContactSection.vue
    │   └── ui/
    │       ├── PricingCard.vue
    │       ├── FeatureCard.vue
    │       ├── FaqItem.vue
    │       └── ContactForm.vue
    │
    └── types/
        └── index.ts             ← ContactFormPayload, PricingTier, FaqItem
```

---

## Design-System

### Farbpalette (CSS Custom Properties in `src/assets/main.css`)

```css
:root {
  --color-primary:    #E8401C;   /* Paprika-Rot */
  --color-secondary:  #F5A623;   /* Amber-Gelb */
  --color-accent:     #2D6A4F;   /* Tannengrün */

  --color-bg:         #FDF6EC;   /* Warmes Cremeweiß */
  --color-surface:    #FFFAF3;
  --color-dark:       #1A1208;   /* Tiefes Warmbraun */

  --color-text:       #2C1A0E;
  --color-muted:      #7A5C44;
}
```

### Typografie

```
Display: Playfair Display 700 / 900  → Überschriften, festlich-seriös
Body:    DM Sans 400 / 500 / 600     → Fliesstext, modern, lesbar
Mono:    JetBrains Mono 500          → Preise, technische Labels
```

Google Fonts Import (in `index.html` `<head>`):
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap
```

---

## Sections & Inhalt

### 1. HeroSection
- Headline: **"Das Kassensystem für Ihr Vereinsfest."**
- Subline: Offline-fähig. Schweizer MWST. Einfach mieten.
- CTA primär: "Demo anfragen" → scrollt zu ContactSection
- CTA sekundär: "Wie funktioniert's?" → scrollt zu HowItWorksSection
- Dekorativ: animierte Kassabon-Karte (CSS `@keyframes floatCard`)
- Stats-Leiste: `< 10ms` Latenz · `100%` Offline · `CH` MWST-konform

### 2. FeaturesSection
- 6 Feature-Cards (2 Reihen × 3):
    1. Offline-First — läuft ohne Internet
    2. Schweizer MWST — 8.1% / 2.6% automatisch
    3. 5-Rappen-Rundung — gesetzeskonform
    4. Blitzschnell — < 10ms Antwortzeit lokal
    5. Tablet-optimiert — Samsung Galaxy Tab
    6. TWINT & Karte — alle Zahlungsmittel

### 3. HowItWorksSection
- Dunkler Hintergrund (`--color-dark`)
- 4-Schritt-Timeline mit nummerierten Kreisen + verbindender Linie:
    1. Anfragen → individuelle Offerte innert 24h
    2. Lieferung & Setup → Hub, Tablets, Drucker, Einschulung
    3. Fest läuft → lokal, ausfallsicher, kein WLAN-Stress
    4. Abrechnung → CSV/Excel-Export, Geräterückgabe

### 4. PricingSection
- 3 Karten: Tagesevent / Wochenende (featured) / Grossanlass
- Preise: **"Auf Anfrage"** — individuell, kein Listenpreis
- Feature-Listen pro Karte (Anzahl Tablets, Drucker, Hub-Redundanz)
- Footer: "Keine versteckten Kosten · Keine Monatsgebühren · Keine Bindung"

### 5. FaqSection
- 2-spaltig: Links Titel + CTA, rechts Accordion
- 7 Fragen:
    1. Brauche ich Internet auf dem Festgelände?
    2. Wie viele Tablets sind im Paket?
    3. Was passiert bei Hub-Ausfall?
    4. Bekomme ich eine MWST-konforme Abrechnung?
    5. Unterstützt Mr. Plopp TWINT?
    6. Wie läuft Lieferung und Setup ab?
    7. Kann ich eigene Artikel erfassen?

### 6. ContactSection
- 2-spaltig: Links Info + Vertrauens-Chips, rechts Formular
- Felder:
    - Name (required)
    - Verein / Organisation (required)
    - E-Mail (required)
    - Telefon (optional)
    - Datum des Festes (date, optional)
    - Erwartete Gäste (select: < 100 / 100–300 / 300–500 / 500+)
    - Anliegen (select, required): Demo anfragen / Offerte anfragen / Verfügbarkeit prüfen / Allgemeine Frage
    - Nachricht (textarea, optional)
- Submit → `POST /api/contact` → Hono → Resend
- Success-State: animierte Bestätigung ohne Page-Reload

---

## Server — Hono (`server/index.ts`)

```typescript
import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { contactRoute } from './routes/contact'

const app = new Hono()

// Health check (Railway braucht das für den Deployment-Check)
app.get('/api/health', (c) => c.json({ status: 'ok' }))

// API routes — vor static, damit /api/* nicht als Datei gesucht wird
app.route('/api/contact', contactRoute)

// SPA static files aus Vite-Build
app.use('/*', serveStatic({ root: './dist' }))

// SPA fallback — alle nicht-API-Routen → index.html (Vue Router History Mode)
app.get('/*', (c) => {
  return c.html(Bun.file('./dist/index.html').text())
})

const port = Number(process.env.PORT) || 3000
serve({ fetch: app.fetch, port }, () => {
  console.log(`Mr. Plopp Web running on port ${port}`)
})
```

---

## Resend-Integration (`server/routes/contact.ts`)

```typescript
import { Hono } from 'hono'
import { Resend } from 'resend'
import { buildAdminEmail } from '../emails/admin'
import { buildConfirmationEmail } from '../emails/confirmation'

export const contactRoute = new Hono()
const resend = new Resend(process.env.RESEND_API_KEY)

contactRoute.post('/', async (c) => {
  const body = await c.req.json()

  // Validation
  const required = ['name', 'verein', 'email', 'anliegen'] as const
  for (const field of required) {
    if (!body[field]?.trim()) {
      return c.json({ error: `Feld '${field}' fehlt` }, 400)
    }
  }

  try {
    // Admin-Benachrichtigung
    await resend.emails.send({
      from: 'Mr. Plopp Website <noreply@mrplopp.ch>',
      to: ['hallo@mrplopp.ch'],
      replyTo: body.email,
      subject: `[${body.anliegen}] ${body.verein} — ${body.name}`,
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
```

---

## Composable (`src/composables/useContactForm.ts`)

```typescript
import { ref } from 'vue'
import type { ContactFormPayload } from '@/types'

export function useContactForm() {
  const loading = ref(false)
  const success = ref(false)
  const error = ref<string | null>(null)

  async function submit(payload: ContactFormPayload) {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      success.value = true
    } catch {
      error.value = 'Etwas hat nicht geklappt. Bitte versuchen Sie es erneut.'
    } finally {
      loading.value = false
    }
  }

  return { loading, success, error, submit }
}
```

---

## fullpage.js Setup (`src/App.vue`)

```typescript
import VueFullPage from '@fullpage/vue-fullpage.js'
import '@fullpage/vue-fullpage.js/dist/style.css'

const fullpageOptions = {
  licenseKey: import.meta.env.VITE_FULLPAGE_LICENSE,
  scrollingSpeed: 700,
  easing: 'easeInOutCubic',
  navigation: true,
  navigationPosition: 'right',
  anchors: ['hero', 'features', 'wie-es-funktioniert', 'preise', 'faq', 'kontakt'],
  menu: '#main-nav',
  responsiveWidth: 768,  // Mobile: normales Scroll
  css3: true,
}
```

> **Lizenz-Hinweis**: fullpage.js ist für kommerzielle Nutzung kostenpflichtig ($149 Einmalzahlung).
> Open-Source-Alternative: `swiper` mit `direction: 'vertical'` und `mousewheel: true`.

---

## Environment Variables

```bash
# .env.local — nie committen (.gitignore)
RESEND_API_KEY=re_xxxxxxxxxxxx
VITE_FULLPAGE_LICENSE=your_license_key_here

# Railway Dashboard → Service → Variables (identisch)
RESEND_API_KEY=re_xxxxxxxxxxxx
VITE_FULLPAGE_LICENSE=your_license_key_here
# PORT wird von Railway automatisch gesetzt — nicht manuell setzen
```

`.env.example` (committen):
```bash
RESEND_API_KEY=re_your_api_key_here
VITE_FULLPAGE_LICENSE=your_license_key_here
```

---

## Railway Deployment

### `railway.toml`

```toml
[build]
  builder = "NIXPACKS"
  buildCommand = "npm run build && npm run build:server"

[deploy]
  startCommand = "node dist-server/index.js"
  healthcheckPath = "/api/health"
  healthcheckTimeout = 10
  restartPolicyType = "ON_FAILURE"
```

### `package.json` Scripts

```json
{
  "scripts": {
    "dev": "concurrently \"vite\" \"tsx watch server/index.ts\"",
    "build": "vite build",
    "build:server": "tsc -p tsconfig.server.json",
    "start": "node dist-server/index.js",
    "preview": "npm run build && npm run build:server && npm start"
  },
  "dependencies": {
    "@fullpage/vue-fullpage.js": "^0.2",
    "@heroicons/vue": "^2.0",
    "@hono/node-server": "^1.0",
    "hono": "^4.0",
    "resend": "^3.0",
    "vue": "^3.4",
    "vue-router": "^4.0",
    "@vueuse/core": "^10.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0",
    "@types/node": "^20",
    "autoprefixer": "^10",
    "concurrently": "^8",
    "postcss": "^8",
    "tailwindcss": "^3.4",
    "tsx": "^4",
    "typescript": "^5",
    "vite": "^5"
  }
}
```

### `tsconfig.server.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist-server",
    "rootDir": "server",
    "noEmit": false
  },
  "include": ["server/**/*"]
}
```

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': resolve(__dirname, 'src') }
  },
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      // Dev: Vue DevServer :5173 → Hono :3000
      '/api': 'http://localhost:3000'
    }
  }
})
```

### Erstmalig deployen

```bash
# 1. Railway CLI
npm install -g @railway/cli
railway login

# 2. Projekt initialisieren (im Repo-Root)
railway init

# 3. Environment Variables setzen
railway variables set RESEND_API_KEY=re_xxxxxxxxxxxx
railway variables set VITE_FULLPAGE_LICENSE=your_key

# 4. Deploy
railway up

# 5. URL anzeigen
railway open
```

### Custom Domain (`mrplopp.ch`)

1. Railway Dashboard → Projekt → Service → **Networking** → **Custom Domain**
2. Domain `mrplopp.ch` eingeben
3. Railway zeigt den CNAME-Wert
4. Beim Domain-Registrar (Switchplus/Infomaniak): CNAME-Eintrag setzen
   ```
   mrplopp.ch  →  CNAME  →  <project>.up.railway.app
   ```
5. SSL wird von Railway automatisch via Let's Encrypt ausgestellt

### Automatisches Deployment via GitHub

1. Railway Dashboard → Service → **Source** → GitHub-Repo verknüpfen
2. Branch: `main`
3. Jeder Push auf `main` → automatischer Build + Deploy
4. Build-Logs live im Railway Dashboard sichtbar

---

## Development Setup

```bash
# Dependencies installieren
npm install

# Dev-Server starten (Vue auf :5173, Hono auf :3000)
npm run dev

# Nur Frontend
npx vite

# Nur Server mit Hot-Reload
npx tsx watch server/index.ts

# Produktions-Build lokal testen
npm run preview
```

---

## Wichtige Konventionen

- **Sprache**: Alle Inhalte auf Deutsch — Schweizer Tonalität, kein "ß" (ss statt ß)
- **Preise**: Nie hardcoded — immer in `src/config/pricing.ts`
- **Images**: WebP-Format, max. 200KB, `loading="lazy"` Attribut
- **Accessibility**: ARIA-Labels auf allen interaktiven Elementen, Fokus-Ring sichtbar
- **SEO**: OG-Tags + `<meta name="description">` in `index.html`, JSON-LD LocalBusiness
- **Analytics**: Plausible.io — datenschutzkonform, kein Cookie-Banner nötig (CH-DSG)
- **Error Handling**: API gibt immer `{ error: string }` oder `{ success: true }` zurück
- **CORS**: Im Dev über Vite-Proxy gelöst, in Prod nicht nötig (gleicher Origin)
- **Logging**: `console.error` nur für echte Fehler, kein `console.log` in Prod

---

## Offene Punkte

- [ ] fullpage.js Lizenz kaufen ($149) oder Open-Source-Alternative evaluieren
- [ ] Resend — Domain `mrplopp.ch` verifizieren (DNS TXT-Eintrag in Resend Dashboard)
- [ ] Railway Custom Domain einrichten + CNAME beim Registrar setzen
- [ ] OG-Image erstellen (1200×630px, WebP)
- [ ] Favicon-Set generieren (favicon.ico, apple-touch-icon.png, site.webmanifest)
- [ ] Plausible.io Account erstellen + Script-Tag in `index.html`
- [ ] Impressum + Datenschutzerklärung (separate Vue-Router-Seiten `/impressum`, `/datenschutz`)
- [ ] `robots.txt` und `sitemap.xml` in `public/` erstellen
- [ ] Health-Check Endpoint im Hono-Server testen