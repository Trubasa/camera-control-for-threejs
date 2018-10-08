import Vue from 'vue'
import App from './App.vue'

import cameraControl from './cameraControl/index'
Vue.use(cameraControl);

new Vue({
  el: '#app',
  render: h => h(App)
})
