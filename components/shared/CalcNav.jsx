import Link from "next/link";
import React from "react";

function CalcNav() {
  return (
    <>
      <div className="flex justify-center items-center h-[30vh] mb-14">
        <div className="flex p-4">
          {/* Home link */}
          <Link href="/sample/AtHome">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#55b374] border-black border-[2px] text-white mr-4 p-2 rounded shadow-lg shadow-green-700 hover:shadow-2xl hover:shadow-green-700 hover:scale-105 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center">
                <img src="/homee.png" alt="Home" className="w-20 h-20" />
              </div>
              <p className="mt-5 font-bold text-gray-700">At Home</p>
            </div>
          </Link>

          {/* Private transport link */}
          <Link href="/sample/PrivTrans">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#55b374] border-black border-[2px] text-white mx-4 p-2 rounded shadow-lg shadow-green-700 hover:shadow-2xl hover:shadow-green-700 hover:scale-105 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center">
                <img
                  src="/private.png"
                  alt="Private transport"
                  className="w-20 h-20"
                />
              </div>
              <p className="mt-5 font-bold text-gray-700">Private Transport</p>
            </div>
          </Link>

          {/* Public transport link */}
          <Link href="/sample/PublicTrans">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#55b374] border-black border-[2px] text-white mx-4 p-2 rounded shadow-lg shadow-green-700 hover:shadow-2xl hover:shadow-green-700 hover:scale-105 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center">
                <img
                  src="/public.png"
                  alt="Public transport"
                  className="w-20 h-20"
                />
              </div>
              <p className="mt-5 font-bold text-gray-700">Public Transport</p>
            </div>
          </Link>

          {/* Flight link */}
          <Link href="/sample/Flight">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#55b374] border-black border-[2px] text-white mx-4 p-2 rounded shadow-lg shadow-green-700 hover:shadow-2xl hover:shadow-green-700 hover:scale-105 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center">
                <img src="/flight.png" alt="Flight" className="w-20 h-20" />
              </div>
              <p className="mt-5 font-bold text-gray-700">Flight</p>
            </div>
          </Link>

          {/* Food consumption link */}
          <Link href="/sample/Food">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#55b374] border-black border-[2px] text-white ml-4 p-2 rounded shadow-lg shadow-green-700 hover:shadow-2xl hover:shadow-green-700 hover:scale-105 transition-all duration-300 cursor-pointer font-bold flex items-center justify-center">
                <img
                  src="/food.png"
                  alt="Food consumption"
                  className="w-20 h-20"
                />
              </div>
              <p className="mt-5 ml-4 font-bold text-gray-700">
                Food Consumption
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CalcNav;
