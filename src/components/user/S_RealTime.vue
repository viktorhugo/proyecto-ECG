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
	<b-btn  class="ml-2 mb-3 " v-b-modal.modal-center variant="success" @click="cargarseñal()">
		Pacientes en el Sistema
	</b-btn>
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
		<i class="fa fa-spinner fa-spin center" style="font-size:48px;color:rgb(85, 95, 226)"></i>
		<b-button-group size="sm" v-for="paciente in dataseñales" :key="paciente.id" class="m-1">
			<b-dropdown id="ddown-left" size="sm" :text='paciente.Nombre' variant="primary" v-b-popover.hover.bottom="paciente.Informacion_Diagnostico" :title="paciente.Fecha">
		    <b-dropdown-item  @click="GraficarSeñal(paciente.I, paciente.Nombre, paciente.id, paciente.Edad, 'I')">Derivacion I</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.II, paciente.Nombre, paciente.id, paciente.Edad, 'II')">Derivacion II</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.III, paciente.Nombre, paciente.id, paciente.Edad, 'III')">Derivacion III</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.AVR, paciente.Nombre, paciente.id, paciente.Edad, 'AVR')">Derivacion AVR</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.AVL, paciente.Nombre, paciente.id, paciente.Edad, 'AVL')">Derivacion AVL</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.AVF, paciente.Nombre, paciente.id, paciente.Edad, 'AVF')">Derivacion AVF</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.V1, paciente.Nombre, paciente.id, paciente.Edad, 'V1')">Derivacion V1</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.V2, paciente.Nombre, paciente.id, paciente.Edad, 'V2')">Derivacion V2</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.V3, paciente.Nombre, paciente.id, paciente.Edad, 'V3')">Derivacion V3</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.V4, paciente.Nombre, paciente.id, paciente.Edad, 'V4')">Derivacion V4</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.V5, paciente.Nombre, paciente.id, paciente.Edad, 'V5')">Derivacion V5</b-dropdown-item>
		    <b-dropdown-item @click="GraficarSeñal(paciente.V6, paciente.Nombre, paciente.id, paciente.Edad, 'V6')">Derivacion V6</b-dropdown-item>
		  </b-dropdown>
		</b-button-group>

	</b-modal>


	<b-button  class="ml-2 mb-3" variant="warning" @click="ActDatos()">Actualizar los Datos</b-button>
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
		this.GraficarSeñal();
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
	axios.get('http://localhost:3000/muestras')
	.then((res) => {
		this.dataseñales = res.data
	})
	},
//------------------------------------------------------------
	GraficarSeñal() {

				var time = new Date();

				var data = [{
				 x: [time],
				 y: arguments[0],
				  mode: 'lines',
				  line: {
						color: '#80CAF6',
						shape: 'spline'
					},
				}]

				var layout = {
	          hovermode:'closest',
	          title:'Señal ECG Paciente: '+arguments[1]+'   	Id: '+arguments[2]+'     Edad: '+arguments[3]+'     Derivacion:'+arguments[4],
						paper_bgcolor: 'rgba(24, 36, 37, 0.98)',
						plot_bgcolor: 'rgba(35, 47, 48, 0.96)',

	          margin: {
	            l:30,
	            r:30,
	            b:30,
	            t:40,
	            pad:4
	          },
	          font: {
	            size: 10,
	            color: 'rgb(242, 242, 242)'
	          },
						xaxis: {
	            type: 'date',
	            title: 'Hora',
	            color:'rgb(11, 141, 235)',
	            titlefont: {
	              color: 'rgb(170, 161, 162)',
	              size: 10
	            }
	          },

	          yaxis: {
	            title: 'Amplitud ',
	            color:'rgb(11, 141, 235)',
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
					  y: [[arguments[0]]]
				  }

				  Plotly.extendTraces('graph', update, [0])

				  if(cnt === 100) clearInterval(interval);
				}, -200);
		  },
//------------------------------------------------------------
	GraficarSeña() {

			var time = new Date();

			var data = [{
			x: [time],
			y: arguments[2],
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
			y: [[arguments[2]]]
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
		}, 250);
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
