import Vue from 'vue'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
Vue.http.interceptors.push((request, next) => {
  // 请求发送前的处理逻辑
  request.headers.set('Authorization', 'Bearer' + VueCookies.get('token'))
  next((response) => {
    // 请求发送后的处理逻辑
    // 根据请求的状态，response参数会返回给successCallback或errorCallback
    return response
  })
})
