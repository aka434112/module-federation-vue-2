import Vue from 'vue'
import Router from 'vue-router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vue2Filters from 'vue2-filters'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import app from './App.vue'
import appRouter from './routing/appRouter.js'
import Vuex from 'vuex'
import catalogState from 'catalog/state'
import catalogActions from 'catalog/actions'
import catalogMutations from 'catalog/mutations'
import catalogGetters from 'catalog/getters'

Vue.use(Vuex)
Vue.use(Vue2Filters)
Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  router: appRouter,
  store: new Vuex.Store({
    state: {
      ...catalogState
    },
    actions: {
      ...catalogActions
    },
    mutations: {
      ...catalogMutations
    },
    getters: {
      ...catalogGetters
    }
  }),
  components: { app },
  template: '<app/>'
})
