import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Vuex from 'vuex'
import catalogStore from 'catalog/store'

Vue.use(Vuex)
Vue.config.productionTip = false;

new Vue({
  router,
  store: catalogStore,
  render: (h) => h(App),
}).$mount("#app");
