import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/common/Navbar";
import { useForm } from "react-hook-form";
import Footer from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { handlePayment } from "../components/core/Payments/Payment";

export const Property = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const { signupData } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const partySize = watch("party-size") || 1;
  const navigate = useNavigate();
  useEffect(() => {
    if (signupData == null) {
      navigate("/login");
    }
    console.log("Property Id ->", propertyId);
    axios
      .post(`http://localhost:4000/api/v1/property/getPropertyDeails`, {
        propertyId: propertyId,
      })
      .then((response) => {
        console.log(response.data.data.propertyDetails);
        if (response) setProperty(response.data.data.propertyDetails);
      })
      .catch((error) => {
        console.log(`Property component error ->`, error);
      });
  }, []);

  const submitHandler = async () => {
    const result = await handlePayment({
      amount: property.price * Number(partySize),
    });

    if (result.success) {
      axios
        .post("http://localhost:4000/api/v1/property/bookProperty", {
          propertyId: propertyId,
          date: getValues("date"),
          time: getValues("time"),
          partySize: getValues("party-size"),
          userId: signupData._id,
        })
        .then((response) => {
          if (response.data.success) {
            toast.success("Booking successful!");
            navigate("/booked");
          }
        })
        .catch((error) => {
          console.log("Booking error:", error);
          toast.error(error.response?.data?.message || "Booking failed");
        });
    } else {
      toast.error("Payment was not successful.");
    }
  };
  return (
    <>
      <Navbar />
      <div>
        {property ? (
          <div>
            <div className="flex justify-between p-7 bg-deepBlue-200">
              <div className="flex flex-col text-deepBlue-700">
                <p className="font-body text-7xl font-black py-4 text-shadow-xl">
                  {property.propertyName}
                </p>
                <p className="font-body text-base font-semibold max-w-[60%] opacity-60">
                  {property.propertyDescription}
                </p>
              </div>
              <img
                src={property.thumbnail}
                className="h-[300px] w-[500px] rounded-md shadow-2xl shadow-black"
              />
            </div>
            <div className="p-10 flex flex-col items-center gap-5 bg-deepBlue-900">
              <p className="font-body font-semibold text-3xl text-white">
                Request a reservation
              </p>
              <p className="font-body text-white opacity-50">
                Select your details and we'll try to get the best seats for you.
              </p>
              <form
                className="font-luxury my-20"
                onSubmit={handleSubmit(submitHandler)}
              >
                <div className="flex gap-40 items-center">
                  <label className="text-white">
                    Party Size
                    <select
                      className="bg-transparent text-white mx-2 border-[1px] px-8"
                      {...register("party-size", { required: true })}
                    >
                      <option value="1" className="bg-deepBlue-900">
                        1 guest
                      </option>
                      <option value="2" className="bg-deepBlue-900">
                        2 guests
                      </option>
                      <option value="3" className="bg-deepBlue-900">
                        3 guests
                      </option>
                      <option value="4" className="bg-deepBlue-900">
                        4 guests
                      </option>
                      <option value="5" className="bg-deepBlue-900">
                        5 guests
                      </option>
                      <option value="6" className="bg-deepBlue-900">
                        6 guests
                      </option>
                    </select>
                  </label>
                  <label className="text-white">
                    Date
                    <input
                      type="date"
                      className="bg-transparent text-white border-[1px] mx-2 px-8 [color-scheme:dark]"
                      {...register("date", { required: true })}
                    />
                    {errors.date && (
                      <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter date.
                      </span>
                    )}
                  </label>
                  <label className="text-white">
                    Time
                    <input
                      type="time"
                      className="bg-transparent text-white border-[1px] mx-2 px-8 [color-scheme:dark]"
                      {...register("time", { required: true })}
                    />
                    {errors.time && (
                      <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter time.
                      </span>
                    )}
                  </label>
                </div>
                <div className="my-32 border-[1px] border-white"></div>
                <div className=" flex gap-10 text-white justify-center">
                  <p className="flex items-center gap-1">
                    <span className="opacity-70 text-base">
                      Amount to be paid
                    </span>{" "}
                    <span className="text-2xl animate-glow">
                      ₹{property.price * Number(partySize)}
                    </span>
                    <span className="opacity-70 text-base">/per night</span>
                  </p>
                  <button className="bg-transparent border-[1px] px-4 rounded-md shadow-sm shadow-white hover:scale-105">
                    Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};
