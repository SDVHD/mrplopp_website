<script setup>
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-bg text-text px-6 py-16">
    <div class="max-w-2xl mx-auto">

      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-muted hover:text-text text-sm transition-colors mb-12"
      >
        <ArrowLeft class="w-4 h-4" :stroke-width="1.5" />
        Zurück
      </RouterLink>

      <h1 class="text-3xl font-bold text-text mb-10" style="font-family: 'Playfair Display', Georgia, serif;">
        Impressum
      </h1>

      <div class="space-y-8 text-sm">

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Betreiber</h2>
          <p class="text-text font-medium">ConCrowd KlG</p>
          <p class="text-muted">Bhofstrasse 33</p>
          <p class="text-muted">8332 Russikon</p>
          <p class="text-muted">Schweiz</p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Kontakt</h2>
          <p class="text-muted">
            E-Mail:
            <a href="mailto:info@concrowd.ch" class="text-text hover:text-primary transition-colors">info@concrowd.ch</a>
          </p>
          <p class="text-muted mt-1">
            Telefon:
            <a href="tel:+41435412628" class="text-text hover:text-primary transition-colors">+41 43 541 26 28</a>
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Handelsregister</h2>
          <p class="text-muted">Kanton Zürich</p>
          <p class="text-muted">UID: CHE-236.308.991</p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Verantwortlich</h2>
          <p class="text-text">Simon Lissa</p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Haftungsausschluss</h2>
          <p class="text-muted leading-relaxed">
            Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
            und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir für eigene
            Inhalte verantwortlich. Für externe Links zu fremden Webseiten übernehmen wir keine Haftung; für deren
            Inhalte sind die jeweiligen Betreiber verantwortlich.
          </p>
        </section>

      </div>

      <div class="mt-16 pt-8 border-t border-text/10 text-center text-xs text-muted/60">
        Ein Produkt von <a href="https://concrowd.ch" class="hover:text-text transition-colors">ConCrowd</a>
      </div>

    </div>
  </div>
</template>
