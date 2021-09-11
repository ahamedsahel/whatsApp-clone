// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDNfDrcoV8XMLACpPF8aCzusNPkch3Smy0",
  authDomain: "whatsapp-clone-b59a3.firebaseapp.com",
  projectId: "whatsapp-clone-b59a3",
  storageBucket: "whatsapp-clone-b59a3.appspot.com",
  messagingSenderId: "652284832716",
  appId: "1:652284832716:web:24d63daada13d439938b69",
  measurementId: "G-V2SQZ6KL2M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()


export {auth , provider };

export default db;