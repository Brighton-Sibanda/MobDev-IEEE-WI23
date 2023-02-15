// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import * as firebase from "firebase"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgVL-b_NhdZ4-UJ3rfAX6FJDn7LmwB1BY",
  authDomain: "table-it-27e42.firebaseapp.com",
  projectId: "table-it-27e42",
  storageBucket: "table-it-27e42.appspot.com",
  messagingSenderId: "807898491526",
  appId: "1:807898491526:web:fb9da332ee0694c81abf07",
  measurementId: "G-MR2CQ5D4W5"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig)
} 
else{
    app = firebase.app()
}
const auth = firebase.auth()
export {auth}


const analytics = getAnalytics(app);