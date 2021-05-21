// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import store from './store'
import ES6Promise from 'es6-promise'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
ES6Promise.polyfill()
/* eslint-disable no-new */
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD3z4Wu0LL1khmGJjCkVV7BSsR4ntHwvhA',
    libraries: 'places',
  }
});
new Vue({
  store,
  axios,
  vuetify,
  el: '#app',
  router,
  components: { App },
  icons: {
    iconfont: 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  template: '<App/>'
});
