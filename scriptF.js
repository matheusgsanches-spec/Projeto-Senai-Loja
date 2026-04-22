import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const loginForm = document.querySelector('form');

if (loginForm) {
    loginForm.onsubmit = async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const isAdmin = document.getElementById('perfil-admin').checked;

        try {
            // Autentica o usuário no Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Logado com sucesso:", userCredential.user);

            // Redireciona dependendo do perfil selecionado
            if (isAdmin) {
                window.location.href = "admin.html";
            } else {
                window.location.href = "index.html";
            }
        } catch (error) {
            console.error("Erro no login:", error.code);
            alert("Falha no login: Verifique e-mail e senha.");
        }
    };
}