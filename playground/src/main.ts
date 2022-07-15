import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { keepPiniaPlugin } from 'pinia-plugin-keep'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

pinia.use(keepPiniaPlugin)

app.use(pinia)

app.mount('#app')

