// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// あなたの Firebase 設定（そのままでOK）
const firebaseConfig = {
  apiKey: "AIzaSyCWOtULoN3ViQ0Lzdk7giwVvyC2F2drydg",
  authDomain: "kidmoneyapp.firebaseapp.com",
  projectId: "kidmoneyapp",
  storageBucket: "kidmoneyapp.firebasestorage.app",
  messagingSenderId: "234157144860",
  appId: "1:234157144860:web:04a6f1317b6491898d98d9",
  measurementId: "G-9FQB61N6DY"
};

// Firebase初期化
const app = initializeApp(firebaseConfig);

// Firestoreのインスタンスを作成
export const db = getFirestore(app);
