import React from "react";
import { Navbar } from "../components/common/Navbar";
import Icon from "../assets/Stay..png";
import House from "../assets/House.jpg";
import House2 from "../assets/House2.jpg";
import Background from "../assets/Background.jpg";
import { Gallery } from "../components/core/Homepage/Gallery";
import { SwiperComponent } from "../components/core/Homepage/Swiper";
import Footer from "../components/common/Footer";
import { ContactUs } from "../components/core/Homepage/ContactUs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      {/* Section 1 */}
      <div className="flex">
        <div className="flex flex-col w-[50%]">
          <div className="flex items-center gap-5 self-start p-8">
            <img
              src={Icon}
              alt="icon"
              height="250px"
              width="250px"
              className="rounded-md"
            />
            <h3 className="font-bold text-2xl text-richblack-900 font-heading">
              Luxury Living <br /> Redefined: StayFinder
            </h3>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <p className="px-8 font-bold font-modern text-xl text-[#001d4bbf] self-start">
              Welcome to StayFinder — where comfort whispers <br /> through
              every corner, and luxury unfolds like a timeless <br /> sonnet.
              Savor serene stays, impeccable service, and <br />
              moments shaped in quiet grandeur.
            </p>
            <button
              className="bg-[#001D4B] text-white font-semibold p-2 rounded-md w-fit hover:scale-105"
              onClick={() => {
                if (token) navigate("/Catalog");
                else navigate("/login");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        <img
          src={House}
          alt="House"
          height="50px"
          width="50px"
          className="w-[50%]"
        />
      </div>
      {/* Section 2 */}
      <div className="bg-richblue-950 flex items-center">
        <img src={House2} alt="House" className="w-[50%]" />
        <div className="p-8 flex flex-col w-[50%]">
          <h2 className="text-3xl font-bold text-white">
            Our Luxurious Stay Philosophy
          </h2>
          <div className="flex flex-col my-10 gap-1 text-white">
            <h4 className="text-xl font-semibold font-classic">Our Vision</h4>
            <p className="text-base">
              At StayFinder, we envision a stay experience that transcends
              expectations — where luxury is not just seen, but felt. Our
              commitment is to deliver a harmonious blend of comfort,
              sophistication, and seamless convenience for every guest.
            </p>
          </div>
          <div className="flex flex-col my-10 gap-1 text-white">
            <h4 className="text-xl font-semibold font-classic">Our Mission</h4>
            <p className="text-base">
              We aspire to be more than a destination — to become a haven that
              feels like home. Through heartfelt service, thoughtfully curated
              amenities, and an atmosphere of quiet elegance, we ensure every
              moment of your stay becomes a cherished memory.
            </p>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="flex flex-col text-richblue-950 p-20 items-center">
        <h2 className="text-5xl font-extrabold font-luxury mb-10">
          Our Solution to Industry Challenges
        </h2>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <h2 className="self-center text-3xl font-heading font-semibold mb-10 opacity-90">
              The Industry
            </h2>
            <p className="font-elegant font-medium">
              The Serviced Apartments industry in India has been evolving for
              over 25 years. Recognized as the ideal solution for extended
              stays, it is widely adopted by MNCs, leading IT firms, financial
              institutions, and industrial sectors. In cities like Pune,
              serviced apartments have become the preferred choice for long-term
              accommodation — offering a home-like environment for employees
              during extended assignments.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="self-center text-3xl font-heading font-semibold mb-10 opacity-90">
              Market Challenges
            </h2>
            <p className="font-elegant font-medium">
              Today's corporates seek safe, clean, and hygienic accommodations
              for their business travelers, new hires, training programs,
              project deployments, and even family visits. However, such stays
              are not always easy to find. Traditional online travel portals
              (OTAs) are not tailored for this niche, making the search for
              reliable long-stay accommodations both inefficient and uncertain.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="self-center text-3xl font-heading font-semibold mb-10 opacity-90">
              Our Solution
            </h2>
            <p className="font-elegant font-medium">
              Corporate Housing Service Apartments recognized these challenges
              and responded with a dedicated solution. We provide premium
              long-stay serviced apartments in Pune, designed specifically for
              corporate needs — from solo business travelers to families. With a
              broad portfolio of properties, exceptional service, and
              competitive pricing, we simplify extended stays and deliver an
              experience that feels like home, without compromise.
            </p>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <Gallery />
      {/* Section 5 */}
      <SwiperComponent />
      {/* Sections 6 */}
      <ContactUs />
      <Footer />
    </div>
  );
};
