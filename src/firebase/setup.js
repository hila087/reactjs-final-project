import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


// -- firebase configurations
const firebaseConfig = {
    apiKey: "AIzaSyDQ8DuMm1kSYVJaq9DGnvhBzyG6_8w8lEM",
    authDomain: "reactjs-end-project-01.firebaseapp.com",
    projectId: "reactjs-end-project-01",
    storageBucket: "reactjs-end-project-01.appspot.com",
    messagingSenderId: "602989525870",
    appId: "1:602989525870:web:19f0501c7404e9300d9f7f",
    measurementId: "G-KXZGPLBVD3"
}

// -- initialize firestore
initializeApp(firebaseConfig)

export const firestore = getFirestore()