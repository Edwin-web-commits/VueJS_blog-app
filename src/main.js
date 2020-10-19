import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import {store} from './store/store' //import store
import firebase from 'firebase'
import {initializeApp,database } from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


Vue.use(VueResource);
Vue.use(VueRouter);


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0mNcn9ZjnJbFBegWgb-G-mnEp5t4XVYk",
  authDomain: "vue-my-blog-d0ede.firebaseapp.com",
  databaseURL: "https://vue-my-blog-d0ede.firebaseio.com",
  projectId: "vue-my-blog-d0ede",
  storageBucket: "vue-my-blog-d0ede.appspot.com",
  messagingSenderId: "317659455059",
  appId: "1:317659455059:web:7eed451e73f38a30ae30a6",
  measurementId: "G-W51V8CE9BK"
};
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase=firebase;


const router = new VueRouter({
  routes:Routes,
  mode:'history'
});


//adding custom directive globally
// Vue.directive('customcolor',{
//   bind(el,binding,vnode){
//     el.style.color="#" + Math.random().toString().slice(2,8);
//   }
// });

//adding Filters globally
// Vue.filter('to-uppercase',(value)=>{
//   return value.toUpperCase();
// });

new Vue({
  store:store,
  el: '#app',
  render: h => h(App),
  router:router
})
