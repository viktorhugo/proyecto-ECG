import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import {store} from './store'
import {routes} from './routes'
import {config} from './firebase'
import Simplert from 'vue2-simplert'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter)


const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some( record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
});

new Vue({
    el: '#app',
    router,
    Simplert,
    created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        swal("Oopss", "Hay Un usuario Activo", "info");
        this.$router.push('/hello')
      } else {
        this.$router.push('/login')
      }
     });
    },
    store,
    render: h => h(App)
})
