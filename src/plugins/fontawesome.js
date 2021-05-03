import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText} from '@fortawesome/vue-fontawesome'

import {
    faUserSecret,
    faSpinner,
    faRubleSign,
    faCircle,
    faTimes,
    faTag,
    faCoffee,
    faGrinHearts,
    faSearch,
    faLongArrowAltDown,
    faLongArrowAltUp,
    faMinus,
    faPlus,
    faShoppingCart,
    faCartArrowDown,
    faCartPlus,
    faUserAlt,
    faFilter,
    faSortAmountDown,
    faSortAmountDownAlt
} from '@fortawesome/free-solid-svg-icons'

import {faNode, faTwitter, faVuejs} from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret,
    faSpinner,
    faRubleSign,
    faCircle,
    faTimes,
    faTag,
    faCoffee,
    faGrinHearts,
    faSearch,
    faLongArrowAltDown,
    faLongArrowAltUp,
    faShoppingCart,
    faMinus,
    faCartArrowDown,
    faCartPlus,
    faUserAlt,
    faPlus,
    faNode,
    faTwitter,
    faVuejs,
    faFilter,
    faSortAmountDown,
    faSortAmountDownAlt
)

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('fab-icon', FontAwesomeIcon)
Vue.component('fa-layer', FontAwesomeLayers)
Vue.component('fa-layer-text', FontAwesomeLayersText)

