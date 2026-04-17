<script setup>
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const faqs = [
  {
    q: 'Brauche ich Internet auf dem Festgelände?',
    a: 'Nein — Mr. Plopp bringt sein eigenes WLAN und Internet mit. Sie müssen vor Ort nichts bereitstellen. Die Kasse läuft unabhängig vom Festgelände-Netz.',
  },
  {
    q: 'Wie viele Tablets sind im Paket?',
    a: 'Die Anzahl Tablets stellen Sie im Live-Konfigurator selbst zusammen — von 1 bis 10. Pro 5 Tablets wird ein kleiner Aufschlag berechnet. So zahlen Sie nur was Sie brauchen.',
  },
  {
    q: 'Was passiert bei Hub-Ausfall?',
    a: 'Jedes Paket enthält einen Backup-Hub. Im Fehlerfall wird automatisch umgeschaltet — ohne Datenverlust, ohne Unterbruch.',
  },
  {
    q: 'Bekomme ich eine MWST-konforme Abrechnung?',
    a: 'Ja. Mr. Plopp erstellt nach dem Fest einen vollständigen Tagesabschluss mit MWST-Aufteilung (8.1% / 2.6%), exportierbar als CSV oder Excel.',
  },
  {
    q: 'Unterstützt Mr. Plopp TWINT?',
    a: 'Ja. TWINT, Bargeld und Karte werden unterstützt. Die 5-Rappen-Rundung wird automatisch korrekt angewendet.',
  },
  {
    q: 'Wie läuft Lieferung und Setup ab?',
    a: 'Wir liefern Hub, Tablets, Bondrucker, Küchen-Monitore und die gesamte Netzwerk-Infrastruktur direkt ans Festgelände, richten alles ein und schulen Ihr Team in 15–30 Minuten. Nach dem Fest holen wir alles wieder ab.',
  },
  {
    q: 'Kann ich eigene Artikel erfassen?',
    a: 'Ja. Vor dem Fest erfassen Sie Artikel, Kategorien und Preise über unser Admin-Interface — kein technisches Wissen nötig.',
  },
]

const open = ref(null)
function toggle(i) { open.value = open.value === i ? null : i }
</script>

<template>
  <section id="faq" class="snap-start min-h-screen flex flex-col justify-center py-16 px-6 bg-surface">
    <div class="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-16 items-start">

      <!-- Left: title + CTA -->
      <div v-reveal="{ direction: 'right' }" class="lg:col-span-2">
        <span class="text-primary text-sm font-semibold uppercase tracking-widest">Fragen & Antworten</span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mt-3 mb-6"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Häufige Fragen
        </h2>
        <p class="text-muted leading-relaxed mb-8">
          Noch etwas unklar? Wir beantworten gerne alle Fragen persönlich.
        </p>
        <a
          href="#contact"
          class="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
        >
          Frage stellen
        </a>
      </div>

      <!-- Right: accordion -->
      <div class="lg:col-span-3 space-y-2">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          v-reveal="{ direction: 'left', delay: i * 50 }"
          class="rounded-xl border overflow-hidden transition-all duration-200"
          :class="open === i ? 'border-primary/30 shadow-sm' : 'border-text/10 hover:border-text/20'"
        >
          <button
            class="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
            :class="open === i ? 'bg-primary/5' : 'bg-bg hover:bg-surface'"
            @click="toggle(i)"
          >
            <span class="font-medium text-text text-sm pr-4 leading-snug">{{ faq.q }}</span>
            <ChevronDown
              class="w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200"
              :class="open === i ? 'rotate-180 text-primary' : ''"
              :stroke-width="1.75"
            />
          </button>
          <div v-if="open === i" class="px-5 pb-4 pt-1 text-muted text-sm leading-relaxed bg-bg/50">
            {{ faq.a }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
