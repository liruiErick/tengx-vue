import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  el: '#tengx',
  router,
  store,
  template: '<App/>',
  components: { App }
})
