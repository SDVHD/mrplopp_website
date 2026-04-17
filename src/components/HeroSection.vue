<script setup>
import { ArrowDown } from 'lucide-vue-next'
</script>

<template>
  <section id="hero" class="snap-start relative min-h-screen flex items-center px-6 pt-16 overflow-hidden bg-bg">
    <!-- Decorative background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 right-0 w-[700px] h-[700px] opacity-25"
        style="background: radial-gradient(circle, #F5A623 0%, transparent 60%);"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10"
        style="background: radial-gradient(circle, #2D6A4F 0%, transparent 60%);"></div>
      <div class="absolute inset-0 opacity-[0.025]"
        style="background-image: radial-gradient(#2C1A0E 1px, transparent 1px); background-size: 28px 28px;"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-24">

      <!-- Left: text -->
      <div v-reveal>
        <div class="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 text-text text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          Kassensystem für Vereinsfeste
        </div>

        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-text leading-[1.1] mb-6"
          style="font-family: 'Playfair Display', Georgia, serif;">
          Das Kassensystem<br>
          <em class="text-primary not-italic">für Ihr Vereinsfest.</em>
        </h1>

        <p class="text-xl text-muted leading-relaxed mb-10">
          Offline-fähig. Schweizer MWST. Einfach mieten.
        </p>

        <!-- Stats bar -->
        <div class="flex flex-wrap gap-6 mb-10 pb-10 border-b border-text/10">
          <div>
            <div class="text-2xl font-bold text-text" style="font-family: 'JetBrains Mono', monospace;">&lt;&nbsp;10ms</div>
            <div class="text-xs text-muted uppercase tracking-wider mt-0.5">Latenz lokal</div>
          </div>
          <div class="w-px bg-text/10 self-stretch"></div>
          <div>
            <div class="text-2xl font-bold text-text" style="font-family: 'JetBrains Mono', monospace;">100%</div>
            <div class="text-xs text-muted uppercase tracking-wider mt-0.5">Eigenes WLAN</div>
          </div>
          <div class="w-px bg-text/10 self-stretch"></div>
          <div>
            <div class="text-2xl font-bold text-text" style="font-family: 'JetBrains Mono', monospace;">CH</div>
            <div class="text-xs text-muted uppercase tracking-wider mt-0.5">MWST-konform</div>
          </div>
        </div>

        <!-- CTA buttons -->
        <div class="flex flex-wrap gap-4">
          <a href="#contact"
            class="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Demo anfragen
          </a>
          <a href="#how-it-works"
            class="inline-flex items-center gap-2 text-text font-semibold px-8 py-4 rounded-xl border border-text/20 hover:border-text/40 hover:bg-text/5 transition-all duration-200">
            Wie funktioniert's?
            <ArrowDown class="w-4 h-4" :stroke-width="2" />
          </a>
        </div>
      </div>

      <!-- Right: animated receipt card -->
      <div v-reveal="{ fade: true, delay: 300 }" class="hidden lg:flex items-center justify-center">
        <div class="relative">
          <!-- Glow shadow -->
          <div class="absolute inset-4 blur-3xl opacity-20 rounded-3xl bg-primary"></div>

          <!-- Receipt -->
          <div class="float-card relative bg-white rounded-3xl overflow-hidden w-72"
            style="box-shadow: 0 30px 70px rgba(44,26,14,0.18);">

            <!-- Header strip -->
            <div class="bg-primary px-6 py-5 text-white">
              <div class="text-[10px] uppercase tracking-[0.25em] opacity-70 mb-1">KASSABON</div>
              <div class="text-lg font-bold" style="font-family: 'Playfair Display', serif;">Mr. Plopp</div>
              <div class="text-xs opacity-60 mt-0.5">Vereinsfest Bern · 24.06.2025</div>
            </div>

            <!-- Line items -->
            <div class="px-6 py-4 space-y-3 border-b border-gray-100">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">2× Bratwurst</span>
                <span class="font-medium text-gray-800" style="font-family: 'JetBrains Mono', monospace;">CHF 14.00</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">3× Bier 0.5L</span>
                <span class="font-medium text-gray-800" style="font-family: 'JetBrains Mono', monospace;">CHF 19.50</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">1× Kaffee</span>
                <span class="font-medium text-gray-800" style="font-family: 'JetBrains Mono', monospace;">CHF 4.00</span>
              </div>
            </div>

            <!-- Totals -->
            <div class="px-6 py-3 space-y-2 border-b border-gray-100 bg-gray-50/60">
              <div class="flex justify-between text-xs text-gray-400">
                <span>MWST 8.1%</span>
                <span style="font-family: 'JetBrains Mono', monospace;">CHF 2.99</span>
              </div>
              <div class="flex justify-between text-sm font-bold text-gray-800">
                <span>Total</span>
                <span style="font-family: 'JetBrains Mono', monospace;">CHF 37.50</span>
              </div>
            </div>

            <!-- Payment status -->
            <div class="px-6 py-4">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                <span class="text-xs font-semibold text-accent">Bezahlung erfolgreich · TWINT</span>
              </div>
            </div>
          </div>

          <!-- Floating badges -->
          <div class="absolute -top-3 -right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            style="font-family: 'DM Sans', sans-serif;">
            Offline ✓
          </div>
          <div class="absolute -bottom-2 -left-4 bg-secondary text-text text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            style="font-family: 'DM Sans', sans-serif;">
            5-Rp. Rundung ✓
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50">
      <span class="text-[10px] tracking-[0.2em] uppercase">Mehr erfahren</span>
      <ArrowDown class="w-4 h-4 animate-bounce" :stroke-width="1.5" />
    </div>
  </section>
</template>
