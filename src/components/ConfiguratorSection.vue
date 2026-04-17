<script setup>
import { ref, computed, watch } from 'vue'
import { Tablet, Printer, Server, ShieldCheck } from 'lucide-vue-next'

const days = ref(1)
const tablets = ref(2)
const drucker = ref(1)
const screens = ref(1)
const gaesteWlan = ref(false)
const besucher = ref(200)

const druckerSurcharge = computed(() => Math.max(0, drucker.value - 1) * 10)
const screenSurcharge = computed(() => Math.max(0, screens.value - 1) * 35)

// Preisberechnung
const tabletSurcharge = computed(() => Math.floor(tablets.value / 5) * 125)
const wlanBlocks = computed(() =>
  besucher.value > 200 ? Math.ceil((besucher.value - 200) / 200) : 0
)

const dayMultiplier = computed(() => days.value === 1 ? 1.0 : 1.5)

const wlanSurcharge = computed(() => {
  if (!gaesteWlan.value) return 0
  const base = 250 + wlanBlocks.value * 250
  return Math.round(base * dayMultiplier.value)
})

const price = computed(() => {
  const base = days.value === 1 ? 400 : 750
  const extraDays = days.value > 2 ? (days.value - 2) * 150 : 0
  return base + extraDays + tabletSurcharge.value + wlanSurcharge.value + druckerSurcharge.value + screenSurcharge.value
})

const packageName = computed(() => {
  if (days.value === 1) return 'Tagesevent'
  if (days.value === 2) return 'Wochenende'
  return `${days.value}-Tage-Event`
})

const included = computed(() => {
  const t = tablets.value
  const d = days.value
  const items = [
    `${t} Kellner-Tablet${t > 1 ? 's' : ''}`,
    `${drucker.value} Bondrucker${drucker.value > 1 ? '' : ' (inkl.)'}`,
    `${screens.value} Küchen-Monitor${screens.value > 1 ? 'e' : ' (inkl.)'}`,
    'Hub + Backup',
    'Eigenes WLAN + Internet inklusive',
    'Live-Dashboard',
    'CSV/Excel-Export',
  ]
  if (d <= 2) items.push('Einschulung vor Ort')
  else items.push('Vor-Ort-Betreuung')
  if (gaesteWlan.value) items.push(`Gäste-WLAN (bis ${besucher.value.toLocaleString('de-CH')} Besucher)`)
  return items
})

// Animierter Preis-Counter
const displayPrice = ref(price.value)

