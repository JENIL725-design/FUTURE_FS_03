// src/app/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// PASTE YOUR KEYS FROM FIREBASE CONSOLE HERE:
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "future-interns-steam.firebaseapp.com",
  projectId: "future-interns-steam",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);