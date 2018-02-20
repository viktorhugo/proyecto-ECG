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
  				<i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
  				<p class="text-warning">E</p>
  				<p class="text-success">C</p>
  				<p class="text-info">G</p>
  			 </span>
  		</div>

      <div class="" variant="success">
        <b-btn  class="ml-2 mb-3 "v-b-modal.modal-center variant="success">Pacientes en el Sistema</b-btn>
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
              <b-button-group v-for="paciente in dataseñales" :key="paciente.id" class="m-1">
                <b-button variant="warning" @click="traer( paciente.signal,paciente.first_name,paciente.last_name, paciente.fecha)">
                  <p class="h6"><strong> {{ paciente.first_name }} {{ paciente.last_name }}</strong><em>({{paciente.fecha}})</em> </p>
                </b-button>
              </b-button-group>
        </b-modal>
      </div>
    </div>

    <div id="myDiv" class="container">

    </div>

  </div>
</template>
<script>
import axios from 'axios'
import plotly from 'plotly.js'
export default {

    data() {
      return{
        dataseñales:[],
        x:[],
				y:[],
        fecha:'....',
        nombre:'....',
        apellido:'...'

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
      arguments[0].forEach((item) => {
        this.x.push(item.hora)
        this.y.push(item.señal)
      })
      this.nombre = arguments[1]
  		this.apellido= arguments[2]
  		this.fecha = arguments[3]

      this.GraficarSeñal()
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
          title:'Señal ECG Paciente '+this.nombre+' '+this.apellido+'  del : '+this.fecha,
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
            },
            rangemode: 'tozero'
          },
          yaxis: {
            title: 'Amplitud ',
            titlefont: {
              color: 'rgb(170, 161, 162)',
              size: 10
            },
            rangemode: 'tozero'
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
#titulo{
  font-size: 60px;
  text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
}
</style>
