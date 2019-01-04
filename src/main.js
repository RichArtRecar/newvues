import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCoffee, faSpinner, faWrench, faAmbulance, faEdit, faCircle, faCheck, faChessQueen,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faHeadphones, faSquare,
    faCalendar, faCertificate, faEnvelope, faTimes, faBookmark, faHeart, faPlay,
    faSun, faMoon, faStar
} from '@fortawesome/free-solid-svg-icons';
import { faJs, faVuejs, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import './stylus/main.styl';

library.add(
    faCoffee, faSpinner, faWrench, faAmbulance, faSquare,
    faEdit, faCircle, faCheck, faChessQueen, faHeadphones,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment,
    faCalendar, faCertificate, faEnvelope, faTimes, faBookmark,
    faHeart, faPlay, faSun, faMoon, faStar,
    faJs, faVuejs, faFacebookF, faTwitter, faInstagram);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);
Vue.component("MainNav", require('./components/MainNav.vue').default);
Vue.component("footer1", require('./components/footer.vue').default);
Vue.component("parallax", require('./components/parallax.vue').default);




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

