/*
数字格式化
超过1千显示1k
超过1万显示1w
*/
export function formateNumber(num) {
  num = (typeof num === 'string') ? +num : num;
  let init = num / 1000;
  if (init < 1) return num;
  if (init >= 1 && init < 10) {
    // 1000 -9999
    num -= num % 10;
    return (num / 1000).toFixed(2) + 'k';
  } else {
    // >= 10000
    num -= num % 100;
    return (num / 10000).toFixed(2) + 'w';
  }

  return num;
}