import Vue from 'vue'

let Format = function() {}
Format.prototype = {
  telPhone: function(str) {
    /* 11位数字,以1开头 */
    let reg = /^1\d{10}$/;
    if (reg.test(str)) {
      return '';
    } else if (str === '') {
      return '请输入手机号'
    } else {
      return '您输入的手机号有误'
    }
  },
  password: function(str) {
    /* 6位数字 */
    // let reg = /^\d{6}$/;
    if (str !== '') {
      return '';
    } else if (str === '') {
      return '请输入密码'
    } else {
      return '您输入的密码有误'
    }
  },
  checkRequired: function(str, msg) {
    if (str !== '') {
      return '';
    } else {
      return '请输入' + msg;
    }
  },
  getCurrentDate() {
    let date, yearStr, monthStr, dateStr;

    date = new Date();
    yearStr = date.getFullYear();
    monthStr = date.getMonth() + 1;
    dateStr = date.getDate();

    if (monthStr >= 1 && monthStr <= 9) {
      monthStr = '0' + monthStr;
    }
    if (dateStr >= 0 && dateStr <= 9) {
      dateStr = '0' + dateStr;
    }

    return yearStr + '-' + monthStr + '-' + dateStr;
  },
  toTimeStamp(str) {
    return Date.parse(new Date(str));
  }
}
Vue.prototype.format = new Format();
export let format = new Format();
