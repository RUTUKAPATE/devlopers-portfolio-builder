// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWGFgye35H5hAXaxJlP4KxBCMTM_johtw",
  authDomain: "projects-85427.firebaseapp.com",
  projectId: "projects-85427",
  storageBucket: "projects-85427.appspot.com",
  messagingSenderId: "801609552109",
  appId: "1:801609552109:web:15f6fb6816015eedf8bce4",
  measurementId: "G-8V6RB8E06J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);