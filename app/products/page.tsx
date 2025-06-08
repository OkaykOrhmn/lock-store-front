import ProductCard from "@/components/ProductCard";
import products from "@/constants/products";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full  h-full p-4">
      <div className="flex flex-row justify-center items-start w-full md:max-w-[80vw] ">
        <div className="hidden md:flex w-[300px] min-w-[300px]">
          <div className="flex flex-col w-full h-[50vh] rounded-2xl border border-surface p-4">
            <h1 className="text-2xl font-bold">فیلترها</h1>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {products.map((product) => (
            <ProductCard key={0} product={product} className="!mx-0" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
