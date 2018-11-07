<template>
  <div id="cuerpo" class="">
    <b-form @sumbit.prevent="iniciarsesion" >
        <div class="my-content ">
                  <span id="titulo" class="d-flex justify-content-center">
                    <p class="text-danger">I</p>
                    <p class="text-warning">n</p>
                    <p class="text-dark">i</p>
                    <p class="text-info">c</p>
                    <p class="text-warning">i</p>
                    <p class="text-white">a</p>
                    <p class="text-success">r</p>
                    <p class="text-danger">S</p>
                    <p class="text-dark">e</p>
                    <p class="text-info">s</p>
                    <p class="text-success">i</p>
                    <p class="text-white">ó</p>
                    <p class="text-dark">n</p>

                   </span>
                   <div class="ml-5">
                     <img class=" justify-content-center ml-5" src="https://image.flaticon.com/icons/svg/265/265760.svg" height="200" width="200" alt="">
                   </div>


            <div class="input-group margin-bottom-sm mt-4 mb-4">
              <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw fa-2x"></i></span>
              <input class="form-control" v-model="email" @keyup.enter="iniciarsesion"  type="email" placeholder="Email" required>
            </div>

            <div class="input-group mb-4">
              <span class="input-group-addon"><i class="fa fa-key fa-fw fa-2x "></i></span>
              <input class="form-control" v-model="password" type="password" @keyup.enter="iniciarsesion"  placeholder="Contraseña" required >
            </div>

            <div class="text-center  align-bottom mb-2">
                <b-button  @click="iniciarsesion()" variant="success">
                <i  class="fa fa-check fa-1x " aria-hidden="true"></i>
                Ingresar
                </b-button>

                <b-button class="ml-4" @click="volver()" variant="warning">
                <i class="fa fa-reply fa-1x" aria-hidden="true"></i>
                Volver
                </b-button><br>
            </div>

            <p class="text-warning">No tienes una cuenta ? <router-link to="/crearcuenta"> Crea una</router-link></p><br>
      </div>
    </b-form>
  </div>
</template>
//--------------------------------------------------------------------------------------------------------------
<script>
import firebase from 'firebase';
import swal from 'sweetalert'
export default {
  data(){
    return{
      tipo: this.$store.state.tipo,
      email: '',
      password: ''
    }
  },

	methods: {
    //-----------------------------------------------------------
    // METODO PARA INICIAR SESION
	  iniciarsesion() {
      if (this.email === '' || this.password === '') {
        swal ( "Algo salio mal !" , "Ingrese todos los datos requeridos" ,  "info" )
      }else {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((value) => {
          swal('Usted se encuetra con una cuenta activa')
          this.$router.replace('/hello')
        }, (err) => {
          swal ( "Algo salio mal !" ,  "! " + err.message +" ¡" ,  "error" )
        })
      }

    },
    //-----------------------------------------------------------
    // METODO PARA CAMBIAR ESTADO Y VOLVER
    volver () {
      this.$store.state.tipo = !this.$store.state.tipo
     this.$router.replace('/')
   },
   //-----------------------------------------------------------
   // METODO PARA INICIAR SESION CON GOOGLE
   signingoogle () {
     if (!firebase.auth().currentUser ) {
       var provider = new firebase.auth.GoogleAuthProvider();
       provider.addScope('https://www.googleapis.com/auth/plus.login')
       firebase.auth().signInWithPopup(provider).then(function(result) {
         var token = result.credential.accesstoken
         var user = result.user
       }).catch((err) => {
         var errorcode = err.code
         var errorMesagge = err.message
         var erroremail = err.email
         var credential = err.credential
         if (errorcode === 'auth/account-exists-with-different-credential') {
           swal('El usuario es el mismo')
         }else {
           swal('Ooops ' + err.message)
         }

       })
     }
   },
   //-----------------------------------------------------------
   // METODO PARA INICIAR SESION CON FACEBOOK
   signinfacebook () {
     if (!firebase.auth().currentUser ) {
       var provider = new firebase.auth.FacebookAuthProvider();
       provider.addScope('public_profile')
       firebase.auth().signInWithPopup(provider).then(function(result) {
         var token = result.credential.accesstoken
         var user = result.user
       }).catch((err) => {
         var errorcode = err.code
         var errorMesagge = err.message
         var erroremail = err.email
         var credential = err.credential
         if (errorcode === 'auth/account-exists-with-different-credential') {
           swal('El usuario es el mismo')
         }else {
           swal('Ooops ' + err.message)
         }

       })
     }
   },
   //-----------------------------------------------------------
	}
}
</script>
//--------------------------------------------------------------------------------------------------------------
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chelsea+Market|Finger+Paint|Happy+Monkey|Londrina+Sketch|Love+Ya+Like+A+Sister|The+Girl+Next+Door');

#cuerpo {
font-family: 'Chelsea Market', cursive;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pexels.com/photos/682487/pexels-photo-682487.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb");
  background-size: cover;
}
.my-content{
margin-top: 30px;
width: 100%;
height: 100%;
background: rgba(43, 65, 157, .5);
border-radius: 3%;
padding-right: 10px;
padding-left: 10px;
border-style: groove;
}


h1, p{
  text-align: center;
}
#titulo{
  font-size: 60px;
  text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
  font-family: 'Chelsea Market', cursive;
}

</style>
