import Vue from 'vue'
let _getAll = (store, cb) => {
  let request = store.getAll();
  request.onerror = (ev) => {
    let obj = {
      code: 40000,
      data: '',
      message: '查询失败!'
    }
    cb && typeof cb === 'function' ? cb(obj) : null;
  };
  request.onsuccess = (ev) => {
    let obj = {
      code: 20000,
      data: ev.target.result,
      message: '查询成功!'
    }
    cb && typeof cb === 'function' ? cb(obj) : null;
  };
}
let _getByKey = (store, key, cb) => {
  let _isArray = Object.prototype.toString.call(key) === '[object Array]';
  if (_isArray) {
    _getMultipleData(store, key, cb);
  } else {
    let request = store.openCursor();
    request.onerror = (ev) => {
      let obj = {
        code: 40000,
        data: '',
        message: '查询失败!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
    };
    request.onsuccess = (ev) => {
      let cursor = ev.target.result;
      if (cursor) {
        if (cursor.key === parseInt(key)) {
          let obj = {
            code: 20000,
            data: cursor.value,
            message: '查询成功!'
          }
          cb && typeof cb === 'function' ? cb(obj) : null;
        } else {
          cursor.continue();
        }
      }
    };
  }
}
let _getMultipleData = (store, keyList, cb) => {
  let request = store.openCursor();
  let resList = [];
  request.onerror = (ev) => {
    let obj = {
      code: 40000,
      data: '',
      message: '查询失败!'
    }
    cb && typeof cb === 'function' ? cb(obj) : null;
  };
  request.onsuccess = (ev) => {
    let cursor = ev.target.result;
    if (cursor) {
      for (let i = 0; i < keyList.length; i++) {
        if (cursor.key === parseInt(keyList[i])) {
          resList.push(cursor.value);
        }
      }
      cursor.continue();
    } else {
      let obj = {
        code: 20000,
        data: resList,
        message: '查询成功!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
    }
  };
}
let database;
let IndexDB = function() {}
IndexDB.prototype = {
  open: (dbName, cb) => {
    let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if (!indexedDB) {
      let obj = {
        code: 40000,
        data: '',
        message: '您的浏览器不支持indexDB!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
      return;
    }
    let request = indexedDB.open(dbName, 4);
    request.onsuccess = (ev) => {
      database = ev.target.result;
      let obj = {
        code: 20000,
        data: '',
        message: '打开数据库成功!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
    }
    request.onerror = (ev) => {
      database = ev.target.result;
      let obj = {
        code: 40000,
        data: '',
        message: '打开数据库失败!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
    }
    request.onupgradeneeded = (ev) => {
      // 数据库首次创建或者open中传递了新版本,在这里可以对主键字段进行重新定义
      let db = ev.target.result;
      db.createObjectStore('user', {
        keyPath: 'id',
        autoIncrement: true
      });
      db.createObjectStore('group', {
        keyPath: 'groupId',
        autoIncrement: true
      });
      db.createObjectStore('desk', {
        keyPath: 'id',
        autoIncrement: true
      });
      db.createObjectStore('deskGroup', {
        keyPath: 'deskGroupId',
        autoIncrement: true
      });
    }
  },
  close: () => {
    database.close();
  },
  add: (tbName, dataList, cb) => {
    // 新建事务
    let transaction = database.transaction(tbName, 'readwrite');
    let store = transaction.objectStore(tbName);
    for (let i = 0; i < dataList.length; i++) {
      let request = store.add(dataList[i]);
      request.onerror = (ev) => {
        let obj = {
          code: 40000,
          data: '',
          message: '添加失败!'
        }
        cb && typeof cb === 'function' ? cb(obj) : null;
      }
      request.onsuccess = (ev) => {
        let obj = {
          code: 20000,
          data: ev.target.result,
          message: '添加成功!'
        }
        cb && typeof cb === 'function' ? cb(obj) : null;
      }
    }
  },
  put: (tbName, dataList, cb) => {
    // 新建事务
    let transaction = database.transaction(tbName, 'readwrite');
    let store = transaction.objectStore(tbName);
    let request;
    let _isArray = Object.prototype.toString.call(dataList) === '[object Array]';
    if (_isArray) {
      for (let i = 0; i < dataList.length; i++) {
        request = store.put(dataList[i]);
        request.onerror = (ev) => {
          let obj = {
            code: 40000,
            data: '',
            message: '更新失败!'
          }
          cb && typeof cb === 'function' ? cb(obj) : null;
        }
        request.onsuccess = (ev) => {
          let obj = {
            code: 20000,
            data: ev.target.result,
            message: '更新成功!'
          }
          cb && typeof cb === 'function' ? cb(obj) : null;
        }
      }
    } else {
      request = store.put(dataList);
      request.onerror = (ev) => {
        let obj = {
          code: 40000,
          data: '',
          message: '更新失败!'
        }
        cb && typeof cb === 'function' ? cb(obj) : null;
      }
      request.onsuccess = (ev) => {
        let obj = {
          code: 20000,
          data: ev.target.result,
          message: '更新成功!'
        }
        cb && typeof cb === 'function' ? cb(obj) : null;
      }
    }
  },
  edit: (key, tbName, data) => {
    let transaction = database.transaction(tbName, 'readwrite');
    let store = transaction.objectStore(tbName);
    let request = store.openCursor();
    request.onsuccess = (ev) => {
      let cursor = ev.target.result;
      if (cursor) {
        if (cursor.key === parseInt(key)) {
          for (let prop in data) {
            cursor.value[prop] = data[prop];
          }
          store.put(cursor.value);
        } else {
          cursor.continue();
        }
      }
    };
  },
  select: (tbName, key, cb) => {
    // 根据主键查询数据
    let transaction = database.transaction(tbName, 'readwrite');
    let store = transaction.objectStore(tbName);
    if (key === '') {
      _getAll(store, cb);
    } else {
      _getByKey(store, key, cb);
    }
  },
  delete: (tbName, key, cb) => {
    // 根据主键删除一条数据
    let transaction = database.transaction(tbName, 'readwrite');
    let store = transaction.objectStore(tbName);
    let request = store.delete(key);
    request.onerror = () => {
      let obj = {
        code: 20000,
        data: '',
        message: '删除失败!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
    };
    request.onsuccess = (ev) => {
      let obj = {
        code: 20000,
        data: ev.target.result,
        message: '删除成功!'
      }
      cb && typeof cb === 'function' ? cb(obj) : null;
    };
  }
}
Vue.prototype.indexDB = new IndexDB();
