"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  return (
    <nav className="flex justify-around items-center py-4 bg-[#1E5631] font-ubuntu text-white">
      <Link href="/" className="text-2xl font-semibold">
        ecoNova
      </Link>

      <ul className="hidden md:flex space-x-6 list-none">
        {status === "loading" ? null : status === "authenticated" ? (
          <>
            <li className="mt-1.5">
              <Link href="/sample" className="hover:text-gray-400 text-lg font-semibold">
                Calculate
              </Link>
            </li>
            <li className="mt-1.5">
              <Link href="/credits" className="hover:text-gray-400 text-lg font-semibold">
                Credits
              </Link>
            </li>
            <li className="mt-1.5">
              <Link href="/analyze" className="hover:text-gray-400 text-lg font-semibold">
                Analyze
              </Link>
            </li>
            <li className="mt-1.5">
              <Link href="/compare" className="hover:text-gray-400 text-lg font-semibold">
                Compare
              </Link>
            </li>
            <Button onClick={() => signOut({ callbackUrl: "/" })} className="hover:text-gray-400 text-lg font-semibold bg-[#1E5631] hover:bg-[#1E5631]">
              Logout
            </Button>
          </>
        ) : (
          <>
            <li className="mt-1.5">
              <Link href="/login" className="hover:text-gray-400 text-lg font-semibold">
                Login
              </Link>
            </li>
            <li className="mt-1.5">
              <Link href="/signIn" className="hover:text-gray-400 text-lg font-semibold">
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
