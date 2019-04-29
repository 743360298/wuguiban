/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable indent */
// 这个文件中统一处理请求
import axios from 'axios'

// 基准路径
// const URL = 'http://122.114.170.131:8060'
// 服务器地址
const URL = 'http://www.wgbservice.com/api/'
// 本地地址
// const URL = 'http://192.168.0.104:8060'

// axios.interceptors.request.use(function (config) {
//     // config是一个请求对象，headers属性
//     console.log(config)
//     let mytoken = localStorage.getItem('mytoken') || ''
//     if (mytoken) {
//       // eslint-disable-next-line indent
//       config.headers['Authorization'] = mytoken
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// 设置一个全局的基准路径，这样以后它发的所有请求，都会带上这个基准路径
axios.defaults.baseURL = URL

// 获取验证码
export const submitRegister = obj => axios.get('/sys/sendSms', `{params: ${obj}}`).then(res => {
    return res
})

// 验证验证码
export const verificationCode = obj => axios.get('/sys/inspectSms', `{params: ${obj}}`).then(res => {
    return res
})

// 获取地区 地级市
export const getRegionList = id => axios.get(`/sys/getRegionList?parentId=${id}`).then(res => {
    return res
})

// 获取地区 地级市
// export const rquestGet = (url , params) => axios.get(`url`,`params`).then(res => {
//     if (res.data.code!="01") {
//         //cathe
//     }
//     return res
// })

// 用户类型 注册POST /access/register
export const registerBtn = obj => axios.post('/access/register', obj).then(res => {
    return res
})

// 登录 POST /access/login
export const login = obj => axios.post('/access/login', obj).then(res => {
    return res
})

// 用户信息 POST /user/downloadUserFileTemplate
export const userInfo = obj => axios.post('/user/downloadUserFileTemplate', obj).then(res => {
    return res
})

// 充值中心 微信支付 POST /api/wechat/sendWechatBeforehandPay
export const WeChatPayment = obj => axios.post('/api/wechat/sendWechatBeforehandPay', obj).then(res => {
    return res
})

// 获取微信用户信息 微信微信code  GET /api/wechat/getUserInfo
export const getUserInfo = obj => axios.get('/api/wechat/getUserInfo', obj).then(res => {
    return res
})

// /提交审核证件状态  GET /user/saveLicence
export const saveLicence = obj => axios.get('/user/saveLicence', obj).then(res => {
    return res
})

// 新增or修改维修单 POST /business/saveOrUpdate
export const saveOrUpdate = obj => axios.post('/business/saveOrUpdate', obj).then(res => {
    return res
})

//  获取维修单列表 POST /business/getList
export const getList = obj => axios.post('/business/getList', obj).then(res => {
    return res
})
