<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-surface/95 backdrop-blur-sm shadow-sm border-b border-text/10' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <button
        @click="scrollTo('hero')"
        class="font-display text-xl font-bold text-text tracking-tight cursor-pointer"
        style="font-family: 'Playfair Display', serif;"
      >
        Mr.&nbsp;<span class="text-primary">Plopp</span>
      </button>

      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <button @click="scrollTo('features')"     class="hover:text-text transition-colors">Features</button>
        <button @click="scrollTo('how-it-works')" class="hover:text-text transition-colors">Wie's geht</button>
        <button @click="scrollTo('konfigurator')" class="hover:text-text transition-colors">Preise</button>
        <button @click="scrollTo('faq')"          class="hover:text-text transition-colors">FAQ</button>
      </div>

      <button
        @click="scrollTo('contact')"
        class="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm"
      >
        Demo anfragen
      </button>
    </div>
  </nav>
</template>
