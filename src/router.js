import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from './pages/PageHome.vue'
import PageOrder from './pages/PageOrder.vue'
import PageSeller from './pages/PageSeller.vue'
import notPages from './pages/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: notPages },
        {path: '/vue/', name: 'PageHome', component: PageHome},
        {path: '/vue/order', name: 'PageOrder', component: PageOrder, props: true},
        {path: '/vue/seller', name: 'PageSeller', component: PageSeller}
    ]
})

export default router