function animateTo(target) {
  const start = displayPrice.value
  const delta = target - start
  const duration = 350
  const startTime = performance.now()

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    displayPrice.value = Math.round(start + delta * eased)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

watch(price, (val) => animateTo(val))

const dayOptions = [1, 2, 3, 4, 5, 6, 7]
</script>

<template>
  <section
    id="konfigurator"
    class="snap-start min-h-screen flex flex-col justify-center py-16 px-6"
    style="background-color: #1A1208;"
  >
    <div class="max-w-5xl mx-auto w-full">

      <!-- Header -->
      <div v-reveal class="text-center mb-12">
        <span class="text-secondary text-sm font-semibold uppercase tracking-widest">Live-Konfigurator</span>
        <h2 class="text-4xl md:text-5xl font-bold text-white mt-3"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Ihr Preis in Sekunden
        </h2>
        <p class="text-white/45 mt-3 text-base">Stellen Sie Ihr Paket zusammen — der Preis aktualisiert sich live.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-start">

        <!-- Left: Steuerung -->
        <div v-reveal="{ direction: 'right', delay: 100 }" class="space-y-8">

          <!-- Tage -->
          <div class="rounded-2xl p-6" style="background-color: #2A1C10;">
            <p class="text-white/60 text-xs uppercase tracking-widest mb-4">Wie viele Tage dauert Ihr Fest?</p>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="d in dayOptions"
                :key="d"
                @click="days = d"
                class="w-11 h-11 rounded-xl text-sm font-bold transition-all duration-200"
                :class="days === d
                  ? 'bg-primary text-white shadow-lg scale-110'
                  : 'text-white/50 hover:text-white border border-white/10 hover:border-white/25'"
              >
                {{ d }}
              </button>
            </div>
            <p class="text-white/35 text-xs mt-3">
              <template v-if="days === 1">Tagesevent — Minimal-Setup</template>
              <template v-else-if="days === 2">Wochenende — unser beliebtestes Paket</template>
              <template v-else>{{ days - 2 }} Zusatztag{{ days - 2 > 1 ? 'e' : '' }} à CHF 150 auf Wochenend-Basis</template>
            </p>
          </div>

          <!-- Tablets -->
          <div class="rounded-2xl p-6" style="background-color: #2A1C10;">
            <div class="flex items-center justify-between mb-4">
              <p class="text-white/60 text-xs uppercase tracking-widest">Anzahl Tablets</p>
              <span class="text-white font-bold text-lg" style="font-family: 'JetBrains Mono', monospace;">
                {{ tablets }}
              </span>
            </div>
            <input
              v-model.number="tablets"
              type="range"
              min="1"
              max="10"
              class="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style="
                background: linear-gradient(to right, #E8401C calc((var(--val, 1) - 1) / 9 * 100%), rgba(255,255,255,0.1) 0%);
                --val: v-bind(tablets);
              "
            />
            <div class="flex justify-between text-white/25 text-xs mt-2">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>

          <!-- Bondrucker -->
          <div class="rounded-2xl p-6" style="background-color: #2A1C10;">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-white/60 text-xs uppercase tracking-widest">Bondrucker</p>
                <p class="text-white/30 text-xs mt-0.5">1 inkl. · jeder weitere +CHF 10</p>
              </div>
              <span class="text-white font-bold text-lg" style="font-family: 'JetBrains Mono', monospace;">{{ drucker }}</span>
            </div>
            <input
              v-model.number="drucker"
              type="range" min="1" max="10"
              class="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style="background: linear-gradient(to right, #E8401C calc((var(--v) - 1) / 9 * 100%), rgba(255,255,255,0.1) 0%); --v: v-bind(drucker);"
            />
            <div class="flex justify-between text-white/25 text-xs mt-2"><span>1</span><span>5</span><span>10</span></div>
          </div>

          <!-- Küchen-Monitore -->
          <div class="rounded-2xl p-6" style="background-color: #2A1C10;">
            <div class="flex items-center justify-between mb-4">
              <div>
                <p class="text-white/60 text-xs uppercase tracking-widest">Küchen-Monitore</p>
                <p class="text-white/30 text-xs mt-0.5">1 inkl. · jeder weitere +CHF 35</p>
              </div>
              <span class="text-white font-bold text-lg" style="font-family: 'JetBrains Mono', monospace;">{{ screens }}</span>
            </div>
            <input
              v-model.number="screens"
              type="range" min="1" max="10"
              class="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style="background: linear-gradient(to right, #E8401C calc((var(--v) - 1) / 9 * 100%), rgba(255,255,255,0.1) 0%); --v: v-bind(screens);"
            />
            <div class="flex justify-between text-white/25 text-xs mt-2"><span>1</span><span>5</span><span>10</span></div>
          </div>

          <!-- Gäste-WLAN Option -->
          <div class="rounded-2xl p-6" style="background-color: #2A1C10;">
            <p class="text-white/60 text-xs uppercase tracking-widest mb-4">Optionen</p>
            <label class="flex items-center justify-between cursor-pointer group">
              <div>
                <p class="text-white text-sm font-medium group-hover:text-white/90 transition-colors">Gäste-WLAN</p>
                <p class="text-white/35 text-xs mt-0.5">Separates WLAN-Netz für Ihre Festbesucher</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-secondary text-xs font-bold" style="font-family: 'JetBrains Mono', monospace;">
                  ab CHF 250
                </span>
                <button
                  type="button"
                  @click="gaesteWlan = !gaesteWlan"
                  class="relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0"
                  :class="gaesteWlan ? 'bg-primary' : 'bg-white/15'"
                >
                  <span
                    class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
                    :class="gaesteWlan ? 'translate-x-5' : 'translate-x-0'"
                  ></span>
                </button>
              </div>
            </label>

            <!-- Besucher-Slider (nur wenn WLAN aktiv) -->
            <div v-if="gaesteWlan" class="mt-4 pt-4 border-t border-white/10">
              <div class="flex items-center justify-between mb-3">
                <p class="text-white/50 text-xs">Erwartete Besucher</p>
                <span class="text-white font-bold text-sm" style="font-family: 'JetBrains Mono', monospace;">
                  {{ besucher.toLocaleString('de-CH') }}
                </span>
              </div>
              <input
                v-model.number="besucher"
                type="range"
                min="0"
                max="2000"
                step="50"
                class="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style="background: linear-gradient(to right, #E8401C calc(var(--pct) * 1%), rgba(255,255,255,0.1) 0%); --pct: v-bind('besucher / 20');"
              />
              <div class="flex justify-between text-white/25 text-xs mt-2">
                <span>0</span>
                <span>500</span>
                <span>1000</span>
                <span>1500</span>
                <span>2000</span>
              </div>
              <p class="text-white/35 text-xs mt-2">
                <template v-if="wlanBlocks > 0">
                  {{ wlanBlocks }} × 200 Besucher × CHF 250
                  <template v-if="dayMultiplier > 1"> × {{ dayMultiplier }} ({{ days }} Tage)</template>
                  · Total WLAN: CHF {{ wlanSurcharge }}
                </template>
                <template v-else>
                  Bis 200 Gäste: kein Aufschlag
                  <template v-if="dayMultiplier > 1"> · Tages-Faktor × {{ dayMultiplier }}</template>
                  · Total WLAN: CHF {{ wlanSurcharge }}
                </template>
              </p>
            </div>
          </div>

          <!-- Preisaufschlüsselung -->
          <div class="rounded-2xl p-6 space-y-3" style="background-color: #2A1C10;">
            <p class="text-white/60 text-xs uppercase tracking-widest mb-4">Preisaufschlüsselung</p>
            <div class="flex justify-between text-sm">
              <span class="text-white/50">Basis ({{ days === 1 ? '1 Tag' : 'Wochenende' }})</span>
              <span class="text-white font-medium" style="font-family: 'JetBrains Mono', monospace;">
                CHF {{ days === 1 ? '400' : '750' }}
              </span>
            </div>
            <div v-if="days > 2" class="flex justify-between text-sm">
              <span class="text-white/50">{{ days - 2 }} Zusatztag{{ days - 2 > 1 ? 'e' : '' }} × CHF 150</span>
              <span class="text-white font-medium" style="font-family: 'JetBrains Mono', monospace;">
                + CHF {{ (days - 2) * 150 }}
              </span>
            </div>
            <div v-if="druckerSurcharge > 0" class="flex justify-between text-sm">
              <span class="text-white/50">{{ drucker - 1 }} Zusatz-Drucker × CHF 10</span>
              <span class="text-white font-medium" style="font-family: 'JetBrains Mono', monospace;">+ CHF {{ druckerSurcharge }}</span>
            </div>
            <div v-if="screenSurcharge > 0" class="flex justify-between text-sm">
              <span class="text-white/50">{{ screens - 1 }} Zusatz-Monitor{{ screens - 1 > 1 ? 'e' : '' }} × CHF 35</span>
              <span class="text-white font-medium" style="font-family: 'JetBrains Mono', monospace;">+ CHF {{ screenSurcharge }}</span>
            </div>
            <div v-if="tabletSurcharge > 0" class="flex justify-between text-sm">
              <span class="text-white/50">{{ Math.floor(tablets / 5) }}× Tablet-Paket (5 Stk.) × CHF 125</span>
              <span class="text-white font-medium" style="font-family: 'JetBrains Mono', monospace;">
                + CHF {{ tabletSurcharge }}
              </span>
            </div>
            <div v-if="gaesteWlan" class="flex justify-between text-sm">
              <span class="text-white/50">
                Gäste-WLAN{{ wlanBlocks > 0 ? ` + ${wlanBlocks} × 200 Besucher` : '' }}
                <span v-if="dayMultiplier > 1" class="text-secondary"> × {{ dayMultiplier }}</span>
              </span>
              <span class="text-white font-medium" style="font-family: 'JetBrains Mono', monospace;">
                + CHF {{ wlanSurcharge }}
              </span>
            </div>
            <div class="border-t border-white/10 pt-3 flex justify-between text-sm font-semibold">
              <span class="text-white">Total (ab)</span>
              <span class="text-secondary" style="font-family: 'JetBrains Mono', monospace;">
                CHF {{ price }}
              </span>
            </div>
          </div>

        </div>

        <!-- Right: Preis-Card -->
        <div v-reveal="{ direction: 'left', delay: 200 }" class="sticky top-20">
          <div class="rounded-3xl overflow-hidden shadow-2xl" style="box-shadow: 0 30px 80px rgba(0,0,0,0.4);">

            <!-- Card Header -->
            <div class="bg-primary px-8 pt-8 pb-6">
              <div class="text-white/70 text-xs uppercase tracking-[0.2em] mb-2">Ihr Paket</div>
              <div class="text-white text-2xl font-bold mb-1"
                style="font-family: 'Playfair Display', Georgia, serif;">
                {{ packageName }}
              </div>
              <div class="text-white/60 text-sm">{{ tablets }} Tablet{{ tablets > 1 ? 's' : '' }} · {{ days }} Tag{{ days > 1 ? 'e' : '' }}</div>
            </div>

            <!-- Preis -->
            <div class="px-8 py-8" style="background-color: #FFFAF3;">
              <p class="text-muted text-xs uppercase tracking-widest mb-2">Richtpreis ab</p>
              <div class="flex items-end gap-2 mb-1">
                <span class="text-6xl font-bold text-text leading-none"
                  style="font-family: 'JetBrains Mono', monospace;">
                  {{ displayPrice }}
                </span>
                <span class="text-2xl font-semibold text-muted mb-1">CHF</span>
              </div>
              <p class="text-muted/60 text-xs mt-2">Unverbindlicher Richtpreis — finale Offerte innert 24h</p>

              <!-- Included features -->
              <ul class="mt-6 space-y-2.5">
                <li
                  v-for="item in included"
                  :key="item"
                  class="flex items-center gap-2.5 text-sm text-text"
                >
                  <span class="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <svg class="w-2.5 h-2.5 text-accent" fill="none" viewBox="0 0 10 10" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M1.5 5l2.5 2.5 4.5-4" />
                    </svg>
                  </span>
                  {{ item }}
                </li>
              </ul>

              <!-- CTA -->
              <a
                href="#contact"
                class="mt-8 flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Offerte für dieses Paket anfragen
              </a>

              <p class="text-center text-muted/50 text-xs mt-3">
                Keine Bindung · Keine versteckten Kosten
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #E8401C;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(232, 64, 28, 0.5);
}
input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #E8401C;
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(232, 64, 28, 0.5);
}
</style>
