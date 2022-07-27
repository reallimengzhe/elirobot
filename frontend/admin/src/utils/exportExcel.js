import axios from 'axios'
import { getToken } from '@/utils/token'

export function ExportExcel(url, fn, needFileName) {
  axios
    .get(url, { responseType: 'blob', headers: { Authorization: getToken() }})
    .then(res => {
      const content = res.data
      const blob = new Blob([content])
      // let fileName = '楼盘列表.xlsx'.split("=")[1]
      let fileName = needFileName || res.headers['content-disposition']
      console.log('fileName', fileName, res.headers['content-disposition'], res)
      fileName = decodeURIComponent(fileName)
      if ('download' in document.createElement('a')) {
        // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
      if (fn && typeof fn === 'function') fn(res)
    })
    .catch(err => {
      if (fn && typeof fn === 'function') fn(err)
    })
}
// 限制下载次数
export function ExportExcel1(url, fn, needFileName) {
  axios
    .get(url, { responseType: 'blob', headers: { Authorization: getToken() }})
    .then(res => {
      if (res.data.type === 'application/json') {
        if (fn && typeof fn === 'function') fn(res)
      } else {
        const content = res.data
        const blob = new Blob([content])
        // let fileName = '楼盘列表.xlsx'.split("=")[1]
        let fileName = needFileName || res.headers['content-disposition']
        fileName = decodeURI(fileName)
        if ('download' in document.createElement('a')) {
          // 非IE下载
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          URL.revokeObjectURL(elink.href) // 释放URL 对象
          document.body.removeChild(elink)
        } else {
          // IE10+下载
          navigator.msSaveBlob(blob, fileName)
        }
        if (fn && typeof fn === 'function') fn(res)
      }
    })
    .catch(err => {
      if (fn && typeof fn === 'function') fn(err)
    })
}

export function ExportExcelPost(url, params, fn, needFileName) {
  axios
    .post(url, params, {
      responseType: 'blob',
      headers: { Authorization: getToken() }
    })
    .then(res => {
      const content = res.data
      if (content.type === 'application/json') {
        var reader = new FileReader()
        reader.readAsText(res.data, 'utf-8')
        reader.onload = function() {
          const data = JSON.parse(reader.result)
          console.log('content', data)
          if (fn && typeof fn === 'function') fn(data)
        }
        return
      }
      const blob = new Blob([content], {
        type: 'application/vnd.ms-excel;charset=utf-8'
      })
      // let fileName = '楼盘列表.xlsx'.split("=")[1]
      let fileName = needFileName || res.headers['content-disposition']
      fileName = decodeURI(fileName)
      if ('download' in document.createElement('a')) {
        // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
      } else {
        // IE10+下载
        navigator.msSaveBlob(blob, fileName)
      }
      if (fn && typeof fn === 'function') fn(res)
    })
    .catch(err => {
      if (fn && typeof fn === 'function') fn(err)
    })
}
