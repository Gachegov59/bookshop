// import "../src/styles/constans.scss";
// import "../src/styles/mixin.scss";
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './icons.js'
import { BootstrapVue} from 'bootstrap-vue'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue, VueAxios)


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
