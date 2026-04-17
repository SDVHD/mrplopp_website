<script setup>
import { Mail, Globe } from 'lucide-vue-next'
</script>

<template>
  <main class="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
    <!-- background glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10 pointer-events-none"
      style="background: radial-gradient(circle, #00B4A6 0%, transparent 65%);"
    ></div>
    <!-- subtle grid -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 60px 60px;"
    ></div>

    <div class="relative z-10 flex flex-col items-center max-w-xl">
      <!-- brand -->
      <span class="text-2xl font-bold text-white tracking-tight mb-10">
        Mr. <span class="text-primary">Plopp</span>
      </span>

      <!-- badge -->
      <span class="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-8">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        In Entwicklung
      </span>

      <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
        Bald verfügbar.
      </h1>

      <p class="text-lg text-muted leading-relaxed mb-4">
        Das Kassensystem für Events &amp; Feste — einfach, offlinefähig, für die Schweiz gemacht.
      </p>
      <p class="text-sm text-muted/60 mb-12">
        Auch wenn das Internet ausfällt.
      </p>

      <!-- key promises -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <span class="bg-surface border border-white/5 text-muted text-xs font-medium px-4 py-2 rounded-full">100% Offlinefähig</span>
        <span class="bg-surface border border-white/5 text-muted text-xs font-medium px-4 py-2 rounded-full">TWINT & Bargeld</span>
        <span class="bg-surface border border-white/5 text-muted text-xs font-medium px-4 py-2 rounded-full">5-Min. Einrichtung</span>
        <span class="bg-surface border border-white/5 text-muted text-xs font-medium px-4 py-2 rounded-full">MWST-konform CH</span>
        <span class="bg-surface border border-white/5 text-muted text-xs font-medium px-4 py-2 rounded-full">400 CHF Einstieg</span>
      </div>

      <!-- CTA -->
      <p class="text-muted text-sm mb-6">Interesse? Melden Sie sich — wir informieren Sie bei Launch.</p>
      <a
        href="mailto:hallo@mrplopp.ch"
        class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
      >
        <Mail class="w-4 h-4" :stroke-width="2" />
        hallo@mrplopp.ch
      </a>
    </div>

    <!-- footer -->
    <div class="absolute bottom-8 left-0 right-0 flex justify-center">
      <div class="flex flex-col items-center gap-2 text-xs text-muted/40">
        <div class="flex items-center gap-6">
          <a href="mailto:hallo@mrplopp.ch" class="hover:text-muted transition-colors">hallo@mrplopp.ch</a>
          <span>·</span>
          <a href="https://mrplopp.ch" class="hover:text-muted transition-colors">mrplopp.ch</a>
          <span>·</span>
          <span>© {{ new Date().getFullYear() }} Mr. Plopp</span>
        </div>
        <span>Ein Produkt von <a href="https://concrowd.ch" class="hover:text-muted transition-colors">ConCrowd</a></span>
        <span>·</span>
        <RouterLink to="/impressum" class="hover:text-muted transition-colors">Impressum</RouterLink>
      </div>
    </div>
  </main>
</template>