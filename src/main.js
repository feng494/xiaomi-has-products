// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 设置是否显示提示信息
Vue.config.productionTip = false
// 实例化对象
new Vue ({
  el: "#app",
  components: { App },
  template: '<App/>'
})
