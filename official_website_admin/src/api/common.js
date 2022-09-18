import request from '@/utils/request'

// 获取用户详细信息
export function getUserInfoApi(params) {
  return request({
    url: '/auth/detail',
    method: 'get',
    params
  })
}

// 注销登陆
export function logoutApi(data) {
  return request({
    url: '/auth/logout',
    method: 'post',
    data
  })
}

// 获取数据字典Map
export function getDictionApi(params) {
  return request({
    url: '/auth/common/diction/map',
    method: 'get',
    params
  })
}



// 获取数据字典列表-针对某一key下的数据
export function getDictionListApi(params) {
  return request({
    url: '/auth/common/diction/list',
    method: 'get',
    params
  })
}


// 获取数据字典列表-编辑字典
export function editDictionApi(id, data) {
  return request({
    url: `/auth/common/diction/${id}`,
    method: 'post',
    data
  })
}

// 获取数据字典列表-添加字典
export function addDictionApi(data) {
  return request({
    url: `/auth/common/diction/add`,
    method: 'put',
    data
  })
}


// 获取数据字典列表-修改字典状态
export function editDictionStateApi(id, state) {
  return request({
    url: `/auth/common/diction/state/${id}/${state}`,
    method: 'post'
  })
}

// 获得素材库列表-上传地址
export function uploadApi() {
  return '/auth/common/uploadAndSave'
}
