// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAxScdLfeW3XCAKRmP8tZNseC3zh5HZ_os",
  authDomain: "f1-racing-7c40d.firebaseapp.com",
  projectId: "f1-racing-7c40d",
  storageBucket: "f1-racing-7c40d.firebasestorage.app",
  messagingSenderId: "155687955970",
  appId: "1:155687955970:web:a8597d4990cb29dff4011b",
  measurementId: "G-LZBTNZBF81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);