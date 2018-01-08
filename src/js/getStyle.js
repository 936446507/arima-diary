export function getStyle(dom, attr) {
  if (dom.style[attr]) {
    return dom.style[attr]
  } else if (dom.currentStyle) {
    return dom.currentStyle[attr]
  } else {
    return window.getComputedStyle(dom, false)[attr]
  }
}
