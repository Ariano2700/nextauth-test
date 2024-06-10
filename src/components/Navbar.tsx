import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center bg-zinc-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">NextAuth</h1>
      <ul className="flex gap-x-3 items-center justify-center">
        {!session?.user ? (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <LogoutButton/>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
