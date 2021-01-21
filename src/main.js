import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { Row, Column } from 'vue-grid-responsive';
import VuePhoneNumberInput from 'vue-phone-number-input';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-phone-number-input/dist/vue-phone-number-input.css';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('row', Row);
Vue.component('column', Column);
Vue.component('vue-phone-number-input', VuePhoneNumberInput);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
