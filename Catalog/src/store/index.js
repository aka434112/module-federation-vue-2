import Vue from "vue";
import Vuex from "vuex";

import productsService from '../services/products.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: {}
  },
  mutations: {
    ADD_TO_CART(state, product) {
        state.cart.push(product);
        state.cart = [ ...state.cart ];
    },
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    REMOVE_FROM_CART(state, product_to_be_removed) {
        state.cart = state.cart.filter(product => product !== product_to_be_removed);
    }
  },
  actions: {
    fetch_products({ commit }) {
        const service = new productsService();
        const products = service.getProducts();   
        commit('SET_PRODUCTS', products);
    }      
  },
  modules: {}
});
