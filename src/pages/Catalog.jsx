import React, { useState, useEffect } from "react";
import { Navbar } from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Icon from "../assets/Stay..png";
import { Card } from "../components/core/Homepage/Card";

export const Catalog = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://stayfinder-feat.onrender.com/api/v1/property/showAllProperties`)
      .then((response) => {
        setProperties(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log("Error in Gallery component -> ", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="flex p-5 bg-deepBlue-400 shadow-2xl shadow-richblack-900">
          {" "}
          <img
            src={Icon}
            alt="Icon"
            className="h-[130px] w-[150px] rounded-md shadow-sm shadow-white"
          />
          <div className="flex flex-col gap-2 justify-center">
            <p className="pl-4 font-literary text-4xl text-white font-bold">
              Let's Define Your Comfort According To You
            </p>{" "}
            <p className="text-white text-lg pl-4 font-luxury italic animate-glow font-semibold">
              Living Luxury Refined
            </p>
          </div>
        </div>
        <div className="flex justify-center bg-deepBlue-100">
          <div className="w-11/12 flex flex-col items-center">
            <p className="m-10 text-6xl text-white text-shadow-xl font-black">
              {" "}
              Our Best Accomodations at your service
            </p>
            <div className="grid grid-flow-row grid-cols-3 py-20 px-10 gap-10 bg-deepBlue-200 shadow-2xl shadow-richblack-900">
              {properties.map((property, i) => {
                return <Card property={property} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
