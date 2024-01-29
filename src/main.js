import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import PropertyIndex from './Pages/Properties/Index.vue'
import MainForm from './Pages/Properties/MainForm.vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@fortawesome/fontawesome-free/css/all.css';

const routes = [
  { path: '/', component: PropertyIndex },
  { path: '/form', component: MainForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
