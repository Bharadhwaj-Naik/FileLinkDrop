// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDRmPzP1VWbKuAyrd-tTuSXyuhv_bYjE",
  authDomain: "gapgenie.firebaseapp.com",
  projectId: "gapgenie",
  storageBucket: "gapgenie.firebasestorage.app",
  messagingSenderId: "147574816692",
  appId: "1:147574816692:web:29f07dcf721af1a108bce1",
  measurementId: "G-4971GVECT5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);