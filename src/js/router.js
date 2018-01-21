/*
功能：路由跳转
params: 参数 例如： '/url', {name: '', params: {}}
_this: vue实例对象
*/
export function goRouterLink(params, _this) {
  _this.$router.push(params)
}

/*
功能：返回路由相关信息
_this: vue实例对象
*/
export function getRouterInfo(_this) {
  let routeInfo = {
    name: '',
    path: '',
    params: {},
    query: {},
    meta: {}
  }
  Object.keys(routeInfo).forEach((value) => {
    if (_this) {
      routeInfo[value] = _this.$route[value]
    }
  })

  return routeInfo
}
