import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store/old'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCi-VkUqAD9N7aQd-ufPPErYBFVQT0Qmx4",
  authDomain: "phbt-crm.firebaseapp.com",
  projectId: "phbt-crm",
  storageBucket: "phbt-crm.appspot.com",
  messagingSenderId: "47157609715",
  appId: "1:47157609715:web:ad93848941a64e8da26386",
  measurementId: "G-JTH2014SML"
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


