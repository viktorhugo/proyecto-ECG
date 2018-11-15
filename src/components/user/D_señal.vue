<template>
  <div id="proceso2 ">
      <div class="container justify-content-center mt-5">
        <div class="mt-5 ">
    			<span id="titulo" class="cnt d-flex justify-content-center">
    				<p class="text-dark">D</p>
    				<p class="text-white">a</p>
    				<p class="text-white">t</p>
    				<p class="text-white">o</p>
    				<p class="text-white">s</p>
    				<i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
            <p class="text-dark"></p>
    				<p class="text-white">E</p>
    				<p class="text-dark">C</p>
    				<p class="text-white">G</p>
    			 </span>
    		</div>
      </div>

      <div class="boo bg-warning container mx-auto mr-5 ml-5 mt-4">
        <span class="cnt d-flex ml-3 mt-3">
          <p class=" h1 text-danger">P</p>
          <p class=" h1 text-dark">acientes</p>
          <p class=" h1 text-danger"> A</p>
          <p class=" h1 text-dark">tendidos</p>
          </span>
          <b-alert show variant="dark">
          <h4 class="alert-heading "> Sabias que ?</h4>
          <p>Según la Organización Mundial de la Salud, en el perfil epidemiológico de países de 2011,
              la tasa de mortalidad de Colombia por cada 100 mil habitantes para ECV y diabetes es de 166,7 para mujeres y de 205,9
             para hombres. Pese a la magnitud de las cifras, el país cuenta con una ventana de oportunidad de diez años para
             prevenir y controlar la aparición de nuevos casos. <em>(MinSalud,Boletín de Prensa No 077 de 2014)</em> </p>
        </b-alert>
      </div>

    <div class=" mr-5 ml-5 mt-1 d-flex ">
        <b-btn  class="ml-5 butt" v-b-modal.modal-center variant="primary">
          <i class="fas fa-search-plus fa-2x"></i></i> Consultar pacientes
        </b-btn>
        <b-button  class=" ml-5" variant="success" @click="ActDatos()">
         <i class="fas fa-sync-alt fa-2x"></i> Actualizar los Datos
        </b-button>
        <b-modal id="modal-center"
              variant="primary"
              centered title="Total de Pacientes En el Sistema"
              class="text-"
              header-bg-variant="dark"
              header-text-variant="light"
              body-bg-variant="light"
              body-text-variant="dark"
              footer-bg-variant="warning"
              footer-text-variant="dark">
            <p class=" h5" v-for="paciente in dataseñales" :key="paciente.id">
              <b-btn v-b-popover.hover=" 'Id:'+paciente.id+'\n'+'Edad: '+paciente.Edad +'\n\n'+' Su diagnostico es: '+paciente.Informacion_Diagnostico+'\n'+'Frecuencia Cardiaca: '+paciente.Info_tecnica.FC+'\n'+'P: '+paciente.Info_tecnica.P+'\n'+'PR: '+paciente.Info_tecnica.PR+'\n'+'QRS: '+paciente.Info_tecnica.QRS+'\n'+'QT QTc: '+paciente.Info_tecnica.QT_QTC +'\n'+'P QRS T: '+paciente.Info_tecnica.P_QRS_T"
               :title="'Fecha de registro: '+ paciente.Fecha" variant="success">
                {{ paciente.Nombre }}
              </b-btn>
            </p>
        </b-modal>

      </div>
  </div>
</template>
//----------------------------------------------------------------------------------------------------------------------
<script>
import axios from 'axios';
import swal from 'sweetalert'
import firebase from 'firebase'
export default {
  name: "proceso2",
  data(){
    return{
      names:'hola',
      dataseñales:[],
      x: [],
      y: []
    }
  },
//-------------------------------------------------------------------------
  created() {
    //do something after creating vue instance
    let user = firebase.auth().currentUser;
    var emailVerified = user.emailVerified;
    console.log('el usuario esta '+ emailVerified);


  },
  //-------------------------------------------------------------------------
  mounted() {
   this.cargarseñal()
  },
//-------------------------------------------------------------------------
  methods: {
    //----------------------------------------------------------
    cargarseñal(){
      axios.get('http://localhost:3000/muestras')
      .then((res) => {
        this.dataseñales = res.data
      })
    },
    //----------------------------------------------------------
    ActDatos() {
      swal({
        icon: 'success',
        title: 'Los Datos Han Sido Actualizados'
      })
      this.cargarseñal()
    },
    //----------------------------------------------------------
  }
}
//----------------------------------------------------------------------------------------------------------------------
</script>

<style scoped>
#titulo{
  font-size: 60px;
  text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
}

.butt {
  cursor: pointer;
}
.boo {
  font-family: 'Chelsea Market', cursive;
  background: rgba(64, 184, 210, .3);
  border-radius: 1%;
  }
</style>
