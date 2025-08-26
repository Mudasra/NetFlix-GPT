// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV4-1hawg0pqiMrehA9dEsWQ6_fdVLfx4",
  authDomain: "netflix-gpt-7bed7.firebaseapp.com",
  projectId: "netflix-gpt-7bed7",
  storageBucket: "netflix-gpt-7bed7.firebasestorage.app",
  messagingSenderId: "254376319681",
  appId: "1:254376319681:web:d755ef170dd967b7399240",
  measurementId: "G-91H51GHV5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();