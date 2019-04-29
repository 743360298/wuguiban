// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'

// axios
import axios from 'axios'

import qs from 'qs'

// vant
// import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'

// 全局css js
import './assets/index.css'
import './assets/animate.css'
import './assets/public.js'

import VueCookies from 'vue-cookies'

// mint
// import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import App from './App.vue'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import App from './App.vue';

// 自适应
import 'lib-flexible'

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Vant)
// Vue.use($)
Vue.use(axios)
Vue.use(qs)
Vue.use(VueCookies)

Vue.prototype.$qs = qs

Vue.config.productionTip = false

Vue.prototype.api = process.env.NODE_ENV === 'production' ? '' : '/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
