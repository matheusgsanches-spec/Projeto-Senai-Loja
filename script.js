import { auth, rtdb } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

document.querySelector("form").onsubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;
    const isAdmin = document.getElementById("perfil-admin").checked;

    try {
        const cred = await signInWithEmailAndPassword(auth, email, senha);
        const user = cred.user;

        const snapshot = await get(ref(rtdb, "usuarios/" + user.uid));
        const tipo = snapshot.val().tipo;

        // 🔥 controle de acesso
        if (isAdmin && tipo === "admin") {
            window.location.href = "admin.html";
        } 
        else if (!isAdmin && tipo === "cliente") {
            window.location.href = "index.html";
        } 
        else {
            alert("Você não tem permissão para esse acesso!");
        }

    } catch (error) {
        alert("Erro: " + error.message);
    }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
    .then(() => console.log("SW registrado"))
    .catch(err => console.log("Erro:", err));
}