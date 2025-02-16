"use client"; // Ensure this is a Client Component

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchAllUsers } from "@/action/user";


const Settings = () => {

  const { data: session, status } = useSession();
  const router = useRouter();
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login"); // Redirect to login page
    } else if (status === "authenticated") {
      fetchAllUsers().then((users) => setAllUsers(users)); // Fetch users after authentication
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return null; // Prevents rendering while redirecting
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">users</h1>
      <table className="w-full rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {allUsers?.map((user) => (
            <tr key={user._id}>
              <td className="p-2">{user.firstName}</td>
              <td className="p-2">{user.lastName}</td>
              <td className="p-2">
                  <button className="px-2 py-1 text-black bg-gray-300 rounded focus:outline-none">
                    Delete(disabled)
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Settings