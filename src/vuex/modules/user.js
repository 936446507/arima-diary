import * as store from '@/js/store'

const storeId = 1
// 获取登录状态
function getLoginStatus() {
  let userInfo = store.loadFromLocal(storeId, 'userInfo')
  let isLogin = userInfo ? userInfo.loginStatus : false
  return isLogin
}

const state = {
  isLogin: getLoginStatus()
}

const getters = {
  getLoginStatus: state => state.isLogin
}

export default {
  state,
  getters
}
