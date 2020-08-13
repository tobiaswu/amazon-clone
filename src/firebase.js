import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBl2QovB3oPmPMw53lZ855vC2Q_NXOxapI",
  authDomain: "clone-c0821.firebaseapp.com",
  databaseURL: "https://clone-c0821.firebaseio.com",
  projectId: "clone-c0821",
  storageBucket: "clone-c0821.appspot.com",
  messagingSenderId: "772687825644",
  appId: "1:772687825644:web:de930a89e0b6c77cb9f3c9",
  measurementId: "G-14HKLC86NX",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
