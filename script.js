// Adicione este bloco ao seu script.js existente
import { db } from "./firebaseConfig.js";
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const productGrid = document.querySelector('.product-grid');

// Função para carregar produtos do Firebase
onSnapshot(collection(db, "produtos"), (snapshot) => {
    productGrid.innerHTML = ""; // Limpa os itens estáticos
    snapshot.forEach((docSnap) => {
        const item = docSnap.data();
        
        productGrid.innerHTML += `
            <div class="product-card">
                <img src="${item.imagem}" class="product-image" style="width:100%; object-fit:cover;">
                <h3>${item.nome}</h3>
                <p class="price">R$ ${item.preco.toFixed(2)}</p>
                <button class="btn-buy">Adicionar ao Carrinho</button>
            </div>
        `;
    });
});