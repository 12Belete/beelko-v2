import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiM1RFp-yWr9luVLJslNJYiZOhsiwLLO4",
  authDomain: "beelko-7dcaa.firebaseapp.com",
  projectId: "beelko-7dcaa",
  storageBucket: "beelko-7dcaa.firebasestorage.app",
  messagingSenderId: "757679525639",
  appId: "1:757679525639:web:faceb6756f2ab687de7fa2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
