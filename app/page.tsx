import Image from "next/image";
import Banners from "./components/Banners";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full ">
      <Banners/>
      <Categories/>
      
    </div>
  );
}
