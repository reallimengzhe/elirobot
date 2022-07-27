import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import Material from './modules/material.js'
import BaseSetting from './modules/baseSetting.js'
import CustomerOperation from './modules/customerOperation.js'
/**
 * 静态路由
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/sign-in',
    component: () => import('@/views/Login'),
    hidden: true
  },
  // 首页 重定向首页
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home/index'),
        meta: {
          title: '首页',
          Affix: true,
          icon: 'icon-home',
          full: true,
          noCache: false
        }
      },
      {
        path: 'redirect',
        hidden: true,
        component: () => import('@/views/redirect'),
        beforeEnter: (to, from, next) => {
          const path = to.fullPath.substring(to.fullPath.indexOf('=') + 1)
          next({ path: decodeURIComponent(path), replace: true })
        }
      }
    ]
  }
]
// 异步加载路由
export const asyncRoutes = [
  Material,
  BaseSetting,
  CustomerOperation,
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () =>
  new Router({
    mode: 'hash', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
