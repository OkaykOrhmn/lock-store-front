"use client";

import React, { useState, useEffect } from "react";
import { UserIcon, HomeIcon, Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "../components/Drawer";

const BottomNavigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div className="fixed z-50 w-[80vw] h-16 max-w-lg -translate-x-1/2 bg-surface rounded-full bottom-4 left-1/2 ">
        <div className="flex w-full h-full flex-row justify-around items-center">
          <Bars3Icon className="h-2/5" onClick={toggleDrawer} />

          <HomeIcon className="h-2/5 text-primary" />
          <UserIcon className="h-2/5" />
        </div>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default BottomNavigation;
