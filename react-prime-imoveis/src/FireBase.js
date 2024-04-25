// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWRW3jobvm9vD0VN78God7HuBh390T5Qo",
  authDomain: "prime-imoveis-6504e.firebaseapp.com",
  projectId: "prime-imoveis-6504e",
  storageBucket: "prime-imoveis-6504e.appspot.com",
  messagingSenderId: "897691611950",
  appId: "1:897691611950:web:b539c27fb290b69a3a00bf",
  measurementId: "G-LJKXCHM9YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);