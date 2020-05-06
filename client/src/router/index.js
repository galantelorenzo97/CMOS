import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Computers from '../views/Computers.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import { CurrentUser } from '../models/Users'
import Helpdesk from '../views/Helpdesk'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { IsSecret: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/computers',
    name: 'Computers',
    component: Computers,
    meta: { IsSecret: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/helpdesk',
    name: 'Helpdesk',
    component: Helpdesk
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.IsSecret && !CurrentUser) next("/login")
  else next()
});

export default router
