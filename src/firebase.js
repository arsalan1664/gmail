import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2-uW-5Saw0wsRe_w3JPiOchNE3ucJSsY",
    authDomain: "clone-24bfb.firebaseapp.com",
    projectId: "clone-24bfb",
    storageBucket: "clone-24bfb.appspot.com",
    messagingSenderId: "267707066962",
    appId: "1:267707066962:web:f23ca96479774ac27fcd8b"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore();
  export default db;