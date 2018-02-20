
import login from './components/login.vue'
import info from './components/info.vue'
import crearcuenta from './components/crearcuenta.vue'
import hello from './components/user/hello.vue'
import notFound from './components/notFound.vue' ;
import señal from './components/user/señal.vue';
import proceso from './components/user/proceso.vue';
import proceso2 from "./components/user/proceso2.vue";

export const routes = [

	{
		path:'/login',
		component: login,
		name:'login'
	},
	{
		path:'/info',
		component: info
	},
	{
		path:'/crearcuenta',
		component: crearcuenta
	},
	{
		path:'/hello',
		component: hello,
		children: [
			{path:'señal',  component: señal},
			{path:'proceso', component: proceso},
			{path:'proceso2', component: proceso2}

		],
		meta:{
			requiresAuth: true
		}
	}

]
