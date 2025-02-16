"use client";
import React from 'react'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login"); // Redirect unauthenticated users to login
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return null; // Prevents rendering while redirecting
  }


  return (
    <>
    <div className='text-6xl text-center mt-5'>Dashboard</div>
    <p className='text-center text-2xl nt-2'>Some basic info</p>
    <p className='text-center text-xl mt-2'>It is a private route</p>
    </>
  )
}

export default Dashboard