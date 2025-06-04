import React from "react";
import ProductsProps from "../model/productsProps"; // Import ProductsProps

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

const ProductsList = ({
  title,
  color = "primary",
  products = [],
  card: Card,
}: ProductsListProps) => {
  return (
    <section className="flex flex-col items-center justify-center  w-full md:w-[90vw]">
      <div className="flex flex-row  w-full x-4 ">
        <div
          className={`flex justify-center items-center px-6 py-4 md:bg-${color} md:rounded-t-2xl`}
        >
          {title}
        </div>
      </div>

      <div
        className={`w-full flex justify-center items-center !rounded-tr-none rounded-2xl md:bg-${color}`}
      >
        <div className="w-full overflow-x-auto">
          <div
            className="flex flex-row gap-4 sm:gap-6 p-4  md:p-12  md:!pr-24 flex-nowrap"
            style={{ minWidth: "max-content" }}
          >
            {products.map((product) => (
              <Card key={0} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
