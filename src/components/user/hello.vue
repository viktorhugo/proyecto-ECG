<template>
  <div id="hello" class="" >
       <div class=" ">

      <b-navbar toggleable="" class="" type="dark" variant="dark" >

      <b-navbar-brand class="">
      <img src="https://image.flaticon.com/icons/svg/119/119067.svg"  height="50" width="50" class="text-info">
         <strong class="text-info"> Sistema de Visualizacion</strong>
       </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse" class="text-center">

          <b-navbar-nav class="ml-auto" >
            <b-nav-item  active-class="activo" >
              <i class="fa fa-bar-chart text-warning" aria-hidden="true"></i>
              <router-link to="/hello/D_señal" class="h5 text-info">
              Datos
              </router-link>

            </b-nav-item>

            <b-nav-item active-class="activo" >
              <i class="fa fa-map text-warning " aria-hidden="true"></i>
              <router-link to="/hello/P_Señal" class="h5 text-info">Analisar Señal</router-link>
            </b-nav-item>

            <b-nav-item active-class="activo">
              <i class="fa fa-line-chart text-warning " aria-hidden="true"></i>
              <router-link to="/hello/S_Realtime" exact class="h5 text-info">Tiempo Real</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template slot="button-content">
                {{nombre }}
                <b-img rounded="circle" :src="this.photo" width="40" height="40" class="m-1" />
              </template>

              <b-dropdown-item class="bg-info text-white"  href="#">Perfil</b-dropdown-item>
              <b-dropdown-item class="bg-info text-white" @click="cerrarsesion()">
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
      userId:''
    }
  },
//-------------------------------------------------------------------------
  created() {
  this.user = firebase.auth().currentUser;
  if(this.user) {
    this.nombre = this.user.displayName;
    this.email = this.user.email;
    this.photo = this.user.photoURL;
    this.userId = this.user.userId
    swal("Bienvenido "+ this.nombre, "Visualizacion de señales", "success");
    this.$router.push('/hello/D_señal')
    }
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
  background-image: url("https://images.pexels.com/photos/197919/pexels-photo-197919.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb");
  background-size: cover;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ;
}
.router-link-active{
  color: tomato;
}
.activo{
  color: tomato;
}
</style>
