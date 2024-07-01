import { initializeApp } from "firebase/app";
import {
  // GoogleAuthProvider,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyApF5jJvwBNrSItl-fmMTVXSfleCdgMm6A",
  authDomain: "wallpaper-3ee8e.firebaseapp.com",
  projectId: "wallpaper-3ee8e",
  storageBucket: "wallpaper-3ee8e.appspot.com",
  messagingSenderId: "994574727959",
  appId: "1:994574727959:web:44da8c1cdbe9f75c14d552",
};

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
const auth = initializeAuth(app,{
  persistence:getReactNativePersistence(AsyncStorage)
});

export { db,auth };
