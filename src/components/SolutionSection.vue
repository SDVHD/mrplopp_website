<script setup>
import { Server, Tablet, FileCheck2, ShieldCheck } from 'lucide-vue-next'

const solutions = [
  {
    icon: Server,
    title: 'Läuft auch ohne Internet',
    description: 'Ein kleiner Rechner vor Ort speichert alles lokal. Kein WLAN, kein Problem.',
  },
  {
    icon: Tablet,
    title: 'Tablets für Kellner & Kasse',
    description: 'Robuste Samsung-Tablets, fertig eingerichtet. Einfach einschalten und loslegen.',
  },
  {
    icon: FileCheck2,
    title: 'Abrechnung auf Knopfdruck',
    description: 'Tagesabschluss, MWST und Umsatz sofort nach dem Fest — keine manuelle Arbeit.',
  },
  {
    icon: ShieldCheck,
    title: 'Gesetzlich korrekt',
    description: '5-Rappen-Rundung, MWST 8.1%/2.6%, TWINT — alles nach CH-Vorschriften.',
  },
]
</script>

<template>
  <section id="loesung" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Die Lösung</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mt-3">Mr. Plopp löst das</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="solution in solutions"
          :key="solution.title"
          class="bg-surface rounded-xl p-8 border border-white/5 hover:border-primary/20 transition-all duration-300 group"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <component :is="solution.icon" class="w-6 h-6 text-primary" :stroke-width="1.5" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-3">{{ solution.title }}</h3>
          <p class="text-muted leading-relaxed">{{ solution.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
