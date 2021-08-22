
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
import  VueResource  from 'vue-resource'
Vue.use(VueResource)
import ElementUI from 'element-ui' //新添加
Vue.use(ElementUI)   //新添加

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
