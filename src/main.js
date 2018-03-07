import Vue from 'vue'
import App from './App.vue'
import Transaction from './transaction.js'



Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
