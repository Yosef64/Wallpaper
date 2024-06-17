import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDPLo5gLFNUZTuefPhezjIo2x2HqQogLvk",
  authDomain: "habeshanwall-4dceb.firebaseapp.com",
  projectId: "habeshanwall-4dceb",
  storageBucket: "habeshanwall-4dceb.appspot.com",
  messagingSenderId: "720802392220",
  appId: "1:720802392220:web:626ef2b2818851ff4be559",
  measurementId: "G-W2898D1T2F"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };