import request from '@/plugins/request'

// 识别ip
export function chkIp() {
  console.log('think 2')
  const ipData = request(`https://www.elibot.cn/elibot/user/getAddress`, {
    // credentials: 'include'
  })
  console.log('think 3: ' + ipData)

  const str = JSON.stringify(ipData, null, ' ')
  console.log('think 3.1: ' + str)
  return ipData
}
