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
              <b-btn  class="ml-2 mb-3 butt" v-b-modal.modal-center variant="success" @click="cargarseñal()">Visualizar señal Paciente</b-btn>
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
                <i class="fa fa-spinner fa-spin" style="font-size:48px;color:rgb(226, 93, 85)"></i>
                <b-button-group size="sm" v-for="paciente in dataseñales" :key="paciente.id" class="m-1">
                  <b-btn class="butt" v-b-popover.hover.bottom=" 'Id:'+paciente.id+'\n'+'Edad: '+paciente.Edad" :title="'Fecha de registro: '+ paciente.Fecha" variant="primary"
                  @click="GraficarSeñal(paciente.Elapsed_time, paciente.I, paciente.II, paciente.III, paciente.AVR, paciente.AVL, paciente.AVF, paciente.V1, paciente.V2, paciente.V3, paciente.V4, paciente.V5, paciente.V6, paciente.Nombre, paciente.Informacion_Diagnostico, paciente.id, paciente.Info_tecnica)">
                    {{ paciente.Nombre }}
                  </b-btn>
                </b-button-group>
                <div class="loader-inner ball-pulse"></div>
              </b-modal>
            </div>

            <div class="" variant="success">
              <b-btn  @click="show=true" class="ml-2 mb-3" v-b-modal.modal-center1 variant="warning">Agregar Diagnostico</b-btn>

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
                   <p class="m-1 "> <strong>{{ this.nombre }} </strong></p>
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

    <div class=" cnt d-flex">
      <div id="myDivI" class="container mt-1 ml-3 mr-1 mb-1 "></div>
      <div id="myDivV1" class="container mt-1 ml-1 mr-2 mb-1"></div>
    </div>

    <div class="cnt d-flex">
      <div id="myDivII" class="container mt-1 ml-3 mr-1 mb-1 "></div>
      <div id="myDivV2" class="container mt-1 ml-1 mr-2 mb-1 "></div>
    </div>

    <div class="cnt d-flex">
      <div id="myDivIII" class="container mt-1 ml-3 mr-1 mb-1 "></div>
      <div id="myDivV3" class="container mt-1 ml-1 mr-2 mb-1 "></div>
    </div>

    <div class="cnt d-flex">
      <div id="myDivAVR" class="container mt-1 ml-3 mr-1 mb-1 "></div>
      <div id="myDivV4" class="container mt-1 ml-1 mr-2 mb-1 "></div>
    </div>

    <div class="cnt d-flex">
      <div id="myDivAVL" class="container mt-1 ml-3 mr-1 mb-1 "></div>
      <div id="myDivV5" class="container mt-1 ml-1 mr-2 mb-1 "></div>
    </div>

    <div class="cnt d-flex">
      <div id="myDivAVF" class="container mt-1 ml-3 mr-1 mb-1 "></div>
      <div id="myDivV6" class="container mt-1 ml-1 mr-2 mb-1 "></div>
    </div>

    <div class=" container d-flex text-center d-block m-5 ">
        <div>
            <canvas id="myChart1" class="mr-2 rounded pl- pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
        <div>
            <canvas id="myChart2" class="mr-2 rounded pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
    </div>

    <div class=" container d-flex text-center d-block m-5 ">
        <div>
            <canvas id="myChart3" class="mr-2 rounded pl- pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
        <div>
            <canvas id="myChart4" class="mr-2 rounded pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
    </div>

    <div class=" container d-flex text-center d-block m-5 ">
        <div>
            <canvas id="myChart5" class="mr-2 rounded pl- pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
        <div>
            <canvas id="myChart6" class="mr-2 rounded pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
    </div>

    <div class=" container d-flex text-center d-block m-5 ">
        <div>
            <canvas id="myChart7" class="mr-2 rounded pl- pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
        <div>
            <canvas id="myChart8" class="mr-2 rounded pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
    </div>

    <div class=" container d-flex text-center d-block m-5 ">
        <div>
            <canvas id="myChart9" class="mr-2 rounded pl- pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
        <div>
            <canvas id="myChart10" class="mr-2 rounded pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
    </div>

    <div class=" container d-flex text-center d-block m-5 ">
        <div>
            <canvas id="myChart11" class="mr-2 rounded pl- pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
        <div>
            <canvas id="myChart12" class="mr-2 rounded pb-3 pr-2 pt-4" style="width: 600px; height:250px;"></canvas>
        </div>
    </div>


</div>



</template>

