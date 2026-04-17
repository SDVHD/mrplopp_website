<script setup>
import { Check } from 'lucide-vue-next'

// Immer in jedem Paket enthalten
const always = [
  'Hub + Backup',
  'Eigenes WLAN + Internet',
  'Live-Dashboard',
  'CSV / Excel-Export',
  'MWST-Abrechnung (8.1% / 2.6%)',
  'Einschulung vor Ort',
  'Lieferung & Rücknahme',
]

const tiers = [
  {
    name: 'Tagesevent',
    tagline: '1 Tag',
    price: 400,
    devices: ['2 Kellner-Tablets', '1 Bondrucker', '1 Küchen-Monitor'],
    featured: false,
  },
  {
    name: 'Wochenende',
    tagline: '2 Tage',
    price: 750,
    devices: ['4 Kellner-Tablets', '2 Bondrucker', '1 Küchen-Monitor'],
    featured: true,
  },
  {
    name: 'Grossanlass',
    tagline: '3 Tage',
    price: 900,
    devices: ['6 Kellner-Tablets', '3 Bondrucker', '1 Küchen-Monitor'],
    featured: false,
  },
]

const options = [
  { label: 'Zusätzliche Küchen-Monitore', price: '+ 35 CHF / Stk.' },
  { label: 'Gäste-WLAN', price: 'ab 250 CHF' },
]
</script>

<template>
  <section id="pricing" class="snap-start min-h-screen flex flex-col justify-center py-16 px-6 bg-bg">
    <div class="max-w-6xl mx-auto w-full">

      <div v-reveal class="text-center mb-12">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Fertige Pakete</span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mt-3"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Einfach buchen, sofort loslegen
        </h2>
        <p class="text-muted mt-3 max-w-lg mx-auto leading-relaxed">
          Alle Pakete enthalten alles was Sie brauchen — kein Kleingedrucktes.
        </p>
      </div>

      <!-- Immer inklusive Banner -->
      <div v-reveal="{ delay: 80 }" class="rounded-2xl border border-accent/20 bg-accent/5 px-6 py-4 mb-8 flex flex-wrap gap-x-6 gap-y-2 justify-center">
        <span class="text-xs text-muted font-semibold uppercase tracking-widest w-full text-center mb-1">Immer inklusive</span>
        <span v-for="item in always" :key="item" class="flex items-center gap-1.5 text-xs text-text">
          <svg class="w-3 h-3 text-accent flex-shrink-0" fill="none" viewBox="0 0 10 10" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M1.5 5l2.5 2.5 4.5-4" />
          </svg>
          {{ item }}
        </span>
      </div>

      <!-- Pakete -->
      <div class="grid md:grid-cols-3 gap-5 mb-8">
        <div
          v-for="(tier, i) in tiers"
          :key="tier.name"
          v-reveal="{ direction: 'scale', delay: i * 100 }"
          class="rounded-2xl border overflow-hidden transition-all duration-300"
          :class="tier.featured
            ? 'border-primary shadow-xl md:scale-[1.03]'
            : 'border-text/10 hover:border-text/20'"
        >
          <!-- Header -->
          <div class="px-6 py-5 border-b"
            :class="tier.featured ? 'bg-primary border-primary' : 'bg-surface border-text/8'">
            <div v-if="tier.featured"
              class="inline-flex items-center gap-1 bg-white/20 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2">
              ★ Beliebt
            </div>
            <div class="flex items-end justify-between">
              <div>
                <h3 class="font-bold text-lg mb-0.5"
                  :class="tier.featured ? 'text-white' : 'text-text'"
                  style="font-family: 'Playfair Display', Georgia, serif;">
                  {{ tier.name }}
                </h3>
                <p class="text-xs" :class="tier.featured ? 'text-white/60' : 'text-muted'">{{ tier.tagline }}</p>
              </div>
              <div class="text-right">
                <div class="font-bold leading-none"
                  :class="tier.featured ? 'text-white text-3xl' : 'text-text text-3xl'"
                  style="font-family: 'JetBrains Mono', monospace;">
                  {{ tier.price }}
                </div>
                <div class="text-xs mt-0.5" :class="tier.featured ? 'text-white/60' : 'text-muted'">CHF</div>
              </div>
            </div>
          </div>

          <!-- Geräte -->
          <div class="px-6 py-5 bg-surface">
            <p class="text-[10px] text-muted uppercase tracking-widest mb-3">Enthaltene Geräte</p>
            <ul class="space-y-2">
              <li v-for="device in tier.devices" :key="device"
                class="flex items-center gap-2 text-sm text-text">
                <Check class="w-3.5 h-3.5 text-primary flex-shrink-0" :stroke-width="2.5" />
                {{ device }}
              </li>
            </ul>

            <div class="mt-4 pt-4 border-t border-text/8">
              <p class="text-[10px] text-muted uppercase tracking-widest mb-2">Optional zubuchbar</p>
              <div class="space-y-1.5">
                <div v-for="opt in options" :key="opt.label" class="flex items-center justify-between text-xs">
                  <span class="text-muted">+ {{ opt.label }}</span>
                  <span class="font-medium text-text" style="font-family: 'JetBrains Mono', monospace;">{{ opt.price }}</span>
                </div>
              </div>
            </div>

            <a href="#contact"
              class="mt-5 block w-full text-center text-sm font-semibold py-2.5 rounded-xl transition-all duration-200"
              :class="tier.featured
                ? 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md'
                : 'bg-text/5 text-text hover:bg-text/10 border border-text/10'">
              Jetzt buchen
            </a>
          </div>
        </div>
      </div>

      <!-- Konfigurator CTA -->
      <div v-reveal="{ delay: 200 }" class="rounded-2xl border border-text/10 bg-surface px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p class="font-semibold text-text text-sm">Brauchen Sie mehr oder weniger?</p>
          <p class="text-muted text-xs mt-0.5">Stellen Sie Ihr Paket mit dem Live-Konfigurator individuell zusammen.</p>
        </div>
        <button
          @click="document.getElementById('konfigurator')?.scrollIntoView({ behavior: 'smooth' })"
          class="flex-shrink-0 text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1.5"
        >
          Zum Konfigurator
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>
