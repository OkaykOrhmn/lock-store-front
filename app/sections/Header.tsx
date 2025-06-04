import React from "react";
import Link from "next/link";
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import links from "../constants";

const Header = () => {
  return (
    <header className="!h-18 !md:h-32 !w-full !py-2 !px-4 flex items-center justify-center ">
      <div className=" flex flex-row justify-between items-center gap-4 !w-full xl:max-w-[80vw] !h-full">
        <div className="flex flex-row gap-4 justify-center items-center h-full">
          <div className="bg-primary text-white flex justify-center items-center h-2/3 w-[120px] m-4 rounded-2xl">
            LOGO
          </div>
          <div className="hidden lg:flex flex-row justify-between items-center gap-4 ">
            {links.map((nav) => (
              <Link
                key={`${nav.title}-${nav.link}`}
                href={nav.link}
                className="text-xs text-onSurface hover:text-primary hover:border-b border-primary hover:font-bold p-2"
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative flex flex-1 w-full">
          <input
            type="search"
            name="serch"
            placeholder="جستجو"
            className="h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border border-onSurface text-onSurface w-full !max-w-xl"
          />
          <MagnifyingGlassIcon className=" absolute right-0 top-0 mt-3 mr-4 w-4 h-4" />
        </div>
        <UserCircleIcon className="hidden md:flex h-2/3" />
      </div>
    </header>
  );
};

export default Header;
