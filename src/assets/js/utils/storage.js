import Vue from 'vue'

let Storage = function() {}
Storage.prototype = {
  cookie: {
    set: function(key, value, time = 60 * 60 * 24) {
      let date = new Date();
      let secondTime = time * 1000;

      date.setTime(date.getTime() + secondTime);
      document.cookie = key + '=' + value + ';expires=' + date.toGMTString();
    },
    get: function(key) {
      let rule = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
      let cookieArray = document.cookie.match(rule);

      if (cookieArray) {
        return unescape(cookieArray[2]);
      } else {
        return null;
      }
    },
    delete: function(key) {
      let value = this.get(key);
      let date = new Date();

      date.setTime(date.getTime() - 1);
      if (value !== null) {
        document.cookie = key + '=' + value + ';path=/;expires=' + date.toGMTString();
      }
    }
  },
  localStorage: {
    set: function(key, value) {
      if (typeof value !== 'string') {
        value = JSON.stringify(value);
      }
      return window.localStorage.setItem(key, value);
    },
    get: function(key) {
      let localStorage = window.localStorage;

      if (localStorage.key) {
        return localStorage.getItem(key);
      } else {
        return null
      }
    },
    delete: function(key) {
      window.localStorage.removeItem(key);
    },
    clear: function() {
      return window.localStorage.clear();
    }
  }
}
Vue.prototype.storage = new Storage();
export let storage = new Storage();
