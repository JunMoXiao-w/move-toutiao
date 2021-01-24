
/*
用户相关的请求模块
*/
import request from '@/utils/request'

/* 登录注册 */
export const login = data => {
  return request({
    method: 'POST',
    url: 'v1_0/authorizations',
    data
  })
}
/* 发送短信验证码 */
export const sendcaptcha = mobile => {
  return request({
    mothod: 'GET',
    url: `v1_0/sms/codes/${mobile}`
  })
}
