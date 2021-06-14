import Router from 'vue-router'
import home from './../components/home/home.vue'

const routes = [
    { path: '/', component: home },
    { path: '/products', component: () => import('catalog/products') },
    { path: '/cart', component: () => import('cart/cart-items') }
];

export default new Router({
    mode: 'history',
    routes: routes
});