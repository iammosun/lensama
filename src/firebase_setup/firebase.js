
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from 'firebase/auth';


//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGjeuyenK1pMBDYe7oxx_u6MI_SIZOXq4",
  authDomain: "lensama-1c295.firebaseapp.com",
  projectId: "lensama-1c295",
  storageBucket: "lensama-1c295.appspot.com",
  messagingSenderId: "994156739535",
  appId: "1:994156739535:web:27d63b4cdd851763fef0ba",
  measurementId: "G-1JZ6QDZTHS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
export const auth = getAuth(app);



//signing in with email and password
export const SignWithEmailAndPassword = (e, email, password) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      return true;

    }).catch((err) => {
      console.log(err);
      return false;
    });
}



//signing in with Google
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = (e, navigateToHome) => {
  signInWithPopup(auth, googleProvider).then(res => {
    e.preventDefault();
    console.log(res)
    navigateToHome('/');
    return true;

  }).catch(err => {
    console.log(err);
    return false;
  })
}


// signing up with email and password
export const signUpWithEmailAndPassword = (
  e, email, password, displayName, navigateToHome) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: displayName
      })
      console.log(userCredential);
      navigateToHome('/');
      return true;

    }).catch((err) => {
      console.log(err);
      return false;
    });
}
