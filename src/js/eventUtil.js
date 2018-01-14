/*
element: dom,
type: eventType
handler: function
*/

export function addHandler(element, type, handler) {
  if (element.addEventListener) {
    // DOM2级事件处理程序
    element.addEventListener(type, handler, false)
  } else if (element.attachEvent) {
    // IE事件处理程序
    element.attachEvent('on' + type, handler)
  } else {
    // DOM0级事件处理程序
    element['on' + type] = handler
  }
}

export function removeHandler(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false)
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, handler)
  } else {
    element['on' + type] = null
  }
}
