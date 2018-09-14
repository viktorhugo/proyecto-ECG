<template>
  <div id="crearcuenta" >
    <form @sumbit.prevent="crearcuenta" class="mt-5 mb-5 ponte">
      <div class="container mb-4">
      <span id="titulo" class="cnt d-flex justify-content-center">
        <p class="text-success">C</p>
        <p class="text-warning">r</p>
        <p class="text-dark">e</p>
        <p class="text-dark">a</p>
        <p class="text-info">r</p>
        <p class="text-warning">C</p>
        <p class="text-dark">u</p>
        <p class="text-success">e</p>
        <p class="text-dark">n</p>
        <p class="text-warning">t</p>
        <p class="text-info">a</p>
       </span>
      <img class="ml-5 " src="/src/assets/__Heartrate.png" height="260" width="260"  alt="">

      <div class="input-group margin-bottom-sm mt-5">
        <span class="input-group-addon"> <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i></span>
        <input class="form-control" v-model="nombre" required type="text" placeholder=" Nombre ">
      </div>

      <div class="input-group margin-bottom-sm mt-3">
        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw fa-2x"></i></span>
        <input class="form-control" v-model="email" required type="email" placeholder=" Email ">
      </div>

      <div class="input-group mt-3 ">
        <span class="input-group-addon"><i class="fa fa-key fa-fw fa-2x"></i></span>
        <input class="form-control" v-model="password" required type="password"  placeholder=" Contraseña"  >
      </div>

      <div class="text-center mt-5 mb-5 dfl">
          <div class="g-recaptcha" data-sitekey="6LdMxTgUAAAAAOSi-S-fVFi6vrj5jY3Zp12Bh7u_"></div>
          <b-button class="ml-5" @click="crearcuenta()" variant="success">
            <i class="fa fa-check fa-1x" aria-hidden="true"></i>
            Crear cuenta
          </b-button>
          <router-link class="ml-3 mr-5 mb-5 text-warning " to="/login">
            <i class="fa fa-reply fa-1x" aria-hidden="true"></i>
            Volver
          </router-link><br>
      </div>

    </div>
    </form>
  </div>
</template>
//--------------------------------------------------------------------------------------------------------------
<script>
import firebase from 'firebase'
import swal from 'sweetalert'
export default {
  data(){
    return{
      nombre: '',
      email: '',
      password: ''
    }
  },
  name: "crearcuenta",

  methods: {
    //------------------------------------------
    // FUNCION PARA CREAR CUENTA EN FIREBASE
    crearcuenta() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((value) => {
        this.$store.state.nombre=this.nombre
        swal("Bienvenido dasdasdas" ,"! Su cuenta ha sido creada Exitosa mente ¡", "success")
        this.$router.replace('/hello')
      }, (err) => {
        swal ( "Oops" ,  "!" + err.message +"¡" ,  "error" )
      })

    },
    //------------------------------------------
  }

}
</script>

//--------------------------------------------------------------------------------------------------------------
<style  scoped>
@import url('https://fonts.googleapis.com/css?family=Chelsea+Market|Finger+Paint|Happy+Monkey|Londrina+Sketch|Love+Ya+Like+A+Sister|The+Girl+Next+Door');
#crearcuenta {
  font-family: 'Chelsea Market', cursive;
  margin-top: px;
  height: 100hv;
  display: flex;
  justify-content: center;
  background-image: url("https://images.pexels.com/photos/627361/pexels-photo-627361.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb");
  background-size: cover;

}

#titulo{
  font-size: 60px;
  text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
}
.ponte{
  background: rgba(43, 65, 157, .6);
  border-radius: 3%;
  border-style: groove;
}
</style>
