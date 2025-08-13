'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css'; // <-- we'll put custom arrow styles here

const Slider = () => {
  const slides = [
    "https://as2.ftcdn.net/v2/jpg/02/51/17/05/1000_F_251170513_zEk5QUmamly4M10TULREDPIbC4dVRDUH.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/51/17/05/1000_F_251170513_zEk5QUmamly4M10TULREDPIbC4dVRDUH.jpg",
    "https://as2.ftcdn.net/v2/jpg/02/51/17/05/1000_F_251170513_zEk5QUmamly4M10TULREDPIbC4dVRDUH.jpg",
  ];

  return (
    <div className="relative w-full min-h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full custom-swiper"
      >
        {slides.map((bg, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full min-h-[80vh] bg-cover bg-center relative"
              style={{ backgroundImage: `url('${bg}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Content*/}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none">
        <div className="text-center px-4">
          <h1 className="dancing-script text-5xl md:text-5xl font-bold mb-4">
            Cool Your Mind With <br /> Fruit Juice!
          </h1>
          <p className="mb-6 max-w-xl mx-auto text-lg text-[inter]">
            Zussioberry serves fresh juices, shakes, and smoothies made with
            the finest ingredients for every craving. Zussioberry serves fresh
            juices, shakes, and smoothies made with the finest ingredients for
            every craving.
          </p>
          <button className="bg-[#23aa5d] px-6 py-2 text-white rounded-lg hover:bg-green-600">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
