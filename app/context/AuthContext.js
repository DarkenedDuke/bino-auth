// context/AuthContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  // Email/Password login
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

  // Email/Password signup
  const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);

  // Logout
  const logout = () => signOut(auth);

  // GitHub login
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, signInWithGithub }}
    >
      {children}
    </AuthContext.Provider>
  );
};
