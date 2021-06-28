import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {publicPath} from '../../vue.config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rasteniya',
    name: 'PagePlants',
    component: () => import('../views/PagePlants.vue')
  },
  {
    path: '/kashpo',
    name: 'PageFlowerPot',
    component: () => import('../views/PageFlowerPot.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{renderInput:false},
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: '/online-shop-web/',
  base: publicPath,
  routes
})

export default router
