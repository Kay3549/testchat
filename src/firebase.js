import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkeVl7orIt17BswKWLbuqHd4JdG9stRB8",
  authDomain: "chat-e6bc5.firebaseapp.com",
  projectId: "chat-e6bc5",
  storageBucket: "chat-e6bc5.appspot.com",
  messagingSenderId: "582880626410",
  appId: "1:582880626410:web:f7498cb3c352e255583993"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(); 

