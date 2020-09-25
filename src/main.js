import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faChevronLeft,
  faSearch,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'

library.add(faChevronLeft, faSearch, faCaretDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
