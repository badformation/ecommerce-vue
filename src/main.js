import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.provide('bootstrap', bootstrap);

app.use(createPinia())

app.mount('#app')
