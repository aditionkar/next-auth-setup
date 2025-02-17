import PublicTransportCalculator from "@/calculators/PublicTrans";
import CalcNav from "@/components/shared/CalcNav";
import React from "react";

function page() {
  return (
    <>
      <div className="container mt-4 mx-auto p-6 md:p-10 bg-[#D3E4CD] rounded-xl shadow-xl">
        <CalcNav/>
        <div className="mb-8">
          <PublicTransportCalculator />
        </div>

        <div className="mt-4 p-6 bg-lime-100 border-l-4 border-lime-600 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-lime-700">
            Total Carbon Footprint:
          </h2>
          <p className="text-gray-800 text-lg mt-2">kg CO₂</p>
        </div>

        <button className="bg-lime-700 hover:bg-lime-600 text-white px-6 py-3 rounded-lg mt-4 font-semibold transition-all duration-200 ease-in-out shadow-lg">
          Save Footprint Data
        </button>
      </div>
    </>
  );
}

export default page;
