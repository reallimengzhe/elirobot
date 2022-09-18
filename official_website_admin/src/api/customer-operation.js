import request from '@/utils/request'


// 用户列表
export function getUserListApi(data) {
  return request({
    url: '/auth/customer/pages',
    method: 'post',
    data
  })
}



// 用户列表
export function exportUserListApi(data) {
  return '/auth/customer/export'
}



// 留资列表
export function getRetentionListApi(data) {
  return request({
    url: '/auth/clueOrigin/pages',
    method: 'post',
    data
  })
}

// 留资列表 - 导出
export function exportRetentionListApi(data) {
  return '/auth/clueOrigin/export'
}

// 留资列表 - 修改状态
export function editRetentionStateApi(id, state) {
  return request({
    url: `/auth/clueOrigin/state/${id}/${state}`,
    method: 'post'
  })
}





// 来源渠道
export function getSourceChannelListApi(params) {
  return request({
    url: '/auth/sourceChannel/list',
    method: 'get',
    params
  })
}


// 来源渠道 - 添加
export function addSourceChannelApi(data) {
  return request({
    url: `/auth/sourceChannel/add`,
    method: 'put',
    data
  })
}

// 来源渠道 - 修改状态
export function editSourceChannelApi(id, data) {
  return request({
    url: `/auth/sourceChannel/${id}`,
    method: 'post',
    data
  })
}

// 来源渠道 - 修改状态
export function updateSourceChannelStateApi(id, state) {
  return request({
    url: `/auth/sourceChannel/state/${id}/${state}`,
    method: 'post'
  })
}
