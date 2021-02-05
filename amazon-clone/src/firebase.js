import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD39diPdqTRrBPf6xnC-o7RI7d8sPYpQT4",
  authDomain: "clone-b071c.firebaseapp.com",
  databaseURL: "https://clone-b071c.firebaseio.com",
  projectId: "clone-b071c",
  storageBucket: "clone-b071c.appspot.com",
  messagingSenderId: "984674585474",
  appId: "1:984674585474:web:23b98d3a2624e5f1f19d9b",
  measurementId: "G-CHJK6EWC11"
});

const auth = firebase.auth();

export { auth };