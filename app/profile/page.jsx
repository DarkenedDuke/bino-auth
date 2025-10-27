// app/profile/page.jsx
"use client";

import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Spinner from "../../components/Spinner";

const ProfilePage = () => {
  const { user, logout } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuth();
  }, [user]);

  if (loading) return <Spinner />;

  if (!user)
    return (
      <p className="text-center mt-20">
        You must be logged in to view this page.
      </p>
    );

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow text-center">
      <h2 className="text-2xl mb-4">Welcome, {user.displayName || user.email}</h2>
      <p className="mb-4">You are logged in!</p>
      <button
        onClick={logout}
        className="bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
