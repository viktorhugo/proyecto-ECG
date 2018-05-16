<template>
<div class="  fluid container " > 
	<div class="container">

		<div class="mt-5 ">
			<span id="titulo" class="cnt d-flex justify-content-center">

				<p class="text-warning">T</p>
				<p class="text-success">i</p>
				<p class="text-info">em</p>
				<p class="text-info">p</p>
				<p class="text-info">o</p>
				<i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
				<p class="text-success">R</p>
				<p class="text-warning">e</p>
				<p class="text-info">a</p>
				<p class="text-dark">l</p>
			</span>
<div class="d-flex">
	<b-btn  class="ml-2 mb-3 "v-b-modal.modal-center variant="success" >Pacientes en el Sistema</b-btn>
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
		<b-button-group size="sm" v-for="paciente in dataseñales" :key="paciente.id" class="m-1">
			<b-btn class="butt" v-b-popover.hover="paciente.p_caract" :title="paciente.fecha" variant="success" @click="traer_datos(paciente.signal,paciente.first_name,paciente.last_name, paciente.fecha)">
				{{ paciente.first_name }} {{ paciente.last_name }}, {{paciente.fecha}}
			</b-btn>
		</b-button-group>
	</b-modal>

	<b-button  class="ml-2 mb-3"variant="warning" @click="ActDatos()">Actualizar los Datos</b-button>
</div>

	</div>

		<div class=".img-fluid mt-0 "  id="graph"></div>

	</div>
</div>
</template>

<script>

import Plotly from 'plotly.js';
import firebase from 'firebase';
import axios from 'axios';

	export default {
	  data() {
	    return{
				dataseñales:[],
        x:[],
				y:[],
				fecha:'....',
				nombre:'....',
				apellido:'....'
	    }
	  },

created() {

	},

mounted() {
		this.cargarseñal();
	//	this.GraficarSeñal();
		this.graphics()
	},

methods: {
//--------------------------------------------------------------------------------------------------------------
	destroy() {
    this.$destroy();
  },
	//------------------------------------------------------------
	ActDatos() {
		swal({
			icon: 'success',
			title: 'Los Datos Han Sido Actualizados'
		})
		this.cargarseñal()
	},
//------------------------------------------------------------
	cargarseñal(){
      axios.get('http://localhost:3000/pacientes')
      .then((res) => {
        this.dataseñales = res.data
      })
    },
//------------------------------------------------------------
  traer_datos() {
		this.x =[]
		this.y=[]
		this.fecha =''
		this.nombre=''
		this.apellido=''
		arguments[0].forEach((item) => {
			this.x.push(item.hora)
			this.y.push(item.señal)
		})
		this.nombre = arguments[1]
		this.apellido= arguments[2]
		this.fecha = arguments[3]


		//this.GraficarSeñal()
		this.graphics()
  },

//------------------------------------------------------------
	GraficarSeñal() {

				var time = new Date();

				var data = [{
				 x: [time],
				 y: this.y,
				  mode: 'lines',
				  line: {color: '#80CAF6'},
				}]

				var layout = {
	          hovermode:'closest',
	          title:'Señal ECG Paciente '+this.nombre+' '+this.apellido+'  registrada en el : '+this.fecha,
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
	       }

				Plotly.newPlot('graph', data, layout);

				var cnt = 0;

				var interval = setInterval(function() {
				  var time = new Date();
				  var update = {
						x: [[time]],
					  y: [[this.y]]
				  }

				  Plotly.extendTraces('graph', update, [0])

				  if(cnt === 100) clearInterval(interval);
				},-1000 );
		  },
//------------------------------------------------------------
	graphics () {

			var time = new Date();

			var data = [{
			x: [time],
			y: this.y,
			mode: 'lines',
			line: {color: '#80CAF6'}
			}]

			var layout = {
					hovermode:'closest',
					title:'Señal ECG Paciente '+this.nombre+' '+this.apellido+'  registrada en el : '+this.fecha,
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
			 }

			Plotly.newPlot('graph', data, layout );

			var cnt = 0;

			var interval = setInterval(function() {

			var time = new Date();

			var update = {
			x:  [[time]],
			y: [[this.y]]
			}

			var olderTime = time.setMinutes(time.getMinutes() - 1);
			var futureTime = time.setMinutes(time.getMinutes() + 1);

			var minuteView = {
					xaxis: {
						type: 'date',
						range: [olderTime,futureTime]
					}
				};

			Plotly.relayout('graph', minuteView);
			Plotly.extendTraces('graph', update, [0])

			if(cnt === 100) clearInterval(interval);
		}, 10);
	}
//-------------------------------------------------------------------------
	},
}
//-------------------------------------------------------------------------------------------------------------------
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Chelsea+Market');

	.boo {
		font-family: 'Chelsea Market', cursive;
    background: rgba(64, 184, 210, .3);
		border-radius: 6%;
		}
		.butt {
	    cursor: pointer;
	  }

		#titulo{
			font-size: 60px;
			text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000;
		}
</style>
