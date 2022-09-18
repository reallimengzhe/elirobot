/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * 规则列表
 * @param {string} str
 * @returns {Boolean}
 */
const rule = {
  isFill(str, msg) {
    let result = true
    if (str !== 0 && (!str || str === '' || str === undefined || str === null)) {
      result = false
    }
    return { success: result, msg: msg || '必填项不能为空' }
  },
  isChannelId(str, msg) {
    let result = true
    if (isNaN(str)) {
      result = false
    }
    return { success: result, msg: msg || '请输入正确的渠道号' }
  },
  isBookId(str, msg) {
    let result = true
    if (isNaN(str)) {
      result = false
    }
    return { success: result, msg: msg || '请输入正确的书号' }
  }
}
import { Message } from 'element-ui'
/**
 * 规则列表
 * @param {Array} targetArr:[{name:'',value,msg:''}]
 * @returns {Boolean}
 */
export function Verificate(targetArr) {
  if (!Array.isArray(targetArr)) {
    console.log('验证对象需要是一个数组')
    return
  }
  for (const i in targetArr) {
    if (rule[targetArr[i].name]) {
      const result = rule[targetArr[i].name](targetArr[i].value, targetArr[i].msg)
      if (!result.success) {
        Message({
          message: result.msg,
          type: 'warning',
          duration: 5 * 1000
        })
        return result
      }
    }
  }
  return {
    success: true,
    msg: '成功验证'
  }
}
