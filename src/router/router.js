import Vue from 'vue'
import Router from 'vue-router'
import catalog from '../pages/catalog.vue'
import order from '../pages/order.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        {path: '/', name: 'catalog', component: catalog},
        {path: '/order', name: 'order', component: order, props: true}
    ]
})

export default router