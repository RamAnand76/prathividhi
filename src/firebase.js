// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAts3LVUqv9SHx3OoL5k2SBONft8LudGdY",
  authDomain: "prathividhi.firebaseapp.com",
  databaseURL: "https://prathividhi-default-rtdb.firebaseio.com",
  projectId: "prathividhi",
  storageBucket: "prathividhi.appspot.com",
  messagingSenderId: "784454293835",
  appId: "1:784454293835:web:5a982a432e63d995d170ce",
  measurementId: "G-HHENQX7PJL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;