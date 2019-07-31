import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'lodash'
import { store } from './store/index.js'

Vue.config.productionTip = false

import request from '../src/helper/request';
Vue.prototype.$request = request;
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
