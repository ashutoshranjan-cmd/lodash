// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7PXj189huEeFXbIwf1BKm45oTtXJgFug",
  authDomain: "practice-d33ed.firebaseapp.com",
  projectId: "practice-d33ed",
  storageBucket: "practice-d33ed.appspot.com",
  messagingSenderId: "761170309087",
  appId: "1:761170309087:web:32a5f658def3eaeeb9de6a",
  measurementId: "G-CB7DM19XL8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
