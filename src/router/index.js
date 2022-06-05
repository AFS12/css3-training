import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import glowingBtn from '../components/glowing-button-hover.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/glowing-btn',
    name: 'glowingBtn',
    component: glowingBtn
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
