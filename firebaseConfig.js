import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAF3IOhzGDWeruDGpAtXSsjfWxYtdtpYv8",
    authDomain: "projeto-senai-loja.firebaseapp.com",
    // IMPORTANTE: A URL do Realtime Database aparece no console do Firebase
    databaseURL: "https://projeto-senai-loja-default-rtdb.firebaseio.com", 
    projectId: "projeto-senai-loja",
    storageBucket: "projeto-senai-loja.firebasestorage.app",
    messagingSenderId: "982070400488",
    appId: "1:982070400488:web:ea15b21f6346e3bea7005d"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as ferramentas
export const auth = getAuth(app);           // Para Login
export const db = getFirestore(app);        // Para Firestore (se ainda usar)
export const rtdb = getDatabase(app);       // Para Realtime Database (estoque)
export const storage = getStorage(app);     // Para Fotos