"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import ProductsProps from "../model/productsProps";
import "swiper/css";
import "swiper/css/navigation";
import ArrowButton from "./ArrowButton";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

type ProductsListProps = {
  title: string;
  color?:
    | "primary"
    | "secondary"
    | "primaryAccent"
    | "surface"
    | "onSurface"
    | "background"
    | "foreground";
  products?: ProductsProps[]; // Use ProductsProps for products
  card: React.ComponentType<{ product: ProductsProps }>; // Expect component accepting product prop
};

const DiscProductsList = ({
  title,
  color = "primary",
  products = [],
  card: Card,
}: ProductsListProps) => {

  const prs: ProductsProps[] = [];

  products.map((p) => {
    const item: ProductsProps = {
      id: p.id,
      description: p.description,
      imageAlt: p.imageAlt,
      imageSrc: p.imageSrc,
      price: p.price,
      title: p.title,
      className: `${p.className} !w-full !max-w-full !h-full  `,
      interval: p.interval,
      originalPrice: p.originalPrice,
    };
    prs.push(item);
  });
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="flex flex-col items-center justify-center w-full md:w-[90vw]">
      <div className="flex flex-row  w-full justify-center items-center ">
        <div
          className={`flex justify-center items-center px-6 py-4 md:bg-${color} md:rounded-t-2xl`}
        >
          {title}
        </div>
      </div>

      <div
        className={` w-full h-full flex flex-row justify-center items-center  rounded-2xl md:bg-${color} `}
      >
        <div className="relative flex flex-row justify-center items-center w-full md:w-[60vw]">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={24}
            centeredSlides={true}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              enabled: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2.2,
                spaceBetween: 24,
                centeredSlides: true, // No centering on mobile
              },
              768: {
                slidesPerView: 3,
                spaceBetween:32,
                centeredSlides: true, // Center on desktop
              },
            }}
            className="relative md:my-12 h-full md:w-[80%] w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {prs.map((product, index) => (
              <SwiperSlide
                key={product.id}
                className="flex justify-center items-center py-4 transition-transform duration-300 [&.swiper-slide-active]:scale-110 ![&.swiper-slide-active]:z-50 z-10"
              >
                <Card product={product} />
              </SwiperSlide>
            ))}
            {/* Navigation Arrows (Visible on Desktop) */}
          </Swiper>
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
        </div>
      </div>
    </section>
  );
};

export default DiscProductsList;
