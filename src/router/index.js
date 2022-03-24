import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index'
import store from '@/store'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles')
      }
    ]
  }
]

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(),
  routes
})

// 路由导航守卫
const whiteList = ['/login'] //白名单
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === 'login') {
      next('/login')
    } else {
      sessionStorage.setItem('path', `${to.path}`)
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
