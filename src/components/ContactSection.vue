<script setup>
import { ref, reactive } from 'vue'
import { Mail, Shield, Clock, Star } from 'lucide-vue-next'

const form = reactive({
  name: '',
  organization: '',
  email: '',
  phone: '',
  date: '',
  guests: '',
  subject: 'demo',
  message: '',
})

const state = ref('idle') // idle | loading | success | error

async function submit() {
  state.value = 'loading'
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    state.value = res.ok ? 'success' : 'error'
  } catch {
    state.value = 'error'
  }
}

const trustChips = [
  { icon: Shield, text: 'Keine Weitergabe Ihrer Daten' },
  { icon: Clock,  text: 'Antwort innert 24 Stunden' },
  { icon: Star,   text: 'Unverbindliche Beratung' },
]

const inputClass = 'w-full rounded-xl border border-text/15 bg-bg px-4 py-3 text-sm text-text placeholder:text-muted/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all'
</script>

<template>
  <section id="contact" class="snap-start min-h-screen flex flex-col justify-center py-16 px-6 bg-bg">
    <div class="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-16 items-start">

      <!-- Left: info -->
      <div v-reveal="{ direction: 'right' }" class="lg:col-span-2">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Kontakt</span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mt-3 mb-4"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Demo anfragen
        </h2>
        <p class="text-muted leading-relaxed mb-8">
          Erzählen Sie uns von Ihrem Fest — wir erstellen Ihnen eine massgeschneiderte Offerte. Kostenlos, unverbindlich.
        </p>

        <div class="space-y-3 mb-8">
          <div v-for="chip in trustChips" :key="chip.text" class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <component :is="chip.icon" class="w-4 h-4 text-accent" :stroke-width="1.75" />
            </div>
            <span class="text-sm text-text">{{ chip.text }}</span>
          </div>
        </div>

        <div class="pt-6 border-t border-text/10">
          <p class="text-xs text-muted uppercase tracking-wider mb-3">Oder direkt:</p>
          <a href="mailto:hallo@mrplopp.ch"
            class="flex items-center gap-2 text-text hover:text-primary transition-colors font-medium text-sm">
            <Mail class="w-4 h-4 text-muted" :stroke-width="1.75" />
            hallo@mrplopp.ch
          </a>
        </div>
      </div>

      <!-- Right: form -->
      <div v-reveal="{ direction: 'left', delay: 100 }" class="lg:col-span-3">

        <!-- Success -->
        <div v-if="state === 'success'" class="bg-surface rounded-2xl border border-accent/20 p-12 text-center">
          <div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-text mb-3" style="font-family: 'Playfair Display', serif;">
            Vielen Dank!
          </h3>
          <p class="text-muted">Wir melden uns innert 24 Stunden mit einer persönlichen Offerte.</p>
        </div>

        <!-- Form -->
        <form v-else @submit.prevent="submit" class="bg-surface rounded-2xl border border-text/8 p-8 space-y-5 shadow-sm">

          <div v-if="state === 'error'" class="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
            Etwas ist schiefgelaufen. Schreiben Sie uns direkt an
            <a href="mailto:hallo@mrplopp.ch" class="underline font-medium">hallo@mrplopp.ch</a>.
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-text mb-1.5">Name *</label>
              <input v-model="form.name" required type="text" placeholder="Markus Müller" :class="inputClass" />
            </div>
            <div>
              <label class="block text-sm font-medium text-text mb-1.5">Verein / Organisation *</label>
              <input v-model="form.organization" required type="text" placeholder="Schützenverein Bern" :class="inputClass" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-text mb-1.5">E-Mail *</label>
              <input v-model="form.email" required type="email" placeholder="markus@verein.ch" :class="inputClass" />
            </div>
            <div>
              <label class="block text-sm font-medium text-text mb-1.5">Telefon</label>
              <input v-model="form.phone" type="tel" placeholder="+41 79 123 45 67" :class="inputClass" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-text mb-1.5">Datum des Festes</label>
              <input v-model="form.date" type="date" :class="inputClass" />
            </div>
            <div>
              <label class="block text-sm font-medium text-text mb-1.5">Erwartete Gäste</label>
              <select v-model="form.guests" :class="inputClass">
                <option value="">Bitte wählen</option>
                <option value="<100">&lt; 100</option>
                <option value="100-300">100–300</option>
                <option value="300-500">300–500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-text mb-1.5">Anliegen *</label>
            <select v-model="form.subject" required :class="inputClass">
              <option value="demo">Demo anfragen</option>
              <option value="offerte">Offerte anfragen</option>
              <option value="verfuegbarkeit">Verfügbarkeit prüfen</option>
              <option value="frage">Allgemeine Frage</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-text mb-1.5">Nachricht</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Was möchten Sie uns wissen?"
              :class="inputClass + ' resize-none'"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="state === 'loading'"
            class="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {{ state === 'loading' ? 'Wird gesendet…' : 'Anfrage absenden' }}
          </button>

          <p class="text-xs text-muted text-center">
            Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage verwenden.
          </p>
        </form>

      </div>
    </div>
  </section>
</template>
