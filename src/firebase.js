import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // Have the firebase config here
  apiKey: "AIzaSyCrS_dG7CMODcRwUyvVyVGWJXe7m7L5l5U",
  authDomain: "challenge-bcdd5.firebaseapp.com",
  projectId: "challenge-bcdd5",
  storageBucket: "challenge-bcdd5.appspot.com",
  messagingSenderId: "119688101557",
  appId: "1:119688101557:web:ed68496646c7a81ff1c8fc",
  measurementId: "G-G6W84MJ35E",
  databaseURL: "https://challenge-bcdd5-default-rtdb.firebaseio.com/ ",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
