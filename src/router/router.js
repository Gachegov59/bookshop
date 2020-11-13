import Vue from 'vue'
import VueRouter from 'vue-router'
import catalog from '../pages/catalog.vue'
import order from '../pages/order.vue'
import seller from '../pages/seller.vue'
import not404 from '../pages/not404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: not404 },
        {path: '/vue/dist/', name: 'catalog', component: catalog},
        {path: '/vue/dist/order', name: 'order', component: order, props: true},
        {path: '/vue/dist/seller', name: 'seller', component: seller}
    ]
})

export default router