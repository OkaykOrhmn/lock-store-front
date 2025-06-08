"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type ArrowProps = {
  dir: "right" | "left";
  onClick?: () => void
};

const ArrowButton = ({ dir, onClick }: ArrowProps) => {
  return dir === "right" ? (
    <ChevronRightIcon
      className="h-12 w-12 absolute top-1/2 z-10 transform -translate-y-1/2 right-4 bg-white/50 hover:bg-white text-black rounded-full p-2 shadow transition "
      onClick={onClick}
    ></ChevronRightIcon>
  ) : (
    <ChevronLeftIcon
      className=" h-12 w-12 absolute top-1/2 z-10 transform -translate-y-1/2 left-4 bg-white/50 hover:bg-white text-black rounded-full p-2 shadow transition"
      onClick={onClick}
    ></ChevronLeftIcon>
  );
};

export default ArrowButton;
