import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faWindowMinimize, faWindowMaximize, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VTooltip from 'v-tooltip'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

// import css
import './static/stylus/main.styl'

// fontawesome settings
library.add(faTimes, faWindowMaximize, faWindowMinimize, faMapPin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VTooltip)
Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
