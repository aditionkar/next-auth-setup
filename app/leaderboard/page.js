"use client";
import Prizes from "@/components/Prizes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Leaderboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [rank, setRank] = useState(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return null; // Prevents rendering while redirecting
  }

  // Function to generate a random rank (for demo purposes)
  const handleCheckRank = () => {
    const randomRank = Math.floor(Math.random() * 100) + 1; // Random rank between 1 and 100
    setRank(randomRank);
  };

  // Hardcoded leaderboard data (name and credits earned)
  const leaderboardData = [
    { rank: 1, name: "Aarav Sharma", credits: 120 },
    { rank: 2, name: "Isha Patel", credits: 110 },
    { rank: 3, name: "Rohan Gupta", credits: 105 },
    { rank: 4, name: "Ananya Reddy", credits: 95 },
    { rank: 5, name: "Siddharth Mehra", credits: 90 },
    { rank: 6, name: "Priya Singh", credits: 85 },
    { rank: 7, name: "Karan Yadav", credits: 80 },
    { rank: 8, name: "Neha Kapoor", credits: 75 },
    { rank: 9, name: "Rajesh Kumar", credits: 70 },
    { rank: 10, name: "Sneha Desai", credits: 65 },
    { rank: 11, name: "Vikram Malhotra", credits: 60 },
    { rank: 12, name: "Meera Iyer", credits: 58 },
    { rank: 13, name: "Arjun Nair", credits: 55 },
    { rank: 14, name: "Tanvi Choudhury", credits: 52 },
    { rank: 15, name: "Devansh Sinha", credits: 50 },
    { rank: 16, name: "Ritika Verma", credits: 48 },
    { rank: 17, name: "Kabir Joshi", credits: 45 },
    { rank: 18, name: "Simran Kaur", credits: 42 },
    { rank: 19, name: "Aditya Rao", credits: 40 },
    { rank: 20, name: "Nisha Pillai", credits: 38 },
    { rank: 21, name: "Rahul Chatterjee", credits: 35 },
    { rank: 22, name: "Pooja Bhat", credits: 33 },
    { rank: 23, name: "Sandeep Menon", credits: 30 },
    { rank: 24, name: "Alok Mishra", credits: 28 },
    { rank: 25, name: "Harini Krishnan", credits: 25 },
  ];

  return (
    <>
      <div className="bg-[#78D8A4]">
        <Prizes />
        {/*Check out ur rank*/}
        <div className="md:w-[80vh] w-[40vh] mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl text-center text-white mb-8 ">
      <h2 className="text-3xl font-bold mb-6">Check Your Rank</h2>
      
      {!rank ? (
        <button
          onClick={handleCheckRank}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
        >
          Check Out Your Rank Now
        </button>
      ) : (
        <div className="mt-6">
          <p className="text-2xl font-semibold">Your Rank:</p>
          <div className="mt-3 text-5xl font-extrabold bg-white text-purple-600 px-6 py-4 rounded-lg shadow-md">
            {rank}
          </div>
        </div>
      )}
    </div>

        {/*Rank List*/}
        <div className="overflow-x-auto bg-green-50 rounded-lg shadow-lg mx-auto md:w-[80vh] w-[40vh]">
          <div className="min-w-full">
            {leaderboardData.map((user, index) => (
              <div key={index}>
                <div className="px-4 py-2 text-lg">
                  <div className="flex hover:scale-105 duration-200 ease-in-out items-center gap-2 p-2 border-2 rounded-lg shadow-md bg-gradient-to-r from-green-100 via-white to-green-100">
                    <div
                      className="w-10 h-10 bg-[#d0c257] text-black text-center rounded-lg flex items-center justify-center 
                            font-bold text-lg shadow-[0_0_15px_#ffeb3b] ring-2 ring-yellow-300 animate-glow"
                    >
                      {user.rank}
                    </div>

                    <div className="flex-grow text-lg font-semibold ml-7">
                      {user.name}
                    </div>
                    <div className="text-lg font-bold mr-7">{user.credits}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
