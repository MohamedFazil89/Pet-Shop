// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2NSCFQGPzcPguG-ZcgESJo1KvwSUGWsc",
  authDomain: "sigin-d13d1.firebaseapp.com",
  databaseURL: "https://sigin-d13d1-default-rtdb.firebaseio.com",
  projectId: "sigin-d13d1",
  storageBucket: "sigin-d13d1.firebasestorage.app",
  messagingSenderId: "1061138775748",
  appId: "1:1061138775748:web:f6607715fa1056f79d5391",
  measurementId: "G-Z383TC8PM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore instance