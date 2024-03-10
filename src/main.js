import './assets/main.css'
import './assets/tailwind.css'

import Router from './router.js'
import Pinia from './store.js'
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)


app.use(Router).use(Pinia).mount('#app')
