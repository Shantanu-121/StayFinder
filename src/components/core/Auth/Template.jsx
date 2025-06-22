import { FcGoogle } from "react-icons/fc";
import H1 from "../../../assets/H1.jpg";
import LoginForm from "./LoginForm";
import { Navbar } from "../../common/Navbar";
import Footer from "../../common/Footer";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  return (
    <>
      <Navbar />
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-deepBlue-900">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12 bg-deepBlue-700 px-5 rounded-md">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-richblack-100">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-blue-100">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <img
            src={H1}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="w-[55%]"
          />
        </div>
        {/* )} */}
      </div>
      <Footer />
    </>
  );
}

export default Template;
