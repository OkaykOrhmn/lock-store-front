"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  ComputerDesktopIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRef } from "react";
import ArrowButton from "./ArrowButton";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

const Categories = () => {
  const categories = [
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
    {
      name: "قفل کتابی",
      image: "https://rangejavid.com/wp-content/uploads/52_0022_Layer-30.png",
      icon: ComputerDesktopIcon,
    },
    {
      name: "قفل کمدی",
      image: "https://cuobeh.ir/wp-content/uploads/2021/11/yaragh-93.webp",
      icon: ShoppingBagIcon,
    },
  ];
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0} // Gap between slides (equivalent to gap-4)
        slidesPerView={2} // Default for small screens
        slidesPerGroup={1} // Scroll one slide at a time
        loop={true} // Enables infinite scrolling
        autoplay
        navigation={false} // Enable navigation arrows
        breakpoints={{
          0: { slidesPerView: 4 },
          640: { slidesPerView: 5 }, // 3 items on sm screens
          768: { slidesPerView: 5 }, // 4 items on md screens
          1024: { slidesPerView: 6 }, // 6 items on lg screens
          1280: { slidesPerView: 8 }, // 8 items on xl screens
          1620: { slidesPerView: 10 }, // 8 items on xl screens
          2000: { slidesPerView: 12 }, // 8 items on xl screens
        }}
        className="w-full md:w-[90%]"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {categories.map((cat, idx) => {
          return (
            <SwiperSlide
              key={`${cat.name}-${idx}`}
              className="flex justify-center p-4"
            >
              <div className="flex flex-col items-center justify-center">
                <div
                  className="flex flex-col items-center justify-center rounded-full shadow-sm bg-surface 
                  w-[64px] h-[64px] min-w-[64px] min-h-[64px] max-w-[64px] max-h-[64px]
                  md:w-[120px] md:h-[120px] md:min-w-[120px] md:min-h-[120px] md:max-w-[120px] md:max-h-[120px] 
                  overflow-hidden p-2 md:p-4 transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={100}
                    height={100}
                    className="object-cover mb-2 rounded-full"
                  />
                </div>
                <h1 className="text-xs sm:text-sm font-medium truncate text-center w-full mt-4">
                  {cat.name}
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
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
    </section>
  );
};

export default Categories;
