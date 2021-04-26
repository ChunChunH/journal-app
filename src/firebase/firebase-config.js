import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAxHwN0ggfwSnPotGPEBX7QQ0kTOI6BN0M",
    authDomain: "react-app-cursos-e5a50.firebaseapp.com",
    projectId: "react-app-cursos-e5a50",
    storageBucket: "react-app-cursos-e5a50.appspot.com",
    messagingSenderId: "916735107078",
    appId: "1:916735107078:web:9fc0df0ac64198d4c92387"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}