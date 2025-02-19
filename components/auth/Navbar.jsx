"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-around items-center py-4 bg-[#1E5631] font-ubuntu text-white">
      <Link href="/" className="text-2xl font-semibold">
        ecoNova
      </Link>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Desktop Navigation */}
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
            <li className="mt-1.5">
              <Link href="/leaderboard" className="hover:text-gray-400 text-lg font-semibold">
                Leaderboard
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute top-16 left-0 right-0 bg-[#1E5631] flex flex-col items-center space-y-4 py-4 list-none">
          {status === "loading" ? null : status === "authenticated" ? (
            <>
              <li>
                <Link href="/sample" className="hover:text-gray-400 text-lg font-semibold">
                  Calculate
                </Link>
              </li>
              <li>
                <Link href="/credits" className="hover:text-gray-400 text-lg font-semibold">
                  Credits
                </Link>
              </li>
              <li>
                <Link href="/analyze" className="hover:text-gray-400 text-lg font-semibold">
                  Analyze
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-gray-400 text-lg font-semibold">
                  Compare
                </Link>
              </li>
              <li>
                <Button onClick={() => signOut({ callbackUrl: "/" })} className="hover:text-gray-400 text-lg font-semibold bg-[#1E5631] hover:bg-[#1E5631]">
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="hover:text-gray-400 text-lg font-semibold">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signIn" className="hover:text-gray-400 text-lg font-semibold">
                  Sign In
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;