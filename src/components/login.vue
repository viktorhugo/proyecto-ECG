<template>
  <div id="cuerpo" class="">
 
    <form @sumbit.prevent="iniciarsesion">
        <div class="my-content ">
                  <span id="titulo" class="d-flex justify-content-center">
                    
                    <p class="text-dark">S</p>
                    <p class="text-warning">i</p>
                    <p class="text-info">g</p>
                    <p class="text-success">n</p>
                    <p class="text-warning">I</p>
                    <p class="text-white">n</p>
                   </span>
                  <img src="/src/assets/_Pokemon Trainer Boy.png" height="200" width="200" alt="">


              <b-button  variant="danger" @click="signingoogle()" v-b-popover.hover.auto="'Inicie con Google'" >
                <i class="fa fa-google-plus fa-2x" aria-hidden="true"></i>
                Google
                </b-button>

            <b-button variant="primary" @click="signinfacebook()" v-b-popover.hover.top="'Inicie con Facebook'"  >
                <i class="fa fa-facebook fa-2x" aria-hidden="true" ></i>
                Facebook
            </b-button><br><br>

            <div class="input-group margin-bottom-sm">
              <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw fa-2x"></i></span>
              <input class="form-control" v-model="email" required type="email" placeholder="Email address">
            </div><br>

            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-key fa-fw fa-2x"></i></span>
              <input class="form-control" v-model="password" required type="password"  placeholder="Password">
            </div><br><br>
            <div class="text-center  align-bottom">
                <b-button  @click="iniciarsesion()" variant="success">
                <i  class="fa fa-check fa-1x " aria-hidden="true"></i>
                Ingresar
                </b-button>

                <b-button class="ml-4" @click="volver()" variant="warning">
                <i class="fa fa-reply fa-1x" aria-hidden="true"></i>
                Volver
                </b-button><br>
            </div>
               <br> <p class="text-warning">No tienes una cuenta ? <router-link to="/crearcuenta"> Crea una</router-link></p><br>


      </div>
    </form>

  </div>

</template>

<script>
import firebase from 'firebase';
export default {
  data(){
    return{
      tipo: this.$store.state.tipo,
      email: '',
      password: ''
    }
  },
	methods: {

	  iniciarsesion() {
	    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((value) => {
        alert('Usted se encuetra con una cuenta activa')
        this.$router.replace('/hello/proceso2')
      }, (err) => {
        swal ( "Oops" ,  "! " + err.message +" ¡" ,  "error" )
      })
	  },
    volver () {
      this.$store.state.tipo = !this.$store.state.tipo
      console.log(this.$store.state.tipo);
     this.$router.replace('/')
   },
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
           alert('El usuario es el mismo')
         }else {
           alert('Ooops ' + err.message)
         }

       })
     }
   },
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
           alert('El usuario es el mismo')
         }else {
           alert('Ooops ' + err.message)
         }

       })
     }
   },
	}
}
</script>
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
}

</style>
