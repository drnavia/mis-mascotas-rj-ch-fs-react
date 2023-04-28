// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import Cloud Firestore
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqDCL7m6thjtBTjDx2O8pkKtJjfkmj3Ow",
    authDomain: "ecommerce-b96b7.firebaseapp.com",
    projectId: "ecommerce-b96b7",
    storageBucket: "ecommerce-b96b7.appspot.com",
    messagingSenderId: "437571695231",
    appId: "1:437571695231:web:acb1ffe1080dab3e77854a"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
// Initialize Firestore
const db = getFirestore( app );
export default db;