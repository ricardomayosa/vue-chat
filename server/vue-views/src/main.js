import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(BootstrapVue)
Vue.use(Element, {
  size: 'medium'
})

import VueSocketio from 'vue-socket.io'
Vue.use(VueSocketio, 'http://localhost:3000')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  beforeCreate() {
    // set token
  },
  components: { App },
  template: '<App />'
})
