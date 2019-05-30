import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/home.vue"
import My from "../views/my.vue"
import Find from "../views/find.vue"
import Indent from "../views/indent.vue"
import Seach from "../views/seach.vue"
import Shop from "../views/shop.vue"
import Order from "../views/order.vue"
import Appraise from "../views/appraise.vue"
import Merchant from "../views/merchant.vue"
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/find',
        name: 'find',
        component: Find
    }, {
        path: '/indent',
        name: 'indent',
        component: Indent
    }, {
        path: '/my',
        name: 'my',
        component: My
    }, {
        path: '/seach',
        name: 'seach',
        component: Seach
    }, {
        path: '/shop',
        name: 'shop',
        component: Shop,
        children: [{
            path: "/order",
            name: "order",
            component: Order
        }, {
            path: "/appraise",
            name: "appraise",
            component: Appraise
        }, {
            path: "/merchant",
            name: "merchant",
            component: Merchant
        }]
    }]
})