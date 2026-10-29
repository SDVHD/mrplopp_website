import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Impressum from './components/Impressum.vue'
import Datenschutz from './components/Datenschutz.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/impressum', component: Impressum },
    { path: '/datenschutz', component: Datenschutz },
    // Unbekannte Routen (z.B. alte #section-Links) → Startseite statt leerer Seite
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
