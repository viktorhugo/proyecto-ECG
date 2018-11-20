<template>
  <div id="hello" class="" >
       <div class=" pb-5">

      <b-navbar toggleable="" class="fixed-top pb-0 anime" type="info"  variant="dark" >

      <b-navbar-brand class="">
      <img src="https://image.flaticon.com/icons/svg/119/119067.svg"  height="50" width="50" class="text-info">
         <strong class="text-light"> Visualización Señales ECG</strong>
       </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse" class="text-center">

          <b-navbar-nav class="ml-auto" >
            <b-nav-item  active-class="activo" >
              <i class="fa fa-bar-chart text-warning" aria-hidden="true"></i>
              <router-link to="/hello/D_señal" class="h5 text-light">
              Datos
              </router-link>

            </b-nav-item>

            <b-nav-item active-class="activo" >
              <i class="fa fa-map text-warning " aria-hidden="true"></i>
              <router-link to="/hello/P_Señal" class="h5 text-light">Analisar Señal</router-link>
            </b-nav-item>

            <b-nav-item active-class="activo">
              <i class="fa fa-line-chart text-warning " aria-hidden="true"></i>
              <router-link to="/hello/S_Realtime" exact class="h5 text-light">Tiempo Real</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template slot="button-content">
                {{nombre }}
                <i class="fas fa-user-circle fa-3x text-warning"></i>
              </template>

              <b-dropdown-item class="bg-success text-white" @click="cerrarsesion()">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
                Cerrar Sesion
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

  </div>

      <router-view ></router-view>


</div>

</template>
//----------------------------------------------------------------------------------------------------------------------
<script>
import firebase from 'firebase'
import swal from 'sweetalert'

export default {
  data(){
    return{
      estado:true,
      nombre: '',
      email:'',
      photo: '',
      userId:'',
       //image: require('@/assets/__Heartrate.png')
    }
  },
//-------------------------------------------------------------------------
  created() {
  var user = firebase.auth().currentUser;
  var emailVerified = user.emailVerified;

  if (emailVerified){
    swal("Bienvenido "+ this.$store.state.nombre, "Visualizacion de señales", "success");
    this.$router.push('/hello/D_señal')
  }else{
    swal("Valide su cuenta por favor para poder ingresar", "", "info");
    firebase.auth().signOut()
  }
  this.$router.push('/hello/D_señal')
  },
//-------------------------------------------------------------------------
  methods: {

   ChangeState() {
      this.$store.state.estado = !this.$store.state.estado
    },
    //-------------------------------------------------------------
    cerrarsesion() {
        swal({
            title: "Realmente deseas salir?",
            text: "Visualizacion de Señales ECG",
            icon: this.photo,
            imageHeight: 200,
            buttons: true,
            dangerMode: true,

          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Sesion finalizada", {
                icon: "success",
              }).then((value) => {
                firebase.auth().signOut()
                this.$router.push('/login')
              });
            } else {
              swal("Su sesion se encuetra todavia activa");
            }
          });
      },
      //-------------------------------------------------------------
    }
}
</script>
//----------------------------------------------------------------------------------------------------------------------
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chelsea+Market|Finger+Paint|Happy+Monkey|Londrina+Sketch|Love+Ya+Like+A+Sister|The+Girl+Next+Door');

#hello {
  font-family: 'Chelsea Market', cursive;
  background-color: rgb(138, 82, 104);
  background-image: url("https://images.pexels.com/photos/415779/pexels-photo-415779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: auto;
  justify-content: center;
  align-items: center;
  height:300vh;
}
.router-link-active{
  color: tomato;
}
.activo{
  color: tomato;
}
.anime {
	
	color: #fff;
	background: linear-gradient(-45deg, rgb(233, 44, 208), rgb(61, 184, 57), #23A6D5, #23D5AB, rgb(127, 35, 213));
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

</style>
