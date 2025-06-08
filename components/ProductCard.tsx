"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaHeart,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import ProductsProps from "../model/productsProps";

type pProps = {
  product: ProductsProps;
  className?: string;

  
};

const ProductCard = ({ product, className = '' }: pProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Cycle through images automatically
  useEffect(() => {
    if (isPaused || product.imageSrc.length <= 1) return;

    const interval = product.interval || 3000; // Fallback to 3 seconds
    console.log("Image switch interval:", interval);

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === product.imageSrc.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [product.imageSrc, product.interval, isPaused]);

  // Handle transition end to clean up
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Manual navigation functions
  const goToPrevious = () => {
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imageSrc.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.imageSrc.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Calculate previous image index for fade-out effect
  const prevImageIndex =
    currentImageIndex === 0 ? product.imageSrc.length - 1 : currentImageIndex - 1;
  const router = useRouter();

  return (
    <div
      className={`!bg-surface !w-[calc(50%-8px)] !sm:w-[calc(50%-16px)] text-onSurface rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105  
       max-w-[200px] md:max-w-[260px] mx-auto  ${className} `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={()=>{
              router.push(`/products/${product.id}`);

      }}
    >
      {/* Image Section */}
      <div className="relative w-full h-38 md:h-64">
        {/* Current Image */}
        <Image
          key={currentImageIndex}
          src={product.imageSrc[currentImageIndex]}
          alt={`${product.imageAlt} ${currentImageIndex + 1}`}
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full transition-opacity duration-500 ease-linear opacity-100"
          priority={currentImageIndex === 0}
          quality={80}
          onTransitionEnd={handleTransitionEnd}
        />
        {/* Previous Image (only during transition) */}
        {isTransitioning && (
          <Image
            key={prevImageIndex}
            src={product.imageSrc[prevImageIndex]}
            alt={`${product.imageAlt} ${prevImageIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full transition-opacity duration-500 ease-linear opacity-0 absolute top-0 left-0"
            quality={80}
          />
        )}
        {/* Navigation Arrows (visible on hover) */}
        {product.imageSrc.length > 1 && (
          <div
            className={`absolute inset-y-0 left-0 flex items-center p-2 transition-opacity duration-300 ${
              isPaused ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={goToPrevious}
              className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
              aria-label="Previous image"
            >
              <FaArrowLeft />
            </button>
          </div>
        )}
        {product.imageSrc.length > 1 && (
          <div
            className={`absolute inset-y-0 right-0 flex items-center p-2 transition-opacity duration-300 ${
              isPaused ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={goToNext}
              className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75"
              aria-label="Next image"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
        {/* Icons Section */}
        <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-surface to-transparent p-4 flex justify-start items-center gap-4">
          <FaHeart
            className="text-white hover:text-red-500 cursor-pointer border-2 border-white hover:border-red-500 rounded-full w-6 h-6 p-1 md:w-8 md:h-8 md:p-1.5"
            aria-label="Add to wishlist"
          />
        </div>
        {/* Rating */}
        <div className="absolute top-0 left-0 p-4 flex justify-center items-center gap-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-label="Star rating"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className=" p-2 md:p-4">
        <h3 className="text-[16px] md:text-lg font-semibold text-right">{product.title}</h3>
        <p className="text-xs text-gray-400 text-right line-clamp-2">
          {product.description}
        </p>
        <p className="text-xs md:text-lg font-bold text-right mt-2">
          {product.price.toLocaleString("fa-IR")} تومن{" "}
          {product.originalPrice && (
            <span className="text-sm text-red-400 line-through">
              {product.originalPrice.toLocaleString("fa-IR")}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;