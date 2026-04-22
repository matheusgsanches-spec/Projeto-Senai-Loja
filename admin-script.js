// admin-script.js
import { db } from "./firebaseConfig.js";
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const productForm = document.getElementById('product-form');
const inventoryGrid = document.getElementById('admin-inventory');

// SALVAR NOVO PRODUTO
productForm.onsubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
        nome: document.getElementById('prod-name').value,
        preco: parseFloat(document.getElementById('prod-price').value),
        estoque: parseInt(document.getElementById('prod-stock').value),
        imagem: document.getElementById('prod-image').value,
        dataCriacao: new Date()
    };

    try {
        await addDoc(collection(db, "produtos"), newProduct);
        alert("Produto adicionado com sucesso!");
        productForm.reset();
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
};

// LER E EXIBIR PRODUTOS NO PAINEL ADMIN (4 por linha via CSS)
onSnapshot(collection(db, "produtos"), (snapshot) => {
    inventoryGrid.innerHTML = "";
    snapshot.forEach((docSnap) => {
        const item = docSnap.data();
        const id = docSnap.id;

        inventoryGrid.innerHTML += `
            <div class="admin-item-card">
                <img src="${item.imagem}" alt="${item.nome}">
                <h4>${item.nome}</h4>
                <p>R$ ${item.preco.toFixed(2)}</p>
                <span class="stock-badge">Estoque: ${item.estoque}</span>
                <button class="btn-delete" data-id="${id}">Excluir</button>
            </div>
        `;
    });

    // Lógica para deletar
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.onclick = async () => {
            if(confirm("Deseja excluir este produto?")) {
                await deleteDoc(doc(db, "produtos", btn.dataset.id));
            }
        };
    });
});