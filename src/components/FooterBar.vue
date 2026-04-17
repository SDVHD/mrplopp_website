<template>
  <footer class="snap-start pt-10 pb-8 px-6 border-t border-text/10 bg-bg">
    <div class="max-w-6xl mx-auto">

      <!-- Top row -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <span class="text-lg font-bold text-text" style="font-family: 'Playfair Display', serif;">
            Mr.&nbsp;<span class="text-primary">Plopp</span>
          </span>
          <span class="hidden sm:block text-text/20">·</span>
          <span class="text-sm text-muted">© {{ new Date().getFullYear() }} Mr. Plopp — Eventkassen Schweiz</span>
        </div>
        <div class="flex items-center gap-6 text-sm text-muted">
          <a href="mailto:hallo@mrplopp.ch" class="hover:text-text transition-colors">hallo@mrplopp.ch</a>
          <RouterLink to="/impressum" class="hover:text-text transition-colors">Impressum</RouterLink>
        </div>
      </div>

      <!-- ConCrowd Branding -->
      <div class="border-t border-text/8 pt-5 flex items-center justify-center gap-2 text-xs text-muted/60">
        <span>Ein Service von</span>
        <a
          href="https://concrowd.ch"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 font-semibold text-muted hover:text-text transition-colors"
        >
          <span class="w-4 h-4 rounded bg-text/10 flex items-center justify-center text-[9px] font-bold text-text/60">CC</span>
          ConCrowd
        </a>
      </div>

    </div>
  </footer>
</template>
