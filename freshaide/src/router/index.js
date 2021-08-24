import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/HomePage/Home'
// import Store from '../views/StoreDetailPage/Store'
// import Login from '../views/LoginPage/Login'
// import Register from '../views/RegisterPage/Register'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage/Home')
  }, {
    path: '/store',
    name: 'Store',
    component: () => import('../views/StoreDetailPage/Store')
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage/Login'),
    // execute before entering the page
    beforeEnter (to, from, next) {
      const { loggedIn } = localStorage
      loggedIn ? next({ name: 'Home' }) : next()
    }
  }, {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage/Register'),
    // execute before entering the page
    beforeEnter (to, from, next) {
      const { loggedIn } = localStorage
      loggedIn ? next({ name: 'Home' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// execute each time whe router switch to new page
router.beforeEach((to, from, next) => {
  const { loggedIn } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (loggedIn || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router
