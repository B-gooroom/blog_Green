import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/contents/Main.vue'
import Details from '../components/contents/Details.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
