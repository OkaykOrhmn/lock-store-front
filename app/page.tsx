import Banners from "../components/Banners";
import Categories from "../components/Categories";
import ProductsList from "../components/ProductsList";
import ProductCard from "../components/ProductCard";
import prods from "../constants/products";
import DiscProductsList from "../components/DiscPoductsList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full h-full pb-12">
      <Banners />
      <Categories />
      <ProductsList
        title="جدیدترین ها"
        color="primary"
        products={prods}
        card={ProductCard}
      />
      <div className="w-[90vw] grid grid-flow-col grid-rows-3 gap-4 min-h-[10vh] md:min-h-[40vh]">
        <div className="row-span-3 bg-[url(https://ghofland.com/wp-content/uploads/2024/09/banner-daste-bandi-9.webp)] bg-size-[auto_100px] md:bg-size-[auto_500px] bg-center bg-no-repeat rounded-2xl w-full h-full"></div>
        <div className="col-span-2 bg-red-500 rounded-2xl w-full h-full">
          02
        </div>
        <div className="col-span-1 row-span-2 bg-red-500 rounded-2xl w-full h-full">
          03
        </div>
        <div className="col-span-1 row-span-2 bg-red-500 rounded-2xl w-full h-full">
          03
        </div>
      </div>
      <DiscProductsList
        title="جدیدترین ها"
        color="secondary"
        products={prods}
        card={ProductCard}
      />
      <Banners />

      <ProductsList
        title="جدیدترین ها"
        color="primary"
        products={prods}
        card={ProductCard}
      />
      <div className="flex flex-col md:flex-row w-full md:w-[80vw]  md:h-[400px] justify-center items-center gap-4">
        <div
          className="!w-full md:w-1/2 h-[160px] md:h-full flex flex-col items-center justify-center bg-cover  md:rounded-2xl"
          style={{
            backgroundImage: `url(https://ghofland.com/wp-content/uploads/2022/11/slider-gofl-land-2.webp)`,
          }}
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
        <div className="flex w-full md:w-1/2 justify-center items-center ">
          <div className="grid grid-cols-3 gap-4 p-4 md:p-0 w-full ">
            <div className="bg-amber-500 rounded-2xl w-full h-full aspect-square">
              01
            </div>
            <div className="bg-amber-500 rounded-2xl w-full h-full aspect-square">
              01
            </div>
            <div className="bg-amber-500 rounded-2xl w-full h-full aspect-square">
              01
            </div>
            <div className="bg-amber-500 rounded-2xl w-full h-full aspect-square">
              01
            </div>
            <div className="bg-amber-500 rounded-2xl w-full h-full aspect-square">
              01
            </div>
            <div className="bg-amber-500 rounded-2xl w-full h-full aspect-square">
              01
            </div>
          </div>
       
        </div>
      </div>

    </div>
  );
}
