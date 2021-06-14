import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: {}
  },
  mutations: {
    UPDATE_CART(state, product) {
        state.cart = Object.assign({}, {
            ...state.cart,
            ...product
        });
    },
  },
  actions: {},
  modules: {}
});
