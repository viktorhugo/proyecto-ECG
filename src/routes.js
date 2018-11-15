
// ARCHIVO MANEJADOR DE RUTAS ENTRE LAS VISTAS
import login from './components/login.vue'
import info from './components/info.vue'
import firebase from 'firebase'
import crearcuenta from './components/crearcuenta.vue'
import hello from './components/user/hello.vue'
import D_señal from './components/user/D_señal.vue';
import P_señal from './components/user/P_señal.vue';
import S_Realtime from "./components/user/S_Realtime.vue";

//let user = firebase.auth().currentUser;
//var emailVerified = user.emailVerified;

export const routes = [
	// OBJETO MANEJADOR DE RUTAS
	{
		path: '*',
		redirect: '/login'
	},
	{
		path: '/login',
		component: login,
		name: 'login'
	},
	{
		path: '/info',
		component: info
	},
	{
		path: '/crearcuenta',
		component: crearcuenta
	},
	{
		path: '/hello',
		component: hello,
		children: [
			{ path: 'D_señal', component: D_señal },
			{ path: 'P_señal', component: P_señal },
			{ path: 'S_Realtime', component: S_Realtime }

		],
		meta: {requiresAuth: true}
	}

]