<script>
import axios from 'axios'
import plotly from 'plotly.js'
import swal from 'sweetalert'
import Chart from 'chart.js';
export default {

    data() {
      return{
        show: false,
        dataseñales:[],
        id:'',
        I: [],
        II: [],
        III: [],
        AVR: [],
        AVL: [],
        AVF: [],
        V1: [],
        V2: [],
        V3: [],
        V4: [],
        V5: [],
        V6: [],
        id:'',
        fecha:'....',
        nombre:'Nombre',
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
      axios.get('http://localhost:3000/muestras')
      .then((res) => {
        this.dataseñales = res.data
      })
    },
    //------------------------------------------------------------
    Dictamen(){

      var url = 'http://localhost:3000/muestras/'+this.id
      console.log(url);

      axios.patch( url , {
        Informacion_Diagnostico: this.diagnostico
      })
      .then(function (response) {
        console.log(response);
        swal({
          icon: 'success',
          title: 'El diagnostico ha sido guardado con exito'
        });
      })
      .catch(function (error) {
        swal({
          icon: 'error',
          title: 'El diagnostico no se ha podido guardar'
        })
        console.log(error);
      });

    },
    //------------------------------------------------------------

    //------------------------------------------------------------
    GraficarSeñal() {


      console.log(arguments[14]);
      var myPlot = document.getElementById('myDiv')
      var myPlot = document.getElementById('myDiv1')

      this.I= arguments[1]
      this.II= arguments[2]
      this.III= arguments[3]
      this.AVR= arguments[4]
      this.AVL= arguments[5]
      this.AVF= arguments[6]
      this.V1= arguments[7]
      this.V2= arguments[8]
      this.V3= arguments[9]
      this.V4= arguments[10]
      this.V5= arguments[11]
      this.V6= arguments[12]
      this.nombre= arguments[13]
      this.diagnostico=arguments[14]
      this.id=arguments[15]

      var trace1 = {
        x:arguments[0],
        y:this.I,
        type:'scatter',
        name: 'DI',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
          }
      }
      var trace2 = {
        x:arguments[0],
        y:this.II,
        type:'scatter',
        name: 'DII',
         line: {
           color: '#76e20a',
           shape: 'spline',
        }
      }
      var trace3 = {
        x:arguments[0],
         y:this.III,
        type:'scatter',
        name: 'DIII',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceAVR = {
        x:arguments[0],
        y:this.AVR,
        type:'scatter',
        name: 'AVR',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceAVL = {
        x:arguments[0],
        y:this.AVL,
        type:'scatter',
        name: 'AVL',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceAVF = {
        x:arguments[0],
        y:this.AVF,
        type:'scatter',
        name: 'AVF Low',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceV1 = {
        x:arguments[0],
        y:this.V1,
        type:'scatter',
        name: 'V1',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceV2 = {
        x:arguments[0],
        y:this.V2,
        type:'scatter',
        name: 'V2',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceV3 = {
        x:arguments[0],
        y:this.V3,
        type:'scatter',
        name: 'V3',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceV4 = { x:arguments[0], y:this.V4,
        type:'scatter',
        name: 'V4',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceV5 = { x:arguments[0], y:this.V5,
        type:'scatter',
        name: 'V5',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }
      var traceV6 = { x:arguments[0], y:this.V6,
        type:'scatter',
        name: 'V6',
        mode:'lines',
         line: {
           color: '#76e20a',
           shape: 'spline',
            }
      }

      var dataI = [trace1], dataII = [trace2], dataIII = [trace3], dataAVR = [traceAVR], dataAVL = [traceAVL],dataAVF = [traceAVF],
      dataV1 = [traceV1], dataV2 = [traceV2], dataV3 = [traceV3], dataV4 = [traceV4], dataV5 = [traceV5], dataV6 = [traceV6],



      layout = {
          title:'Paciente: '+arguments[13],
          paper_bgcolor: 'rgba(24, 36, 37, 0.98)',
					plot_bgcolor: 'rgba(35, 47, 48, 0.96)',
            width: 660,
            height: 250,
            margin: {
            l:25,
            r:25,
            b:25,
            t:30,
          },
          showlegend: true,
          hoverlabel:{
            bgcolor:'rgb(159, 19, 65)',
            bordercolor:'rgb(249, 239, 242)'
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


        Plotly.newPlot('myDivI', dataI, layout );
        Plotly.newPlot('myDivII', dataII, layout);
        Plotly.newPlot('myDivIII', dataIII, layout);
        Plotly.newPlot('myDivAVR', dataAVR, layout);
        Plotly.newPlot('myDivAVL', dataAVL, layout);
        Plotly.newPlot('myDivAVF', dataAVF, layout);
        Plotly.newPlot('myDivV1', dataV1, layout);
        Plotly.newPlot('myDivV2', dataV2, layout);
        Plotly.newPlot('myDivV3', dataV3, layout);
        Plotly.newPlot('myDivV4', dataV4, layout);
        Plotly.newPlot('myDivV5', dataV5, layout);
        Plotly.newPlot('myDivV6', dataV6, layout);

        var dI = document.getElementById('myChart1').getContext('2d');
       var v1 = document.getElementById('myChart2').getContext('2d');
       var dII = document.getElementById('myChart3').getContext('2d');
       var v2 = document.getElementById('myChart4').getContext('2d');
       var dIII = document.getElementById('myChart5').getContext('2d');
       var v3 = document.getElementById('myChart6').getContext('2d');
       var avr = document.getElementById('myChart7').getContext('2d');
       var v4 = document.getElementById('myChart8').getContext('2d');
       var avl = document.getElementById('myChart9').getContext('2d');
       var v5 = document.getElementById('myChart10').getContext('2d');
       var avf = document.getElementById('myChart11').getContext('2d');
       var v6 = document.getElementById('myChart12').getContext('2d');

       var dataI = {
           label: 'Paciente: '+arguments[13]+' Derivacion DI, FC: '+arguments[16].FC+'P: '+arguments[16].FC+'PR:'+arguments[16].PR+'QRS :'+arguments[16].QRS+'QT_QTC: '+arguments[16].QT_QTC+'P_QRS_T: '+arguments[16].P_QRS_T,
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.I,
           labels: arguments[1]

       };
       var dataII = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.II,
           labels: arguments[1],

       };
       var dataIII = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.III,

       };
       var dataAVR = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.AVR,

       };
       var dataAVF = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.AVF,

       };
       var dataAVL = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.AVL,

       };
       var dataV1 = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.V1,

       };
       var dataV2 = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.V2,

       };
       var dataV3 = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.V3,

       };
       var dataV4 = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.V4,

       };
       var dataV5 = {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.V5,

       };
       var dataV6= {
           label: "Car B - Speed (mph)",
           borderColor: 'black',
           borderWidth: 1.2,
           lineTension: 0.3,
           fill: false,
           backgroundColor: 'transparent',
           options: {
               pointStyle: 'line'
           },
           data:this.V6,

       };



       var speedData1 = {
           labels: arguments[1],
           datasets: [dataI]
       };

       var speedData2 = {
           labels: arguments[1],
           datasets: [dataII]
       };

       var speedData3 = {
           labels: arguments[1],
           datasets: [dataIII]
       };

       var speedData4 = {
           labels: arguments[1],
           datasets: [dataAVF]
       };

       var speedData5 = {
           labels: arguments[1],
           datasets: [dataAVL]
       };

       var speedData6 = {
           labels: arguments[1],
           datasets: [dataAVR]
       };
       var speedData7 = {
           labels: arguments[1],
           datasets: [dataV1]
       };
       var speedData8 = {
           labels: arguments[1],
           datasets: [dataV2]
       };
       var speedData9 = {
           labels: arguments[1],
           datasets: [dataV3]
       };
       var speedData10 = {
           labels: arguments[1],
           datasets: [dataV4]
       };
       var speedData11 = {
           labels: arguments[1],
           datasets: [dataV5]
       };
       var speedData12 = {
           labels: arguments[1],
           datasets: [dataV6]
       };



       var lineChart = new Chart(dI, {
           type: 'line',
           data: speedData1,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: true
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           }
       }
       );

       var lineChart = new Chart(dII, {
           type: 'line',
           data: speedData2,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       });

       var lineChart = new Chart(dIII, {
           type: 'line',
           data: speedData3,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );

       var lineChart = new Chart(avf, {
           type: 'line',
           data: speedData4,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );

       var lineChart = new Chart(avl, {
           type: 'line',
           data: speedData5,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );
       var lineChart = new Chart(avr, {
           type: 'line',
           data: speedData6,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );
       var lineChart = new Chart(v1, {
           type: 'line',
           data: speedData7,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );
       var lineChart = new Chart(v2, {
           type: 'line',
           data: speedData8,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );
       var lineChart = new Chart(v3, {
           type: 'line',
           data: speedData9,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );
       var lineChart = new Chart(v4, {
           type: 'line',
           data: speedData10,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );
       var lineChart = new Chart(v5, {
           type: 'line',
           data: speedData11,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       });
       var lineChart = new Chart(v6, {
           type: 'line',
           data: speedData12,
           options: {
               elements: {
                   point: {
                       radius: 0
                   }
               },
               scales: {
                   xAxes: [{
                       display: false
                   }],
                   yAxes: [{
                       display: true
                   }]
               }
           },
       },
       );

    },


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

  canvas {
        background-image: url(http://consejosparaimprimironline.imprimiralultimominuto.es/wp-content/uploads/Millimeterpapier.jpg);
        background-size: 100px 100px;
        background-size: 8%;
    }

  .loader {
  color: #ffffff;
  font-size: 20px;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}

.ball-grid-pulse > div {
  background-color: orange;
}


</style>
