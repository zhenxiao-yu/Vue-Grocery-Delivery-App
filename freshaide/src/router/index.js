import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage/Home'
import Login from '../views/LoginPage/Login'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = false
  if (loggedIn || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
  console.log(to, from)
  next()
})

export default router
