import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
import Test from '../views/test.vue'
import UserInfo from '../views/user/UserInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: UserInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
