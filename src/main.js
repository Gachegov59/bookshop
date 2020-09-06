import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './icons.js'
import { BootstrapVue} from 'bootstrap-vue'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue, VueAxios)


new Vue({
    store,
    render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

