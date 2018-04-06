import Vue from 'vue'

const _trim = function(trimString) {
  return trimString.replace(/(^\s*)|(\s*$)/g, '');
}

const _getElement = function(element) {
  if (typeof element === 'object') {
    return element;
  }
  if (typeof element === 'string') {
    return _parseElementString(element);
  }
}

const _parseElementString = function(elementString) {
  let firstLetter;

  elementString = _trim(elementString);
  firstLetter = elementString.substr(0, 1);

  if (firstLetter === '#') {
    return document.getElementById(elementString.substr(1));
  } else if (firstLetter === '.') {
    return document.getElementsByClassName(elementString.substr(1));
  }
}

let Dom = function(element = null) {
  this.$element = element;
}
Dom.prototype = {
  hasClass: function(className) {
    let rule = new RegExp('(^|\\s)' + className + '(\\s|$)');

    return rule.test(this.$element.className);
  },
  addClass: function(newClass) {
    let classArray;

    if (this.hasClass(newClass)) {
      return;
    }
    classArray = this.$element.className.split(' ');
    classArray.push(newClass);
    this.$element.className = classArray.join(' ');
  },
  removeClass: function(className) {
    let rule;

    if (this.hasClass(className)) {
      rule = new RegExp('(\\s|^)' + className + '(\\s|$)');
      this.$element.className = this.$element.className.replace(rule, ' ');
    }
  }
}

Vue.prototype.vue = function(element) {
  if (element === '' || element === undefined) {
    return null;
  }
  return new Dom(_getElement(element));
}
