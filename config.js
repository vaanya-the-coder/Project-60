 import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBF4daUkQEGeiJCvEkCETiZOFDgHyrM_u8",
    authDomain: "bombay-international-final.firebaseapp.com",
    databaseURL: "https://bombay-international-final.firebaseio.com",
    projectId: "bombay-international-final",
    storageBucket: "bombay-international-final.appspot.com",
    messagingSenderId: "216046228955",
    appId: "1:216046228955:web:4cf9cf2221fb246488c3fe"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.database();
 
 

  