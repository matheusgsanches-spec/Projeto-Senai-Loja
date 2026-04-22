import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const loginForm = document.querySelector('form');

loginForm.onsubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const isAdmin = document.getElementById('perfil-admin').checked;

    try {
        // Tenta apenas o LOGIN. Se não existir, vai para o catch (erro)
        await signInWithEmailAndPassword(auth, email, password);
        
        if (isAdmin) {
            alert("Bem-vindo, Administrador!");
            window.location.href = "admin.html";
        } else {
            alert("Login realizado! Boas compras.");
            window.location.href = "index.html";
        }

    } catch (error) {
        console.error("Erro no login:", error.code);
        
        // Tratamento de erros específicos de login
        if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            alert("E-mail ou senha incorretos. Verifique seus dados ou cadastre-se.");
        } else {
            alert("Erro ao tentar entrar: " + error.message);
        }
    }
};