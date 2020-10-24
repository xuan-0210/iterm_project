import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../components/index.vue'
import Hotel from '../views/Hotel.vue'
import Hotelcopy from '../views/Hotelcopy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/hotelcopy',
    component: Hotelcopy
  },
  {
    path: '/hotel',
    component: Hotel
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
