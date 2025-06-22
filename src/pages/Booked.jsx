import React, { useEffect, useState } from "react";
import { Navbar } from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ConfirmationWindow } from "../components/common/ConfirmationWindow";

export const Booked = () => {
  const [bookings, setBookings] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const { signupData } = useSelector((state) => state.auth);
  const [bookingId, setBookingId] = useState("");
  const navigate = useNavigate();

  async function getBookings() {
    axios
      .post("https://stayfinder-feat.onrender.com/api/v1/property/getBookings", {
        userId: signupData._id,
      })
      .then((response) => {
        console.log(response);
        setBookings(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function deleteBooking() {
    console.log("Inside function");
    axios
      .post("https://stayfinder-feat.onrender.com/api/v1/property/deleteBooking", {
        bookingId,
        userId: signupData._id,
      })
      .then((response) => {
        console.log(response);
        setBookings(response.data.data);
        setBookingId("");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("Outside function");
  }

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <>
      <Navbar />
      {bookings && bookings.length > 0 ? (
        <div className="flex flex-col items-center bg-white">
          <p className="m-10 font-luxury text-4xl font-bold text-deepBlue-500 text-shadow-xl">
            {" "}
            Your Bookings signifies you have a great sense of taste{" "}
          </p>
          <div
            className={
              bookings.length >= 3
                ? "grid grid-flow-row grid-cols-3 gap-5 w-11/12 bg-deepBlue-300 p-20 shadow-xl shadow-richblack-900 mb-10 ml-10 mr-10"
                : `flex justify-center gap-5 w-11/12 bg-deepBlue-300 p-20 shadow-xl shadow-richblack-900 mb-10 ml-10 mr-10`
            }
          >
            {bookings.map((booking, i) => (
              <div className="bg-richblue-950 p-2 rounded-md" key={i}>
                <div className="flex flex-col text-white gap-2 items-center text-center ">
                  <img
                    src={booking.Property.thumbnail}
                    alt="property"
                    className="rounded-lg h-[200px] w-auto"
                  />
                  <h2 className="font-luxury text-2xl font-bold">
                    {booking.Property.propertyName}{" "}
                  </h2>
                  <h3 className="opacity-70 font-literary">
                    {booking.Property.location}
                  </h3>
                  <h4 className="opacity-80 font-classic text-3xl text-shadow-glow">
                    ₹{booking.Property.price}
                  </h4>
                  {booking.Property.propertyDescription.length <= 100 ? (
                    <p className="opacity-35 font-literary">
                      {booking.Property.propertyDescription}
                    </p>
                  ) : (
                    <p className="opacity-35 font-literary">
                      {booking.Property.propertyDescription.substring(0, 100)}
                      ...
                    </p>
                  )}
                  <h3 className="opacity-70 font-literary">{booking.Date}</h3>
                  <h3 className="opacity-70 font-literary">{booking.Time}</h3>
                  <h3 className="opacity-70 font-literary">
                    {booking.PartySize}
                  </h3>
                  <button
                    className="font-luxury bg-deepBlue-300 rounded-md p-2 font-bold hover:scale-95 hover:text-deepBlue-500"
                    onClick={() => {
                      setBookingId(String(booking._id));
                      setConfirmation(true);
                    }}
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-deepBlue-900 flex gap-10 justify-center items-center h-screen ">
          <p className="font-luxury text-2xl font-semibold text-white">
            Sorry no bookings under your name 😥
          </p>
          <button
            className="bg-richblack-900 shadow-sm shadow-white animate-pulse border-[1px] text-white font-luxury text-lg font-semibold rounded-md p-2"
            onClick={() => navigate("/Catalog")}
          >
            Explore Properties
          </button>
        </div>
      )}
      <Footer />
      {confirmation ? (
        <ConfirmationWindow
          Heading={`Cancel Booking`}
          description={`Do you want to cancel your booking`}
          btn1={`Confirm`}
          btn2={`Cancel`}
          showConfirmation={setConfirmation}
          type={bookingId}
          change={deleteBooking}
          setBookingId={setBookingId}
        />
      ) : null}
    </>
  );
};
