import Router from 'vue-router'
import home from './../components/home/home.vue'

const routes = [
    { path: '/', component: home }
];

export default new Router({
    mode: 'history',
    routes: routes
});