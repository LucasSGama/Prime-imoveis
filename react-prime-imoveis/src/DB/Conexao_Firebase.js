// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMCviqLmTay3J4yEv-Xc1gLh0kZa9M0ec",
  authDomain: "prime-imoveis-77d1d.firebaseapp.com",
  projectId: "prime-imoveis-77d1d",
  storageBucket: "prime-imoveis-77d1d.appspot.com",
  messagingSenderId: "520048431287",
  appId: "1:520048431287:web:4415225dbd32e9ae363d32",
  measurementId: "G-XY4XT3ZBLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);