/*****************************************************************
 ** Copyright (C), 2018-2019, Luoxiaobin
 ** File Name: httpService.js
 ** Description: 用于http请求
 ** Function List: get, post, delete, put
 ** History:
 **   1. Created by Luoxiaobin in 2017-11-2
 *****************************************************************/
import Vue from 'vue'
import axios from 'axios'
import {storage} from './storage'
import { Message } from 'element-ui'

axios.interceptors.request.use((config) => {
  let token = storage.localStorage.get('token');

  if (token !== null) {
    config.headers.token = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  if (response.status !== 200) {
    Message.error({
      message: '获取数据失败'
    });
  }
  return response;
}, (error) => {
  return Promise.reject(error);
});

const _handComplete = (res, cb) => {
  typeof cb === 'function' && cb(res);
}
const _handleError = (res, cb) => {
  typeof cb === 'function' && cb(res);
}

const _parseOptions = (options) => {
  let optionsArray = [{}, {}];

  if (options === undefined) {
    return optionsArray;
  }

  if (options.length === 1) {
    if (typeof options[0] === 'function') {
      optionsArray[1] = options[0];
    } else {
      optionsArray[0] = options[0];
    }
  } else {
    return options;
  }

  return optionsArray;
}

const _doRequest = (type, options, ...params) => {
  options = _parseOptions(options);
  let promise = null;
  switch (type) {
    case 'post':
    case 'put':
      promise = axios[type](params[0], params[1], options[0]);
      break;
    case 'get':
    case 'delete':
      promise = axios[type](params[0], options[0]);
      break;
    default: break;
  }
  _resolvePromise(promise, options);
}

const _resolvePromise = function(promise, options) {
  promise.then(res => _handComplete(res, options[1]))
  .catch(error => _handleError(error, options[1]));
}

let HttpService = function() {}
HttpService.prototype = {
  /*****************************************************************
  ** Function Name: fetch
  ** Description: http请求,完全按照axios文档的axios()方法传参数
  ** Params:
  **   @param obj {object}
  **   @param cb {function}
  ** Return:
  **   @param response {any}
  ** Usage:
  **  let obj = {
  **     url: xxx,
  **     methods: xxx
  **     ...
  **  }
  **  this.httpService.post(obj, (response) => {
  **    // todo
  **  });
  *****************************************************************/
  fetch: (obj, cb) => {
    axios(obj)
    .then(res => _handComplete(res, cb))
    .catch(error => _handleError(error, cb));
  },
  /*****************************************************************
  ** Function Name: all
  ** Description: http请求,完全按照axios文档的axios.all()传参数
  ** Params:
  **   @param httpArray {Array}
  **   @param cb {function}
  ** Return:
  **   @param response {any}
  ** Usage:
  **  let httpArray = [axiosRequest_1, axiosRequest_2, ...]
  **  this.httpService.all(httpArray, (response) => {
  **    // todo
  **  });
  *****************************************************************/
  all: (httpArray, cb) => {
    let promiseArray = httpArray.map((obj) => {
      return axios(obj);
    });

    axios.all(promiseArray)
    .then(res => _handComplete(res, cb))
    .catch(error => _handleError(error, cb));
  },
  /*****************************************************************
  ** Function Name: post
  ** Description: http post请求
  ** Params:
  **   @param url {string}
  **   @param data {object}
  **   @param option {object}
  **   @param cb {function}
  ** Return:
  **   @param response {any}
  ** Usage:
  **  this.httpService.post(url, data[, option], (response) => {
  **    // todo
  **  });
  *****************************************************************/
  post: (url, obj, ...options) => {
    _doRequest('post', options, url, obj);
  },
  /*****************************************************************
  ** Function Name: get
  ** Description: http get请求
  ** Params:
  **   @param url {string}
  **   @param option {object}
  **   @param cb {function}
  ** Return:
  **   @param response {any}
  ** Usage:
  **  this.httpService.get(url[, option], (response) => {
  **    // todo
  **  });
  *****************************************************************/
  get: (url, ...options) => {
    _doRequest('get', options, url);
  },
  /*****************************************************************
  ** Function Name: delete
  ** Description: http delete请求
  ** Params:
  **   @param url {string}
  **   @param option {object}
  **   @param cb {function}
  ** Return:
  **   @param response {any}
  ** Usage:
  **  this.httpService.delete(url[, option], (response) => {
  **    // todo
  **  });
  *****************************************************************/
  delete: (url, ...options) => {
    _doRequest('delete', options, url);
  },
  /*****************************************************************
  ** Function Name: post
  ** Description: http post请求
  ** Params:
  **   @param url {string}
  **   @param option {object}
  **   @param cb {function}
  ** Return:
  **   @param response {any}
  ** Usage:
  **  this.httpService.post(url[, option], (response) => {
  **    // todo
  **  });
  *****************************************************************/
  put: (url, obj, ...options) => {
    _doRequest('put', options, url, obj);
  }
}

Vue.prototype.httpService = new HttpService();
