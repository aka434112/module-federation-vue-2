export default {
    ADD_TO_CART(state, product) {
        state.cart.push(product);
    },
    SET_PRODUCTS(state, products) {
        state.products = products;
    },
    REMOVE_FROM_CART(state, product_to_be_removed) {
        state.cart = state.cart.filter(product => product !== product_to_be_removed);
    }
}