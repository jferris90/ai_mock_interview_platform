// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3uWUrZ0QMyxw92EhVB_iPJZvMG_oUuv4",
    authDomain: "ai-interview-prep-a30a5.firebaseapp.com",
    projectId: "ai-interview-prep-a30a5",
    storageBucket: "ai-interview-prep-a30a5.firebasestorage.app",
    messagingSenderId: "362913487713",
    appId: "1:362913487713:web:45abb251f4783503014320",
    measurementId: "G-EYS7Q3MZHJ"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);