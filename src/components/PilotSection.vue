<script setup>
import { PartyPopper, Users, MessageSquareHeart, CalendarCheck, Ticket } from 'lucide-vue-next'
import { scrollToSection } from '../utils/scroll.js'

// Ticket-Vorverkauf der Abendunterhaltung — solange leer, wird der Button ausgeblendet
const TICKET_URL = 'https://eventfrog.ch/de/p/gruppen/abendunterhaltung-der-turnfamilie-russikon-2026-7503094794006087971.html'

const points = [
  {
    icon: Users,
    title: 'Echter Festbetrieb',
    text: 'Volle Halle, hungrige Gäste, Kellner im Dauerlauf — Mr. Plopp muss sich im Ernstfall beweisen.',
  },
  {
    icon: MessageSquareHeart,
    title: 'Feedback aus der Praxis',
    text: 'Was das Service-Team und die Küche am Abend erleben, fliesst direkt in die Weiterentwicklung ein.',
  },
  {
    icon: CalendarCheck,
    title: 'Danach für weitere Vereine',
    text: 'Nach dem Testlauf öffnen wir Mr. Plopp schrittweise für weitere Feste. Melden Sie Ihr Interesse jetzt an.',
  },
]
</script>

<template>
  <section id="testlauf" class="snap-start min-h-screen flex flex-col justify-center py-16 px-6 bg-bg">
    <div class="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

      <!-- Left: Text -->
      <div v-reveal="{ direction: 'right' }">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Premiere</span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mt-3 mb-5 leading-tight"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Unser erster Testlauf:<br>
          <span class="text-primary">Turnfamilie Russikon</span>
        </h2>
        <p class="text-muted leading-relaxed mb-8 max-w-lg">
          An der Abendunterhaltung 2026 der Turnfamilie Russikon am 20. und 21. November
          in der Mehrzweckhalle Riedhus läuft Mr. Plopp zum ersten Mal an einem echten Vereinsfest.
          Bestellungen, Küche und Abrechnung — alles über unser System.
        </p>

        <ul class="space-y-5 mb-10">
          <li
            v-for="(point, i) in points"
            :key="point.title"
            v-reveal="{ delay: 100 + i * 100 }"
            class="flex gap-4"
          >
            <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
              <component :is="point.icon" class="w-5 h-5 text-accent" :stroke-width="1.75" />
            </div>
            <div>
              <p class="font-semibold text-text text-sm">{{ point.title }}</p>
              <p class="text-muted text-sm leading-relaxed mt-0.5">{{ point.text }}</p>
            </div>
          </li>
        </ul>

        <div class="flex flex-wrap gap-3">
          <a
            href="#contact" @click.prevent="scrollToSection('contact')"
            class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Interesse anmelden
          </a>
          <a
            v-if="TICKET_URL"
            :href="TICKET_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tickets für die Abendunterhaltung 2026 der Turnfamilie Russikon kaufen (öffnet in neuem Tab)"
            class="inline-flex items-center gap-2 bg-dark hover:bg-text text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Ticket class="w-4 h-4 text-secondary" :stroke-width="2" />
            Tickets kaufen
          </a>
        </div>
      </div>

      <!-- Right: Eintrittskarte -->
      <div v-reveal="{ direction: 'left', delay: 150 }" class="flex justify-center">
        <div class="relative w-full max-w-sm rotate-2 hover:rotate-0 transition-transform duration-500">
          <div class="rounded-3xl overflow-hidden shadow-2xl" style="box-shadow: 0 30px 80px rgba(26, 18, 8, 0.25);">

            <!-- Kopf -->
            <div class="px-8 pt-8 pb-7" style="background-color: #1A1208;">
              <div class="flex items-center justify-between mb-6">
                <span class="text-secondary text-[10px] font-bold uppercase tracking-[0.25em]">Erster Einsatz</span>
                <PartyPopper class="w-5 h-5 text-secondary" :stroke-width="1.75" />
              </div>
              <p class="text-white/50 text-xs uppercase tracking-widest mb-1">Abendunterhaltung</p>
              <p class="text-white text-5xl font-bold leading-none"
                style="font-family: 'JetBrains Mono', monospace;">
                2026
              </p>
            </div>

            <!-- Perforation -->
            <div class="relative h-0 border-t-2 border-dashed border-text/15">
              <span class="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-bg"></span>
              <span class="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-bg"></span>
            </div>

            <!-- Details -->
            <div class="px-8 py-7 bg-surface">
              <p class="text-muted text-[10px] uppercase tracking-widest mb-1">Verein</p>
              <p class="text-text text-2xl font-bold mb-5"
                style="font-family: 'Playfair Display', Georgia, serif;">
                Turnfamilie Russikon
              </p>

              <div class="flex justify-between text-sm border-t border-text/8 pt-4 mb-4">
                <div>
                  <p class="text-muted text-[10px] uppercase tracking-widest mb-1">Datum</p>
                  <p class="text-text font-medium">20./21. Nov. 2026</p>
                </div>
                <div class="text-right">
                  <p class="text-muted text-[10px] uppercase tracking-widest mb-1">Kasse</p>
                  <p class="text-text font-medium">Mr.&nbsp;<span class="text-primary">Plopp</span></p>
                </div>
              </div>
              <div class="text-sm">
                <p class="text-muted text-[10px] uppercase tracking-widest mb-1">Ort</p>
                <p class="text-text font-medium">Mehrzweckhalle Riedhus, Russikon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
