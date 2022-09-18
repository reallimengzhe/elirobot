import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'
import { getToken } from '@/utils/token.js'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const LOGIN_PATH = '/sign-in'
const WHITE_LIST = ['/404']
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  if (WHITE_LIST.indexOf(to.path) > -1) {
    next()
  } else {
    if (getToken()) {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        if (to.path === LOGIN_PATH) {
          next({ path: '/', replace: true })
          return
        }
        if (!store.state.app.pageCatch) {
          store.commit('tagsViews/DEL_CACHED_VIEW', to)
          setTimeout(function() { next() }, 0)
        } else {
          store.commit('app/SET_PAGE_CATCH', false)
          next()
        }
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo')
          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // dynamically add accessible routes
          router.addRoutes(accessRoutes)
          if (to.path === LOGIN_PATH) {
            next({ path: '/', replace: true })
          } else {
            next({ ...to, replace: true })
          }
        } catch (error) {
          console.log(error)
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          // glMessage({message: 'Router Error', type: 'error'});
          store.dispatch('user/logout')
          // next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    } else {
      if (to.path === LOGIN_PATH) {
        next()
      } else {
        store.dispatch('user/goLogin', to.fullPath)
      }
    }

    // const { roles } = await store.dispatch('user/getInfo')
    // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
    // router.addRoutes(accessRoutes)
    // console.log(accessRoutes)
    // console.log(to)
    // next({ ...to, replace: true })
    // next()
  }
})

router.afterEach((to, from) => {
  // finish progress bar
  NProgress.done()
})
