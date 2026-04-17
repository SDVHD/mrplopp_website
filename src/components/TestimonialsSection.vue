<script setup>
import { Quote } from 'lucide-vue-next'

const testimonials = [
  {
    quote: 'Endlich keine Zettelwirtschaft mehr. Nach dem Fest hatten wir den Abschluss in 5 Minuten.',
    name: 'Markus B.',
    org: 'Schützenverein Bern',
  },
  {
    quote: 'Das Internet ist ausgefallen — die Kasse hat einfach weitergemacht. Unglaublich.',
    name: 'Sandra K.',
    org: 'Turnverein Zürich',
  },
  {
    quote: 'Die Kellner haben sich in 10 Minuten eingearbeitet. Kein Training nötig.',
    name: 'Peter M.',
    org: 'Musikverein Luzern',
  },
]
</script>

<template>
  <section id="testimonials" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Das sagen andere</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mt-3">Vereine, die Mr. Plopp kennen</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="bg-surface rounded-xl p-8 border border-white/5 flex flex-col"
        >
          <Quote class="w-8 h-8 text-primary/40 mb-6 flex-shrink-0" :stroke-width="1.5" />
          <p class="text-white leading-relaxed flex-1 mb-8">"{{ t.quote }}"</p>
          <div>
            <p class="text-white font-semibold text-sm">{{ t.name }}</p>
            <p class="text-muted text-sm">{{ t.org }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
