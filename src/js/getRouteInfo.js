/*
  返回路由相关信息
*/
export function getRouteInfo(_this) {
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
