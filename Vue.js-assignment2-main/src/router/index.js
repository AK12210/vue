import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'all',
    component: Dashboard
  },
  {
    path: '/under-21',
    name: 'under21',
    component: Dashboard
  },
  {
    path: '/over-21',
    name: 'over21',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
