import Vue from 'vue'

let Common = function() {}
Common.prototype = {
  isEmptyObject: function(obj) {
    for (var item in obj) {
      return false;// 返回false，不为空对象
    }
    return true;// 返回true，为空对象
  }
}
Vue.prototype.common = new Common();
export let common = new Common();
