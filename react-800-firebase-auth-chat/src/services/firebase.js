import firebase from "firebase";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";
const config = {
  apiKey: "AIzaSyDmrSP2HPlykkF46YqJuN6VgcBOs5HL3b0",
  authDomain: "react-firebase-c028a.firebaseapp.com",
  databaseURL: "https://react-firebase-c028a.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
