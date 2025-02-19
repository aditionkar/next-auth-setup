"use client"; // Ensure this is a client component
import React from "react";

const Prizes = () => {
  return (
    <div className="h-fit w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Second Prize */}
        <div className="bg-green-100 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-4">Second Prize</p>
            <button className="bg-gradient-to-br from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md">
              Claim Prize
            </button>
          </div>
        </div>

        {/* First Prize (Bigger and Centered) */}
        <div className="bg-green-100 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-110 hover:shadow-2xl border border-purple-100">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-4xl font-bold text-white">1</span>
            </div>
            <p className="text-xl font-bold text-gray-800 mb-4">First Prize</p>
            <button className="bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md">
              Claim Prize
            </button>
          </div>
        </div>

        {/* Third Prize */}
        <div className="bg-green-100 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <p className="text-lg font-semibold text-gray-700 mb-4">Third Prize</p>
            <button className="bg-gradient-to-br from-yellow-700 to-yellow-800 hover:from-yellow-800 hover:to-yellow-900 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md">
              Claim Prize
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Prizes;
