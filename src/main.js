// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { useAxios } from './services/http.js'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome-4.7.0/css/font-awesome.min.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.use(useAxios)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
