import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		cont:0,
		estado:true,
		tipo: true,
		nombre:'',
		email:'',
		password:''
	}
})
