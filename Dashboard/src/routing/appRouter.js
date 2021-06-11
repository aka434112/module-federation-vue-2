import Router from 'vue-router'
import home from './../components/home/home.vue'

const routes = [
    { path: '/', component: home },
    { path: '/products', component: () => import('catalog/products') }
];

export default new Router({
    mode: 'history',
    routes: routes
});