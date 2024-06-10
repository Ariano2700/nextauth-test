"use client";
import { signOut } from "next-auth/react";
function DashboardPage() {
  return (
    <section className="flex justify-center items-center min-h-screen gap-8 flex-col">
      <h1 className=" text-white text-5xl">Dashboard</h1>
      <button
        onClick={() => signOut()}
        className="p-3 text-white rounded-md bg-red-600 hover:bg-red-900 transition-all duration-300"
      >
        LogOut
      </button>
    </section>
  );
}
export default DashboardPage;
