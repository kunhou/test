// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// Load ElementUI 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// Load axios config
import * as CONFIG from './config'

// Load application
import './assets/fblogin.js'

// 註冊為全域組件
Vue.use(ElementUI)

// 串接API
Vue.prototype.$http = axios;
axios.defaults.baseURL = CONFIG.API_HOST;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h => h(App)
})
