//ARCHIVO RENDERIZADO DE LA APLICACION

// IMPORTACION DE COMPLEMTOS Y HERRAMIENTAS
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


const router = new VueRouter({ // OBJETO MANEJADOR DE RUTAS
  mode:'history',
  routes
})

//GUARDS DE VUE-ROUTER

router.beforeEach((to, from, next) => {

  let user = firebase.auth().currentUser;
  var emailVerified = user.emailVerified;
  let requiresAuth = to.matched.some( ruta => ruta.meta.requiresAuth);

  if(requiresAuth && !user ) next('login')
  else if (!requiresAuth && user ) next('hello')
  else next()
});

//RENDERIZADO DE LA APLICACION
new Vue({
    el: '#app',
    router,
    Simplert,
    created() {

      firebase.initializeApp(config); // iniciacion firebase

      firebase.auth().onAuthStateChanged((user) => { // Gestion de Estado Auth
        if(user) {
          swal("Oopss", "Hay Un usuario Activo", "info");
          this.$router.push('/hello/D_señal')
        } else {
          this.$router.push('/login')
        }
      });
    },

    store,
    render: h => h(App)
})
