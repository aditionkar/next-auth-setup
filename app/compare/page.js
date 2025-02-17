"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Page() {

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

  const [footprintData] = useState([
    { totalFootprint: 120 },
    { totalFootprint: 90 },
    { totalFootprint: 150 },
    { totalFootprint: 80 },
    { totalFootprint: 110 },
    { totalFootprint: 130 },
    { totalFootprint: 95 },
    { totalFootprint: 160 },
    { totalFootprint: 85 },
    { totalFootprint: 105 },
  ]); 

  const colors = [
    "#606c38", 
    "#283618", 
    "#e8d4b3", 
    "#dda15e", 
    "#bc6c25", 
    "#a3b18c", 
    "#b7c5b8", 
    "#6b4226",
    "#9a8c98", 
    "#f0e5d8", 
  ];

  const chartData = {
    labels: footprintData.map((_, index) => `Footprint ${index + 1}`),
    datasets: [
      {
        label: "Total Carbon Footprint",
        data: footprintData.map((item) => item.totalFootprint),
        backgroundColor: footprintData.map((_, index) => colors[index % colors.length]),
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { display: false } },
    },
  };

  return (
    <>
      <div className="p-8 mt-5 max-w-7xl mx-auto flex flex-col items-center bg-green-50 shadow-lg rounded-lg">
        <h2 className="text-4xl font-bold text-[#1E5631] mb-6">
          Compare Your Carbon Footprint Over Time
        </h2>
        <p className="mb-8 text-lg text-gray-800 text-center">
          Gain insights into your environmental impact by comparing your carbon
          footprint across different categories. By tracking where your emissions
          are highest, you can identify areas that need attention and take
          actionable steps towards reducing your footprint.
        </p>

        <div className="w-full bg-white p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-2xl font-semibold text-gray-700 text-center mb-4">Bar Chart Breakdown</h3>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </>
  );
}

export default Page;
