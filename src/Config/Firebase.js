import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'





const firebaseConfig = {
    apiKey: "AIzaSyCmmkAQ0O93fp7QZvPrJXg-U-v4j0x_qoA",
    authDomain: "web2022-60ae2.firebaseapp.com",
    projectId: "web2022-60ae2",
    storageBucket: "web2022-60ae2.appspot.com",
    messagingSenderId: "941167803948",
    appId: "1:941167803948:web:2ea90578921fae9804db89",
    measurementId: "G-WXBWY9RNBD"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase