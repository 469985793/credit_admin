import Vue from 'vue'
import axios from 'axios'
import {storage} from './storage'

axios.interceptors.request.use((config) => {
  let token = storage.cookie.get('token');
  if (token !== null) {
    config.headers.Authorization = token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
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
      promise = axios[type](params[0] + options[0]);
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
  fetch: (obj, cb) => {
    axios(obj)
    .then(res => _handComplete(res, cb))
    .catch(error => _handleError(error, cb));
  },
  all: (httpArray, cb) => {
    let promiseArray = httpArray.map((obj) => {
      return axios(obj);
    });

    axios.all(promiseArray)
    .then(res => _handComplete(res, cb))
    .catch(error => _handleError(error, cb));
  },
  post: (url, obj, ...options) => {
    _doRequest('post', options, url, obj);
  },
  get: (url, ...options) => {
    _doRequest('get', options, url);
  },
  delete: (url, ...options) => {
    _doRequest('delete', options, url);
  },
  put: (url, obj, ...options) => {
    _doRequest('put', options, url, obj);
  }
}

Vue.prototype.httpService = new HttpService();
