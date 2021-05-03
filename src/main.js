import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/fontawesome'
import '../src/plugins/vue-toastification'
import '../src/plugins/vue-js-modal'
import Fragment from 'vue-fragment'
import VueAxios from 'vue-axios'
import { BootstrapVue} from 'bootstrap-vue' //:todo оставить нужное

Vue.use(BootstrapVue, VueAxios, Fragment)
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

