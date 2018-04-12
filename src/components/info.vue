<template>
  <div id="info">

       <div id="app" class="container-fluid slider d-flex justify-content-center" >
            <div class="">
              <b-jumbotron class="jumbo text-white" header="Sistema Visualizacion Señales ECG" lead="Universidad de los Llanos " >
              <p>For more information visit website</p>
              <b-btn variant="success" to="/login">Ingresar</b-btn>
              <b-btn variant="success" @click="info()">Mas Info</b-btn>
              </b-jumbotron>
            </div>    
        </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data: () => ({ 
    
  }),
  methods: {

  }
}
</script>
<style  scoped>
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
  background: rgba(125, 120, 46, 0.5);
  border-radius: 9%;
}
button {
  cursor: pointer;
}
#info{
  height: 100vh;
    background-image: url("https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-size: cover;
}
</style>
