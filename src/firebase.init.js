// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWrsVJ1c6OY6kYMLPsXDYzoBck_rvI67M",
  authDomain: "todo-4a5e3.firebaseapp.com",
  projectId: "todo-4a5e3",
  storageBucket: "todo-4a5e3.appspot.com",
  messagingSenderId: "75624681871",
  appId: "1:75624681871:web:d1f0baa1fddca19cb47bfa",
  measurementId: "G-TVSTNPVC9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);
export default auth;
