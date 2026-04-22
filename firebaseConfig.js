import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAF3IOhzGDWeruDGpAtXSsjfWxYtdtpYv8",
    authDomain: "projeto-senai-loja.firebaseapp.com",
    projectId: "projeto-senai-loja",
    storageBucket: "projeto-senai-loja.firebasestorage.app",
    messagingSenderId: "982070400488",
    appId: "1:982070400488:web:ea15b21f6346e3bea7005d"
  };

  // Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o auth para ser usado no script.js
export const auth = getAuth(app);