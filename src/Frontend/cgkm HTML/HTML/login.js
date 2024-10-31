import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA3kzpylzX-XcLKPH3MC55rEjofD7MCK-U",
    authDomain: "site-agricultura.firebaseapp.com",
    projectId: "site-agricultura",
    storageBucket: "site-agricultura.appspot.com",
    messagingSenderId: "979950987940",
    appId: "1:979950987940:web:046bb2016913397caa9431"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegister = document.getElementById('showRegister');
    const showLogin = document.getElementById('showLogin');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login bem-sucedido!");
            // Redirecionar ou executar outra ação
        } catch (error) {
            alert("Erro ao fazer login: " + error.message);
        }
    });

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = registerForm.email.value;
        const password = registerForm.password.value;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Cadastro bem-sucedido! Você já pode fazer login.");
            // Redirecionar ou executar outra ação
        } catch (error) {
            alert("Erro ao cadastrar: " + error.message);
        }
    });

    showRegister.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
