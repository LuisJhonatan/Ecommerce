import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp-TIQx4NTCjq8mcVDYnmPtj_AOGxpqnk",
  authDomain: "ziba-mujer-d6c01.firebaseapp.com",
  projectId: "ziba-mujer-d6c01",
  storageBucket: "ziba-mujer-d6c01.appspot.com",
  messagingSenderId: "969563350539",
  appId: "1:969563350539:web:64c2a376dbf717c2d8090e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
