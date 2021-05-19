import firebase from "firebase/app";
import "firebase/firestore";


 var firebaseConfig = {
    apiKey: "AIzaSyCckrPg1jZPkZEx8HMC2KiqJXGpidCQysM",
    authDomain: "projeto-rn-dd2fd.firebaseapp.com",
    projectId: "projeto-rn-dd2fd",
    storageBucket: "projeto-rn-dd2fd.appspot.com",
    messagingSenderId: "1092407786960",
    appId: "1:1092407786960:web:1603616cd7f4438411cdd5",
    measurementId: "G-06HDFYJSFL"
  };

if(firebase.apps.length === 0){
   firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
firebase.firestore().settings({ experimentalForceLongPolling: true });


export default {
  firebase,
  db
}