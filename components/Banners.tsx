"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useRef } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
import ArrowButton from "./ArrowButton";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

const Banners = () => {
  const banners = [
    {
      title: "First Slide",
      image:
        "https://ghofland.com/wp-content/uploads/2022/11/slider-gofl-land-1.webp", // Ensure this image exists in your public folder
      color: "bg-blue-500",
      description: "This is the first slide description.",
      buttonText: "Learn More",
    },
    {
      title: "Second Slide",
      image:
        "https://ghofland.com/wp-content/uploads/2022/11/slider-gofl-land-2.webp", // Ensure this image exists in your public folder
      color: "bg-green-500",
      description: "This is the second slide description.",
      buttonText: "Discover",
    },
    {
      title: "Third Slide",
      image:
        "https://ghofland.com/wp-content/uploads/2022/11/slider-gofl-land-5-new.webp", // Ensure this image exists in your public folder
      color: "bg-red-500",
      description: "This is the third slide description.",
      buttonText: "Get Started",
    },
    {
      title: "Fourth Slide",
      image:
        "https://ghofland.com/wp-content/uploads/2022/11/slider-gofl-land-4.webp", // Ensure this image exists in your public folder
      color: "bg-yellow-500",
      description: "This is the fourth slide description.",
      buttonText: "Join Now",
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);
  
  return (
    <section className="w-full h-[160px] md:h-[400px] relative md:pr-6 md:py-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="w-full h-full"
        spaceBetween={12}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2.5 }, // 6 items on lg screens
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {banners.map((banner, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-full flex flex-col items-center justify-center bg-cover z-10 md:rounded-2xl"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              {/* <span className="text-4xl font-bold text-white">
                {banner.title}
              </span>
              <p className="text-lg text-white mt-2">
                {banner.description}
              </p>
              <button className="mt-4 px-6 py-2 bg-surcafe text-onSurface rounded-lg hover:bg-gray-200 transition">
                {banner.buttonText}
              </button> */}
            </div>
          </SwiperSlide>
        ))}
        {/* Arrow Buttons */}
        <div className="hidden md:block">
          <ArrowButton
            dir="left"
            onClick={() => swiperRef.current?.slideNext()}
          />
          <ArrowButton
            dir="right"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
      </Swiper>
    </section>
  );
};

export default Banners;
