// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "YOUR OWN API KEY",
    authDomain: "YOUR OWN AUTH DOMAIN",
    projectId: "YOUR OWN PROJECT NAME",
    storageBucket: "YOUR OWN STORAGE BUCKET",
    messagingSenderId: "YOUR OWN MSG ID",
    appId: "YOUR OWN API ID",
    measurementId: "YOUR OWN MEASUREMENT ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
