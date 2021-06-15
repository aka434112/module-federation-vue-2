import productsService from '../services/products.js';

export default {
    fetch_products({ commit }) {
        const service = new productsService();
        const products = service.getProducts();   
        commit('SET_PRODUCTS', products);
    }      
}