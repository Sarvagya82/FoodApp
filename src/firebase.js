// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCubtm0ul62z0pxbetF9biUME9rmMlWh6A",
    authDomain: "food-backend-5bc74.firebaseapp.com",
    projectId: "food-backend-5bc74",
    storageBucket: "food-backend-5bc74.appspot.com",
    messagingSenderId: "777500501133",
    appId: "1:777500501133:web:28947c71af5aa39af72ec4",
    measurementId: "G-4CBEK3WR33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
