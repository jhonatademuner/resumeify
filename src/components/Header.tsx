"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false); // Initial state to avoid errors

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    if (typeof window !== "undefined") {
      // Check if window exists before accessing it
      setIsMobile(window.innerWidth < 1024);
      window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="flex items-center justify-center w-full h-20 absolute">
      <div className="flex items-center justify-between w-full h-full 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] px-2 ">
        <a href="/">
          <div className="flex items-center w-48">
            <Logo />
          </div>
        </a>
        {isMobile ? (
          <div className="h-full flex items-center justify-center">
            <HamburgerMenu />
          </div>
        ) : (
          <Navbar />
        )}
      </div>
    </header>
  );
}
