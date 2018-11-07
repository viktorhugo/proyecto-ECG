<template>
  <div id="crearcuenta" class="">

    <form @sumbit.prevent="crearcuenta" class="mt-5 mb-5 ">
      <div class="container mb-4 ponte">

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

         <div class=" text-center">
           <img class=" " src="/src/assets/__Heartrate.png" height="200" width="200"  alt="">
         </div>

        <div class="input-group margin-bottom-sm mt-3">
          <span class="input-group-addon"> <i class="fa fa-user-circle fa-1x" aria-hidden="true"></i></span>
          <input class="form-control " v-model="nombre" @keyup.enter="crearcuenta" required type="text" placeholder=" Nombre ">
        </div>

        <div class="input-group margin-bottom-sm mt-3">
          <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw fa-1x"></i></span>
          <input class="form-control" v-model="email" @keyup.enter="crearcuenta" required type="email" placeholder=" Email ">
        </div>

        <div class="input-group mt-3 ">
          <span class="input-group-addon"><i class="fa fa-key fa-fw fa-1x"></i></span>
          <input class="form-control" v-model="password" @keyup.enter="crearcuenta" required type="password"  placeholder=" Contraseña"  >
        </div>

        <div class="input-group mt-3 ">
          <span class="input-group-addon"><i class="fa fa-key fa-fw fa-1x"></i></span>
          <input class="form-control" v-model="password2" @keyup.enter="crearcuenta" required type="password"  placeholder=" Escriba su contraseña nuevamente"  >
        </div>

        <div class=" align-right">
                <i class="fas fa-user-check fa-2x bg-dark p-2 rounded m-2 text-success float-right" v-if="this.password === this.password2" ></i>
                <i class="fas fa-times fa-2x bg-dark pl-3 pr-3 pt-2 pb-2 rounded m-2 text-danger float-right" v-else ></i>
        </div>

        <div class="input-group input-group-sm mb-3">
          <div class="text-center mt-2 mb-4 dfl">
              <div class="g-recaptcha" data-sitekey="6LdMxTgUAAAAAOSi-S-fVFi6vrj5jY3Zp12Bh7u_"></div>
              <b-button class="ml-5" @click="crearcuenta()" variant="success">
                <i class="fa fa-check fa-1x" aria-hidden="true"></i>
                Crear cuenta
              </b-button>
              <router-link class="ml-3 mr-5 mb-2 text-warning " to="/login">
                <i class="fa fa-reply fa-1x" aria-hidden="true"></i>
                Volver
              </router-link><br>
          </div>
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
      password: '',
      password2: null
    }
  },
  name: "crearcuenta",

  methods: {
    //------------------------------------------
    // FUNCION PARA CREAR CUENTA EN FIREBASE
    crearcuenta() {
      if (this.nombre === '' || this.email === '' || this.password === '' || this.password2 === '' ) {
        swal ( "Algo salio mal !" ,  "Por favor ingrese todos los datos requeridos" ,  "error" )
      }else {
        if (this.password = this.password2) {

            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((value) => {

                var user = firebase.auth().currentUser;
                user.sendEmailVerification().then(function() {

                    swal("Buen Trabajo!", "Veririfica tu correo y ingresa a el link", "success")
                    this.$store.state.nombre=this.nombre
                    this.nombre =''
                    this.email =''
                    this.password =''
                    this.password2 =''

                }).catch(function(error) {
                    swal ( "Algo salio mal !" ,  "!" + err.message +"¡" ,  "error" )

                });

            }, (err) => {
              swal ( "Algo salio mal !" ,  "!" + err.message +"¡" ,  "error" )
              this.password =''
              this.password2 =''
            })

        }else
         {
          swal ( "Algo salio mal !" ,  "Las contraseñas deben coincidir" ,  "error" )
        }
      }
    },

    conta(){
        swal("Bienvenido " ,"! Su cuenta ha sido creada Exitosa mente ¡", "success")
    }
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
  font-family: 'Chelsea Market', cursive;
}
.ponte{
  background: rgba(43, 65, 157, .6);
  border-radius: 3%;
  border-style: groove;
}
</style>
