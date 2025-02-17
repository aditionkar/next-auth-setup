"use client"; 

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import CalcNav from "@/components/shared/CalcNav";
import React from "react";

function page() {

  /* This code snippet is a React functional component that handles user authentication using the
  `useSession` hook from NextAuth. Here's a breakdown of what it does: */
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return null; // Prevents rendering while redirecting
  }

  return (
    <>
      <div className="bg-gradient-to-b from-green-100 to-white  h-[55vh] flex flex-col items-center py-20 ">
        <h1 className="text-center text-4xl font-bold text-[#1E5631] mb-4">
          Discover Your Carbon Footprint
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Calculate and understand your impact on the environment.
        </p>

        <CalcNav />
      </div>
    </>
  );
}

export default page;
