import request from '../plugins/request'

// const devUrl = 'http://www.chenzz.store:8080/elibot'
// const devUrl = 'http://127.0.0.1:8080/elibot'
// const devUrl = 'http://122.51.224.243:8080/elibot'
// const proUrl = 'http://sitetest.elibot.cn/elibot'
// const proUrl = '/api'
const devUrl = '/api'
const proUrl = 'https://www.elibot.cn/elibot'

const dev = process.env.NODE_ENV !== 'production'
export const baseUrl = dev ? devUrl : proUrl
export const imgSrc = 'https://www.elibot.cn'
export const imgSrc2 = 'https://www.elibot.cn'
// export const imgSrc = 'http://sitetest.elibot.cn'
// export const imgSrc2 = 'http://sitetest.elibot.cn'
export function formatData (payload) {
  const formData = new FormData()
  for (const key in payload) {
    if (payload.hasOwnProperty(key)) {
      formData.append(key, payload[key])
    }
  }
  return formData
}

/**
 * 用户
 */

// 登录
export function login (payload) {
  return request(`${baseUrl}/user/userLogin`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 获取验证码
export function getCode (phone) {
  return request(`${baseUrl}/user/getMessage?phone=${phone}`, {
    // credentials: 'include'
  })
}
// 注册
export function register (payload) {
  return request(`${baseUrl}/user/insertUser`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(payload),
    // credentials: 'include'
  })
}
// 修改密码
export function resetPassword (payload) {
  return request(`${baseUrl}/user/updateUserByPw`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
/**
 * 语言
 */
//切换语言
export function choiceLanguage (payload) {
  return request(`${baseUrl}/language/choiceLanguage`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
/**
 * 菜单
 */

// 获取一级菜单
export function getCatalogs (status) {
  return request(`${baseUrl}/catalogs/selCatalogs?status=${status}`, {
    // credentials: 'include'
  })
}
// 根据id查询菜单接口
export function getSecCatalogs (id) {
  return request(`${baseUrl}/catalogs/selCatalogsById?id=${id}`, {
    // credentials: 'include'
  })
}
// 获取案例分类
export function getCaseCatalogs (pid,flag,status) {
  return request(`${baseUrl}/catalogs/selCatalogsSon?parentId=${pid}&flag=${flag}&status=${status}`, {
    // credentials: 'include'
  })
}
// 查询产品
export function getProducts () {
  return request(`${baseUrl}/catalogs/findProduct`, {
    // credentials: 'include'
  })
}
/**
 * 产品
 */

// 查询所有产品
export function getProductsAll (status) {
  return request(`${baseUrl}/product/selProductAll?status=${status}`, {
    // credentials: 'include'
  })
}
// 根据flag查询产品
export function getProByFlag (payload) {
  return request(`${baseUrl}/product/selProductByFlag`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 根据id查询产品
export function getProById (payload) {
  return request(`${baseUrl}/product/selProductById`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 根据id查询产品及相邻产品
export function getProRelationById (payload) {
  return request(`${baseUrl}/product/selProById`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 查询所有问题
export function getAllQues (page) {
  return request(`${baseUrl}/quest/selCasesAll?pageNum=${page}`, {
    // credentials: 'include'
  })
}
// 根据关键字查询问题
export function getQues (payload) {
  return request(`${baseUrl}/quest/selQuestBySearch`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}

/**
 * 下载
 */

// 根据模块查询
export function getDownload (payload) {
  return request(`${baseUrl}/download/selDownBySortId`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}

// 根据模块查询（技术文档）
export function getTechDoc (payload) {
  return request(`${baseUrl}/download/selDownByMore`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}

// 下载地址
export function getDownloadById (params) {
  return request(`${baseUrl}/download/selDownById`, {
    method: 'POST',
    params
    // credentials: 'include'
  })
}

/**
 * 案例
 */

// 查询所有案例 0:行业 1:应用
export function getCasesAll (page,type) {
  return request(`${baseUrl}/case/selCasesAll?pageNum=${page}&type=${type}`, {
    // credentials: 'include'
  })
}
// 根据flag查询案例
export function getCaseByFlag (payload) {
  return request(`${baseUrl}/case/selCasesByFlag`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 根据id查询案例
export function getCaseById (payload) {
  return request(`${baseUrl}/case/selCasesById`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}

/**
 * 公司
 */

// 获取公司
export function getCompanyById (id) {
  return request(`${baseUrl}/company/selCompanyById?id=${id}`, {
    // credentials: 'include'
  })
}
// 公司历程
export function getProgress () {
  return request(`${baseUrl}/course/findCourse`, {
    // credentials: 'include'
  })
}
// 荣誉
export function getHonor () {
  return request(`${baseUrl}/honor/findHonor`, {
    // credentials: 'include'
  })
}
// 公司地址
export function getAddress () {
  return request(`${baseUrl}/contact/findContact`, {
    // credentials: 'include'
  })
}
// 招聘列表
export function getRecruits () {
  return request(`${baseUrl}/recruit/findRecruit`, {
    // credentials: 'include'
  })
}
// 根据id查询招聘信息
export function getRecruitById (id) {
  return request(`${baseUrl}/recruit/selRecruitById?id=${id}`, {
    // credentials: 'include'
  })
}


/**
 * 新闻&展会
 */
// 根据年份查询展会
export function getExhibition (page,year) {
  return request(`${baseUrl}/news/findNewsByYear?pageNum=${page}&relTime=${year}`, {
    // credentials: 'include'
  })
}
// 获取新闻
export function getNews (page,type) {
  return request(`${baseUrl}/news/selNews?pageNum=${page}&type=${type}`, {
    // credentials: 'include'
  })
}
// 根据日期查询动态
export function getNewsByDay (year) {
  return request(`${baseUrl}/news/findNewsByDate?data=${year}`, {
    // credentials: 'include'
  })
}
// 根据id查询新闻
export function getNewsById (payload) {
  return request(`${baseUrl}/news/selNewsById`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}


/**
 * 留言
 */
// 添加留言
export function addMessage (payload) {
  return request(`${baseUrl}/message/insertMessage`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(payload),
    // credentials: 'include'
  })
}
// 根据uId查询
export function getMessage (payload) {
  return request(`${baseUrl}/message/selMessageByuId`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}

/**
 * 艾.培训
 */

// 根据模块查询
export function getTrain (payload) {
  return request(`${baseUrl}/train/findTraByType`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}

// 根据年月查询课程
export function getCourse (payload) {
  return request(`${baseUrl}/train/selTrainByMonth`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 根据日期查询课程详情
export function getCourseByDate (payload) {
  return request(`${baseUrl}/train/selTrainByDay`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 查询最近最新的课程
export function getCourseLatesd (payload) {
  return request(`${baseUrl}/train/selTrainByNow`, {
    method: 'POST',
    body: formatData(payload),
    // credentials: 'include'
  })
}
// 预约课程
export function addAppointment (form,title) {
  return request(`${baseUrl}/message/insertAppt?title=${title}`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(form),
    // credentials: 'include'
  })
}
/**
 * 搜索
 */
// 搜索
export function getSearch (page,con) {
  return request(`${baseUrl}/search/selSearch?pageNum=${page}&context=${con}`, {
    // credentials: 'include'
  })
}
// 识别ip
export function chkIp () {
  console.log("think 2")
  let ipData = request(`https://www.elibot.cn/elibot/user/getAddress`, {
    // credentials: 'include'
  })
  console.log("think 3: " + ipData)

  let str = JSON.stringify(ipData, null, " " )
  console.log("think 3.1: " + str)
  return ipData
}
