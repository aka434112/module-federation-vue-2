import Router from 'vue-router'
import products from './../components/products/products.vue'

const routes = [
    { path: '/', component: products }
];

export default new Router({
    mode: 'history',
    routes: routes
});