import request from '@/utils/request'

// login
export function loginApi(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

// 修改密码
export function editPasswordApi(data) {
  return request({
    url: '/auth/password',
    method: 'post',
    data
  })
}
