import moment from 'moment';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('formatDate', (value: any) => {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm');
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
