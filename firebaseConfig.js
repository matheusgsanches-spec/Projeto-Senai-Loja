import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAF3IOhzGDWeruDGpAtXSsjfWxYtdtpYv8",
    authDomain: "projeto-senai-loja.firebaseapp.com",
    projectId: "projeto-senai-loja",
    storageBucket: "projeto-senai-loja.firebasestorage.app",
    messagingSenderId: "982070400488",
    appId: "1:982070400488:web:ea15b21f6346e3bea7005d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);