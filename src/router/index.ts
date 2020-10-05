import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// Views
import Dashboard from '@/views/Dashboard.vue'
import Auth from '@/views/Auth.vue'

// Pages
import AddDoggo from '@/views/Pages/AddDoggo.vue'
import Details from '@/views/Pages/Details.vue'
import Index from '@/views/Pages/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard,
    children: [
      {
        name: 'Index',
        path: '',
        component: Index
      },
      {
        name: 'Add Doggo',
        path: '/add-doggo',
        component: AddDoggo
      },
      {
        name: 'Details',
        path: '/details/:id',
        component: Details
      }
    ]
  },
  {
    name: 'Auth',
    path: '/auth',
    component: Auth,
    children: [
      {
        name: 'Login',
        path: '',
        component: Details
      },
      {
        name: 'Token',
        path: '/auth/login/:token',
        component: Details
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
