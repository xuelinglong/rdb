// 时间格式化类型一
export const FormateDate = (time) => {
  if (!time) return ''
  let createTime = new Date(time).getTime()
  let now = new Date().getTime()
  let $Date = new Date(time)
  let year = $Date.getFullYear()
  let month = $Date.getMonth() + 1
  let date = $Date.getDate()
  let diffTime = now - createTime
  let diffSeconds = Math.floor(diffTime / 1000)
  let diffMinutes = Math.floor(diffSeconds / 60)
  let diffHours = Math.floor(diffMinutes / 60)
  let diffDays = Math.floor(diffHours / 24)

  if (diffMinutes === 0) {
    return diffSeconds + '秒前'
  }
  if (diffHours === 0) {
    return diffMinutes + '分钟前'
  }
  if (diffDays === 0) {
    return diffHours + '小时前'
  }
  if (diffDays > 0 && diffDays <= 20) {
    return diffDays + '天前'
  }
  if (diffDays > 20) {
    return year + '-' + month + '-' + date
  }
}

// 时间格式化类型二：年-月-日 / 年-月-日 时:分:秒
export const FormateIntDate = (time,needHour) => {
  let date = new Date(time);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = date.getDate() + ' ';
  let h = date.getHours() + ':';
  let m = date.getMinutes() + ':';
  let s = date.getSeconds(); 
  if(needHour) {
    return Y+M+D+h+m+s;
  }
  return Y+M+D;
}

// 格式化金额：千位分隔符、两位金额小数(注意：money是分为单位的整数)
export const FormateMoney = (money) => {
  let amount = (money / 100).toString().split(".");
  let num = amount[0];
  let xiaoshu = amount[1] ? amount[1] : '00';
  num = num.replace(/(?=(\B\d{3})+$)/g, ",");
  return num + "." + xiaoshu;
}

// 金额防止精度丢失
export const getMoveDigit = (a, b) => {
  let _a = void 0,
    _b = void 0,
    la = void 0,
    lb = void 0;
  a = a.toString(10);
  b = b.toString(10);
  _a = a.split(".");
  _b = b.split(".");
  la = _a.length === 2 ? _a[1].length : 0;
  lb = _b.length === 2 ? _b[1].length : 0;
  return Math.max(la, lb);
}
export const move2Right = (num, digit) => {
  let str = void 0,
    _num = void 0;
  if (digit === 0) {
    return num;
  }
  num = num.toString(10);
  _num = num.split(".");
  str = _num[1] ? _num[1] : "";
  _num = _num[0];
  for (let i = 0; i < digit; i++) {
    _num += str[i] ? str[i] : "0";
  }
  return _num * 1;
}
export const move2Left = (num, digit) => {
  if (digit === 0) {
    return num;
  }
  let arr = void 0,
    len = void 0;
  num = num.toString();
  arr = num.split(".");
  if (arr.length === 2) {
    digit += arr[1].length;
    num = num.replace(".", "");
  }
  arr = num.split("");
  len = num.length;
  for (let i = 0; i < digit - len; i++) {
    arr.unshift("0");
  }
  arr.splice(arr.length - digit, 0, ".");
  return arr.join("") * 1;
}
// Multiply使用方法：a参数为原金额，以分为单位的话b参数是100
export const Multiply = (a, b) => {
  var d = getMoveDigit(a, b);
  return move2Left(move2Right(a, d) * move2Right(b, d), d * 2);
}
