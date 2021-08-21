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
    component: Login,
    // execute before entering the page
    beforeEnter (to, from, next) {
      const loggedIn = localStorage.loggedIn
      if (loggedIn) {
        next({ name: 'Home' })
      } else {
        next()
      }
      console.log(to, from)
      next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// execute each time whe router switch to new page
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.loggedIn
  if (loggedIn || to.name === 'Login') {
    next()
  } else {
    next({ name: 'Login' })
  }
  console.log(to, from)
  next()
})

export default router
