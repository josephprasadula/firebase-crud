// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_LXuw1dyXj0rDQHufNW1dPgHRcW24ztw",
  authDomain: "asd3r4rgfg5.firebaseapp.com",
  projectId: "asd3r4rgfg5",
  storageBucket: "asd3r4rgfg5.appspot.com",
  messagingSenderId: "433403824310",
  appId: "1:433403824310:web:6f9d0a758c514634837e17",
  measurementId: "G-VNKD912MHX"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
// const analytics = getAnalytics(app);