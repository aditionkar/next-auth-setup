"use client";
import { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

Chart.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

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

  const categories = [
    "Home",
    "Private Transport",
    "Public Transport",
    "Food",
    "Flights",
  ];
  const categoryData = [50, 90, 30, 60, 40]; 

  const maxIndex = categoryData.indexOf(Math.max(...categoryData));
  const highestCategory = categories[maxIndex];

  const barData = {
    labels: categories,
    datasets: [
      {
        label: "Carbon Footprint by Category",
        data: categoryData,
        backgroundColor: [
          "#606c38",
          "#283618",
          "#e8d4b3",
          "#dda15e",
          "#bc6c25",
        ],
        borderColor: ["#606c38", "#283618", "#e8d4b3", "#dda15e", "#bc6c25"],
        borderWidth: 2,
      },
    ],
  };

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categoryData,
        backgroundColor: [
          "#606c38",
          "#283618",
          "#e8d4b3",
          "#dda15e",
          "#bc6c25",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#333",
          font: { size: 14, family: "Arial" },
        },
      },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true, grid: { display: false } },
    },
  };

  return (
    <div className="p-8 mt-5 max-w-7xl mx-auto flex flex-col items-center bg-green-50 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-[#1E5631] mb-6">
        Analyze Your Data
      </h1>
      <p className="mb-8 text-lg text-gray-800 text-center">
        Take control of your environmental impact by understanding where your
        carbon emissions are highest. By identifying these key sources, you'll
        be empowered to make informed decisions and take effective steps
        towards reducing your environmental impact.
      </p>

      {/* Chart Container */}
      <div className="flex w-full h-[74vh] space-x-4">
        {/* Bar Chart Section */}
        <div className="w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Bar Chart Analysis
          </h2>
          <Bar data={barData} options={options} />
        </div>

        {/* Pie Chart Section */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Pie Chart Breakdown
          </h2>
          <Pie data={pieData} options={options} />
        </div>
      </div>

      {/* Suggestion Section */}
      <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">
          Focus on Reducing Your {highestCategory} Footprint
        </h2>
        <p>
          Your highest emission comes from <strong>{highestCategory}</strong>.
          Consider taking steps to reduce your environmental impact in this area.
        </p>
      </div>
    </div>
  );
}

export default Page;
