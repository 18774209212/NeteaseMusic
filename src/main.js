// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import 'lib-flexible'
import './icon/iconfont.css'
import '@/assets/css/base.css'
Vue.config.productionTip = false
Vue.use(mintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
