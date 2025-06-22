import React from "react";
import scare from "../assets/Scarecrow.png";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/common/Navbar";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-richblack-900">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={scare}
              alt="Scarecrow"
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="bg-white p-8 sm:p-10 md:p-12 shadow-lg rounded-md flex flex-col justify-center w-full lg:w-1/2">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-mono text-black">
              I have bad news <br className="hidden sm:block" /> for you.
            </h1>
            <p className="opacity-70 mt-4 text-sm sm:text-base font-inter">
              The page you are looking for might be removed or{" "}
              <br className="hidden sm:block" />
              is temporarily unavailable. <br />
              <strong>Error Code: 404</strong>
            </p>
            <button
              className="mt-6 text-[16px] sm:text-[17px] px-5 py-3 rounded-md font-bold
            bg-richblack-800 text-white hover:text-opacity-70 transition-all duration-200 w-max"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
