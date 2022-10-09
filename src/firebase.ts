// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAFWScQYE2n0cqT1Shp2sMz2aTFBLozH2I",
  authDomain: "school-1fea9.firebaseapp.com",
  projectId: "school-1fea9",
  storageBucket: "school-1fea9.appspot.com",
  messagingSenderId: "581714455275",
  appId: "1:581714455275:web:8c1558876402d7b9712cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
export {db}
