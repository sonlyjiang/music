import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';
import router from './assets/js/router.js';
import '../node_modules/mint-ui/lib/style.css';
import '../node_modules/mint-ui/lib/index.js';
import Mint from 'mint-ui';
import axios from "axios";
Vue.prototype.$http = axios;

Vue.use(vueRouter);
Vue.use(Mint);
import Vuex from "vuex";
Vue.use(Vuex);
import store from "./assets/data/music.js";

// import Mint from 'mint-ui';
// Vue.use(Mint);
// import '../node_modules/mint-ui/lib/style.css'
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})
