// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8BjZ6z4mWhQbLjhBZbHZZgCkwc2nizvc",
  authDomain: "bino-auth-firebase.firebaseapp.com",
  projectId: "bino-auth-firebase",
  storageBucket: "bino-auth-firebase.appspot.com", // fixed
  messagingSenderId: "755005757558",
  appId: "1:755005757558:web:4a4f9265065d3608f36757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth instance
export const auth = getAuth(app);
  