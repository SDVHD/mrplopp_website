<script setup>
const steps = [
  {
    number: '01',
    title: 'Anfragen',
    description: 'Kurze Demo anfragen — Sie erhalten innert 24h eine individuelle Offerte.',
  },
  {
    number: '02',
    title: 'Lieferung & Setup',
    description: 'Hub, Tablets, Drucker und Einschulung — alles inklusive, alles vorbereitet.',
  },
  {
    number: '03',
    title: 'Fest läuft',
    description: 'Lokal, ausfallsicher, kein WLAN-Stress. Ihre Kellner bedienen, die Kasse kassiert.',
  },
  {
    number: '04',
    title: 'Abrechnung',
    description: 'Nach dem Fest: CSV/Excel-Export, saubere MWST-Abrechnung, Geräterückgabe.',
  },
]
</script>

<template>
  <section id="how-it-works" class="snap-start min-h-screen flex flex-col justify-center py-16 px-6" style="background-color: #1A1208;">
    <div class="max-w-6xl mx-auto w-full">

      <div v-reveal class="text-center mb-14">
        <span class="text-secondary text-sm font-semibold uppercase tracking-widest">Schritt für Schritt</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-3"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Von der Anfrage zum Fest
        </h2>
      </div>

      <div class="relative">
        <!-- Connecting line desktop -->
        <div class="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10"></div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div
            v-for="(step, i) in steps"
            :key="step.number"
            v-reveal="{ delay: i * 120 }"
            class="relative z-10 flex flex-col items-center text-center"
          >
            <!-- Number circle -->
            <div class="w-16 h-16 rounded-full flex items-center justify-center mb-6 border-2 border-primary/40"
              style="background-color: #2A1C10;">
              <span class="font-bold text-lg text-secondary" style="font-family: 'JetBrains Mono', monospace;">
                {{ step.number }}
              </span>
            </div>

            <h3 class="font-semibold text-white text-base mb-3">{{ step.title }}</h3>
            <p class="text-white/45 text-sm leading-relaxed max-w-[180px]">{{ step.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
