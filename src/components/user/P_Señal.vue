<template>
<div id="señal">

    <div class="container justify-content-center mt-5">
      <div class="mt-5 ">
  			<span id="titulo" class="cnt d-flex justify-content-center">
  				<p class="text-dark">S</p>
  				<p class="text-white">e</p>
  				<p class="text-white">ñ</p>
  				<p class="text-white">a</p>
  				<p class="text-white">l</p>
  				<p class="text-white">e</p>
  				<p class="text-white">s</p>
  				<i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>
  				<p class="text-dark">E</p>
  				<p class="text-white">C</p>
  				<p class="text-dark">G</p>
  			 </span>
  		</div>

      <div class=" d-flex">
            <div class="" variant="success">
                <b-btn  class="ml-2 mb-3 butt " v-b-modal.modal-center variant="success" @click="cargarseñal()">
                  <i class="fas fa-signature fa-2x text-dark"></i> Visualizar señal Paciente 
                </b-btn>
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
                <b-btn  @click="show=true" class="ml-2 mb-3 butt" v-b-modal.modal-center1 variant="warning">
                  Agregar Diagnostico <i class="fas fa-pencil-alt fa-2x"></i>
                </b-btn>

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
            
            <div style="margin-left: 23em;">
                <b-btn size="sm" v-if="state" class=" ml-5 butt justify-content-center" variant="primary" @click="generaRepo()">
                    <i class="fas fa-file-signature fa-2x"></i> Generar reporte
                </b-btn>
            </div>

        </div>

        <div class="text-center mb-2 " v-if="state">
            <div class="card bg-dark text-center">
                <h2> <span class="badge badge-info">{{nombre}}</span></h2>
                <div class="card-body d-flex text-align-center">
                    <h5 class="text-white">- FC: <span class="badge badge-pill badge-info "> {{ tec.FC}}</span> </h5>
                    <h5 class="text-white">- P: <span class="badge badge-pill badge-info "> {{ tec.P}}</span> </h5>
                    <h5 class="text-white">- PR: <span class="badge badge-pill badge-info "> {{ tec.PR}}</span> </h5>
                    <h5 class="text-white">- QRS: <span class="badge badge-pill badge-info" > {{ tec.QRS}}</span> </h5>
                    <h5 class="text-white">- QT_QTC: <span class="badge badge-pill badge-info "> {{ tec.QT_QTC}}</span> </h5>
                    <h5 class="text-white">- P_QRS_T: <span class="badge badge-pill badge-info ">{{ tec.P_QRS_T}}</span> </h5>
                    <h5 class="text-white">- RV5_SV1: <span class="badge badge-pill badge-info "> {{ tec.RV5_SV1}}</span></h5>
                </div>
            </div>
        </div>

    </div>

        <div v-if="anime" id="all" style="margin-left: 6em;" class="" >

            <div class=" container d-flex text-center d-block m-5  ">
                <div class="">
                    <canvas id="myChart1" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4 " ></canvas>
                </div>
                <div>
                    <canvas id="myChart2" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
            </div>

            <div class=" container d-flex text-center d-block m-5 ">
                <div>
                    <canvas id="myChart3" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4"  ></canvas>
                </div>
                <div>
                    <canvas id="myChart4" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4"  ></canvas>
                </div>
            </div>

            <div class=" container d-flex text-center d-block m-5 ">
                <div>
                    <canvas id="myChart5" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4"  ></canvas>
                </div>
                <div>
                    <canvas id="myChart6" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
            </div>

            <div class=" container d-flex text-center d-block m-5 ">
                <div>
                    <canvas id="myChart7"  class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
                <div>
                    <canvas id="myChart8" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
            </div>

            <div class=" container d-flex text-center d-block m-5 ">
                <div>
                    <canvas id="myChart9"  class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
                <div>
                    <canvas id="myChart10" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
            </div>

            <div class=" container d-flex text-center d-block m-5 ">
                <div>
                    <canvas id="myChart11" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4" ></canvas>
                </div>
                <div>
                    <canvas id="myChart12" class=" borde mr-2 n rounded border border-danger  pb-3 pr-2 pt-4"  ></canvas>
                </div>
            </div>

        </div>

        <img v-else src="/src/assets/corazon.png"  height="400" width="400 " class="animation">
</div>



</template>

<script>
import axios from "axios";
import plotly from "plotly.js";
import swal from "sweetalert";
import Chart from "chart.js";
//import saveAs from 'file-saver';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


