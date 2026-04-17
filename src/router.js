import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Impressum from './components/Impressum.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/impressum', component: Impressum },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
