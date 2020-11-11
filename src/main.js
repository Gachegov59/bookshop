import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
import './icons.js'
import { BootstrapVue} from 'bootstrap-vue' //:todo оставить нужное
import VueAxios from 'vue-axios'
import Notifications from 'vue-notification'
Vue.prototype.$notify = Notification;
// import velocity      from 'velocity-animate'
Vue.use(BootstrapVue, VueAxios, Notifications)


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false