export default {
  data() {
    return {
      state: false,
      show: false,
      dataseñales: [],
      id: "",
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
      id: "",
      fecha: "....",
      nombre: 'Nombre Paciente',
      diagnostico: "",
      tec: {
        fc: 0,
        P: 0,
        PR: 0,
        QRS: 0,
        QT_QTC: 0,
        P_QRS_T: 0,
        RV5_SV1: 0
      },
      anime: false,
      conn:0,
      charts:[]
    };
  },
  //-------------------------------------------------------------------------
  created() {
      
  },
  //-------------------------------------------------------------------------
  mounted() {
    //this.GraficarSeñal()
    //this.cargarseñal();
  },
  //-------------------------------------------------------------------------
  methods: {
    //------------------------------------------------------------
    cargarseñal() {
        this.anime = true; 
        axios.get("http://localhost:3000/muestras").then(res => {
            this.dataseñales = res.data;
        });
    },
    //------------------------------------------------------------
    generaRepo(){

        var nombre = this.nombre
        var prueba = this.tec
        console.log(prueba);
        function call(img) {
            var doc = new jsPDF();
            doc.setFontSize(7)
            doc.text('Paciente: '+nombre+'  FC:' +prueba.FC +' -P: ' + prueba.P + ' -PR:' +prueba.PR +' -QRS:' +prueba.QRS +'  -QT_QTC: '+prueba.QT_QTC +' -P_QRS_T:' +prueba.P_QRS_T +' -RV5_SV1:' +prueba.RV5_SV1, 5,6)
            doc.addImage(img, 'JPEG',1,10,215,280);
            doc.save('test.pdf');
        }

        html2canvas(document.querySelector("#all")).then(function(canvas) {
            var img = canvas.toDataURL('image/png');
            call(img) 
        });
        
    },
    //------------------------------------------------------------
    Dictamen() {
      var url = "http://localhost:3000/muestras/" + this.id;
      console.log(url);

      axios
        .patch(url, {
          Informacion_Diagnostico: this.diagnostico
        })
        .then(function(response) {
          console.log(response);
          swal({
            icon: "success",
            title: "El diagnostico ha sido guardado con exito"
          });
        })
        .catch(function(error) {
          swal({
            icon: "error",
            title: "El diagnostico no se ha podido guardar"
          });
          console.log(error);
        });
    },
    //------------------------------------------------------------

    //------------------------------------------------------------
    sum() {
       return this.conn = this.conn+1
    },

    GraficarSeñal() {
        this.state = true;
        
        this.I = null;
        this.II = null;
        this.III = null;
        this.AVR = null;
        this.AVL = null;
        this.AVF = null;
        this.V1 = null;
        this.V2 = null;
        this.V3 = null;
        this.V4 = null;
        this.V5 = null;
        this.V6 = null;

        this.I = arguments[1];
        this.II = arguments[2];
        this.III = arguments[3];
        this.AVR = arguments[4];
        this.AVL = arguments[5];
        this.AVF = arguments[6];
        this.V1 = arguments[7];
        this.V2 = arguments[8];
        this.V3 = arguments[9];
        this.V4 = arguments[10];
        this.V5 = arguments[11];
        this.V6 = arguments[12];
        this.nombre = arguments[13];
        this.diagnostico = arguments[14];
        this.id = arguments[15];
        this.tec = arguments[16];
        

        var dI = document.getElementById("myChart1").getContext("2d");
        var dII = document.getElementById("myChart3").getContext("2d");
        var dIII = document.getElementById("myChart5").getContext("2d");
        var avr = document.getElementById("myChart7").getContext("2d");
        var avl = document.getElementById("myChart9").getContext("2d");
        var avf = document.getElementById("myChart11").getContext("2d");
        var v1 = document.getElementById("myChart2").getContext("2d");
        var v2 = document.getElementById("myChart4").getContext("2d");
        var v3 = document.getElementById("myChart6").getContext("2d");
        var v4 = document.getElementById("myChart8").getContext("2d");
        var v5 = document.getElementById("myChart10").getContext("2d");
        var v6 = document.getElementById("myChart12").getContext("2d");
    

        var dataI = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.I,
            labels: arguments[1]
        };
        var dataII = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.II,
            labels: arguments[1]
        };
        var dataIII = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.III
        };
        var dataAVR = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.AVR
        };
        var dataAVF = {
            label:"FC:" +this.tec.FC +"-P: " +this.tec.FC + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.AVF
        };
        var dataAVL = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.AVL
        };
        var dataV1 = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.V1
        };
        var dataV2 = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.V2
        };
        var dataV3 = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.V3
        };
        var dataV4 = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.V4
        };
        var dataV5 = {
            label:"FC:" +this.tec.FC +"-P: " + this.tec.P + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.V5
        };
        var dataV6 = {
            label:"FC:" +this.tec.FC +"-P: " +this.tec.FC + "-PR:" +this.tec.PR +"-QRS :" +this.tec.QRS +"-QT_QTC: " +this.tec.QT_QTC +"-P_QRS_T:" +this.tec.P_QRS_T +"-RV5_SV1:" +this.tec.RV5_SV1,
            borderColor: "black",
            borderWidth: 1.2,
            lineTension: 0.3,
            fill: false,
            backgroundColor: "transparent",
            options: {
            pointStyle: "line"
            },
            data: this.V6
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

        var lineChart1

        lineChart1 = new Chart(dI, {
            type: "line",
            exportEnabled: true,
            data: speedData1,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false,
                labels: {
                fontColor: "rgb(9, 9, 9)",
                fontSize: 11,
                padding: 8
                }
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion I",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        

        var lineChart2 = new Chart(dII, {
            type: "line",
            data: speedData2,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false,
                labels: {
                fontColor: "rgb(9, 9, 9)",
                fontSize: 11,
                padding: 8
                }
            },
            title: {
                display: true,
                text: arguments[13] + " ---- Derivacion II",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart3 = new Chart(dIII, {
            type: "line",
            data: speedData3,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false,
                labels: {
                fontColor: "rgb(9, 9, 9)",
                fontSize: 11,
                padding: 8
                }
            },
            title: {
                display: true,
                text: arguments[13] + " ---- Derivacion III",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart4 = new Chart(avf, {
            type: "line",
            data: speedData4,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false,
                labels: {
                fontColor: "rgb(9, 9, 9)",
                fontSize: 11,
                padding: 8
                }
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion AVF",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart5 = new Chart(avl, {
            type: "line",
            data: speedData5,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false,
                labels: {
                fontColor: "rgb(9, 9, 9)",
                fontSize: 11,
                padding: 8
                }
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion AVL",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart6 = new Chart(avr, {
            type: "line",
            data: speedData6,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false,
                labels: {
                fontColor: "rgb(9, 9, 9)",
                fontSize: 11,
                padding: 8
                }
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion AVR",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart7 = new Chart(v1, {
            type: "line",
            data: speedData7,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion V1",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });

        var lineChart8 = new Chart(v2, {
            type: "line",
            data: speedData8,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion V2",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart9 = new Chart(v3, {
            type: "line",
            data: speedData9,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion V3",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });

        
        var lineChart10 = new Chart(v4, {
            type: "line",
            data: speedData10,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion V4",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });
        
        var lineChart11 = new Chart(v5, {
            type: "line",
            data: speedData11,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text:  " ---- Derivacion V5",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        });

    
        var lineChart12 = new Chart(v6, {
            type: "line",
            data: speedData12,
            options: {
            elements: {
                point: {
                radius: 0
                }
            },
            scales: {
                xAxes: [
                {
                    display: false
                }
                ],
                yAxes: [
                {
                    display: true
                }
                ]
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text:  arguments[13] + " ---- Derivacion V6",
                fontColor: "rgb(9, 9, 9)",
                fontSize: 20
            }
            }
        }); 

      /*  setInterval(() => {
            lineChart1.destroy()
            lineChart2.destroy()
            lineChart3.destroy()
            lineChart4.destroy()
            lineChart5.destroy()
            lineChart6.destroy()
            lineChart7.destroy()
            lineChart8.destroy()
            lineChart9.destroy()
            lineChart10.destroy()
            lineChart11.destroy()
            lineChart12.destroy()
        },100000)
         */      
    }
  }
  //-------------------------------------------------------------------------
};
</script>
<style scoped>
#chart svg {
  height: 400px;
}

.butt {
  cursor: pointer;
}

#titulo {
  font-size: 60px;
  text-shadow: -2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000,
    2px -2px 1px #000;
}

.borde {
     border-width:4px !important;
}

.n {
  width: 600px;
  height: 250px;
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
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,
      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,
      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,
      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,
      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}

.ball-grid-pulse > div {
  background-color: orange;
}

.animation{
    position: absolute;
    top: 55%;
    left: 45%;
    margin-top: -128px;
    margin-left: -128px;
    
    animation-name: corazon;
    animation-duration: .8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;    
}

@keyframes corazon{
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.1);
    }
}


</style>
