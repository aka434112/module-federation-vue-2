import './set-public-path'
import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import singleSpaVue from 'single-spa-vue'
 
Vue.use(Vue2Filters)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    store
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
