import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyDTQ4L93MnSOtJsU4qPDnLs78Avj0xkiQ4",
  authDomain: "week12-b0357.firebaseapp.com",
  databaseURL: "https://week12-b0357-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "week12-b0357",
  storageBucket: "week12-b0357.appspot.com",
  messagingSenderId: "248716996626",
  appId: "1:248716996626:web:139b6b669ec0ef638c28cb"
});

const FIREBASE = firebase;

export default FIREBASE;