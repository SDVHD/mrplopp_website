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

      <h1 class="text-3xl font-bold text-text mb-3" style="font-family: 'Playfair Display', Georgia, serif;">
        Datenschutz
      </h1>
      <p class="text-muted text-sm mb-10">Informationen zur Verarbeitung Ihrer personenbezogenen Daten.</p>

      <div class="space-y-8 text-sm">

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">1. Datenschutz auf einen Blick</h2>
          <p class="text-muted leading-relaxed">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">2. Verantwortliche Stelle</h2>
          <p class="text-muted mb-3">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p class="text-text font-medium">ConCrowd KlG</p>
          <p class="text-muted">Bhofstrasse 33</p>
          <p class="text-muted">8332 Russikon</p>
          <p class="text-muted">Schweiz</p>
          <p class="text-muted mt-1">
            E-Mail:
            <a href="mailto:info@concrowd.ch" class="text-text hover:text-primary transition-colors">info@concrowd.ch</a>
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">3. Datenerfassung auf dieser Website</h2>
          <p class="text-text font-medium mb-1">Cookies</p>
          <p class="text-muted leading-relaxed mb-4">
            Diese Website setzt keine Cookies. Cookies sind kleine Datenpakete, die auf Ihrem Endgerät gespeichert
            werden — wir verzichten bewusst darauf.
          </p>
          <p class="text-text font-medium mb-1">Server-Log-Dateien</p>
          <p class="text-muted leading-relaxed">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
            Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
            Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners sowie
            Uhrzeit der Serveranfrage.
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">4. Kontaktformular</h2>
          <p class="text-muted leading-relaxed">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            Für den Versand der E-Mails nutzen wir den Dienst Resend, der Ihre Angaben ausschliesslich in unserem
            Auftrag verarbeitet.
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">5. Ihre Rechte</h2>
          <p class="text-muted leading-relaxed">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben ausserdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
            können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Ausserdem haben Sie das Recht, unter
            bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">6. Analyse-Tools und Werbung</h2>
          <p class="text-muted leading-relaxed">
            Diese Website nutzt derzeit keine externen Analyse-Tools oder Werbenetzwerke, die personenbezogene Daten
            erheben oder verarbeiten.
          </p>
        </section>

        <div class="w-full h-px bg-text/10"></div>

        <section>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">7. Plugins und Tools</h2>
          <p class="text-muted leading-relaxed">
            Diese Website verwendet Google Fonts, die von Servern der Google Ireland Limited geladen werden. Dabei
            wird Ihre IP-Adresse an Google übermittelt.
          </p>
        </section>

      </div>

      <div class="mt-16 pt-8 border-t border-text/10 text-center text-xs text-muted/60">
        Ein Produkt von <a href="https://concrowd.ch" class="hover:text-text transition-colors">ConCrowd</a>
      </div>

    </div>
  </div>
</template>
