import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzqQvsbsAYy3TS-52qAlzxs_i0XFC2PKw",
  authDomain: "foodevn-6f97e.firebaseapp.com",
  projectId: "foodevn-6f97e",
  storageBucket: "foodevn-6f97e.appspot.com",
  messagingSenderId: "717401261058",
  appId: "1:717401261058:web:88c474fc893439e08c931b",
  measurementId: "G-RZ4LDSD0K9",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

auth.setPersistence("local");

export default firebase;
export { googleProvider, facebookProvider, auth, db };
