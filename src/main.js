// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'

// import vConsole from './lib/vconsole'
import _ from 'lodash'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Object.defineProperty(Vue.prototype, '_', { value: _ });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
