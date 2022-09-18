import { getToken, setToken, removeToken } from '@/utils/token'
import router from '@/router'
import { session } from '@/utils/storage'
import { getUserInfoApi, logoutApi } from '@/api/common.js'
import store from '../index.js'

const state = {
  token: getToken(),
  userInfo: {}, // 用户信息
  avatar: '', // 头像
  name: '',
  roles: [], // 用户权限
  options: {}, // 当前登录用户相关设置
}

const mutations = {
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles || []
  },
  SET_OPTIONS: (state, value) => {
    state.options = { ...state.options, ...value }
  },
  CLEAR_OPTIONS: (state) => {
    state.options = {}
  }
}

// let token = ''
const actions = {
  // user login
  login({ commit, dispatch }, userInfo) {
    const { token } = userInfo
    // return new Promise((resolve, reject) => {
    dispatch('initAccount', userInfo)
    commit('SET_TOKEN', token)
    setToken(token)
  },

  // get user info
  getInfo({ commit, state, dispatch }) {
    return new Promise(async(resolve, reject) => {
      // 获取用户信息
      getUserInfoApi().then(response => {
        let roles = response.data ? response.data.roles : []
        // const data = { roles: ['admin'] }
        if (!roles) {
          reject('Verification failed, please Login again.')
        }
        if (roles && !roles.length) {
          roles = ['not-power']
        }
        dispatch('initAccount', response.data)
        commit('SET_ROLES', ['admin'])
        resolve({ roles })
      }).catch(error => {
        reject(error)
      })
    })
  },
  initAccount({ commit, state, dispatch }, userInfo) {
    commit('SET_USER_INFO', userInfo)
    commit('SET_NAME', userInfo.realName)
  },
  // user logout
  logout({ commit, state, dispatch }, flag) {
    session.clear()
    removeToken()
    commit('SET_ROLES')
    commit('CLEAR_OPTIONS')
    store.dispatch('tagsViews/delAllViews')
    logoutApi()
    if (flag) {
      dispatch('goLogin')
    } else {
      dispatch('goLogin', router.app.$route.fullPath)
    }
  },
  goLogin({ commit }, fullPath) {
    router.replace('/sign-in?fromUrl=' + encodeURIComponent(fullPath || '/'))
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken()
      resolve()
    })
  },
  setOptions({ commit }, value) {
    commit('SET_OPTIONS', value)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
