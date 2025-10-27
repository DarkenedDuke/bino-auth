// app/login/page.jsx
"use client";

import { useState } from "react";
import { signInWithGithub , logout} from "./context/AuthContext";

const Home = () => {
  // const { login, signInWithGithub } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Login with Email
        </button>
      </form>

      <hr className="my-4" />

      <button
        onClick={handleGithubLogin}
        className="bg-gray-800 text-white p-2 rounded w-full"
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default Home;
