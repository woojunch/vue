import Vue from 'vue'
import axios from '@/plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
