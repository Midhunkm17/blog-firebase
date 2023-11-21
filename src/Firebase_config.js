import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe9sbUjlks1l197-fmIeL0u22HXHtSl-k",
  authDomain: "blog-6d368.firebaseapp.com",
  projectId: "blog-6d368",
  storageBucket: "blog-6d368.appspot.com",
  messagingSenderId: "41755944741",
  appId: "1:41755944741:web:5dcfede399edce80df9ccc",
  measurementId: "G-QVET041T0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app);