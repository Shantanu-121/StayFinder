import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  return (
    <div className="bg-sky-950">
      <div className="font-medium flex justify-between p-5 bg-[#001D4B] text-white font-elegant">
        <span
          className="mx-5 text-5xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          StayFinder
        </span>
        <span className="text-2xl">Luxury Living Redefined </span>
        <div>
          {token ? (
            <div className="m-5 flex gap-4 justify-center items-center">
              <button
                className="hover:scale-110 cursor-pointer"
                onClick={() => navigate("/Dashboard")}
              >
                Dashboard
              </button>
              <FaCartShopping
                className="hover:scale-125 cursor-pointer"
                onClick={() => navigate("/booked")}
              />
            </div>
          ) : (
            <div>
              <button
                className="mx-3 hover:scale-105"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="mx-3 hover:scale-105"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
