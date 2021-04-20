import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDfWFL9gBcgycGqN1Vsxc973rWaG5z-5oY",
    authDomain: "week11-login-a02a1.firebaseapp.com",
    projectId: "week11-login-a02a1",
    storageBucket: "week11-login-a02a1.appspot.com",
    messagingSenderId: "819206079283",
    appId: "1:819206079283:web:460b8078fabe095d763446",
    measurementId: "G-G3RGK1V4P1"
};

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb