import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/token'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 600000, // request timeout
  headers: { 'Authorization': getToken() }
})
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (!getToken()) {
    //   store.dispatch('user/logout')
    //   return
    // }
    config.headers.Authorization = getToken()
    console.log(config);
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (!res) {
      Message({
        message: '网络错误',
        type: 'error'
      })
      return
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.result && res.result !== 0) {
      if (res.result === 401) {
        Message({
          message: '登陆过期',
          type: 'error'
        })
        // setTimeout(() => {
        store.dispatch('user/logout')
        // }, 2000)
        return Promise.reject('登录超时，请重新登录!')
      }
      if (res.result === 421) {
		  Message({
		    message: '您的账号已在其他设备登录!',
		    type: 'error'
		  })
        // setTimeout(() => {
        store.dispatch('user/logout')
        // }, 2000)
        return Promise.reject('您的账号已在其他设备登录!')
      }
      if (res.result === 402) {
        if (store.getters.powerTips) {
          return Promise.reject(new Error(res.detail || '用户权限不足'))
        } else {
          store.dispatch('app/setPowerTips', true)
          setTimeout(() => {
            store.dispatch('app/setPowerTips', false)
          }, 3000)
        }
        Message({
          message: '用户权限不足',
          type: 'error'
        })
        return Promise.reject(new Error(res.detail || '用户权限不足'))
      }

      if (response.config.noTips) {
        return Promise.reject(res)
      }
      Message({
        message: res.detail || '服务器开小车了～',
        type: 'warning'
      })
      return Promise.reject(new Error(res.detail || '服务器开小车了～'))
    } else {
      return res
    }
  },
  error => {
    Message({
      message: error.errMsg || '网络错误',
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export default service
