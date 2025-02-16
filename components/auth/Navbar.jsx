"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  return (
    <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
      <Link href="/" className="text-2xl font-semibold">
        Company-name
      </Link>

      <ul className="hidden md:flex space-x-4 list-none">
        {status === "loading" ? null : status === "authenticated" ? (
          <>
            <li className="mt-1.5">
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li className="mt-1.5">
              <Link href="/settings" className="hover:text-gray-400">
                Settings
              </Link>
            </li>
            <Button onClick={() => signOut({ callbackUrl: "/" })} className="hover:text-gray-400 text-md">
              Logout
            </Button>
          </>
        ) : (
          <>
            <li className="mt-1.5">
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li className="mt-1.5">
              <Link href="/signIn" className="hover:text-gray-400">
                Sign In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
