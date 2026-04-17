<script setup>
import { Mail, Globe } from 'lucide-vue-next'
</script>

<template>
  <section id="cta" class="py-24 px-6">
    <div class="max-w-3xl mx-auto text-center">
      <div class="bg-surface rounded-2xl border border-primary/20 p-12 relative overflow-hidden">
        <!-- teal glow -->
        <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-10" style="background: radial-gradient(circle, #00B4A6 0%, transparent 70%);"></div>

        <div class="relative z-10">
          <span class="text-primary text-sm font-semibold uppercase tracking-widest">Jetzt starten</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Bereit für Ihr nächstes Fest?
          </h2>
          <p class="text-muted text-lg mb-10">
            Wir richten Mr. Plopp ein — Sie müssen nichts installieren.
          </p>

          <a
            href="mailto:hallo@mrplopp.ch"
            class="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg mb-10"
          >
            Demo anfragen
          </a>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted">
            <a href="mailto:hallo@mrplopp.ch" class="flex items-center gap-2 hover:text-white transition-colors">
              <Mail class="w-4 h-4" :stroke-width="1.5" />
              hallo@mrplopp.ch
            </a>
            <span class="hidden sm:block w-px h-4 bg-white/10"></span>
            <a href="https://mrplopp.ch" class="flex items-center gap-2 hover:text-white transition-colors">
              <Globe class="w-4 h-4" :stroke-width="1.5" />
              mrplopp.ch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
