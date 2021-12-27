import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
// export { defineReactive } from 'vue'
import './Icons'
 //引入中国地图数据 （*********重中之重）
Vue.config.productionTip = false
// Vue.use(ElementUI)

var test = {
  testa: {
    a:123
  },
}
//设置定时器
setTimeout(function() {
  test.testa.a = '计时结束'
}, 2000)
function a() {
  console.log(6)
}
a.install = function(vue) {
  //console.log(vue);
  //监听testa
  Vue.util.defineReactive(test, 'testa')
  //全局混入vue实例
  vue.mixin({
    data() {
      return {
        c: '欢迎访问超逸の博客',
      }
    },
    methods: {},
    beforeCreate: function() {
      this.test = test
    },
    //全局生命周期注入
    created: function() {
      //console.log(this)
    },
  })
}
Vue.use(a)
// console.log(Vue.util.defineReactive)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
