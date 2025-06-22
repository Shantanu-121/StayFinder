import React from "react";
import H1 from "../../../assets/H1.jpg";
import H2 from "../../../assets/H2.jpg";
import H3 from "../../../assets/H3.jpg";
import H4 from "../../../assets/H4.jpg";
import H5 from "../../../assets/H5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

export const SwiperComponent = () => {
  return (
    <div className="bg-richblue-950 px-4 flex justify-center py-8">
      <div className="w-11/12 flex flex-col">
        <p className="font-luxury text-4xl bg-richblue-950 font-black text-white m-10 self-center">
          Some of Our Best  <span className="text-6xl text-shadow-glow">Accomodation</span>  Options
        </p>
        <div>
          <Swiper
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <img src={H1} className="h-[300px] w-[100%] rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={H2} className="h-[300px] w-[100%] rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={H3} className="h-[300px] w-[100%] rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={H4} className="h-[300px] w-[100%] rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={H5} className="h-[300px] w-[100%] rounded-md" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
