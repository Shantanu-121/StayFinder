import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../components/common/Navbar";
import { ConfirmationWindow } from "../components/common/ConfirmationWindow";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { signupData } = useSelector((state) => state.auth);
  const [showConfirmation, setShowConfirmation] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen p-6 font-luxury font-semibold">
          {/* Header */}
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <img
                src={signupData.image}
                alt="Profile"
                className="w-14 h-14 rounded-full border-2 border-blue-500"
              />
              <div>
                <h1 className="text-2xl font-bold text-blue-800">
                  Welcome, {signupData.firstName}
                </h1>
                <p className="text-sm text-gray-500">{signupData.email}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <span className="bg-deepBlue-500 text-white px-3 py-1 rounded text-sm font-black text-shadow-glow">
                {signupData.accountType}
              </span>
              <span
                className="bg-deepBlue-500 text-white px-3 py-1 rounded text-sm font-black cursor-pointer hover:scale-105"
                onClick={() => setShowConfirmation(true)}
              >
                {`Logout`}
              </span>
            </div>
          </header>

          {/* Main */}
          <div className="bg-white p-6 rounded-lg shadow-2xl shadow-deepBlue">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Your Info
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-lg font-semibold">
                  {signupData.firstName} {signupData.lastName}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold">{signupData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Account Type</p>
                <p className="text-lg font-semibold">
                  {signupData.accountType}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4 items-center-center mt-10 justify-center text-center">
            <button
              onClick={() => navigate("/Catalog")}
              className="p-2 font-luxury text-white bg-deepBlue-500 rounded-md w-max self-center hover:scale-95 hover:text-deepBlue-900"
            >
              Explore
            </button>
            <p className="font-luxury text-deepBlue-500 opacity-70">
              Use the cart icon in the upper right corner to manage your
              bookings.
            </p>
          </div>
          <footer className="text-center text-3xl mt-10">
            Thank you for choosing our APP!
          </footer>
        </div>
      </div>
      {showConfirmation ? (
        <ConfirmationWindow
          Heading={`Logout Confirmation`}
          description={`Do you really want to logout ?`}
          btn1={`Confirm`}
          btn2={`Cancel`}
          showConfirmation={setShowConfirmation}
        />
      ) : (
        <></>
      )}
    </>
  );
};
