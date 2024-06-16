// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD8W4v36NLXRja_pGpyuwFOUFS5n8UrSEU",
  authDomain: "wallpaper-71ad2.firebaseapp.com",
  projectId: "wallpaper-71ad2",
  storageBucket: "wallpaper-71ad2.appspot.com",
  messagingSenderId: "605039525162",
  appId: "1:605039525162:web:61cc6c6a23ed44badcf253",
  measurementId: "G-SG990TRY5P"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export {storage,}