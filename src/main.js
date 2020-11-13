import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
import './icons.js'
import { BootstrapVue} from 'bootstrap-vue' //:todo оставить нужное
import Fragment from 'vue-fragment'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
Vue.use(BootstrapVue, VueAxios, Fragment,VModal)


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

