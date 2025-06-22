import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Gallery = () => {
  const [properties, setProperties] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://stayfinder-feat.onrender.com/api/v1/property/showAllProperties`)
      .then((response) => {
        setProperties(response.data.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error in Gallery component -> ", error);
      });
  }, []);
  return (
    <>
      {loading ? (
        <div className="text-center m-10 font-semibold p-5 text-deepBlue-500 text-2xl">
          {" "}
          Loading...{" "}
        </div>
      ) : (
        <div className="bg-richblue-950 flex items-center justify-center p-4">
          <div className="p-10 w-11/12 bg-white shadow-2xl shadow-blue-200 flex flex-col gap-10 items-center">
            <p className="font-elegant text-5xl text-richblue-950">
              {" "}
              Properties We Own 🏡{" "}
            </p>
            <div className="gap-4 grid grid-flow-row grid-cols-3">
              {properties.length == 0 ? (
                <div className="text-black"> NO PROPERTIES </div>
              ) : (
                properties.slice(0, 3).map((property, i) => {
                  return <Card property={property} key={i} />;
                })
              )}
            </div>
            <button
              className="bg-richblue-950 text-white p-2 font-classic font-bold rounded-md hover:scale-105"
              onClick={() => {
                if (token) navigate("/Catalog");
                else navigate("/login");
              }}
            >
              Explore more
            </button>
          </div>
        </div>
      )}
    </>
  );
};
