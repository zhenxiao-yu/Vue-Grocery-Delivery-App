import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage/Home')
  }, {
    path: '/cartItems',
    name: 'CartItems',
    component: () => import('../views/CartPage/CartItems')
  }, {
    path: '/store/:id',
    name: 'Store',
    component: () => import('../views/StoreDetailPage/Store')
  }, {
    path: '/orderConfirmation/:id',
    name: 'OrderConfirmation',
    component: () => import('../views/ConfirmPage/OrderConfirmation')
  }, {
    path: '/me',
    name: 'PersonalInfo',
    component: () => import('../views/ProfilePage/PersonalInfo')
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
