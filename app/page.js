"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="font-ubuntu">
        <div className="screen bg-[#7BB547] h-[620px] w-[1250px] rounded-[20px] mx-auto mt-7 flex">
          <div className="left h-[600px] w-[650px] flex flex-col items-center justify-center">
            <h1 className="text-center mt-[150px] text-white font-bold text-[40px] mx-auto w-[500px]">
              Embrace the journey of building your own path, one step at a time
            </h1>
            <p className="text-white text-[30px] mt-[100px] text-center font-medium">
              For People and Planet
            </p>
          </div>
          <div className="right h-[600px] w-[590px] flex items-center justify-center">
            <img
              src="earth.png"
              alt="earth"
              className="mt-[80px] ml-[50px] animate-bounceUpDown"
            />
          </div>
        </div>
      </div>
      <div className="screen2">
        <img
          src="grouped.png"
          alt="Grouped"
          className="mt-[80px] ml-[240px] h-[500px] w-[900px]"
        />
      </div>

      <div className="flex mt-20 ml-32 font-ubuntu">
        <div className="flex flex-col h-full w-[630px]">
          <Link
            href="/sample"
            className="bg-[#1E5631] h-36 w-full mt-10 ml-10 flex flex-col justify-center pl-6 rounded-xl transition-transform duration-200 hover:scale-105 hover:border-2 border-[#0c301d]  border-2  transform"
          >
            <span className="text-4xl font-semibold text-[#F2F6E9]">
              Calculate
            </span>
            <h4 className="text-[#f5f8cc] text-lg mt-4 pr-5">
              Use this tool to calculate your carbon footprint and understand
              your impact.
            </h4>
          </Link>
          <Link
            href="/credits"
            className="bg-[#4C9A2A] h-36 w-full mt-12 ml-10 flex flex-col justify-center pl-6 rounded-xl transition-transform duration-200 hover:scale-105 hover:border-2 border-[#3B7A22]  border-2  transform"
          >
            <span className="text-4xl font-semibold text-[#f3fcdd]">
              Get Credits
            </span>
            <h4 className="text-[#f6fabc] text-lg mt-4">
              Earn credits by participating in eco-friendly activities and track
              your progress.
            </h4>
          </Link>
          <Link
            href="/analyze"
            className="bg-[#7cc220] h-36 w-full mt-12 ml-10 flex flex-col justify-center pl-6 rounded-xl transition-transform duration-200 hover:scale-105 hover:border-2 border-[#548B12] border-2 transform"
          >
            <span className="text-4xl font-semibold text-[#eafac5]">
              Analyze your data
            </span>
            <h4 className="text-white text-lg mt-4">
              Check out which area you should work on to reduce your footprint.
            </h4>
          </Link>
        </div>
        <div className="h-full w-[500px] flex items-center justify-center">
          <img
            src="howbig.png"
            alt="How big is your Carbon Footprint?"
            className="h-[600px] w-[400px]"
          />
        </div>
      </div>
    </>
  );
}
