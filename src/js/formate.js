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

/*
格式化时间
date: date对象
fmt: yyyy-MM-dd hh:mm:ss
*/
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}
