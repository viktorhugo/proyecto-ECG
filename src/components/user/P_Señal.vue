<template>
  <div id="señal">

    <div class="container justify-content-center mt-5">
      <div class="mt-5 ">
  			<span id="titulo" class="cnt d-flex justify-content-center">
  				<p class="text-success">S</p>
  				<p class="text-warning">e</p>
  				<p class="text-info">ñ</p>
  				<p class="text-dark">a</p>
  				<p class="text-warning">l</p>
  				<p class="text-dark">e</p>
  				<p class="text-warning">s</p>
  				<i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
  				<p class="text-warning">E</p>
  				<p class="text-success">C</p>
  				<p class="text-info">G</p>
  			 </span>
  		</div>


      <div class=" d-flex">

            <div class="" variant="success">
              <b-btn  class="ml-2 mb-3 butt "v-b-modal.modal-center variant="success">Visualizar señal Paciente</b-btn>
              <b-modal id="modal-center"
                variant="primary"
                centered title="Seleccione el paciente"
                class="text-"
                header-bg-variant="dark"
                header-text-variant="light"
                body-bg-variant="light"
                body-text-variant="dark"
                footer-bg-variant="warning"
                footer-text-variant="dark">
                <b-button-group size="sm" v-for="paciente in dataseñales" :key="paciente.id" class="m-1">
                  <b-btn class="butt" v-b-popover.hover="paciente.p_caract" :title="'Fecha de registro: '+paciente.fecha" variant="info" @click="traer( paciente.signal, paciente.first_name, paciente.last_name, paciente.fecha, paciente.p_caract, paciente.id)">
                    {{ paciente.first_name }} {{ paciente.last_name }}
                  </b-btn>
                </b-button-group>
              </b-modal>
            </div>

            <div class="" variant="success">
              <b-btn  @click="show=true" class="ml-2 mb-3 "v-b-modal.modal-center1 variant="warning">Agregar Diagnostico</b-btn>
              <b-modal id="modal-center1"
                variant="primary"
                centered title="Ingrese El diagnostico del Paciente"
                class="text-"
                header-bg-variant="dark"
                header-text-variant="light"
                body-bg-variant="light"
                body-text-variant="dark"
                footer-bg-variant="warning"
                footer-text-variant="dark">
                 <b-button variant="dark" size="sm" class="mt-2 mb-2 ">
                   <p class="m-1 "> <strong>{{ this.nombre }} {{this.apellido}}</strong></p>
                 </b-button>
                <b-form-textarea id="textarea1" v-model="diagnostico"
                     placeholder="Escriba Aqui"
                    :rows="14"
                    :max-rows="8">
                </b-form-textarea>
                <b-btn size="sm" class="m-2 float-right  butt" variant="success" @click="Dictamen()">
                  Enviar
                </b-btn>

              </b-modal>
            </div>

      </div>

    </div>

    <div id="myDiv" class="container"></div>

  </div>
</template>
<script>
import axios from 'axios'
import plotly from 'plotly.js'
import swal from 'sweetalert'
export default {

    data() {
      return{
        show: false,
        dataseñales:[],
        x:[],
				y:[],
        id:'',
        fecha:'....',
        nombre:'Nombre',
        apellido:'Paciente',
        diagnostico:''

      }
    },
//-------------------------------------------------------------------------
    created() {

    },
//-------------------------------------------------------------------------
    mounted() {
      this.GraficarSeñal()
      this.cargarseñal();
    },
//-------------------------------------------------------------------------
  methods: {
    //------------------------------------------------------------
    cargarseñal(){
      axios.get('http://localhost:3000/pacientes')
      .then((res) => {
        this.dataseñales = res.data
      })
    },
    //------------------------------------------------------------
    traer() {
      this.x =[]
      this.y=[]
      this.fecha =''
      this.nombre=''
      this.diagnostico=''
      this.id=''
      arguments[0].forEach((item) => {
        this.x.push(item.hora)
        this.y.push(item.señal)
      })
      this.nombre = arguments[1]
  		this.apellido= arguments[2]
  		this.fecha = arguments[3]
      this.diagnostico=arguments[4]
      this.id=arguments[5]

      this.GraficarSeñal()
    },
    //------------------------------------------------------------
    Dictamen(){

      var url = 'http://localhost:3000/pacientes/'+this.id
      console.log(url);

      axios.post( url , {
        "p_caract": this.diagnostico
      })
      .then(function (response) {
        console.log(response);
        this.cargarseñal()
        swal({
          icon: 'success',
          title: 'El diagnostico ha sido guardado con exito'
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    },

    //------------------------------------------------------------
    GraficarSeñal() {
      var myPlot = document.getElementById('myDiv'),
      x = this.x,
      y1 = this.y,
      trace1 = { x:x, y:y1,
        type:'scatter',
        name: 'AAPL Low',
        mode:'lines',
         line: {
           color: '#80CAF6',
           width: 2
          }
      }
      var data = [ trace1 ],
      layout = {
          hovermode:'closest',
          title:'Señal Electrocardiografica '+this.nombre+' '+this.apellido+'  registrado el : '+this.fecha,
          paper_bgcolor: 'rgba(24, 36, 37, 0.98)',
          plot_bgcolor: 'rgba(35, 47, 48, 0.96)',
          margin: {
            l:50,
            r:30,
            b:90,
            t:50,
            pad:4
          },
          font: {
            size: 10,
            color: 'rgb(242, 242, 242)'
          },
          xaxis: {
            title: 'Hora',
            titlefont: {
              color: 'rgb(170, 161, 162)',
              size: 10
            }
          },

          yaxis: {
            title: 'Amplitud ',
            titlefont: {
              color: 'rgb(170, 161, 162)',
              size: 10
            }
          }

       };
      Plotly.newPlot('myDiv', data, layout);
    }
  },
//-------------------------------------------------------------------------

}

</script>
<style scoped>

  #chart svg {
    height: 400px;
  }


  .butt {
    cursor: pointer;
  }

  #titulo{
    font-size: 60px;
    text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
  }
</style>
