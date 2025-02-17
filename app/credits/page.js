"use client";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import React from "react";
import Goal from "@/components/CreditsGoal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function page() {

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

  const [showFootprint, setShowFootprint] = useState(false);
  const totalFootprint = 250; // Example total footprint value
  const level =
    totalFootprint <= 100
      ? 1
      : totalFootprint <= 200
      ? 2
      : totalFootprint <= 300
      ? 3
      : totalFootprint <= 400
      ? 4
      : 5;

  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    // Destroy previous chart instance if it exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    if (ctx) {
      myChartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5"],
          datasets: [
            {
              label: "Carbon Footprint Levels",
              data: [20, 40, 60, 80, 100], // Fixed values
              backgroundColor: [
                "rgba(34, 197, 94, 0.8)", // Green
                "rgba(52, 211, 153, 0.8)", // Light Green
                "rgba(234, 179, 8, 0.8)", // Yellow
                "rgba(249, 115, 22, 0.8)", // Orange
                "rgba(239, 68, 68, 0.8)", // Red
              ],
              borderColor: [
                "rgba(34, 197, 94, 1)",
                "rgba(16, 185, 129, 1)",
                "rgba(234, 179, 8, 1)",
                "rgba(249, 115, 22, 1)",
                "rgba(239, 68, 68, 1)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: { display: false }, // Hides horizontal grid lines
            },
          },
        },
      });
    }

    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="h-screen bg-white">
        <div className=" flex justify-center pt-3">
          <div className="p-6 w-full max-w-[1300px] bg-green-100 ">
            <h1 className="text-4xl font-bold text-center text-[#1E5631] mb-12">
              Get Your Level
            </h1>

            {/* Main content container */}
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              {/* Chart Section on the Left */}
              <div className="lg:w-1/2">
                <canvas
                  ref={chartRef}
                  className="w-full h-[400px] bg-white rounded-lg shadow-lg"
                ></canvas>
              </div>

              {/* Explanation Section on the Right */}
              <div className="lg:w-1/2 flex flex-col justify-center pl-6">
                <p className="text-xl font-semibold text-gray-800 mb-6">
                  Understanding your carbon footprint can help you identify
                  areas where you can reduce your environmental impact. Each
                  level corresponds to a different range of carbon emissions,
                  with Level 1 being the most eco-friendly and Level 5 being the
                  least.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 text-lg">
                  <li>Level 1: Very low emissions, eco-friendly lifestyle.</li>
                  <li>
                    Level 2: Low emissions, still environmentally conscious.
                  </li>
                  <li>Level 3: Moderate emissions, room for improvement.</li>
                  <li>Level 4: High emissions, significant changes needed.</li>
                  <li>Level 5: Very high emissions, urgent action required.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Button to display the most recent footprint */}
        <div className="text-center lg:text-left mt-9 ml-12">
          <>
            <button
              className="bg-[#1E5631] hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition-all duration-200 ease-in-out"
              onClick={() => setShowFootprint(true)}
            >
              Check Your Emission Level
            </button>

            {/* Display the total footprint and level only when button is clicked */}
            {showFootprint && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg border border-l-4 border-green-700 shadow-lg w-[1250px]">
                <p className="text-2xl font-semibold text-[#1E5631] mt-2">
                  Level {level}
                </p>
                <p className="text-xl mt-2 font-semibold text-gray-800">
                  {`Total Footprint: ${totalFootprint} kg CO₂`}
                </p>
              </div>
            )}
          </>
        </div>
      </div>
      <Goal />
    </>
  );
}

export default page;
