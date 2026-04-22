// Importa o auth do seu outro arquivo
import { auth } from "./firebaseConfig.js";

// Importa as funções de autenticação diretamente da biblioteca
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// --- Elementos do HTML ---
const authSection = document.getElementById('auth-section');
const btnOpenAuth = document.getElementById('open-auth');
const btnAction = document.getElementById('btn-action');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

// --- Função de Cadastro/Login ---
btnAction.onclick = async () => {
    const email = emailField.value;
    const password = passwordField.value;

    try {
        // Tenta fazer login, se quiser cadastrar use createUserWithEmailAndPassword
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logado com sucesso!");
    } catch (error) {
        alert("Erro: " + error.message);
    }
};

// --- Monitor de Usuário ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        btnOpenAuth.innerText = "Sair";
        console.log("Logado como:", user.email);
    } else {
        btnOpenAuth.innerText = "Minha Conta";
    }
});