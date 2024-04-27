// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04nfuX_3J8UMBeqo9yP3nGJs3ekaSQXo",
  authDomain: "wanderwise-65043.firebaseapp.com",
  projectId: "wanderwise-65043",
  storageBucket: "wanderwise-65043.appspot.com",
  messagingSenderId: "692754729353",
  appId: "1:692754729353:web:591e0f012ec3a8f9a17958",
  measurementId: "G-0Z635S0L6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;