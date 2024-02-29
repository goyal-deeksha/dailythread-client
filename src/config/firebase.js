// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUPdqERf6Oay1RvVVDRNMCKsjugR7UrpA",
  authDomain: "dailythread-1b440.firebaseapp.com",
  projectId: "dailythread-1b440",
  storageBucket: "dailythread-1b440.appspot.com",
  messagingSenderId: "12744688189",
  appId: "1:12744688189:web:cb71b63732c1c1365ee054",
  measurementId: "G-ZEGCRHJ3C8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
