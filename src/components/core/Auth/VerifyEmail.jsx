import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.auth);
  const { firstName, lastName, email, password, confirmPassword, accountType } =
    signupData;
  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  async function signup() {
    axios
      .post("http://localhost:4000/api/v1/auth/signup", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
        otp,
      })
      .then((response) => {
        if (response.data.success) navigate("/login");
      })
      .catch((error) => {
        console.log("VerifyEmail component's error ->", error);
      });
  }

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    signup();
  };

  return (
    <div className="h-screen grid place-items-center bg-deepBlue-500">
      <div className="max-w-[500px] p-4 lg:p-8">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          Verify Email
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-richblack-100">
          A verification code has been sent to you. Enter the code below.
          <br />
          <span className="font-semibold">
            Kindly ensure to check both your 'Spam' and 'All Mail' folders, as
            Google services may occasionally filter OTP emails as spam.
          </span>
        </p>
        <form onSubmit={handleVerifyAndSignup}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[48px] lg:w-[60px] border-0 bg-richblack-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
            }}
          />
          <button
            type="submit"
            className="w-full bg-yellow-50 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
          >
            Verify Email
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <Link to="/signup">
            <p className="text-richblack-5 flex items-center gap-x-2">
              <BiArrowBack /> Back To Signup
            </p>
          </Link>
          <button
            className="flex items-center text-blue-100 gap-x-2"
            onClick={() => dispatch(sendOtp(signupData.email, navigate))}
          >
            <RxCountdownTimer />
            Resend it
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
