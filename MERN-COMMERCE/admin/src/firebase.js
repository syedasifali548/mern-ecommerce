// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRuWRHnQOlj4Sp8Yj0-mYcci5eMIdWbJs",
  authDomain: "e-shop-d36e7.firebaseapp.com",
  projectId: "e-shop-d36e7",
  storageBucket: "e-shop-d36e7.appspot.com",
  messagingSenderId: "127786055423",
  appId: "1:127786055423:web:28ceb176479b2889c03eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app