// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzgBlsvk8nGe-vhTu8oZTmi0o2Q3X8zrI",
  authDomain: "native-app-13fe9.firebaseapp.com",
  projectId: "native-app-13fe9",
  storageBucket: "native-app-13fe9.appspot.com",
  messagingSenderId: "934736649940",
  appId: "1:934736649940:web:8615d20a9fef9162a0a541",
  measurementId: "G-L1QHV1RGW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth(app);

