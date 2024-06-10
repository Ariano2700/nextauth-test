'use client'
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="p-1 text-white rounded-md bg-red-600 hover:bg-red-900 transition-all duration-300"
    >
      LogOut
    </button>
  );
};

export default LogoutButton;
