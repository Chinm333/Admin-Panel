// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU3v_PS_xKtX51emten1WL2nLUHPGqPdc",
    authDomain: "pomodro-aa031.firebaseapp.com",
    projectId: "pomodro-aa031",
    storageBucket: "pomodro-aa031.appspot.com",
    messagingSenderId: "964991782764",
    appId: "1:964991782764:web:1b38c1744e3220a2ce6d49",
    measurementId: "G-0S41VTWSRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);