import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvnG0Xp003RQXE5B5p77_8vY5TvGWtgqM",
  authDomain: "clone-4a11e.firebaseapp.com",
  databaseURL: "https://clone-4a11e.firebaseio.com",
  projectId: "clone-4a11e",
  storageBucket: "clone-4a11e.appspot.com",
  messagingSenderId: "744022302866",
  appId: "1:744022302866:web:6e7585d9722cf79019c64b",
  measurementId: "G-N5C5JY7M05"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };