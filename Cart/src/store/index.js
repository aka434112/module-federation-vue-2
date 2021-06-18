import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: {}
  },
  mutations: {
    REMOVE_FROM_CART(state, product_to_be_removed) {
      state.cart = state.cart.filter(product => product !== product_to_be_removed);
    }
  },
  actions: {},
  getters: {}
});
