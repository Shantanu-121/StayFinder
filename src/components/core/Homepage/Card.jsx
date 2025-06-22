import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ property }) => {
  useEffect(() => {
    console.log(property);
  }, []);
  const navigate = useNavigate();
  return (
    <div
      className="bg-richblue-950 p-2 rounded-md hover:shadow-2xl hover:shadow-richblue-950"
      onClick={() => navigate(`/property/${property._id}`)}
    >
      <div className="flex flex-col text-white gap-2 items-center text-center ">
        <img
          src={property.thumbnail}
          alt="property"
          className="rounded-lg h-[200px] w-[100%] p-2"
        />
        <h2 className="font-luxury text-2xl font-bold">
          {property.propertyName}{" "}
        </h2>
        <h3 className="opacity-70 font-literary">{property.location}</h3>
        <h4 className="opacity-80 font-classic text-3xl text-shadow-glow">
          ₹{property.price}
        </h4>
        {property.propertyDescription.length <= 100 ? (
          <p className="opacity-35 font-literary">
            {property.propertyDescription}
          </p>
        ) : (
          <p className="opacity-35 font-literary">
            {property.propertyDescription.substring(0, 100)}...
          </p>
        )}
      </div>
    </div>
  );
};
