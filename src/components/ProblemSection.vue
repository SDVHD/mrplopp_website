<script setup>
import { WifiOff, PackageX, Clock } from 'lucide-vue-next'

const problems = [
  {
    icon: WifiOff,
    title: 'Internet weg — Kasse tot',
    description: 'Das WLAN bricht zusammen. Keine Zahlung möglich. Lange Schlangen, frustrierte Gäste.',
  },
  {
    icon: PackageX,
    title: 'Doppelt verkauft, Bestand weg',
    description: 'Zwei Kellner nehmen dieselbe letzte Bratwurst auf. Zettelwirtschaft.',
  },
  {
    icon: Clock,
    title: 'Abrechnung bis Mitternacht',
    description: 'Nach dem Fest stundenlang Kassenzettel zählen. MWST-Aufteilung unklar.',
  },
]
</script>

<template>
  <section id="problem" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Das kennen Sie</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mt-3">Kennen Sie das?</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="problem in problems"
          :key="problem.title"
          class="bg-surface rounded-xl p-8 border border-white/5 group hover:border-red-500/20 transition-all duration-300"
        >
          <div class="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
            <component :is="problem.icon" class="w-6 h-6 text-red-400" :stroke-width="1.5" />
          </div>
          <h3 class="text-lg font-semibold text-white mb-3">{{ problem.title }}</h3>
          <p class="text-muted leading-relaxed">{{ problem.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
