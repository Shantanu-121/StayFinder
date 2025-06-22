import React from "react";
import { useDispatch } from "react-redux";
import { setSignupData, setToken } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

export const ConfirmationWindow = ({
  Heading,
  description,
  btn1,
  btn2,
  showConfirmation,
  type,
  change,
  setBookingId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="flex flex-col gap-5 items-center bg-richblack-900 text-white rounded-md">
        <p className="font-elegant font-semibold text-2xl bg-richblack-800 w-[100%] p-2 text-center rounded-md">
          {Heading}
        </p>
        <p className="font-luxury mx-4">{description}</p>
        <div className="flex m-2 gap-4">
          <button
            className="font-luxury opacity-70"
            onClick={() => {
              if (!type) {
                dispatch(setToken(null));
                dispatch(setSignupData(null));
                localStorage.setItem("signupData", JSON.stringify(null));
                localStorage.setItem("token", JSON.stringify(null));
                navigate("/");
              } else {
                showConfirmation(false);
                change();
              }
            }}
          >
            {btn1}
          </button>
          <button
            className="font-luxury font-semibold"
            onClick={() => {
              if (setBookingId) setBookingId(false);
              showConfirmation(false);
            }}
          >
            {btn2}
          </button>
        </div>
      </div>
    </div>
  );
};
