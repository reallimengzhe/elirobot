import request from '@/utils/request'

// 获得素材库列表
export function getMaterialListApi(params) {
  return request({
    url: `/auth/common/pages`,
    method: 'GET',
    params
  })
}

// 获得素材库列表-生成二维码
export function getMaterialQrCodeApi(params) {
  return request({
    url: `/auth/common/getQRCodeBase64`,
    method: 'GET',
    params
  })
}

// 获得素材库列表-生成二维码链接
export function getMaterialQrCodeUrlApi() {
  return '/auth/common/getQRCode'
}

// 获得素材库列表-上传地址
export function uploadApi() {
  return '/auth/common/uploadAndSave'
}

export function editFilenameApi(data) {
  return request({
    url: `/auth/common/${data.id}`,
    method: 'POST',
    data
  })
}

export function delMaterialApi(id) {
  return request({
    url: `/auth/common/${id}`,
    method: 'DELETE'

  })
}
