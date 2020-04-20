import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import global_ from '@/util/Global'

import vuetify from './plugins/vuetify'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(ElementUI)

Vue.use(VueMaterial)

Vue.use(MuseUI)

Vue.prototype.GLOBAL = global_

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// 导航钩子，全局钩子
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  let isLogin
  if (!token) {
    isLogin = false
  } else {
    isLogin = true
  }
  if (!isLogin) {
    if (to.path !== '/login') {
      return next({ path: '/login' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      return next({ path: '/' })
    }
    next()
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
