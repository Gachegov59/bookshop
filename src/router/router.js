import Vue from 'vue'
import Router from 'vue-router'
import catalog from '../pages/catalog.vue'
import order from '../pages/order.vue'
import seller from '../pages/seller.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {path: '/', name: 'catalog', component: catalog},
        {path: '/order', name: 'order', component: order, props: true},
        {path: '/seller', name: 'seller', component: seller}
    ]
})

export default router