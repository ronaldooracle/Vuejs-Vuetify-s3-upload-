import Vue from 'vue';
import App from './App';
import router from './router';
import vuetify from './plugins/vuetify';
// eslint-disable-next-line import/first
import Notifications from 'vue-notification';


Vue.config.productionTip = false;
Vue.use(Notifications);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  components: { App },
  template: '<App/>',
});
