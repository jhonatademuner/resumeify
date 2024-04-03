import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

import React from "react";

const Navbar = () => {

  return (
    <header className="flex items-center justify-center w-full h-20 absolute">
      <div className="flex items-center justify-between w-full h-full 2xl:w-[1536px] xl:w-[1280px] lg:w-[1024px] px-2 ">
        <a href="/">
          <div className="flex items-center w-48">
            <Logo />
          </div>
        </a>
        <div className="h-full flex items-center justify-center lg:hidden">
          <HamburgerMenu />
        </div>
        <nav className="lg:flex items-center justify-between gap-16 h-full text-black text-xl font-medium hidden">
          <a href="/resume/create">
            <button className=" xl:py-2 xl:px-4 py-1 px-2 text-white bg-[#807DAB] opacity-80 rounded-xl shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.3)]">
              Create
            </button>
          </a>
          <a href="/resume/improve">
            <button className=" xl:py-2 xl:px-4 py-1 px-2 text-white bg-[#807DAB] opacity-80 rounded-xl shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.3)]">
              Improve
            </button>
          </a>
          <a href="/resume/check">
            <button className=" xl:py-2 xl:px-4 py-1 px-2 text-white bg-[#807DAB] opacity-80 rounded-xl shadow-[-5px_5px_30px_0px_rgba(0,0,0,0.3)]">
              Check
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
