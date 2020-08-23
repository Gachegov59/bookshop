import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'
import {faUserSecret, faSpinner, faRubleSign, faCircle, faTimes, faTag, faCoffee, faGrinHearts, faSearch,  faLongArrowAltDown, faLongArrowAltUp} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faSpinner, faRubleSign, faCircle, faTimes, faTag, faCoffee, faGrinHearts, faSearch, faLongArrowAltDown, faLongArrowAltUp)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fa-layer', FontAwesomeLayers)
Vue.component('fa-layer-text', FontAwesomeLayersText)

