// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/style/reset.css'
import '@/style/icon.css'
import 'vue2-animate/dist/vue2-animate.min.css'

import Vuex from 'vuex'
import store from './vuex/store'

import * as localStore from '@/js/store'

Vue.config.productionTip = false

Vue.use(Vuex)

const storeId = 1
// 获取登录状态
function getLoginStatus() {
  let userInfo = localStore.loadFromLocal(storeId, 'userInfo')
  return userInfo ? userInfo.loginStatus : false
}
// 登录状态判断
router.beforeEach((to, from, next) => {
  let requireLogin = to.matched.some(record => record.meta.requireLogin)
  requireLogin ? (!getLoginStatus() ? next({name: 'login'}) : next()) : next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Vuex,
  store,
  template: '<App/>',
  components: { App }
})
