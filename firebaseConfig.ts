import {initializeApp} from "firebase/app";
import {initializeAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrAs3xMKZhUWPLujnDtvcgCI2aW0mz8YE",
  authDomain: "app2-dab2b.firebaseapp.com",
  projectId: "app2-dab2b",
  storageBucket: "app2-dab2b.appspot.com",
  messagingSenderId: "889135494709",
  appId: "1:889135494709:web:6ebfe7a4e83682ad23e37c"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{persistence:getReactNativePersistence(AsyncStorage)}) // setPersistence state
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
