<script setup>
import { WifiOff, Calculator, CreditCard, Zap, Tablet, LayoutGrid } from 'lucide-vue-next'

const features = [
  {
    icon: WifiOff,
    title: 'Eigenes WLAN & Internet',
    description: 'Mr. Plopp bringt sein eigenes WLAN und Internet mit — unabhängig vom Festgelände.',
  },
  {
    icon: Calculator,
    title: 'Schweizer MWST',
    description: '8.1% und 2.6% werden automatisch berechnet und sauber ausgewiesen.',
  },
  {
    icon: CreditCard,
    title: '5-Rappen-Rundung',
    description: 'Gesetzlich korrekt — kein manuelles Runden, kein Stress an der Kasse.',
  },
  {
    icon: Zap,
    title: 'Blitzschnell',
    description: 'Unter 10ms Antwortzeit lokal — keine Wartezeiten, auch bei Hochbetrieb.',
  },
  {
    icon: Tablet,
    title: 'Tablet-optimiert',
    description: 'Für Samsung Galaxy Tab ausgelegt — robust, alltagstauglich, festbewährt.',
  },
  {
    icon: LayoutGrid,
    title: 'TWINT & Karte',
    description: 'Alle Zahlungsmittel akzeptiert — TWINT, Bargeld, Karte. Alles korrekt verbucht.',
  },
]
</script>

<template>
  <section id="features" class="snap-start min-h-screen flex flex-col justify-center py-16 px-6 bg-surface">
    <div class="max-w-6xl mx-auto w-full">

      <div v-reveal class="text-center mb-10">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Alles an Bord</span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mt-3"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Was Mr. Plopp mitbringt
        </h2>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(feature, i) in features"
          :key="feature.title"
          v-reveal="{ delay: i * 80 }"
          class="bg-bg rounded-2xl p-7 border border-text/5 hover:border-primary/25 hover:shadow-md transition-all duration-300 group"
        >
          <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
            <component :is="feature.icon" class="w-5 h-5 text-primary" :stroke-width="1.75" />
          </div>
          <h3 class="font-semibold text-text text-base mb-2">{{ feature.title }}</h3>
          <p class="text-muted text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
