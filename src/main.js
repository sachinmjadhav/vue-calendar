import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextAreaAutosize from "vue-textarea-autosize";
import firebase from 'firebase/app'
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyBHV7lYbMb45kY8n3SdfjenJquNsJyEHqg",
  authDomain: "vue-calendar-94600.firebaseapp.com",
  databaseURL: "https://vue-calendar-94600.firebaseio.com",
  projectId: "vue-calendar-94600",
  storageBucket: "vue-calendar-94600.appspot.com",
  messagingSenderId: "190005498745",
  appId: "1:190005498745:web:13295293a0bddbd6c095a8"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
