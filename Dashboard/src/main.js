import './set-public-path'
import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
import Vuex from 'vuex'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import singleSpaVue from 'single-spa-vue'
import router from './routing/appRouter.js'

Vue.use(Vuex)
Vue.use(Vue2Filters)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.config.devtools = true

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router  
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
