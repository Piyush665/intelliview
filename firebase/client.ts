// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8DyEQ6Lnzc8WpHn7BvhUF770oMRFrV5U",
  authDomain: "intelliview-91e95.firebaseapp.com",
  projectId: "intelliview-91e95",
  storageBucket: "intelliview-91e95.firebasestorage.app",
  messagingSenderId: "680024660183",
  appId: "1:680024660183:web:bc546494b0ff9c2bd27892",
  measurementId: "G-GJ34ZZLGCY"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);