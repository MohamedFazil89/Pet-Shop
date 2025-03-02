import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CardData from "../CardData.js"

// Firebase configuration (Use your own config)
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
const db = getFirestore(app);

// Sample product data
const products = [
  {
    id: 1,
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRkQU8blCxzOB0HQ54lRRQ8M9jS_gCFJhflVL5lwn0oOMavU95HOEutlTJqVxFn4r5vKyJqwYRt0k0RkfDyakQaot155eYlwXKZiRHeSpVgBqwg1VbkCOR7jzY",
    title: "Premium Dog Food",
    description: "Nutritious chicken and rice formula",
    price: "25.99"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    title: "Organic Cat Treats",
    description: "Grain-free salmon-flavored treats",
    price: "12.50"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
    title: "Dental Chew Sticks",
    description: "Helps freshen breath and clean teeth",
    price: "10.99"
  }
];

// Function to upload data
const uploadData = async () => {
  try {
    const collectionRef = collection(db, "products"); // Firestore collection name

    for (const carddata of CardData) {
      await addDoc(collectionRef, carddata);
      console.log(`Uploaded: ${carddata.title}`);
    }
    
    console.log("✅ All data uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading data: ", error);
  }
};

// Run the function
uploadData();
