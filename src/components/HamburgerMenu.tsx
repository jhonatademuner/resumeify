import React, { useState } from "react";
import Logo from "./Logo";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="flex focus:outline-none h-12 w-12"
        onClick={toggleMenu}
      >
        <div className="flex flex-col itens-center justify-center gap-2 w-full h-full">
          <div className={`${isOpen ? " bg-[#893BFF]" : " bg-black"} h-[2px] w-8 rounded-lg flex`}></div>
          <div className={`${isOpen ? " bg-[#893BFF]" : " bg-black"} h-[2px] w-8 rounded-lg flex`}></div>
          <div className={`${isOpen ? " bg-[#893BFF]" : " bg-black"} h-[2px] w-8 rounded-lg flex`}></div>
        </div>
      </button>
      {isOpen && (
        <>
        <div className="fixed top-0 left-0 h-screen w-screen bg-black opacity-20 z-30"></div>
          <div className="fixed top-0 left-0 h-screen w-screen bg-[#d9d9d9] z-40 sm:w-4/5">
            <div className="flex flex-col p-4 items-center sm:items-start">
              <div className="flex items-center justify-between w-full pb-4">
                <a href="/" className="text-2xl">
                  <Logo />
                </a>
                <button
                  className="focus:outline-none w-12 h-12 flex justify-center items-center"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-center w-full h-full relative">
                    <div className="bg-black h-[2px] w-8 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="bg-black h-[2px] w-8 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                  </div>
                </button>
              </div>
              <nav>
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a href="/" className="text-2xl">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-2xl">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-2xl">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-2xl">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </>
      )}
      </>
  );
};

export default HamburgerMenu;
