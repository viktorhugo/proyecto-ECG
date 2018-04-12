// ARCHIVO DE CONEXION A FIREBASE

import firebase from 'firebase'
import Vue from 'vue'
Vue.use(firebase)

//DATOS DEL PROYECTO EN FIREBASE
export var config = {
    apiKey: "AIzaSyDNtp2lndBJQb-PN7Ia4oyuRkbaRLcFyCU",
    authDomain: "senales-ecg.firebaseapp.com",
    databaseURL: "https://senales-ecg.firebaseio.com",
    projectId: "senales-ecg",
    storageBucket: "senales-ecg.appspot.com",
    messagingSenderId: "756180409177"
  }
