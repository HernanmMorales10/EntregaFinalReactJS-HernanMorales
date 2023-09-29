import  firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDer9hYMZxIsF-HgnWf-AhWbwaQETV3D0",
  authDomain: "proyecto-reactjs-aa0a8.firebaseapp.com",
  projectId: "proyecto-reactjs-aa0a8",
  storageBucket: "proyecto-reactjs-aa0a8.appspot.com",
  messagingSenderId: "666849701382",
  appId: "1:666849701382:web:82c42dbcb3a7a1fb3c5d87"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore =  ()  =>{
    return firebase.firestore(app)
}