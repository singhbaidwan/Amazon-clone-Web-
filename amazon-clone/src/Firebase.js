import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrK78T5rABAeh5bwVPjhcOVrnAbuR4R5o",
  authDomain: "clone-b9199.firebaseapp.com",
  projectId: "clone-b9199",
  storageBucket: "clone-b9199.appspot.com",
  messagingSenderId: "935771345559",
  appId: "1:935771345559:web:e33b9d86ce9b3171224fd2",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
