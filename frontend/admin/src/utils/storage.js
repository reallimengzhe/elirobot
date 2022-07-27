/**
 * 数据缓存
 */
const session = {
  setItem(key, value) {
    sessionStorage.setItem(key, value)
  },
  getItem(key) {
    return sessionStorage.getItem(key)
  },
  removeItem(key) {
    sessionStorage.removeItem(key)
  },
  clear() {
    sessionStorage.clear()
  }
}
const local = {
  setItem(key, value) {
    localStorage.setItem(key, value)
  },
  getItem(key) {
    return localStorage.getItem(key)
  },
  removeItem(key) {
    localStorage.removeItem(key)
  }
}
export {
  session,
  local
}

