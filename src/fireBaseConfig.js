import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDfW64z5kIsJXvJlJ8XVZgIjOPxSq20Q48",
  authDomain: "typing-speed-a185b.firebaseapp.com",
  projectId: "typing-speed-a185b",
  storageBucket: "typing-speed-a185b.appspot.com",
  messagingSenderId: "645889974579",
  appId: "1:645889974579:web:206e8dfbe89342de055e46",
  measurementId: "G-VWBL7YV8PP"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebaseApp.firestore();

  export {auth,db}
