import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBAqcKqe32OiVImq0lgla_24VIAClNTltg",
  authDomain: "typing-test-eb649.firebaseapp.com",
  projectId: "typing-test-eb649",
  storageBucket: "typing-test-eb649.appspot.com",
  messagingSenderId: "324568645535",
  appId: "1:324568645535:web:a63478ede19ff7ee1987aa",
  measurementId: "G-6JF4LS0C0J"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebaseApp.firestore();

  export {auth,db}