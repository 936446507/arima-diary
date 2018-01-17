/*
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
dom: dom
attr: 样式属性
value: 样式属性值
*/
export function setStyle({dom, attr, value}) {
  dom.attr = value
}
