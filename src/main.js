import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './plugins/element.js'
import "./assets/css/base.css"
import vueAplayer from 'vue-aplayer'

Vue.use(vueAplayer)

axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config=>{
	config.headers.Authorization = window.sessionStorage.getItem('token')
	if (config.method == 'post') {
	      config.data = {
	        ...config.data,
	        _t: Date.parse(new Date()) / 1000
	      }
	    } else if (config.method == 'get') {
	      config.params = {
	        _t: Date.parse(new Date()) / 1000,
	        ...config.params
	      }
	    }
	return config
},err=>{})
axios.interceptors.response.use(res=>{
	return res.data
},err=>{})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
