import copy from './a'
import Vue from 'vue'
const install = function(Vue) {
  Vue.directive('clipboard', copy)
}

if (window.Vue) {
  window.copy = copy
  Vue.use(install) // eslint-disable-line
}

copy.install = install
export default copy
