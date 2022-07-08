import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SignIn from '../views/SignIn.vue'
import Compteur from '../views/Compteur.vue'
import Users from '../views/Users.vue'
import Home from '../components/Home.vue'
import Notifications from '../views/Notifications.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/home',
        component:Home
      },
      {
        path:'/object',
        component:Compteur
      },
      {
        path:'/notifications',
        component:Notifications
      },
      {
        path:'/users',
        component:Users
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path:'/',
    name:'login',
    component:Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
