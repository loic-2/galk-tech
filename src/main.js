import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser,faChevronDown,faChevronUp,faWarning,faInfoCircle,faCircleExclamation,faCircleCheck,faSearch,faEye,faPen,faTrash,faAdd,faLock,faBarcode,faBuilding,faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUser,faChevronDown,faChevronUp,faSearch,faTrash,faEye,faPen,faBarcode,faLock,
  faWarning,faInfoCircle,faCircleExclamation,faCircleCheck,faBuilding,faBriefcase,faAdd)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
