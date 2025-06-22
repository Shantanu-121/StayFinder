import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Icon from "../../../assets/Stay..png";
import toast, { Toaster } from "react-hot-toast";

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  return (
    <div className="px-4 bg-richblue-950 flex justify-center py-10">
      <div className="w-11/12 flex gap-5 justify-evenly">
        <div className="flex flex-col items-center">
          <p className="font-luxury text-6xl text-white self-center animate-glow m-10">
            {" "}
            Contact Us{" "}
          </p>
          <img
            src={Icon}
            className="h-[200px] w-[250px] rounded-md shadow-md shadow-white"
          />
        </div>
        <form
          className="flex flex-col gap-7 bg-white p-7 rounded-md font-luxury text-md font-semibold"
          onSubmit={(e) => {
            e.preventDefault();
            reset({
              email: "",
              firstname: "",
              lastname: "",
              message: "",
              phoneNo: "",
            });
            toast.success("Message sent successfully !");
          }}
        >
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstname" className="lable-style">
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className="form-style bg-puregreys-100 p-2 rounded-md"
                {...register("firstname", { required: true })}
              />
              {errors.firstname && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastname" className="lable-style">
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name"
                className="form-style bg-puregreys-100 p-2 rounded-md"
                {...register("lastname")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="lable-style">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className="form-style bg-puregreys-100 p-2 rounded-md"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your Email address.
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phonenumber" className="lable-style">
              Phone Number
            </label>

            <div className="flex gap-5">
              <div className="flex w-[calc(100%-90px)] flex-col gap-2">
                <input
                  type="number"
                  name="phonenumber"
                  id="phonenumber"
                  placeholder="12345 67890"
                  className="form-style bg-puregreys-100 p-2 rounded-md"
                  {...register("phoneNo", {
                    required: {
                      value: true,
                      message: "Please enter your Phone Number.",
                    },
                    maxLength: { value: 12, message: "Invalid Phone Number" },
                    minLength: { value: 10, message: "Invalid Phone Number" },
                  })}
                />
              </div>
            </div>
            {errors.phoneNo && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                {errors.phoneNo.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="lable-style">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              placeholder="Enter your message here"
              className="form-style bg-puregreys-100 p-2 rounded-md"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your Message.
              </span>
            )}
          </div>

          <button
            type="submit"
            className={`rounded-md bg-richblue-950 px-6 py-3 text-center text-[13px] font-extrabold text-white shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
           transition-all duration-200 hover:scale-95 hover:shadow-none w-max self-center`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
