import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAF3IOhzGDWeruDGpAtXSsjfWxYtdtpYv8",
    authDomain: "projeto-senai-loja.firebaseapp.com",
    databaseURL: "https://projeto-senai-loja-default-rtdb.firebaseio.com",
    projectId: "projeto-senai-loja",
    storageBucket: "projeto-senai-loja.appspot.com",
    messagingSenderId: "982070400488",
    appId: "1:982070400488:web:ea15b21f6346e3bea7005d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const rtdb = getDatabase(app); // Para produtos
export const storage = getStorage(app); // Para fotos