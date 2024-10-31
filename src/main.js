import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes';


const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes
});

app.provide('bootstrap', bootstrap);

app.use(createPinia());
app.use(router);
app.mount('#app');
