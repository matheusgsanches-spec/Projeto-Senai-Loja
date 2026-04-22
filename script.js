import { auth, db } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Lógica de Login
const formLogin = document.querySelector('form');
if (formLogin) {
    formLogin.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const isAdmin = document.getElementById('perfil-admin').checked;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (isAdmin) {
                window.location.href = "admin.html";
            } else {
                window.location.href = "index.html";
            }
        } catch (error) {
            alert("Erro: " + error.message);
        }
    };
}

// Lógica da Vitrine (Cliente)
const vitrine = document.getElementById('vitrine-produtos');
if (vitrine) {
    onSnapshot(collection(db, "produtos"), (snapshot) => {
        vitrine.innerHTML = "";
        snapshot.forEach((doc) => {
            const p = doc.data();
            const msg = encodeURIComponent(`Olá! Quero comprar o produto: ${p.nome} (R$ ${p.preco})`);
            
            vitrine.innerHTML += `
                <div class="product-card">
                    <img src="${p.imagem}" style="width:100%; height:200px; object-fit:cover; border-radius:8px;">
                    <h3>${p.nome}</h3>
                    <p class="price">R$ ${p.preco.toFixed(2)}</p>
                    <a href="https://wa.me/5500000000000?text=${msg}" target="_blank" class="btn-buy" style="text-decoration:none; display:block; background:#25D366; text-align:center;">
                        Pedir no WhatsApp
                    </a>
                </div>`;
        });
    });
}