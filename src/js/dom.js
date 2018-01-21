/*
功能：获取指定dom指定样式
dom: dom
attr: 样式属性
isReturnNumber: 是否只返回数字，默认返回字符串加px
*/

export function getStyle({dom, attr, isReturnNumber}) {
  let result = ''

  if (dom.style[attr]) {
    result = dom.style[attr]
  } else if (dom.currentStyle) {
    result = dom.currentStyle[attr]
  } else {
    result = window.getComputedStyle(dom, false)[attr]
  }

  if (isReturnNumber) {
    return Number(result.split('px')[0])
  } else {
    return result
  }
}

/*
功能：设置指定dom的指定行内样式
dom: dom
attr: 样式属性
value: 样式属性值
*/
export function setStyle({dom, attr, value}) {
  dom.attr = value
}

/*
功能：查询是否含有某类名
*/
export function hasClass(dom, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(dom.className)
}

/*
功能：添加类名
*/
export function addClass(dom, className) {
  if (hasClass(dom, className)) {
    return
  }

  let newClass = dom.className.split(' ')
  newClass.push(className)
  dom.className = newClass.join(' ')
}
