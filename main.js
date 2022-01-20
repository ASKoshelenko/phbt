import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyCH3QkCas37KNaI8merBalidhw1U5j5o5c",
  authDomain: "crm-phbt.firebaseapp.com",
  databaseURL: "https://crm-phbt-default-rtdb.firebaseio.com",
  projectId: "crm-phbt",
  storageBucket: "crm-phbt.appspot.com",
  messagingSenderId: "75996065780",
  appId: "1:75996065780:web:40ef9195e2efac02c1d3a1"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


