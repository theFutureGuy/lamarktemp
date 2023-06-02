import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYcvr2GyrozwD3M-zhLmrwv4DMT2uCDDA",
  authDomain: "lamark-85c8a.firebaseapp.com",
  projectId: "lamark-85c8a",
  storageBucket: "lamark-85c8a.appspot.com",
  messagingSenderId: "968919601634",
  appId: "1:968919601634:web:429c2d733349615bb4e9bb",
  measurementId: "G-Z97J1LYGTP"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

