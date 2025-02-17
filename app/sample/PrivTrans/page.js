"use client"; 
import PrivateTransportCalculator from "@/calculators/PrivateTrans";
import CalcNav from "@/components/shared/CalcNav";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

function page() {
  const handleSaveData = () => {
      toast.success("Data Saved Successfully!", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "bg-white text-[#1E5631] text-lg font-bold rounded-lg shadow-md", 
        progressClassName: "bg-[#1E5631]", 
        bodyClassName: "text-[#1E5631]", 
      });
    };

  return (
    <>
      <div className="container mt-4 mx-auto p-6 md:p-10 bg-[#D3E4CD] rounded-xl shadow-xl">
        <CalcNav/>
        <div className="mb-8">
          <PrivateTransportCalculator />
        </div>


        <button 
        onClick={handleSaveData}
        className="bg-lime-700 hover:bg-lime-600 text-white px-6 py-3 rounded-lg mt-4 font-semibold transition-all duration-200 ease-in-out shadow-lg">
          Save Footprint Data
        </button>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

export default page;
