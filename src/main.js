import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import PropertyIndex from './Pages/Properties/Index.vue'
import PropertyEdit from './Pages/Properties/Edit.vue'
import PropertyShow from './Pages/Properties/Show.vue'
import MainForm from './Pages/Properties/MainForm.vue'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@fortawesome/fontawesome-free/css/all.css';

const vfm = createVfm()

const routes = [
  { path: '/', component: PropertyIndex },
  { path: '/form', component: MainForm },
  { path: '/properties/:id/edit', component: PropertyEdit, name: 'property.edit' },
  { path: '/properties/:id', component: PropertyShow, name: 'property.show', props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).use(vfm).use(plugin, defaultConfig).mount('#app')
