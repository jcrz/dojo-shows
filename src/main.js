import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore';       // adding this import

Vue.config.productionTip = false

Vue.use(VueFirestore, {key: 'id'});      // adding this use statement

new Vue({
  render: h => h(App),
}).$mount('#app')
