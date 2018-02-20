<template>
<div > 
    
  <transition appear mode="out-in"
        name="animate.css"
        enter-active-class="animated rotateInUpLeft"
        leave-active-class="animated zoomOutUp">
    
        <div id="app" class="container-fluid slider d-flex justify-content-center" v-if="this.$store.state.tipo">
            <div class="">
              <b-jumbotron class="jumbo text-white" header="Sistema Visualizacion Señales ECG" lead="Universidad de los Llanos Vue.js 2" >
              <p>For more information visit website</p>
              <b-btn variant="success" @click="cambiartipo()">Ingresar</b-btn>
              <b-btn variant="success" @click="info()">Mas Info</b-btn>
              </b-jumbotron>
            </div>    
        </div>

      <div v-else>
      <router-view ></router-view>
      </div>

  </transition>
  
 </div>
</template>

<script>

export default {

 data(){
   return{

   }
 },
 created() {
   console.log(this.$store.state.tipo);
 },
 methods: {
   cambiartipo() {
     this.$store.state.tipo = !this.$store.state.tipo
    this.$router.replace('/login')
   },
   info() {
    this.tipo = !this.tipo
    this.$router.replace('/info')
   }
 }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Chelsea+Market|Finger+Paint|Happy+Monkey|Londrina+Sketch|Love+Ya+Like+A+Sister|The+Girl+Next+Door');
 #app {
   font-family: 'Chelsea Market', cursive;
   text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
   font-size: 40px;
  height: 100vh;
   align-items: center;
   text-align: center;

}
.jumbo{
  background: rgba(46, 73, 125, 0.5);
  border-radius: 3%;
}
button {
  cursor: pointer;
}

#app {
    height: 100vh;
    background-image: url("https://images.pexels.com/photos/228182/pexels-photo-228182.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb");
    background-size: cover;

 }

 .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
