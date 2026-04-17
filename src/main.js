import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { vReveal } from './directives/reveal.js'

const app = createApp(App)
app.use(router)
app.directive('reveal', vReveal)
app.mount('#app')
